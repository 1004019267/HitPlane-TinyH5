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
    var DamageSystem = /** @class */ (function (_super) {
        __extends(DamageSystem, _super);
        function DamageSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Applies hit component on colliding objects
         */
        DamageSystem.prototype.OnUpdate = function () {
            var _this = this;
            var isGameOver = false;
            var context = this.world.getConfigData(game.GameContext);
            if (context.State != game.GameState.Play) {
                return;
            }
            this.world.forEach([ut.Entity, ut.HitBox2D.HitBoxOverlapResults, game.Laser], function (entity, hitboxoverlapresults, laser) {
                if (hitboxoverlapresults.overlaps.length == 0 || _this.world.hasComponent(entity, game.Hit)) {
                    return;
                }
                for (var i = 0; i < hitboxoverlapresults.overlaps.length; i++) {
                    var otherEntity = hitboxoverlapresults.overlaps[i].otherEntity;
                    if (!_this.world.exists(otherEntity) || _this.world.hasComponent(otherEntity, game.Hit)) {
                        continue;
                    }
                    if (_this.world.hasComponent(otherEntity, game.Laser) ||
                        _this.world.hasComponent(otherEntity, game.DefensePoint) ||
                        (laser.tag == game.LaserTag.Spaceship && _this.world.hasComponent(otherEntity, game.Raider)) ||
                        (laser.tag == game.LaserTag.Raider && _this.world.hasComponent(otherEntity, game.Spaceship))) {
                        _this.world.addComponent(entity, game.Hit);
                        _this.world.addComponent(otherEntity, game.Hit);
                        break;
                    }
                    else if (_this.world.hasComponent(otherEntity, game.Boundary)) {
                        _this.world.addComponent(entity, game.Hit);
                        break;
                    }
                }
            });
            this.world.forEach([ut.Entity, ut.HitBox2D.HitBoxOverlapResults, game.Raider], function (entity, hitboxoverlapresults, raider) {
                if (hitboxoverlapresults.overlaps.length == 0) {
                    return;
                }
                for (var i = 0; i < hitboxoverlapresults.overlaps.length; i++) {
                    var otherEntity = hitboxoverlapresults.overlaps[i].otherEntity;
                    if (!_this.world.exists(otherEntity) || _this.world.hasComponent(otherEntity, game.Hit)) {
                        continue;
                    }
                    if (_this.world.hasComponent(otherEntity, game.DefensePoint) ||
                        _this.world.hasComponent(otherEntity, game.GameOverLine)) {
                        _this.world.addComponent(otherEntity, game.Hit);
                        break;
                    }
                }
            });
        };
        DamageSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeAfter(ut.HitBox2D.HitBox2DSystem),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(ut.HitBox2D.HitBoxOverlapResults)
        ], DamageSystem);
        return DamageSystem;
    }(ut.ComponentSystem));
    game.DamageSystem = DamageSystem;
})(game || (game = {}));
var game;
(function (game) {
    var ExplosionSystem = /** @class */ (function (_super) {
        __extends(ExplosionSystem, _super);
        function ExplosionSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Unspawn explosion entity when its timer has reached the end
         */
        ExplosionSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([ut.Entity, game.Explosion], function (entity, explosion) {
                explosion.duration = explosion.duration - 1;
                if (explosion.duration < 0) {
                    _this.world.destroyEntity(entity);
                }
            });
        };
        ExplosionSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeAfter(game.DamageSystem),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(game.Explosion)
        ], ExplosionSystem);
        return ExplosionSystem;
    }(ut.ComponentSystem));
    game.ExplosionSystem = ExplosionSystem;
})(game || (game = {}));
var game;
(function (game) {
    var GameManagerSystem = /** @class */ (function (_super) {
        __extends(GameManagerSystem, _super);
        function GameManagerSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
          * State machine to manage the global game state
          * We forward all calls to the 'GameService'. This gives us a hook in to the main game loop
          */
        GameManagerSystem.prototype.OnUpdate = function () {
            var context = this.world.getConfigData(game.GameContext);
            switch (context.State) {
                case game.GameState.Initialize:
                    {
                        game.GameService.initialize(this.world, context);
                    }
                    break;
                case game.GameState.Menu:
                    {
                        if (ut.Runtime.Input.getMouseButtonDown(0)) {
                            game.GameService.start(this.world, context);
                        }
                    }
                    break;
                case game.GameState.Play:
                    {
                        context.TimeElapsedSinceStart += this.scheduler.deltaTime();
                    }
                    break;
                case game.GameState.GameOver:
                    {
                        if (ut.Runtime.Input.getMouseButtonDown(0)) {
                            context.State = game.GameState.Initialize;
                        }
                    }
                    break;
            }
            this.world.setConfigData(context);
        };
        GameManagerSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeAfter(game.DamageSystem),
            ut.executeBefore(ut.Shared.UserCodeEnd)
        ], GameManagerSystem);
        return GameManagerSystem;
    }(ut.ComponentSystem));
    game.GameManagerSystem = GameManagerSystem;
})(game || (game = {}));
var game;
(function (game) {
    var GameService = /** @class */ (function () {
        function GameService() {
        }
        /**
         * @desc invoked once when the game is launched
         */
        GameService.initialize = function (world, context) {
            this.reset(world, context);
            ut.EntityGroup.instantiate(world, 'game.GameMenu');
            context.State = game.GameState.Menu;
        };
        ;
        /**
         * @desc clears entities and resets the game
         */
        GameService.reset = function (world, context) {
            ut.EntityGroup.destroyAll(world, 'game.GameScene');
            ut.EntityGroup.destroyAll(world, 'game.GameOver');
            ut.EntityGroup.destroyAll(world, 'game.GameWin');
            context.Life = 2;
            context.Score = 0;
        };
        ;
        /**
         * @desc starts the game
         */
        GameService.start = function (world, context) {
            ut.EntityGroup.destroyAll(world, 'game.GameMenu');
            ut.EntityGroup.instantiate(world, 'game.GameScene');
            context.State = game.GameState.Play;
            context.TimeElapsedSinceStart = 0;
        };
        ;
        /**
         * @desc Increase player's score
         */
        GameService.increaseScore = function (world, context, points) {
            context.Score += points;
        };
        ;
        /**
         * @desc Decrease player's life
         */
        GameService.decreaseLife = function (world, context) {
            context.Life -= 1;
            // "Respawn" the spaceship
            world.forEach([ut.Entity, game.Spaceship, ut.Core2D.Sprite2DSequencePlayer], function (entity, spaceship, sprite2DSequencePlayer) {
                sprite2DSequencePlayer.paused = true;
                sprite2DSequencePlayer.paused = false;
            });
        };
        ;
        /**
         * @desc Stops the spaceship from shooting and moving
         */
        GameService.stopSpaceship = function (world) {
            world.forEach([ut.Entity, game.Spaceship], function (entity, spaceship) {
                world.removeComponent(entity, game.Spaceship);
            });
        };
        ;
        /**
         * @desc Stops the hit process for the damage system
         */
        GameService.stopHits = function (world) {
            world.forEach([ut.Entity, game.Hit], function (entity, hit) {
                world.removeComponent(entity, game.Hit);
            });
        };
        /**
         * @desc Stops all the lasers
         */
        GameService.stopLasers = function (world) {
            world.forEach([ut.Entity, game.Laser], function (entity, laser) {
                world.destroyEntity(laser.reference);
            });
        };
        /**
         * @desc Stops the raiders from shooting and moving
         */
        GameService.stopRaiders = function (world) {
            world.forEach([ut.Entity, game.Raiders], function (entity, raiders) {
                world.removeComponent(entity, game.Raiders);
            });
            world.forEach([ut.Entity, game.Raider], function (entity, raider) {
                world.removeComponent(entity, game.Raider);
            });
        };
        ;
        /**
         * @desc Stops the movement of the ship
         */
        GameService.stopMovement = function (world) {
            world.forEach([ut.Entity, game.Move], function (entity, move) {
                world.removeComponent(entity, game.Move);
            });
        };
        ;
        /**
         * @desc Ends the current game, player has lost
         */
        GameService.gameOver = function (world, context) {
            ut.EntityGroup.instantiate(world, 'game.GameOver');
            // Play the spaceship destroy animation
            world.forEach([ut.Entity, game.Spaceship, ut.Core2D.Sprite2DSequencePlayer], function (entity, spaceship, sprite2DSequencePlayer) {
                sprite2DSequencePlayer.loop = ut.Core2D.LoopMode.ClampForever;
                sprite2DSequencePlayer.paused = false;
            });
            this.stopGame(world);
            context.State = game.GameState.GameOver;
        };
        ;
        /**
         * @desc Ends the current game, player has won
         */
        GameService.gameWin = function (world, context) {
            ut.EntityGroup.instantiate(world, 'game.GameWin');
            this.stopGame(world);
            context.State = game.GameState.GameOver;
        };
        ;
        /**
         * @desc Remove components related to an active playing session
         */
        GameService.stopGame = function (world) {
            this.stopLasers(world);
            this.stopHits(world);
            this.stopSpaceship(world);
            this.stopRaiders(world);
            this.stopMovement(world);
        };
        ;
        return GameService;
    }());
    game.GameService = GameService;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Spawns an explosion entity with a specific position and scale
     */
    var explode = function (world, position, scale) {
        var explosion = ut.EntityGroup.instantiate(world, 'game.Explosion')[0];
        world.usingComponentData(explosion, [ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalScale], function (transformLocalPosition, transformLocalScale) {
            transformLocalPosition.position = position;
            transformLocalScale.scale = scale;
        });
    };
    var HitSystem = /** @class */ (function (_super) {
        __extends(HitSystem, _super);
        function HitSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Applies hit component on colliding objects
         */
        HitSystem.prototype.OnUpdate = function () {
            var _this = this;
            var context = this.world.getConfigData(game.GameContext);
            if (context.State != game.GameState.Play) {
                return;
            }
            var isGameOver = false;
            this.world.forEach([ut.Entity, game.Hit, game.GameOverLine], function (entity, hit, gameOverLine) {
                isGameOver = true;
                _this.world.removeComponent(entity, game.GameOverLine);
            });
            if (isGameOver) {
                game.GameService.gameOver(this.world, context);
                this.world.setConfigData(context);
                return;
            }
            this.world.forEach([ut.Entity, game.Hit, game.Spaceship], function (entity, hit, spaceship) {
                game.GameService.decreaseLife(_this.world, context);
            });
            this.world.forEach([ut.Entity, game.Hit, game.Raider], function (entity, hit, raider) {
                explode(_this.world, ut.Core2D.TransformService.computeWorldPosition(_this.world, entity), new Vector3(1, 1, 0));
                game.GameService.increaseScore(_this.world, context, raider.points);
                // Destroy the raider
                _this.world.destroyEntity(entity);
            });
            this.world.forEach([ut.Entity, game.Hit, game.DefensePoint], function (entity, hit, defensePoint) {
                explode(_this.world, ut.Core2D.TransformService.computeWorldPosition(_this.world, entity), new Vector3(0.5, 0.5, 0));
                // Destroy the defense point
                _this.world.destroyEntity(entity);
            });
            this.world.forEach([ut.Entity, game.Hit, game.Laser], function (entity, hit, laser) {
                _this.world.destroyEntity(laser.reference);
            });
            this.world.forEach([ut.Entity, game.Hit], function (entity, hit) {
                _this.world.removeComponent(entity, game.Hit);
            });
            this.world.setConfigData(context);
        };
        HitSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeAfter(game.DamageSystem),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(game.Hit)
        ], HitSystem);
        return HitSystem;
    }(ut.ComponentSystem));
    game.HitSystem = HitSystem;
})(game || (game = {}));
var game;
(function (game) {
    var LaserSystem = /** @class */ (function (_super) {
        __extends(LaserSystem, _super);
        function LaserSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Moves a laser in the y-axis
         */
        LaserSystem.prototype.OnUpdate = function () {
            var dt = this.scheduler.deltaTime();
            this.world.forEach([ut.Entity, game.Laser, ut.Core2D.TransformLocalPosition], function (entity, laser, transformlocalposition) {
                var direction = new Vector3(0, 1, 0);
                direction.normalize();
                direction.multiplyScalar(laser.speed * dt);
                transformlocalposition.position = transformlocalposition.position.add(direction);
            });
        };
        LaserSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeAfter(game.DamageSystem),
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
    var LaserUtilities = /** @class */ (function () {
        function LaserUtilities() {
        }
        /**
         * @desc Checks if there's a laser
         */
        LaserUtilities.laserExists = function (world, laserTag) {
            var laserAlreadyExists = false;
            world.forEach([ut.Entity, game.Laser], function (entity, laser) {
                if (laser.tag == laserTag) {
                    laserAlreadyExists = true;
                }
            });
            return laserAlreadyExists;
        };
        /**
         * @desc Spawns the laser
         */
        LaserUtilities.spawnLaser = function (world, spawner, entityGroup, offset) {
            var laserEntity = ut.EntityGroup.instantiate(world, entityGroup)[0];
            world.usingComponentData(laserEntity, [ut.Core2D.TransformLocalPosition, game.Laser], function (transformLocalPosition, laser) {
                transformLocalPosition.position = ut.Core2D.TransformService.computeWorldPosition(world, spawner);
                transformLocalPosition.position.y += offset;
                laser.reference = laserEntity;
            });
        };
        return LaserUtilities;
    }());
    game.LaserUtilities = LaserUtilities;
})(game || (game = {}));
var game;
(function (game) {
    var LifeManagerSystem = /** @class */ (function (_super) {
        __extends(LifeManagerSystem, _super);
        function LifeManagerSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Updates the player's life text and sprites, checks for gameover condition
         */
        LifeManagerSystem.prototype.OnUpdate = function () {
            var _this = this;
            var context = this.world.getConfigData(game.GameContext);
            this.world.forEach([ut.Entity, game.LifeManager], function (entity, lifeManager) {
                _this.world.usingComponentData(lifeManager.LifeCount, [ut.Text.Text2DRenderer], function (TextRenderer) {
                    if (TextRenderer.text != context.Life.toString() && context.Life >= 0) {
                        _this.world.destroyEntity(lifeManager.LifeSprites[context.Life]);
                        TextRenderer.text = context.Life.toString();
                    }
                });
            });
            if (context.Life < 0) {
                game.GameService.gameOver(this.world, context);
                context.Life = 0;
            }
            this.world.setConfigData(context);
        };
        LifeManagerSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeAfter(game.DamageSystem),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(game.LifeManager)
        ], LifeManagerSystem);
        return LifeManagerSystem;
    }(ut.ComponentSystem));
    game.LifeManagerSystem = LifeManagerSystem;
})(game || (game = {}));
var game;
(function (game) {
    var MoveSystem = /** @class */ (function (_super) {
        __extends(MoveSystem, _super);
        function MoveSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Moves the spaceship based on the user inputs
         */
        MoveSystem.prototype.OnUpdate = function () {
            var dt = this.scheduler.deltaTime();
            this.world.forEach([ut.Entity, game.Move, ut.Core2D.TransformLocalPosition], function (entity, move, transformlocalposition) {
                var direction = new Vector3(0, 0, 0);
                var position = transformlocalposition.position;
                // Touch support
                var touchEnabled = ut.Core2D.Input.isTouchSupported();
                var touchHappened = false;
                var touchX = -1;
                var touchY = -1;
                if (touchEnabled) {
                    if (ut.Core2D.Input.touchCount() > 0) {
                        var touch = ut.Core2D.Input.getTouch(0);
                        if (touch.phase == ut.Core2D.TouchState.Moved) {
                            touchHappened = true;
                            var swipeVec = move.touchSwipe;
                            swipeVec.x += touch.deltaX;
                            swipeVec.y += touch.deltaY;
                            move.touchSwipe = swipeVec;
                            touchX = swipeVec.x;
                            touchY = swipeVec.y;
                        }
                        else if (touch.phase == ut.Core2D.TouchState.Ended) {
                            touchHappened = true;
                            var swipeVec = move.touchSwipe;
                            swipeVec.x += touch.deltaX;
                            swipeVec.y += touch.deltaY;
                            touchX = swipeVec.x;
                            touchY = swipeVec.y;
                            move.touchSwipe = new Vector2(0, 0);
                        }
                    }
                    else {
                        move.touchSwipe = new Vector2(0, 0);
                    }
                }
                if (touchHappened) {
                    var threshold = 20;
                    var xDom = Math.abs(touchX) > Math.abs(touchY);
                    if (touchX > threshold && xDom && position.x <= move.threshold) {
                        direction.x += 1;
                    }
                    if (touchX < -threshold && xDom && position.x >= -move.threshold) {
                        direction.x -= 1;
                    }
                }
                if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.D) && position.x <= move.threshold) {
                    direction.x += 1;
                }
                if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.A) && position.x >= -move.threshold) {
                    direction.x -= 1;
                }
                direction.normalize();
                direction.multiplyScalar(move.speed * dt);
                position.add(direction);
                transformlocalposition.position = position;
            });
        };
        MoveSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeAfter(ut.HTML.InputHandler),
            ut.executeAfter(game.DamageSystem),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(game.Move),
            ut.requiredComponents(ut.Core2D.TransformLocalPosition)
        ], MoveSystem);
        return MoveSystem;
    }(ut.ComponentSystem));
    game.MoveSystem = MoveSystem;
})(game || (game = {}));
var game;
(function (game) {
    var RaiderSystem = /** @class */ (function (_super) {
        __extends(RaiderSystem, _super);
        function RaiderSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Enables an raider to shoot from its position
         */
        RaiderSystem.prototype.OnUpdate = function () {
            var _this = this;
            var context = this.world.getConfigData(game.GameContext);
            var index = 0;
            this.world.forEach([ut.Entity, game.Raider], function (entity, raider) {
                if (context.RaiderIndex == index &&
                    context.TimeElapsedSinceStart > context.StartShootingDelay &&
                    !game.LaserUtilities.laserExists(_this.world, game.LaserTag.Raider)) {
                    game.LaserUtilities.spawnLaser(_this.world, entity, 'game.RaiderLaser', -12);
                }
                ++index;
            });
        };
        RaiderSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeAfter(game.DamageSystem),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(game.Raider)
        ], RaiderSystem);
        return RaiderSystem;
    }(ut.ComponentSystem));
    game.RaiderSystem = RaiderSystem;
})(game || (game = {}));
var game;
(function (game) {
    var RaidersSystem = /** @class */ (function (_super) {
        __extends(RaidersSystem, _super);
        function RaidersSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RaidersSystem.prototype.OnUpdate = function () {
            var _this = this;
            var dt = this.scheduler.deltaTime();
            var context = this.world.getConfigData(game.GameContext);
            var isGameWon = false;
            this.world.forEach([ut.Entity, game.Raiders, ut.Core2D.TransformLocalPosition], function (entity, raiders, transformlocalposition) {
                /*
                * Choose a random raider to shoot
                */
                if (!game.LaserUtilities.laserExists(_this.world, game.LaserTag.Raider)) {
                    var raiderCount_1 = 0;
                    _this.world.forEach([ut.Entity, game.Raider], function (entity, raider) {
                        raiderCount_1++;
                    });
                    // no raider
                    if (raiderCount_1 == 0) {
                        // Player has won!
                        isGameWon = true;
                        return;
                    }
                    // choose an raider
                    context.RaiderIndex = Math.floor(Math.random() * raiderCount_1) + 1;
                }
                /*
                * Move all raiders
                */
                var direction = new Vector3(0, 0, 0);
                var position = transformlocalposition.position;
                if (raiders.isMovingRight) {
                    direction.x += 1;
                    if (position.x > raiders.threshold) {
                        // Change direction and move down
                        raiders.isMovingRight = false;
                        position.y -= 4;
                    }
                }
                else {
                    direction.x -= 1;
                    if (position.x < -raiders.threshold) {
                        // Change direction and move down
                        raiders.isMovingRight = true;
                        position.y -= 4;
                        // Move faster
                        raiders.speed += 5;
                        // Make raider's sprite2d sequence faster
                        _this.world.forEach([ut.Entity, game.Raider, ut.Core2D.Sprite2DSequencePlayer], function (entity, raider, sprite2dsequenceplayer) {
                            sprite2dsequenceplayer.speed += 0.1;
                        });
                    }
                }
                direction.normalize();
                direction.multiplyScalar(raiders.speed * dt);
                position.add(direction);
                transformlocalposition.position = position;
            });
            if (isGameWon) {
                game.GameService.gameWin(this.world, context);
            }
            this.world.setConfigData(context);
        };
        RaidersSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeAfter(game.DamageSystem),
            ut.executeBefore(game.RaiderSystem),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(game.Raiders),
            ut.requiredComponents(ut.Core2D.TransformLocalPosition)
        ], RaidersSystem);
        return RaidersSystem;
    }(ut.ComponentSystem));
    game.RaidersSystem = RaidersSystem;
})(game || (game = {}));
var game;
(function (game) {
    var ScoreSystem = /** @class */ (function (_super) {
        __extends(ScoreSystem, _super);
        function ScoreSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Updates the scoring text
         */
        ScoreSystem.prototype.OnUpdate = function () {
            var context = this.world.getConfigData(game.GameContext);
            this.world.forEach([ut.Entity, ut.Text.Text2DRenderer, game.Score], function (entity, textRenderer, score) {
                textRenderer.text = context.Score.toString();
            });
        };
        ScoreSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeAfter(game.DamageSystem),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(game.Score)
        ], ScoreSystem);
        return ScoreSystem;
    }(ut.ComponentSystem));
    game.ScoreSystem = ScoreSystem;
})(game || (game = {}));
var game;
(function (game) {
    var SpaceshipSystem = /** @class */ (function (_super) {
        __extends(SpaceshipSystem, _super);
        function SpaceshipSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Enables a spaceship to shoot from its position
         */
        SpaceshipSystem.prototype.OnUpdate = function () {
            var _this = this;
            var context = this.world.getConfigData(game.GameContext);
            this.world.forEach([ut.Entity, game.Spaceship], function (entity, spaceship) {
                if ((ut.Runtime.Input.getKey(ut.Core2D.KeyCode.Space) ||
                    ut.Runtime.Input.getMouseButtonDown(0)) &&
                    context.TimeElapsedSinceStart > context.StartShootingDelay &&
                    !game.LaserUtilities.laserExists(_this.world, game.LaserTag.Spaceship)) {
                    game.LaserUtilities.spawnLaser(_this.world, entity, 'game.SpaceshipLaser', 2);
                }
            });
        };
        SpaceshipSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeAfter(ut.HTML.InputHandler),
            ut.executeAfter(game.DamageSystem),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(game.Spaceship)
        ], SpaceshipSystem);
        return SpaceshipSystem;
    }(ut.ComponentSystem));
    game.SpaceshipSystem = SpaceshipSystem;
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