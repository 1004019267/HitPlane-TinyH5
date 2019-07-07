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
    var AudioService = /** @class */ (function () {
        function AudioService() {
        }
        /**
         * Helper method to play an audio clip by entity name
         */
        AudioService.playAudioSourceByName = function (world, name) {
            var entity = world.getEntityByName(name);
            if (entity.isNone()) {
                console.error("game.AudioService.playAudioSourceByName: No entity with the name '" + name + "' was found");
                return;
            }
            AudioService.playAudioSource(world, entity);
        };
        /**
         * Helper method to play an audio clip
         */
        AudioService.playAudioSource = function (world, entity) {
            if (!world.hasComponent(entity, ut.Audio.AudioSource)) {
                console.error("game.AudioService.playAudioSource: Entity does not have an AudioSource component");
                return;
            }
            if (!world.hasComponent(entity, ut.Audio.AudioSourceStart))
                world.addComponent(entity, ut.Audio.AudioSourceStart);
        };
        return AudioService;
    }());
    game.AudioService = AudioService;
})(game || (game = {}));
var game;
(function (game) {
    var AutoDestroySystem = /** @class */ (function (_super) {
        __extends(AutoDestroySystem, _super);
        function AutoDestroySystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AutoDestroySystem.prototype.OnUpdate = function () {
            this.world.forEach([ut.Core2D.TransformNode, ut.Core2D.TransformLocalPosition, game.AutoDestroy], function (transformnode, transformlocalposition, autodestroy) {
                var position = transformlocalposition.position;
                if (position.x < autodestroy.threshold) {
                    // ut.Core2D.TransformService.destroyTreeDeferred(this.world, ecb, transformnode.parent, true);
                }
            });
        };
        AutoDestroySystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(ut.Core2D.TransformNode),
            ut.requiredComponents(ut.Core2D.TransformLocalPosition),
            ut.requiredComponents(game.AutoDestroy)
        ], AutoDestroySystem);
        return AutoDestroySystem;
    }(ut.ComponentSystem));
    game.AutoDestroySystem = AutoDestroySystem;
})(game || (game = {}));
var game;
(function (game) {
    var NumberTextRenderingSystem = /** @class */ (function (_super) {
        __extends(NumberTextRenderingSystem, _super);
        function NumberTextRenderingSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Workaround system to draw numbers since text was not supported at the time
         */
        NumberTextRenderingSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.NumberTextRenderer], function (numbertextrenderer) {
                var value = numbertextrenderer.value;
                var spacing = numbertextrenderer.spacing;
                var alignment = numbertextrenderer.alignment;
                var renderers = numbertextrenderer.renderers;
                var characters = numbertextrenderer.characters;
                // resolve each digit
                var digits = [
                    value % 10,
                    Math.floor(value / 10),
                    Math.floor(value / 100),
                    Math.floor(value / 1000)
                ];
                // @todo
                // assert(digits.length >= renderers.length);
                // computer the number of characters to draw based on the value
                var count = renderers.length;
                for (var i = renderers.length - 1; i >= 1; i--) {
                    if (digits[i] != 0) {
                        break;
                    }
                    count = i;
                }
                var width = count * spacing;
                for (var i = 0; i < renderers.length; ++i) {
                    var renderer = renderers[i];
                    var spriteRenderer = _this.world.getComponentData(renderer, ut.Core2D.Sprite2DRenderer);
                    var color = spriteRenderer.color;
                    if (i < count) {
                        // digit is used; show it and position it
                        color.a = 1;
                        spriteRenderer.sprite = characters[digits[i]];
                        var position = void 0;
                        if (alignment == game.TextAlignment.Center) {
                            position = new Vector3(spacing * (count - i - 1) - (width - spacing) * 0.5, 0, 0);
                        }
                        else {
                            position = new Vector3(spacing * -i, 0, 0);
                        }
                        _this.world.setComponentData(renderer, new ut.Core2D.TransformLocalPosition(position));
                    }
                    else {
                        // digit is unused; hide it
                        color.a = 0;
                    }
                    spriteRenderer.color = color;
                    _this.world.setComponentData(renderer, spriteRenderer);
                }
            });
        };
        NumberTextRenderingSystem = __decorate([
            ut.executeBefore(ut.Shared.RenderingFence),
            ut.requiredComponents(game.NumberTextRenderer),
            ut.optionalComponents(ut.Core2D.Sprite2DRenderer, ut.Core2D.TransformLocalPosition)
        ], NumberTextRenderingSystem);
        return NumberTextRenderingSystem;
    }(ut.ComponentSystem));
    game.NumberTextRenderingSystem = NumberTextRenderingSystem;
})(game || (game = {}));
/// <reference path="NumberTextRenderingSystem.ts" />
var game;
(function (game) {
    var GameNumberTextValueSystem = /** @class */ (function (_super) {
        __extends(GameNumberTextValueSystem, _super);
        function GameNumberTextValueSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Sets the value of the `NumberTextRenderer` based on a property of the `GameConfig`
         *
         * @note this relies some TypeScript/JavaScript magic to work
         */
        GameNumberTextValueSystem.prototype.OnUpdate = function () {
            var gameConfig = this.world.getConfigData(game.GameConfig);
            this.world.forEach([ut.Entity, game.NumberTextRenderer, game.GameConfigTextValue], function (entity, renderer, value) {
                // assign the value based on the `GameConfig` property by name
                renderer.value = gameConfig[value.key];
            });
        };
        GameNumberTextValueSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.executeBefore(game.NumberTextRenderingSystem),
            ut.requiredComponents(game.NumberTextRenderer, game.GameConfigTextValue)
        ], GameNumberTextValueSystem);
        return GameNumberTextValueSystem;
    }(ut.ComponentSystem));
    game.GameNumberTextValueSystem = GameNumberTextValueSystem;
})(game || (game = {}));
var game;
(function (game) {
    var GameManagerSystem = /** @class */ (function (_super) {
        __extends(GameManagerSystem, _super);
        function GameManagerSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameManagerSystem.prototype.OnUpdate = function () {
            var config = this.world.getConfigData(game.GameConfig);
            // state machine to manage the global game state
            switch (config.state) {
                case game.GameState.Initialize:
                    {
                        game.GameService.initialize(this.world);
                    }
                    break;
                case game.GameState.Menu:
                    {
                    }
                    break;
                case game.GameState.Tutorial:
                    {
                        // if the user clicks at any point during the tutorial, we end the tutorial and transition to gameplay
                        if (ut.Runtime.Input.getMouseButtonDown(0)) {
                            game.GameService.endTutorial(this.world);
                        }
                    }
                    break;
                case game.GameState.Play:
                    {
                    }
                    break;
                case game.GameState.GameOver:
                    {
                        // @todo delay this call
                        if (ut.Runtime.Input.getMouseButtonDown(0)) {
                            game.GameService.startTutorial(this.world);
                        }
                    }
                    break;
            }
        };
        GameManagerSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd)
        ], GameManagerSystem);
        return GameManagerSystem;
    }(ut.ComponentSystem));
    game.GameManagerSystem = GameManagerSystem;
})(game || (game = {}));
var game;
(function (game) {
    var GameOverSystem = /** @class */ (function (_super) {
        __extends(GameOverSystem, _super);
        function GameOverSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Triggers game over when the `PlayerInput` entity touches ANY hitbox in the game
         */
        GameOverSystem.prototype.OnUpdate = function () {
            var _this = this;
            var gameOver = false;
            // game over on any collision contact
            this.world.forEach([ut.Entity, game.PlayerInput, ut.HitBox2D.HitBoxOverlapResults, ut.Core2D.Sprite2DSequencePlayer], function (entity, input, overlap, sequencePlayer) {
                // disable input
                _this.world.removeComponent(entity, game.PlayerInput);
                // stop the animation
                sequencePlayer.paused = true;
                // play hit sound
                game.AudioService.playAudioSourceByName(_this.world, 'audio/sfx_hit');
                // fix: defer the game over call until after iteration
                gameOver = true;
            });
            if (gameOver) {
                game.GameService.gameOver(this.world);
            }
        };
        GameOverSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(game.PlayerInput, ut.HitBox2D.HitBoxOverlapResults, ut.Core2D.Sprite2DSequencePlayer)
        ], GameOverSystem);
        return GameOverSystem;
    }(ut.ComponentSystem));
    game.GameOverSystem = GameOverSystem;
})(game || (game = {}));
var game;
(function (game) {
    var GameService = /** @class */ (function () {
        function GameService() {
        }
        /**
         * Clears all game entities from the world to prepare for a new game
         */
        GameService.clear = function (world) {
            ut.Tweens.TweenService.removeAllTweensInWorld(world);
            ut.EntityGroup.destroyAll(world, this.kGameSceneName);
            ut.EntityGroup.destroyAll(world, this.kScoreSceneName);
            ut.EntityGroup.destroyAll(world, this.kGameOverSceneName);
            ut.EntityGroup.destroyAll(world, this.kPipesSceneName);
        };
        ;
        /**
         * invoked once when the game is launched
         */
        GameService.initialize = function (world) {
            this.startTutorial(world);
        };
        ;
        /**
         * starts the tutorial for the game
         */
        GameService.startTutorial = function (world) {
            this.newGame(world);
            this.setSpawnerPaused(world, true);
            // setup a 'fake' flying animation
            var player = world.getEntityByName(this.kPlayerEntityName);
            // disable gravity
            world.usingComponentData(player, [game.Gravity], function (gravity) {
                gravity.gravity = new ut.Math.Vector2();
            });
            // tween the bird up and down to make it look like its flying
            var transform = world.getComponentData(player, ut.Core2D.TransformLocalPosition);
            ut.Tweens.TweenService.addTween(world, player, // on which entity
            ut.Core2D.TransformLocalPosition.position.y, // what component + field
            transform.position.y, transform.position.y + .1, // from -> to 
            0.4, // duration 
            0, // start time offset
            ut.Core2D.LoopMode.PingPong, ut.Tweens.TweenFunc.InOutQuad, false // remove tween when done (ignored when looping)
            );
            // Day skin theme by default
            var skinConfig = world.getConfigData(game.SkinConfig);
            skinConfig.theme = game.SkinType.Day;
            skinConfig.forced = true;
            world.setConfigData(skinConfig);
            var gameConfig = world.getConfigData(game.GameConfig);
            gameConfig.state = game.GameState.Tutorial;
            world.setConfigData(gameConfig);
            // load in the tutorial scene
            // this scene shows the 'get ready' and 'tutorial' icon
            ut.EntityGroup.instantiate(world, this.kTutorialSceneName);
            // fade in the get ready
            var eReady = world.getEntityByName("Image_GetReady");
            ut.Tweens.TweenService.setValue(world, eReady, // on which entity
            ut.Core2D.Sprite2DRenderer.color.a, // what component + field
            0 // value to set
            );
            ut.Tweens.TweenService.addTween(world, eReady, // on which entity
            ut.Core2D.Sprite2DRenderer.color.a, // what component + field
            0, 1, // from -> to 
            4.0, // duration 
            -2.0, // start time offset
            ut.Core2D.LoopMode.Once, ut.Tweens.TweenFunc.OutQuad, true // remove tween when done
            );
            // fade in the tutorial image
            ut.Tweens.TweenService.addTween(world, world.getEntityByName("Image_Controls"), // on which entity
            ut.Core2D.Sprite2DRenderer.color.a, // what component + field
            0, 1, // from -> to 
            4, // duration 
            0, // start time offset
            ut.Core2D.LoopMode.Once, ut.Tweens.TweenFunc.OutQuad, true // remove tween when done
            );
        };
        ;
        /**
         * starts a new game
         */
        GameService.newGame = function (world) {
            // clear all world objects
            this.clear(world);
            // create a new game scene and score
            ut.EntityGroup.instantiate(world, this.kGameSceneName);
            // setup the initial state for the game
            var config = world.getConfigData(game.GameConfig);
            config.currentScore = 0;
            config.currentScrollSpeed = config.scrollSpeed;
            config.state = game.GameState.Play;
            world.setConfigData(config);
        };
        ;
        /**
         * @desc ends the current tutorial
         */
        GameService.endTutorial = function (world) {
            // destroy the tutorial scene
            ut.EntityGroup.destroyAll(world, this.kTutorialSceneName);
            // un-pause the pipe spawner
            this.setSpawnerPaused(world, false);
            var player = world.getEntityByName(this.kPlayerEntityName);
            var gameConfig = world.getConfigData(game.GameConfig);
            // re-enable gravity
            world.usingComponentData(player, [game.Gravity], function (gravity) {
                gravity.gravity = new ut.Math.Vector2(0, gameConfig.gravity);
            });
            // stop all tweens from tutorial
            ut.Tweens.TweenService.removeAllTweensInWorld(world);
            gameConfig.state = game.GameState.Play;
            world.setConfigData(gameConfig);
            ut.EntityGroup.instantiate(world, this.kScoreSceneName);
        };
        ;
        /**
         * @desc ends the current game and shows the scoreboard
         */
        GameService.gameOver = function (world) {
            // hide the score view
            ut.EntityGroup.destroyAll(world, this.kScoreSceneName);
            // pause the pipe spawner
            this.setSpawnerPaused(world, true);
            var gameConfig = world.getConfigData(game.GameConfig);
            // stop scrolling the world
            gameConfig.currentScrollSpeed = 0;
            // update the highscore
            if (gameConfig.currentScore > gameConfig.highScore) {
                gameConfig.highScore = gameConfig.currentScore;
            }
            gameConfig.state = game.GameState.GameOver;
            world.setConfigData(gameConfig);
            // show the game over view
            ut.EntityGroup.instantiate(world, this.kGameOverSceneName);
            // tween in the game over text, position and alpha
            var eGameOver = world.getEntityByName("Image_GameOver");
            var transform = world.getComponentData(eGameOver, ut.Core2D.TransformLocalPosition);
            var end = transform.position;
            var start = new Vector3(end.x, end.y + 1.0, end.z);
            ut.Tweens.TweenService.addTween(world, eGameOver, ut.Core2D.TransformLocalPosition.position, start, end, 1.35, 0.0, ut.Core2D.LoopMode.Once, ut.Tweens.TweenFunc.OutBounce, true);
            ut.Tweens.TweenService.addTween(world, eGameOver, ut.Core2D.Sprite2DRenderer.color.a, 0, 1, 0.45, 0.0, ut.Core2D.LoopMode.Once, ut.Tweens.TweenFunc.OutBounce, true);
            // tween in the score board from the bottom
            var eBoard = world.getEntityByName("Image_ScoreBoard");
            transform = world.getComponentData(eBoard, ut.Core2D.TransformLocalPosition);
            end = transform.position;
            start = new Vector3(end.x, end.y - 1.0, end.z);
            ut.Tweens.TweenService.addTween(world, eBoard, ut.Core2D.TransformLocalPosition.position, start, end, 0.35, 0.0, ut.Core2D.LoopMode.Once, ut.Tweens.TweenFunc.OutQuad, true);
        };
        ;
        /**
         * Sets the paused flag of the `PipeSpawner` component
         */
        GameService.setSpawnerPaused = function (world, paused) {
            var entity = world.getEntityByName(this.kSpawnerEntityName);
            var spawner = world.getComponentData(entity, game.Spawner);
            spawner.paused = paused;
            world.setComponentData(entity, spawner);
        };
        /**
         * Special entity names
         */
        GameService.kPlayerEntityName = 'Player';
        GameService.kSpawnerEntityName = 'Spawner';
        /**
         * Scene names
         *
         * @note these should be actual entity group references eventually
         */
        GameService.kTutorialSceneName = 'game.Tutorial';
        GameService.kGameSceneName = 'game.GameScene';
        GameService.kPipesSceneName = 'game.Pipes';
        GameService.kScoreSceneName = 'game.Score';
        GameService.kGameOverSceneName = 'game.GameOver';
        return GameService;
    }());
    game.GameService = GameService;
})(game || (game = {}));
var game;
(function (game) {
    var GravitySystem = /** @class */ (function (_super) {
        __extends(GravitySystem, _super);
        function GravitySystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
        * Applies constant forces to all entities with the `Gravity` component.
        */
        GravitySystem.prototype.OnUpdate = function () {
            var dt = this.scheduler.deltaTime();
            this.world.forEach([game.Gravity, game.Velocity], function (gravity, velocity) {
                var v = velocity.velocity;
                var g = gravity.gravity;
                v.x += g.x * dt;
                v.y += g.y * dt;
                velocity.velocity = v;
            });
        };
        GravitySystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(game.Gravity, game.Velocity)
        ], GravitySystem);
        return GravitySystem;
    }(ut.ComponentSystem));
    game.GravitySystem = GravitySystem;
})(game || (game = {}));
var game;
(function (game) {
    var GroundCollisionSystem = /** @class */ (function (_super) {
        __extends(GroundCollisionSystem, _super);
        function GroundCollisionSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Whenever any entity `hits` another entity with the `Ground` component; remove
         * it's `Velocity` component.
         */
        GroundCollisionSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([ut.Entity, game.Velocity, ut.HitBox2D.HitBoxOverlapResults], function (entity, velocity, overlap) {
                var grounded = false;
                var overlaps = overlap.overlaps;
                for (var i = 0; i < overlaps.length; i++) {
                    var other = overlaps[i].otherEntity;
                    if (_this.world.hasComponent(other, game.Ground)) {
                        grounded = true;
                        break;
                    }
                }
                if (grounded) {
                    _this.world.removeComponent(entity, game.Velocity);
                    // @hack for FlyingYolk
                    // we want the player to sit nicely on the ground
                    // ideally this value should be computed or passed in
                    _this.world.usingComponentData(entity, [ut.Core2D.TransformLocalPosition], function (position) {
                        var p = position.position;
                        if (p.y < -0.95) {
                            p.y = -0.95;
                        }
                    });
                }
            });
        };
        GroundCollisionSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(game.Velocity, ut.HitBox2D.HitBoxOverlapResults)
        ], GroundCollisionSystem);
        return GroundCollisionSystem;
    }(ut.ComponentSystem));
    game.GroundCollisionSystem = GroundCollisionSystem;
})(game || (game = {}));
var game;
(function (game) {
    var PlayerInputSystem = /** @class */ (function (_super) {
        __extends(PlayerInputSystem, _super);
        function PlayerInputSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
        * Applies some upward velocity when the left mouse button is pressed
        */
        PlayerInputSystem.prototype.OnUpdate = function () {
            if (this.world.getConfigData(game.GameConfig).state != game.GameState.Play) {
                return;
            }
            // check for user input outside of iteration
            if (!ut.Runtime.Input.getMouseButtonDown(0)) {
                return;
            }
            // play flap wing sound
            game.AudioService.playAudioSourceByName(this.world, 'audio/sfx_wing');
            // apply input to each entity with the `PlayerInput` component
            this.world.forEach([ut.Entity, game.PlayerInput, game.Velocity], function (entity, input, velocity) {
                velocity.velocity = new ut.Math.Vector2(0, input.force);
            });
        };
        PlayerInputSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(game.PlayerInput, game.Velocity)
        ], PlayerInputSystem);
        return PlayerInputSystem;
    }(ut.ComponentSystem));
    game.PlayerInputSystem = PlayerInputSystem;
})(game || (game = {}));
var game;
(function (game) {
    var ScrollerSystem = /** @class */ (function (_super) {
        __extends(ScrollerSystem, _super);
        function ScrollerSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Scrolls objects based on the global game speed
         */
        ScrollerSystem.prototype.OnUpdate = function () {
            var gameConfig = this.world.getConfigData(game.GameConfig);
            this.world.forEach([ut.Core2D.TransformLocalPosition, game.Scroller], function (position, scroller) {
                var p = position.position;
                p.x -= gameConfig.currentScrollSpeed;
                position.position = p;
            });
        };
        ScrollerSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(ut.Core2D.TransformLocalPosition, game.Scroller)
        ], ScrollerSystem);
        return ScrollerSystem;
    }(ut.ComponentSystem));
    game.ScrollerSystem = ScrollerSystem;
})(game || (game = {}));
/// <reference path="ScrollerSystem.ts" />
var game;
(function (game) {
    var RepeatingBackgroundSystem = /** @class */ (function (_super) {
        __extends(RepeatingBackgroundSystem, _super);
        function RepeatingBackgroundSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RepeatingBackgroundSystem.prototype.OnUpdate = function () {
            this.world.forEach([ut.Core2D.TransformLocalPosition, game.RepeatingBackground], function (transformlocalposition, repeatingbackground) {
                var position = transformlocalposition.position;
                // when this entity reaches a certain threshold jump forward a specific distance
                if (position.x < repeatingbackground.threshold) {
                    position.x += repeatingbackground.distance;
                }
                transformlocalposition.position = position;
            });
        };
        RepeatingBackgroundSystem = __decorate([
            ut.executeAfter(game.ScrollerSystem),
            ut.requiredComponents(ut.Core2D.TransformLocalPosition, game.RepeatingBackground)
        ], RepeatingBackgroundSystem);
        return RepeatingBackgroundSystem;
    }(ut.ComponentSystem));
    game.RepeatingBackgroundSystem = RepeatingBackgroundSystem;
})(game || (game = {}));
var game;
(function (game) {
    var ScorePointSystem = /** @class */ (function (_super) {
        __extends(ScorePointSystem, _super);
        function ScorePointSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ScorePointSystem.prototype.OnUpdate = function () {
            var _this = this;
            var player = this.world.getEntityByName('Player');
            if (player.isNone()) {
                return;
            }
            var gameConfig = this.world.getConfigData(game.GameConfig);
            var playerPosition = ut.Core2D.TransformService.computeWorldPosition(this.world, player);
            this.world.forEach([ut.Entity, game.ScorePoint, ut.Core2D.TransformObjectToWorld], function (entity, scorepoint, o2w) {
                var position = new Vector3(o2w.matrix.elements[12], o2w.matrix.elements[13], o2w.matrix.elements[14]);
                // when the player passes this entity add some value to the players score
                if (position.x < playerPosition.x) {
                    gameConfig.currentScore = gameConfig.currentScore + scorepoint.value;
                    _this.world.removeComponent(entity, game.ScorePoint);
                    // play score point sound
                    game.AudioService.playAudioSourceByName(_this.world, 'audio/sfx_point');
                }
            });
            this.world.setConfigData(gameConfig);
        };
        ScorePointSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(game.ScorePoint),
            ut.optionalComponents(ut.Audio.AudioSource)
        ], ScorePointSystem);
        return ScorePointSystem;
    }(ut.ComponentSystem));
    game.ScorePointSystem = ScorePointSystem;
})(game || (game = {}));
/// <reference path="RepeatingBackgroundSystem.ts" />
var game;
(function (game) {
    var SpawnerSystem = /** @class */ (function (_super) {
        __extends(SpawnerSystem, _super);
        function SpawnerSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpawnerSystem.prototype.OnUpdate = function () {
            var _this = this;
            var pipesToSpawn = [];
            this.world.forEach([game.Spawner], function (spawner) {
                if (spawner.paused) {
                    return;
                }
                var time = spawner.time;
                var delay = spawner.delay;
                time += _this.scheduler.deltaTime();
                if (time > delay) {
                    time -= delay;
                    // this is to get a non-ref copy of the pipespawner component.  This is not the right way to do this,
                    // we need an API for this if we think this is going to be a common operation.
                    //@ts-ignore
                    pipesToSpawn.push(game.Spawner._fromPtr(spawner._ptr));
                }
                spawner.time = time;
            });
            for (var i = 0; i < pipesToSpawn.length; ++i) {
                var spawner = pipesToSpawn[i];
                var instance = ut.EntityGroup.instantiate(this.world, 'game.Pipes')[0];
                var pipe = ut.Core2D.TransformService.getChild(this.world, instance, 0);
                var transform = new ut.Core2D.TransformLocalPosition(new Vector3(spawner.distance, (Math.random() * spawner.maxHeight) + spawner.minHeight, 0));
                if (this.world.hasComponent(pipe, ut.Core2D.TransformLocalPosition))
                    this.world.setComponentData(pipe, transform);
                else
                    this.world.addComponentData(pipe, transform);
            }
        };
        SpawnerSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.executeAfter(game.RepeatingBackgroundSystem),
            ut.requiredComponents(game.Spawner)
        ], SpawnerSystem);
        return SpawnerSystem;
    }(ut.ComponentSystem));
    game.SpawnerSystem = SpawnerSystem;
})(game || (game = {}));
/// <reference path="SpawnerSystem.ts" />
var game;
(function (game) {
    var SkinSystem = /** @class */ (function (_super) {
        __extends(SkinSystem, _super);
        function SkinSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SkinSystem.prototype.OnUpdate = function () {
            var _this = this;
            var gameConfig = this.world.getConfigData(game.GameConfig);
            var skinConfig = this.world.getConfigData(game.SkinConfig);
            var change = false;
            // change theme with user keyboard input
            if (ut.Runtime.Input.getKeyUp(ut.Core2D.KeyCode.S)) {
                change = true;
            }
            // change theme every four points
            if (gameConfig.currentScore != 0 && gameConfig.currentScore % 4 == 0) {
                change = true;
            }
            var themeIndex = gameConfig.currentScore % 8;
            // apply the theme change to the game config
            if (themeIndex >= 4) {
                skinConfig.theme = game.SkinType.Night;
            }
            else {
                skinConfig.theme = game.SkinType.Day;
            }
            this.world.setConfigData(skinConfig);
            // update the theme for reskinnable entities
            // get the skin theme (string value) from the GameManager entity
            var theme = skinConfig.theme;
            var themeName = Object.keys(game.SkinType).filter(function (value) { return game.SkinType[value] === theme; });
            // Update Sprite2DRenderer sprites
            this.world.forEach([game.Reskinnable, ut.Core2D.Sprite2DRenderer], function (reskinnable, sprite2drenderer) {
                if (reskinnable.theme == theme) {
                    return;
                }
                var spriteEntity = sprite2drenderer.sprite;
                var imgPath = _this.world.getEntityName(spriteEntity);
                // variation of a sprite is contained in another Sprite Atlas
                // e.g. "assets/sprites/Day/bg" and "assets/sprites/Night/bg"
                var path = "assets/sprites/" + themeName + imgPath.substring(imgPath.lastIndexOf('/'));
                sprite2drenderer.sprite = _this.world.getEntityByName(path);
            });
            // Update Sprite2DSequence sprites
            this.world.forEach([game.Reskinnable, ut.Core2D.Sprite2DSequence], function (reskinnable, sprite2dsequence) {
                if (reskinnable.theme == theme) {
                    return;
                }
                var sprites = Array();
                sprite2dsequence.sprites.forEach(function (sprite) {
                    var imgPath = _this.world.getEntityName(sprite);
                    // variation of a sprite is contained in another Sprite Atlas
                    // e.g. "assets/sprites/Day/bg" and "assets/sprites/Night/bg"
                    var path = "assets/sprites/" + themeName + imgPath.substring(imgPath.lastIndexOf('/'));
                    sprites.push(_this.world.getEntityByName(path));
                });
                sprite2dsequence.sprites = sprites;
            });
            this.world.forEach([game.Reskinnable], function (reskinnable) {
                reskinnable.theme = theme;
            });
        };
        SkinSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.executeAfter(game.SpawnerSystem),
            ut.requiredComponents(ut.Core2D.Sprite2DRenderer, ut.Core2D.Sprite2DSequence)
        ], SkinSystem);
        return SkinSystem;
    }(ut.ComponentSystem));
    game.SkinSystem = SkinSystem;
})(game || (game = {}));
var game;
(function (game) {
    var PipeSpacingSystem = /** @class */ (function (_super) {
        __extends(PipeSpacingSystem, _super);
        function PipeSpacingSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PipeSpacingSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.Spacing], function (spacing) {
                // system responsible for setting the spacing between the pipes
                // this can be manipulated when spawing the pipe, or by another system in real time to create moving pipes
                var topPosition = _this.world.getComponentData(spacing.top, ut.Core2D.TransformLocalPosition);
                var botPosition = _this.world.getComponentData(spacing.bottom, ut.Core2D.TransformLocalPosition);
                topPosition.position = new Vector3(0, spacing.spacing * 0.5, 0);
                botPosition.position = new Vector3(0, -spacing.spacing * 0.5, 0);
                _this.world.setComponentData(spacing.top, topPosition);
                _this.world.setComponentData(spacing.bottom, botPosition);
            });
        };
        PipeSpacingSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(game.Spacing),
            ut.optionalComponents(ut.Core2D.TransformLocalPosition)
        ], PipeSpacingSystem);
        return PipeSpacingSystem;
    }(ut.ComponentSystem));
    game.PipeSpacingSystem = PipeSpacingSystem;
})(game || (game = {}));
var game;
(function (game) {
    var VelocitySystem = /** @class */ (function (_super) {
        __extends(VelocitySystem, _super);
        function VelocitySystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
        * Updates the `TransformLocalPosition` based on the `Velocity` component each frame.
        */
        VelocitySystem.prototype.OnUpdate = function () {
            this.world.forEach([ut.Core2D.TransformLocalPosition, game.Velocity], function (transform, velocity) {
                var p = transform.position;
                var v = velocity.velocity;
                p.x += v.x;
                p.y += v.y;
                transform.position = p;
            });
        };
        VelocitySystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(game.PlayerInput, game.Velocity)
        ], VelocitySystem);
        return VelocitySystem;
    }(ut.ComponentSystem));
    game.VelocitySystem = VelocitySystem;
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