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
    var AudioInputSystem = /** @class */ (function (_super) {
        __extends(AudioInputSystem, _super);
        function AudioInputSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AudioInputSystem.prototype.OnUpdate = function () {
            var _this = this;
            // On iPhone, you need to interact at least once to play audio clips
            if (ut.Runtime.Input.getMouseButtonDown(0)) {
                this.playClip("Walk");
            }
            if (ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.T)) {
                this.playClip("TreeWind");
            }
            if (ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.B)) {
                this.playClip("Breeze");
            }
            if (ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.W)) {
                this.playClip("Walk");
            }
            if (ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.S)) {
                // Stop all AudioSources except BackgroundMusic
                this.world.forEach([ut.Entity, ut.Audio.AudioSource], function (entity, audioSource) {
                    var name = _this.world.getEntityName(entity);
                    if (name != "BackgroundMusic") {
                        _this.stopClip(name);
                    }
                });
            }
            if (ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.P)) {
                // Pause all AudioSources
                this.world.forEach([ut.Audio.AudioConfig], function (audioConfig) {
                    audioConfig.paused = true;
                });
            }
            if (ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.R)) {
                // Resume all AudioSources
                this.world.forEach([ut.Audio.AudioConfig], function (audioConfig) {
                    audioConfig.paused = false;
                });
            }
        };
        // Play an AudioClip
        AudioInputSystem.prototype.playClip = function (audioSourceEntityName) {
            var audioSourceEntity = this.world.getEntityByName(audioSourceEntityName);
            if (!this.world.hasComponent(audioSourceEntity, ut.Audio.AudioSourceStart)) {
                this.world.addComponent(audioSourceEntity, ut.Audio.AudioSourceStart);
            }
        };
        // Stop an AudioClip
        AudioInputSystem.prototype.stopClip = function (audioSourceEntityName) {
            var audioSourceEntity = this.world.getEntityByName(audioSourceEntityName);
            if (!this.world.hasComponent(audioSourceEntity, ut.Audio.AudioSourceStop)) {
                this.world.addComponent(audioSourceEntity, ut.Audio.AudioSourceStop);
            }
        };
        AudioInputSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd)
        ], AudioInputSystem);
        return AudioInputSystem;
    }(ut.ComponentSystem));
    game.AudioInputSystem = AudioInputSystem;
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