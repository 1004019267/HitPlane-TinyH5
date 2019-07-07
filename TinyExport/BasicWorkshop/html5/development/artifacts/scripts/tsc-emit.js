var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var game;
(function (game) {
    //抓取含有这些组件信息的物体
    var EnemyBehaviorFilterFilter = /** @class */ (function (_super) {
        __extends(EnemyBehaviorFilterFilter, _super);
        function EnemyBehaviorFilterFilter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EnemyBehaviorFilterFilter;
    }(ut.EntityFilter));
    game.EnemyBehaviorFilterFilter = EnemyBehaviorFilterFilter;
    var EnemyBehaviorFilter = /** @class */ (function (_super) {
        __extends(EnemyBehaviorFilter, _super);
        function EnemyBehaviorFilter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        // this method is called for each entity matching the EnemyBehaviorFilterFilter signature, once when enabled
        //就类似于Start函数
        EnemyBehaviorFilter.prototype.OnEntityEnable = function () {
            //let 让这个参数=别的参数 赋值 不分类型
            //我们让飞机每次就是初始化的速度都会根据时间变快
            var totalTime = game.Time.DeltaTime();
            var newSpeed = this.data.speed.speed + (this.data.speedChange.changePerSecond * totalTime);
            this.data.speed.speed = newSpeed;
            //就是初始坐标在最上方随机一个位置出现
            var randomX = GetRandom(this.data.bounds.minX, this.data.bounds.maxX);
            var firstPos = new Vector3(randomX, this.data.bounds.maxY, 0);
            this.data.position.position = firstPos;
            console.log("enemy initialized,Speed:" + newSpeed);
        };
        // this method is called for each entity matching the EnemyBehaviorFilterFilter signature, every frame it's enabled
        EnemyBehaviorFilter.prototype.OnEntityUpdate = function () {
            //持续下落
            var localPosition = this.data.position.position;
            localPosition.y -= this.data.speed.speed * game.Time.DeltaTime();
            this.data.position.position = localPosition;
            //过界（就是超出下方屏幕）就销毁
            if (localPosition.y <= this.data.bounds.minY)
                this.world.destroyEntity(this.data.entity);
        };
        return EnemyBehaviorFilter;
    }(ut.ComponentBehaviour));
    game.EnemyBehaviorFilter = EnemyBehaviorFilter;
    function GetRandom(min, max) {
        //这个random只会返回0-1之间
        //比如min 2 max 6
        //0-1随机出来的这个数 * 5（长度）+2
        //相当于是随机了个长度 让最小值加上
        return Math.random() * (max - min + 1) + min;
    }
})(game || (game = {}));
var game;
(function (game) {
    var GameService = /** @class */ (function () {
        function GameService() {
        }
        GameService.restart = function (world) {
            var _this = this;
            setTimeout(function () {
                _this.newGame(world);
            }, 3000);
        };
        GameService.newGame = function (world) {
            ut.EntityGroup.destroyAll(world, this.mainGroup);
            ut.EntityGroup.destroyAll(world, this.enemyGroup);
            ut.EntityGroup.destroyAll(world, this.explosionGroup);
            ut.EntityGroup.instantiate(world, this.mainGroup);
        };
        //这个和CS不同 不是默认私有
        GameService.mainGroup = 'game.MainGroup';
        GameService.enemyGroup = 'game.EnemyGroup';
        GameService.explosionGroup = 'game.ExplosionGroup';
        return GameService;
    }());
    game.GameService = GameService;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var InputMovementSystem = /** @class */ (function (_super) {
        __extends(InputMovementSystem, _super);
        function InputMovementSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InputMovementSystem.prototype.OnUpdate = function () {
            var _this = this;
            var dt = game.Time.DeltaTime();
            this.world.forEach([game.MoveSpeed, game.PlayerTag, game.Boundaries, ut.Core2D.TransformLocalPosition], function (speed, tag, bounds, position) {
                var localPos = position.position;
                //控制移动
                if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.W))
                    localPos.y += speed.speed * dt;
                if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.S))
                    localPos.y -= speed.speed * dt;
                if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.A))
                    localPos.x -= speed.speed * dt;
                if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.D))
                    localPos.x += speed.speed * dt;
                //触屏控制移动
                _this.ProcessTouchInput(localPos, speed.speed * dt);
                localPos.x = Math.max(bounds.minX, Math.min(bounds.maxX, localPos.x));
                localPos.y = Math.max(bounds.minY, Math.min(bounds.maxY, localPos.y));
                //创建子弹
                if (ut.Runtime.Input.getKeyUp(ut.Core2D.KeyCode.Space)) {
                    var bullet = ut.EntityGroup.instantiate(_this.world, game.InputMovementSystem.bulletGroupName)[0];
                    _this.world.usingComponentData(bullet, [ut.Core2D.TransformLocalPosition], function (bulletPos) {
                        bulletPos.position = position.position;
                        //防止子弹打死自己
                        bulletPos.position.y += 0.75;
                    });
                }
                position.position = localPos;
            });
        };
        //这个是class内方法 之前的func是写在class外 不用this就能点出来
        InputMovementSystem.prototype.ProcessTouchInput = function (position, speed) {
            if (ut.Core2D.Input.isTouchSupported()) {
                if (ut.Core2D.Input.touchCount() > 0) {
                    //类似于强转为Touch类
                    var touch = ut.Core2D.Input.getTouch(0);
                    //GameObject.Find 全局遍历很慢 
                    var player = this.world.getEntityByName("Player");
                    //转换为世界坐标 消耗大量性能 
                    var playerworldpos = ut.Core2D.TransformService.computeWorldPosition(this.world, player);
                    //世界转屏幕坐标
                    var transpos = ut.Core2D.TransformService.worldToWindow(this.world, this.world.getEntityByName('Camera'), playerworldpos, new Vector2(600, 800));
                    if (touch.x >= transpos.x) {
                        position.x += speed;
                    }
                    else if (touch.x < transpos.x) {
                        position.x -= speed;
                    }
                    if (touch.y >= transpos.y) {
                        position.y += speed;
                    }
                    else if (touch.y < transpos.y) {
                        position.y -= speed;
                    }
                }
            }
        };
        InputMovementSystem.bulletGroupName = 'game.BulletGroup';
        InputMovementSystem = __decorate([
            ut.executeAfter(ut.Shared.InputFence)
        ], InputMovementSystem);
        return InputMovementSystem;
    }(ut.ComponentSystem));
    game.InputMovementSystem = InputMovementSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var LaserSystem = /** @class */ (function (_super) {
        __extends(LaserSystem, _super);
        function LaserSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LaserSystem.prototype.OnUpdate = function () {
            var dt = game.Time.DeltaTime();
            this.world.forEach([ut.Entity, game.Laser, ut.Core2D.TransformLocalPosition], function (entity, laser, TransformLocalPosition) {
                var direction = new Vector3(0, 1, 0);
                direction.normalize();
                direction.multiplyScalar(laser.speed * dt);
                TransformLocalPosition.position = TransformLocalPosition.position.add(direction);
            });
        };
        LaserSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(game.Laser),
            ut.requiredComponents(ut.Core2D.TransformLocalPosition)
        ], LaserSystem);
        return LaserSystem;
    }(ut.ComponentSystem));
    game.LaserSystem = LaserSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var PlayerCollisionSystem = /** @class */ (function (_super) {
        __extends(PlayerCollisionSystem, _super);
        function PlayerCollisionSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PlayerCollisionSystem.prototype.OnUpdate = function () {
            var _this = this;
            var isGameOver = false;
            //搜索包含transform和碰撞器的物体
            this.world.forEach([ut.Entity, ut.Core2D.TransformLocalPosition, ut.HitBox2D.HitBoxOverlapResults], function (entity, position, contacts) {
                var explosion = ut.EntityGroup.instantiate(_this.world, game.PlayerCollisionSystem.explosionGroupName)[0];
                //等到整个foreach执行后才执行 安全
                _this.world.usingComponentData(explosion, [ut.Core2D.TransformLocalPosition], function (explosionPos) {
                    explosionPos.position = position.position;
                });
                _this.world.destroyEntity(entity);
                isGameOver = true;
            });
        };
        PlayerCollisionSystem.prototype.if = function (isGameOver) {
            game.GameService.restart(this.world);
        };
        //爆炸特效
        PlayerCollisionSystem.explosionGroupName = 'game.ExplosionGroup';
        return PlayerCollisionSystem;
    }(ut.ComponentSystem));
    game.PlayerCollisionSystem = PlayerCollisionSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var SpawnSystem = /** @class */ (function (_super) {
        __extends(SpawnSystem, _super);
        function SpawnSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpawnSystem.prototype.OnUpdate = function () {
            var _this = this;
            //遍历含有Spawner组件的物体
            this.world.forEach([game.Spawner], function (spawner) {
                //如果是暂停状态返回
                if (spawner.isPaused)
                    return;
                var time = spawner.time;
                var delay = spawner.delay;
                //一个计时器 过多少时间重生某个群组
                time -= game.Time.DeltaTime();
                if (time <= 0) {
                    time += delay;
                    ut.EntityGroup.instantiate(_this.world, spawner.spawnedGroup);
                }
                spawner.time = time;
            });
        };
        return SpawnSystem;
    }(ut.ComponentSystem));
    game.SpawnSystem = SpawnSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var Time = /** @class */ (function (_super) {
        __extends(Time, _super);
        function Time() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Time_1 = Time;
        Time.DeltaTime = function () {
            return Time_1.deltaTime;
        };
        Time.Time = function () {
            return Time_1.time;
        };
        Time.reset = function () {
            Time_1.time = 0;
        };
        Time.prototype.OnUpdate = function () {
            var dt = this.scheduler.deltaTime();
            Time_1.deltaTime = dt;
            Time_1.time += dt;
        };
        var Time_1;
        Time.deltaTime = 0;
        Time.time = 0;
        Time = Time_1 = __decorate([
            ut.executeBefore(ut.Shared.UserCodeStart)
        ], Time);
        return Time;
    }(ut.ComponentSystem));
    game.Time = Time;
})(game || (game = {}));
var ut;
(function (ut) {
    var EntityGroup = /** @class */ (function () {
        function EntityGroup() {
        }
        /**
         * @method
         * @desc Creates a new instance of the given entity group by name and returns all entities
         * @param {ut.World} world - The world to add to
         * @param {string} name - The fully qualified name of the entity group
         * @returns Flat list of all created entities
         */
        EntityGroup.instantiate = function (world, name) {
            var data = this.getEntityGroupData(name);
            if (data == undefined)
                throw "ut.EntityGroup.instantiate: No 'EntityGroup' was found with the name '" + name + "'";
            return data.load(world);
        };
        ;
        /**
         * @method
         * @desc Destroys all entities that were instantated with the given group name
         * @param {ut.World} world - The world to destroy from
         * @param {string} name - The fully qualified name of the entity group
         */
        EntityGroup.destroyAll = function (world, name) {
            var type = this.getEntityGroupData(name).Component;
            world.forEach([ut.Entity, type], function (entity, instance) {
                // @TODO This should REALLY not be necessary
                // We are protecting against duplicate calls to `destroyAllEntityGroups` within an iteration
                if (world.exists(entity)) {
                    world.destroyEntity(entity);
                }
            });
        };
        /**
         * @method
         * @desc Returns an entity group object by name
         * @param {string} name - Fully qualified group name
         */
        EntityGroup.getEntityGroupData = function (name) {
            var parts = name.split('.');
            if (parts.length < 2)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            var shiftedParts = parts.shift();
            var initialData = entities[shiftedParts];
            if (initialData == undefined)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            return parts.reduce(function (v, p) {
                return v[p];
            }, initialData);
        };
        return EntityGroup;
    }());
    ut.EntityGroup = EntityGroup;
})(ut || (ut = {}));
var ut;
(function (ut) {
    var EntityLookupCache = /** @class */ (function () {
        function EntityLookupCache() {
        }
        EntityLookupCache.getByName = function (world, name) {
            var entity;
            if (name in this._cache) {
                entity = this._cache[name];
                if (world.exists(entity))
                    return entity;
            }
            entity = world.getEntityByName(name);
            this._cache[name] = entity;
            return entity;
        };
        EntityLookupCache._cache = {};
        return EntityLookupCache;
    }());
    ut.EntityLookupCache = EntityLookupCache;
})(ut || (ut = {}));
//# sourceMappingURL=tsc-emit.js.map