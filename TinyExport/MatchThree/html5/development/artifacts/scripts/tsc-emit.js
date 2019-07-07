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
    var AnimateCutsceneSystem = /** @class */ (function (_super) {
        __extends(AnimateCutsceneSystem, _super);
        function AnimateCutsceneSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AnimateCutsceneSystem.prototype.OnUpdate = function () {
            var _this = this;
            if (game.GameService.getGameState(this.world).GameStateType != game.GameStateTypes.Cutscene && game.GameService.getGameState(this.world).GameStateType != game.GameStateTypes.CutsceneEnd) {
                return;
            }
            var cutsceneDirectorEntity = this.world.getEntityByName("CutsceneDirector");
            if (!this.world.exists(cutsceneDirectorEntity)) {
                return;
            }
            var cutsceneDirector = this.world.getComponentData(cutsceneDirectorEntity, game.CutsceneDirector);
            var deltaTime = this.scheduler.deltaTime();
            if (cutsceneDirector.PauseDelayTimer > 0) {
                cutsceneDirector.PauseDelayTimer -= deltaTime * cutsceneDirector.Speed;
                this.world.setComponentData(cutsceneDirectorEntity, cutsceneDirector);
                return;
            }
            if (ut.Core2D.Input.getMouseButtonDown(0)) {
                this.exitCutscene();
            }
            var hasElementInProgress = false;
            var clearPreviousElements = false;
            var lastItemIndex = -1;
            // Update current cutscene element animations.
            this.world.forEach([ut.Entity, game.CutsceneElement, ut.Core2D.Sprite2DRenderer], function (entity, cutsceneElement, spriteRenderer) {
                if (cutsceneElement.Index == cutsceneDirector.CurrentElementIndex) {
                    if (cutsceneElement.ClearPreviousElements) {
                        clearPreviousElements = true;
                    }
                    if (cutsceneElement.Timer < cutsceneElement.Duration) {
                        hasElementInProgress = true;
                    }
                }
                if (cutsceneElement.Index <= cutsceneDirector.CurrentElementIndex) {
                    if (cutsceneElement.Timer == 0) {
                        _this.animateCutSceneElement(cutsceneDirector, entity, cutsceneElement);
                    }
                    cutsceneElement.Timer += deltaTime * cutsceneDirector.Speed;
                }
                if (cutsceneElement.Index > lastItemIndex) {
                    lastItemIndex = cutsceneElement.Index;
                }
                spriteRenderer.color = new ut.Core2D.Color(1, 1, 1, _this.getElementAlpha(cutsceneDirector, entity, cutsceneElement));
            });
            // If no currently animating cutscene element, move to the next one.
            var isLastElement = cutsceneDirector.CurrentElementIndex > lastItemIndex;
            if (!hasElementInProgress) {
                if (isLastElement) {
                    this.exitCutscene();
                }
                else if (clearPreviousElements) {
                    var displayInfo = this.world.getConfigData(ut.Core2D.DisplayInfo);
                    var aspectRatio = displayInfo.width / displayInfo.height;
                    var isLandscape = aspectRatio >= 16 / 9 - 0.01;
                    if (!isLandscape) {
                        this.clearPreviousElements(cutsceneDirector);
                        cutsceneDirector.PauseDelayTimer = 1.2;
                        this.world.setComponentData(cutsceneDirectorEntity, cutsceneDirector);
                    }
                }
                if (!isLastElement) {
                    cutsceneDirector.CurrentElementIndex++;
                    this.world.setComponentData(cutsceneDirectorEntity, cutsceneDirector);
                }
            }
        };
        /**
         * Start cutscene element move and scale animations.
         */
        AnimateCutsceneSystem.prototype.animateCutSceneElement = function (cutsceneDirector, cutsceneElementEntity, cutsceneElement) {
            // Move
            if (this.world.hasComponent(cutsceneElementEntity, game.CutsceneMove)) {
                var moveAnimation = this.world.getComponentData(cutsceneElementEntity, game.CutsceneMove);
                var transformPosition = this.world.getComponentData(cutsceneElementEntity, ut.Core2D.TransformLocalPosition);
                var defaultPosition = transformPosition.position;
                var startPosition = new Vector3(defaultPosition.x + moveAnimation.StartOffset.x, defaultPosition.y + moveAnimation.StartOffset.y, 0);
                var endPosition = defaultPosition;
                var moveTween = new ut.Tweens.TweenDesc;
                moveTween.cid = ut.Core2D.TransformLocalPosition.cid;
                moveTween.offset = 0;
                moveTween.duration = moveAnimation.Duration * (1 / cutsceneDirector.Speed);
                moveTween.func = moveAnimation.Easing;
                moveTween.loop = ut.Core2D.LoopMode.Once;
                moveTween.destroyWhenDone = true;
                moveTween.t = 0.0;
                ut.Tweens.TweenService.addTweenVector3(this.world, cutsceneElementEntity, startPosition, endPosition, moveTween);
                transformPosition.position = startPosition;
                this.world.setComponentData(cutsceneElementEntity, transformPosition);
            }
            // Scale
            if (this.world.hasComponent(cutsceneElementEntity, game.CutsceneScale)) {
                var scaleAnimation = this.world.getComponentData(cutsceneElementEntity, game.CutsceneScale);
                var defaultScale = this.world.getComponentData(cutsceneElementEntity, ut.Core2D.TransformLocalScale).scale;
                var startScale = new Vector3(scaleAnimation.StartScale.x, scaleAnimation.StartScale.y, scaleAnimation.StartScale.z);
                var endScale = defaultScale;
                var scaleTween = new ut.Tweens.TweenDesc;
                scaleTween.cid = ut.Core2D.TransformLocalScale.cid;
                scaleTween.offset = 0;
                scaleTween.duration = scaleAnimation.Duration * (1 / cutsceneDirector.Speed);
                scaleTween.func = scaleAnimation.Easing;
                scaleTween.loop = ut.Core2D.LoopMode.Once;
                scaleTween.destroyWhenDone = true;
                scaleTween.t = 0.0;
                ut.Tweens.TweenService.addTweenVector3(this.world, cutsceneElementEntity, startScale, endScale, scaleTween);
            }
        };
        AnimateCutsceneSystem.prototype.getElementAlpha = function (cutsceneDirector, cutsceneElementEntity, cutsceneElement) {
            if (cutsceneElement.Index <= cutsceneDirector.CurrentElementIndex) {
                if (this.world.hasComponent(cutsceneElementEntity, game.CutsceneFade)) {
                    var fadeAnimation = this.world.getComponentData(cutsceneElementEntity, game.CutsceneFade);
                    return Math.min(1, cutsceneElement.Timer / fadeAnimation.Duration);
                }
                else {
                    return 1;
                }
            }
            else {
                return 0;
            }
        };
        /**
         * Animate all visible cutscene elements by moving them off screen.
         */
        AnimateCutsceneSystem.prototype.clearPreviousElements = function (cutsceneDirector) {
            var _this = this;
            this.world.forEach([ut.Entity, game.CutsceneElement, ut.Core2D.Sprite2DRenderer], function (entity, cutsceneElement, spriteRenderer) {
                if (cutsceneElement.Index <= cutsceneDirector.CurrentElementIndex) {
                    var defaultPosition = _this.world.getComponentData(entity, ut.Core2D.TransformLocalPosition).position;
                    var startPosition = defaultPosition;
                    var endPosition = new Vector3(defaultPosition.x - 300, defaultPosition.y, 0);
                    var moveTween = new ut.Tweens.TweenDesc;
                    moveTween.cid = ut.Core2D.TransformLocalPosition.cid;
                    moveTween.offset = 0;
                    moveTween.duration = 1.5 * (1 / cutsceneDirector.Speed);
                    moveTween.func = ut.Tweens.TweenFunc.InCubic;
                    moveTween.loop = ut.Core2D.LoopMode.Once;
                    moveTween.destroyWhenDone = true;
                    moveTween.t = 0.0;
                    ut.Tweens.TweenService.addTweenVector3(_this.world, entity, startPosition, endPosition, moveTween);
                }
            });
        };
        /**
         * Skip or end the cutscene and return to previous menu.
         */
        AnimateCutsceneSystem.prototype.exitCutscene = function () {
            if (game.GameService.getGameState(this.world).GameStateType == game.GameStateTypes.Cutscene) {
                game.GameStateLoadingService.transitionToGameStateWithDuration(this.world, game.GameStateTypes.MainMenu, 1, 0.25);
            }
            else {
                game.GameStateLoadingService.transitionToGameStateWithDuration(this.world, game.GameStateTypes.WorldMap, 1, 0.25);
            }
        };
        AnimateCutsceneSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeEnd),
            ut.executeBefore(ut.Shared.RenderingFence)
        ], AnimateCutsceneSystem);
        return AnimateCutsceneSystem;
    }(ut.ComponentSystem));
    game.AnimateCutsceneSystem = AnimateCutsceneSystem;
})(game || (game = {}));
var game;
(function (game) {
    var DinosaurService = /** @class */ (function () {
        function DinosaurService() {
        }
        DinosaurService.getDinosaurEntity = function (world) {
            if (!world.exists(this.dinosaurEntity)) {
                this.dinosaurEntity = world.getEntityByName("Dinosaur");
                if (!world.exists(this.dinosaurEntity)) {
                    this.dinosaurEntity = null;
                    return null;
                }
            }
            return this.dinosaurEntity;
        };
        DinosaurService.getDinosaur = function (world) {
            var dinosaurEntity = this.getDinosaurEntity(world);
            if (dinosaurEntity == null) {
                return null;
            }
            else {
                return world.getComponentData(dinosaurEntity, game.Dinosaur);
            }
        };
        DinosaurService.startAnimation = function (world, dinosaur, dinosaurAttack) {
            game.GameService.setEntityEnabled(world, dinosaur.WalkAnimation, false);
            var animation = null;
            switch (dinosaurAttack.AttackType) {
                case game.DinosaurAttackTypes.TailWhip: {
                    animation = dinosaur.TailWhipAnimation;
                    break;
                }
                case game.DinosaurAttackTypes.Stomp: {
                    animation = dinosaur.StompAnimation;
                    break;
                }
                case game.DinosaurAttackTypes.Bite: {
                    animation = dinosaur.BiteAnimation;
                    break;
                }
                case game.DinosaurAttackTypes.Crush: {
                    animation = dinosaur.CrushAnimation;
                    break;
                }
                case game.DinosaurAttackTypes.Launch: {
                    animation = dinosaur.LaunchAnimation;
                    break;
                }
                case game.DinosaurAttackTypes.Jump: {
                    animation = dinosaur.JumpAnimation;
                    break;
                }
                case game.DinosaurAttackTypes.Laser: {
                    animation = dinosaur.LaserAnimation;
                    break;
                }
                default: {
                    animation = null;
                    break;
                }
            }
            if (animation != null) {
                game.GameService.setEntityEnabled(world, animation, true);
                world.usingComponentData(animation, [ut.Core2D.Sprite2DSequencePlayer], function (seqPlayer) { return seqPlayer.time = 0; });
            }
        };
        /**
         * Get the delay after which the dinosaur triggers its attack effects (damages) after starting the animation.
         */
        DinosaurService.getAnimationEffectTime = function (dinosaurAttack) {
            switch (dinosaurAttack.AttackType) {
                case game.DinosaurAttackTypes.TailWhip:
                    return 0.8;
                case game.DinosaurAttackTypes.Stomp:
                    return 0.7;
                case game.DinosaurAttackTypes.Bite:
                    return 0.6;
                case game.DinosaurAttackTypes.Crush:
                    return 0.9;
                case game.DinosaurAttackTypes.Launch:
                    return 0.6;
                case game.DinosaurAttackTypes.Jump:
                    return 1.3;
                case game.DinosaurAttackTypes.Laser:
                    return 0.4;
                default:
                    return 0;
            }
        };
        DinosaurService.getAnimationDuration = function (dinosaurAttack) {
            switch (dinosaurAttack.AttackType) {
                case game.DinosaurAttackTypes.TailWhip:
                    return 1;
                case game.DinosaurAttackTypes.Stomp:
                    return 1;
                case game.DinosaurAttackTypes.Bite:
                    return 0.9;
                case game.DinosaurAttackTypes.Crush:
                    return 1.4;
                case game.DinosaurAttackTypes.Launch:
                    return 1.0;
                case game.DinosaurAttackTypes.Jump:
                    return 1.5;
                case game.DinosaurAttackTypes.Laser:
                    return 1.5;
                default:
                    return 1;
            }
        };
        DinosaurService.triggerKidOnBike = function (world, dinosaurEntity) {
            var dinosaurTransformPosition = world.getComponentData(dinosaurEntity, ut.Core2D.TransformLocalPosition);
            world.forEach([game.KidOnBike, ut.Core2D.TransformLocalPosition], function (kid, transformLocalPosition) {
                if (Math.abs(transformLocalPosition.position.x - dinosaurTransformPosition.position.x) < 70) {
                    kid.IsInWheelyMode = true;
                }
            });
        };
        DinosaurService.performAttack = function (world, dinosaurEntity, dinosaur, dinosaurAttack) {
            dinosaurAttack.IsDone = true;
            world.setComponentData(dinosaurEntity, dinosaurAttack);
            switch (dinosaurAttack.AttackType) {
                case game.DinosaurAttackTypes.Jump:
                    this.performAttackOnObjectType(world, game.FireTruck, -45, 60, true, false);
                    break;
                case game.DinosaurAttackTypes.Stomp:
                    this.performAttackOnObjectType(world, game.Prop, -45, 40, true, false);
                    break;
                case game.DinosaurAttackTypes.Launch:
                    this.performLaunchAttack(world, -10, 30);
                    break;
                case game.DinosaurAttackTypes.Crush:
                    this.performAttackOnObjectType(world, game.Helicopter, -30, 50, false, true);
                    break;
                case game.DinosaurAttackTypes.Bite:
                    this.performAttackOnObjectType(world, game.Person, 0, 25, false, false);
                    break;
                case game.DinosaurAttackTypes.Laser: {
                    var centerPosition = 105;
                    var radius = 115;
                    this.performAttackOnObjectType(world, game.Building, centerPosition, radius, true, false);
                    this.performAttackOnObjectType(world, game.Person, centerPosition, radius, false, false);
                    this.performAttackOnObjectType(world, game.Prop, centerPosition, radius, false, false);
                    this.performAttackOnObjectType(world, game.FireTruck, centerPosition, radius, false, false);
                    this.performAttackOnObjectType(world, game.Car, centerPosition, radius, false, false);
                    game.SoundService.play(world, "Lazer");
                    break;
                }
                case game.DinosaurAttackTypes.TailWhip:
                default:
                    this.performAttackOnObjectType(world, game.Building, 0, 30, false, true);
                    break;
            }
        };
        /**
         * Damage/destroy destructible objects within a range from the dinosaur.
         */
        DinosaurService.performAttackOnObjectType = function (world, targetObjectType, hitCenter, hitRadius, shakeOnAttack, shakeOnHit) {
            var _this = this;
            if (shakeOnAttack) {
                this.shakeCamera(world);
            }
            var entitiesToDestroy = new Array();
            world.forEach([ut.Entity, targetObjectType, game.Destructible, ut.Core2D.TransformLocalPosition], function (entity, type, destructible, transformPosition) {
                if (Math.abs(transformPosition.position.x - hitCenter) < hitRadius) {
                    if (destructible.SpriteStates.length > 1) {
                        _this.damageDestructible(destructible);
                    }
                    else {
                        var entityToDestroy = new ut.Entity();
                        entityToDestroy.index = entity.index;
                        entityToDestroy.version = entity.version;
                        entitiesToDestroy.push(entityToDestroy);
                    }
                    _this.spawnExplosions(world, destructible, transformPosition);
                    if (shakeOnHit) {
                        _this.shakeCamera(world);
                    }
                }
            });
            for (var i = 0; i < entitiesToDestroy.length; i++) {
                ut.Core2D.TransformService.destroyTree(world, entitiesToDestroy[i], true);
            }
        };
        DinosaurService.damageDestructible = function (destructible) {
            var spriteState = destructible.CurrentState;
            spriteState++;
            if (spriteState >= destructible.SpriteStates.length) {
                spriteState = destructible.SpriteStates.length - 1;
            }
            destructible.CurrentState = spriteState;
        };
        DinosaurService.spawnExplosions = function (world, destructible, transformPosition) {
            var explosionCount = destructible.ExplosionMinCount + Math.floor(Math.random() * (destructible.ExplosionMaxCount - destructible.ExplosionMinCount));
            for (var i = 0; i < explosionCount; i++) {
                var explosionPosition = new Vector2(transformPosition.position.x, transformPosition.position.y);
                explosionPosition.x += destructible.ExplosionOffsetX + Math.random() * destructible.ExplosionRangeX * 2 - destructible.ExplosionRangeX;
                explosionPosition.y += destructible.ExplosionOffsetY + Math.random() * destructible.ExplosionRangeY * 2 - destructible.ExplosionRangeY;
                var explosionID = 1 + i % 2;
                var explosionEntity = ut.EntityGroup.instantiate(world, "game.Explosion" + explosionID)[0];
                var explosionTransform = world.getComponentData(explosionEntity, ut.Core2D.TransformLocalPosition);
                explosionTransform.position = new Vector3(explosionPosition.x, explosionPosition.y, explosionTransform.position.z);
                world.setComponentData(explosionEntity, explosionTransform);
                // Spawn explosion particles
                var particleEntity = ut.EntityGroup.instantiate(world, "game.ParticleExplosion")[0];
                var explosionTransformPosition = world.getComponentData(particleEntity, ut.Core2D.TransformLocalPosition);
                explosionTransformPosition.position = new Vector3(explosionPosition.x, explosionPosition.y, 0);
                world.setComponentData(particleEntity, explosionTransformPosition);
            }
            if (destructible.ExplosionMinCount > 0) {
                var explosionSound = "Destruction" + (1 + Math.floor(Math.random() * 2));
                game.SoundService.play(world, explosionSound);
            }
        };
        /**
         * Throw a car into the sky, if there is one in front of the dinosaur.
         */
        DinosaurService.performLaunchAttack = function (world, hitCenter, hitRadius) {
            var _this = this;
            world.forEach([ut.Entity, game.Car, game.Destructible, game.ScrollingObject, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation], function (entity, car, destructible, scrollingObject, transformPosition, transformRotation) {
                if (Math.abs(transformPosition.position.x - hitCenter) < hitRadius) {
                    if (destructible.SpriteStates.length > 1) {
                        _this.damageDestructible(destructible);
                    }
                    _this.spawnExplosions(world, destructible, transformPosition);
                    world.removeComponent(entity, game.ScrollingObject);
                    var destroyAfterDelay = new game.DestroyAfterDelay();
                    destroyAfterDelay.Delay = 2;
                    world.addComponentData(entity, destroyAfterDelay);
                    // Move tween
                    {
                        var startPosition = new Vector3(transformPosition.position.x, transformPosition.position.y, 0);
                        var endPosition = new Vector3(transformPosition.position.x, 300, 0);
                        transformPosition.position = startPosition;
                        var moveTween = new ut.Tweens.TweenDesc;
                        moveTween.cid = ut.Core2D.TransformLocalPosition.cid;
                        moveTween.offset = 0;
                        moveTween.duration = 0.4;
                        moveTween.func = ut.Tweens.TweenFunc.Linear;
                        moveTween.loop = ut.Core2D.LoopMode.Once;
                        moveTween.destroyWhenDone = true;
                        moveTween.t = 0.0;
                        ut.Tweens.TweenService.addTweenVector3(world, entity, startPosition, endPosition, moveTween);
                    }
                    // Rotate tween
                    {
                        var startRotation = new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), 0);
                        var endRotation = new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), Math.random() * 720 - 360);
                        transformRotation.rotation = startRotation;
                        var rotateTween = new ut.Tweens.TweenDesc;
                        rotateTween.cid = ut.Core2D.TransformLocalRotation.cid;
                        rotateTween.offset = 0;
                        rotateTween.duration = 0.45;
                        rotateTween.func = ut.Tweens.TweenFunc.Linear;
                        rotateTween.loop = ut.Core2D.LoopMode.Once;
                        rotateTween.destroyWhenDone = true;
                        rotateTween.t = 0.0;
                        ut.Tweens.TweenService.addTweenQuaternion(world, entity, startRotation, endRotation, rotateTween);
                    }
                    _this.spawnFallingCar(world);
                }
            });
        };
        DinosaurService.spawnFallingCar = function (world) {
            var entity = ut.EntityGroup.instantiate(world, "game.CarSkyFall")[0];
            var transformPosition = world.getComponentData(entity, ut.Core2D.TransformLocalPosition);
            var transformRotation = world.getComponentData(entity, ut.Core2D.TransformLocalRotation);
            // Move tween
            {
                var xPosition = Math.random() * 100 - 50;
                var startPosition = new Vector3(xPosition, 300, 0);
                var endPosition = new Vector3(xPosition, 54, 0);
                transformPosition.position = startPosition;
                world.setComponentData(entity, transformPosition);
                var moveTween = new ut.Tweens.TweenDesc;
                moveTween.cid = ut.Core2D.TransformLocalPosition.cid;
                moveTween.offset = 0;
                moveTween.duration = 1.9;
                moveTween.func = ut.Tweens.TweenFunc.Linear;
                moveTween.loop = ut.Core2D.LoopMode.Once;
                moveTween.destroyWhenDone = true;
                moveTween.t = 0.0;
                ut.Tweens.TweenService.addTweenVector3(world, entity, startPosition, endPosition, moveTween);
            }
            // Rotate tween
            {
                var startRotation = new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), 0);
                var endRotation = new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), Math.random() * 720 - 360);
                transformRotation.rotation = startRotation;
                world.setComponentData(entity, transformRotation);
                var rotateTween = new ut.Tweens.TweenDesc;
                rotateTween.cid = ut.Core2D.TransformLocalRotation.cid;
                rotateTween.offset = 0;
                rotateTween.duration = 1.95;
                rotateTween.func = ut.Tweens.TweenFunc.Linear;
                rotateTween.loop = ut.Core2D.LoopMode.Once;
                rotateTween.destroyWhenDone = true;
                rotateTween.t = 0.0;
                ut.Tweens.TweenService.addTweenQuaternion(world, entity, startRotation, endRotation, rotateTween);
            }
        };
        DinosaurService.shakeCamera = function (world, startDelay) {
            if (startDelay === void 0) { startDelay = 0; }
            var cameraEntity = world.getEntityByName("Camera");
            if (world.exists(cameraEntity)) {
                if (world.hasComponent(cameraEntity, game.ShakeAnimationPlayer)) {
                    var shakePlayer = world.getComponentData(cameraEntity, game.ShakeAnimationPlayer);
                    shakePlayer.Timer = 0;
                    world.setComponentData(cameraEntity, shakePlayer);
                }
                else {
                    var cameraShakePlayer = new game.ShakeAnimationPlayer();
                    cameraShakePlayer.Duration = 0.5;
                    cameraShakePlayer.StartDelay = startDelay;
                    cameraShakePlayer.ShakeRadiusX = 6;
                    cameraShakePlayer.ShakeRadiusY = 6;
                    world.addComponentData(cameraEntity, cameraShakePlayer);
                }
            }
        };
        /**
         * Trigger death animation if objective is incomplete.
         */
        DinosaurService.setEndGameAnimation = function (world, isObjectiveComplete) {
            var dinosaurEntity = world.getEntityByName("Dinosaur");
            var dinosaur = world.getComponentData(dinosaurEntity, game.Dinosaur);
            if (world.hasComponent(dinosaurEntity, game.DinosaurAttack)) {
                world.removeComponent(dinosaurEntity, game.DinosaurAttack);
            }
            game.GameService.setEntityEnabled(world, dinosaur.TailWhipAnimation, false);
            game.GameService.setEntityEnabled(world, dinosaur.StompAnimation, false);
            game.GameService.setEntityEnabled(world, dinosaur.BiteAnimation, false);
            game.GameService.setEntityEnabled(world, dinosaur.CrushAnimation, false);
            game.GameService.setEntityEnabled(world, dinosaur.LaunchAnimation, false);
            game.GameService.setEntityEnabled(world, dinosaur.JumpAnimation, false);
            game.GameService.setEntityEnabled(world, dinosaur.LaserAnimation, false);
            game.GameService.setEntityEnabled(world, dinosaur.LaserBeam1, false);
            game.GameService.setEntityEnabled(world, dinosaur.LaserBeam2, false);
            var isDead = !isObjectiveComplete;
            game.GameService.setEntityEnabled(world, dinosaur.WalkAnimation, !isDead);
            game.GameService.setEntityEnabled(world, dinosaur.DeathAnimation, isDead);
            if (isDead) {
                this.shakeCamera(world, 0.85);
            }
        };
        return DinosaurService;
    }());
    game.DinosaurService = DinosaurService;
})(game || (game = {}));
var game;
(function (game) {
    var PerformDinosaurAttackSystem = /** @class */ (function (_super) {
        __extends(PerformDinosaurAttackSystem, _super);
        function PerformDinosaurAttackSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PerformDinosaurAttackSystem.prototype.OnUpdate = function () {
            var gameState = game.GameService.getGameState(this.world).GameStateType;
            if (!(gameState == game.GameStateTypes.Game || gameState == game.GameStateTypes.Paused)) {
                return;
            }
            var dinosaurEntity = game.DinosaurService.getDinosaurEntity(this.world);
            if (!this.world.hasComponent(dinosaurEntity, game.DinosaurAttack)) {
                return;
            }
            var dinosaur = game.DinosaurService.getDinosaur(this.world);
            var dinosaurAttack = this.world.getComponentData(dinosaurEntity, game.DinosaurAttack);
            var attackTime = dinosaurAttack.Timer;
            var isAttacking = attackTime < game.DinosaurService.getAnimationDuration(dinosaurAttack);
            if (attackTime == 0) {
                game.DinosaurService.startAnimation(this.world, dinosaur, dinosaurAttack);
                dinosaur.DefaultPositionY = this.world.getComponentData(dinosaur.JumpAnimation, ut.Core2D.TransformLocalPosition).position.y;
            }
            // Perform the dinosaur's attack effect (destruction).
            if (!dinosaurAttack.IsDone && attackTime >= game.DinosaurService.getAnimationEffectTime(dinosaurAttack)) {
                game.DinosaurService.performAttack(this.world, dinosaurEntity, dinosaur, dinosaurAttack);
                game.DinosaurService.triggerKidOnBike(this.world, dinosaurEntity);
            }
            // Update the dinosaur laser animation if it's playing.
            if (isAttacking && dinosaurAttack.AttackType == game.DinosaurAttackTypes.Laser) {
                game.DinosaurService.shakeCamera(this.world);
                if (attackTime == 0) {
                    ut.EntityGroup.instantiate(this.world, "game.DinosaurLaserAttackBlackCover");
                }
                var blackCoverEntity = this.world.getEntityByName("DinosaurLaserAttackBlackCover");
                var alphaCurve = this.world.getComponentData(blackCoverEntity, game.DinosaurLaserAttackBlackCover).AlphaCurve;
                var progress = attackTime / game.DinosaurService.getAnimationDuration(dinosaurAttack);
                var alpha = ut.Interpolation.InterpolationService.evaluateCurveFloat(this.world, progress, alphaCurve);
                var childCount = ut.Core2D.TransformService.countChildren(this.world, blackCoverEntity);
                for (var i = 0; i < childCount; i++) {
                    var spriteEntity = ut.Core2D.TransformService.getChild(this.world, blackCoverEntity, i);
                    var spriteRenderer = this.world.getComponentData(spriteEntity, ut.Core2D.Sprite2DRenderer);
                    spriteRenderer.color = new ut.Core2D.Color(spriteRenderer.color.r, spriteRenderer.color.g, spriteRenderer.color.b, alpha * 0.65);
                    this.world.setComponentData(spriteEntity, spriteRenderer);
                }
                var animationSequence = this.world.getComponentData(dinosaur.LaserAnimation, ut.Core2D.Sprite2DSequencePlayer);
                var showLaser = animationSequence.time > game.DinosaurService.getAnimationEffectTime(dinosaurAttack);
                game.GameService.setEntityEnabled(this.world, dinosaur.LaserBeam1, showLaser);
                game.GameService.setEntityEnabled(this.world, dinosaur.LaserBeam2, showLaser);
            }
            attackTime += this.scheduler.deltaTime();
            dinosaurAttack.Timer = attackTime;
            this.world.setComponentData(dinosaurEntity, dinosaurAttack);
            // Update the dinosaur jump position when the jumping animation is playing.
            if (isAttacking && dinosaurAttack.AttackType == game.DinosaurAttackTypes.Jump) {
                var animationProgress = attackTime / game.DinosaurService.getAnimationDuration(dinosaurAttack);
                var heightRatio_1 = ut.Interpolation.InterpolationService.evaluateCurveFloat(this.world, animationProgress, dinosaur.JumpAnimationHeightCurve);
                this.world.usingComponentData(dinosaur.JumpAnimation, [ut.Core2D.TransformLocalPosition], function (jumpAnimationTransform) {
                    var currentHeight = dinosaur.JumpHeight * heightRatio_1;
                    var position = jumpAnimationTransform.position;
                    position.y = dinosaur.DefaultPositionY;
                    position.y += currentHeight;
                    jumpAnimationTransform.position = position;
                });
                var shadowScale_1 = 1 - heightRatio_1;
                this.world.usingComponentData(dinosaur.Shadow, [ut.Core2D.TransformLocalScale], function (scale) {
                    scale.scale = new Vector3(shadowScale_1, shadowScale_1, 1);
                });
            }
            // Stop all animations at the end of the attack and start the walking animation.
            if (!isAttacking) {
                this.world.removeComponent(dinosaurEntity, game.DinosaurAttack);
                game.GameService.setEntityEnabled(this.world, dinosaur.TailWhipAnimation, false);
                game.GameService.setEntityEnabled(this.world, dinosaur.StompAnimation, false);
                game.GameService.setEntityEnabled(this.world, dinosaur.BiteAnimation, false);
                game.GameService.setEntityEnabled(this.world, dinosaur.CrushAnimation, false);
                game.GameService.setEntityEnabled(this.world, dinosaur.LaunchAnimation, false);
                game.GameService.setEntityEnabled(this.world, dinosaur.JumpAnimation, false);
                game.GameService.setEntityEnabled(this.world, dinosaur.LaserAnimation, false);
                game.GameService.setEntityEnabled(this.world, dinosaur.LaserBeam1, false);
                game.GameService.setEntityEnabled(this.world, dinosaur.LaserBeam2, false);
                dinosaur.WalkTimer = 0;
                game.GameService.setEntityEnabled(this.world, dinosaur.WalkAnimation, true);
                this.world.usingComponentData(dinosaur.WalkAnimation, [ut.Core2D.Sprite2DSequencePlayer], function (seqPlayer) { return seqPlayer.time = 0; });
            }
            this.world.setComponentData(dinosaurEntity, dinosaur);
        };
        return PerformDinosaurAttackSystem;
    }(ut.ComponentSystem));
    game.PerformDinosaurAttackSystem = PerformDinosaurAttackSystem;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Find matches in the gem grid and mark matched gems as so.
     */
    var CheckMatchSystem = /** @class */ (function (_super) {
        __extends(CheckMatchSystem, _super);
        function CheckMatchSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CheckMatchSystem.prototype.OnUpdate = function () {
            var _this = this;
            if (game.GridService.isGridFrozen(this.world)) {
                return;
            }
            var grid = game.GridService.getGridConfiguration(this.world);
            var successfulGemSwap = false;
            this.world.forEach([ut.Entity, game.Gem], function (gemEntity, gem) {
                if (_this.isMatchable(gem)) {
                    var leftGemEntity = game.GemService.getNeighborGem(_this.world, grid, gem, -1, 0);
                    var rightGemEntity = game.GemService.getNeighborGem(_this.world, grid, gem, 1, 0);
                    var downGemEntity = game.GemService.getNeighborGem(_this.world, grid, gem, 0, -1);
                    var upGemEntity = game.GemService.getNeighborGem(_this.world, grid, gem, 0, 1);
                    var leftGem = game.GemService.getGemFromEntity(_this.world, leftGemEntity);
                    var rightGem = game.GemService.getGemFromEntity(_this.world, rightGemEntity);
                    var downGem = game.GemService.getGemFromEntity(_this.world, downGemEntity);
                    var upGem = game.GemService.getGemFromEntity(_this.world, upGemEntity);
                    if (_this.isMatchable(leftGem) && _this.isMatchable(rightGem) && gem.GemType == leftGem.GemType && gem.GemType == rightGem.GemType) {
                        game.GemService.addMatchedComponent(_this.world, gemEntity, true);
                        game.GemService.addMatchedComponent(_this.world, leftGemEntity, true);
                        game.GemService.addMatchedComponent(_this.world, rightGemEntity, true);
                        if (_this.world.hasComponent(gemEntity, game.GemSwap) || _this.world.hasComponent(leftGemEntity, game.GemSwap) || _this.world.hasComponent(rightGemEntity, game.GemSwap)) {
                            successfulGemSwap = true;
                        }
                    }
                    else if (_this.isMatchable(downGem) && _this.isMatchable(upGem) && gem.GemType == downGem.GemType && gem.GemType == upGem.GemType) {
                        game.GemService.addMatchedComponent(_this.world, gemEntity, true);
                        game.GemService.addMatchedComponent(_this.world, downGemEntity, true);
                        game.GemService.addMatchedComponent(_this.world, upGemEntity, true);
                        if (_this.world.hasComponent(gemEntity, game.GemSwap) || _this.world.hasComponent(downGemEntity, game.GemSwap) || _this.world.hasComponent(upGemEntity, game.GemSwap)) {
                            successfulGemSwap = true;
                        }
                    }
                }
            });
            if (successfulGemSwap) {
                game.GameService.incrementMoveCounter(this.world);
            }
        };
        CheckMatchSystem.prototype.isMatchable = function (gem) {
            return gem != null && !gem.IsFalling && !gem.IsSwapping && gem.GemType != game.GemTypes.Egg && gem.GemType != game.GemTypes.ColorBomb;
        };
        return CheckMatchSystem;
    }(ut.ComponentSystem));
    game.CheckMatchSystem = CheckMatchSystem;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Swap gems back after an unsuccesful gem swap match attempt.
     */
    var RestoreGemSwapSystem = /** @class */ (function (_super) {
        __extends(RestoreGemSwapSystem, _super);
        function RestoreGemSwapSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RestoreGemSwapSystem.prototype.OnUpdate = function () {
            var _this = this;
            if (game.GridService.isGridFrozen(this.world)) {
                return;
            }
            var gem1HashKey = -1;
            var gem2HashKey = -1;
            // Find if there are 2 gems to swap back.
            this.world.forEach([ut.Entity, game.Gem, game.GemSwap], function (entity, gem, gemSwap) {
                if (gem.IsSwapping) {
                    return;
                }
                if (gem1HashKey == -1) {
                    gem1HashKey = gem.CellHashKey;
                    _this.world.removeComponent(entity, game.GemSwap);
                }
                else if (gem2HashKey == -1) {
                    gem2HashKey = gem.CellHashKey;
                    _this.world.removeComponent(entity, game.GemSwap);
                }
            });
            // Swap gems.
            if (gem1HashKey != -1 && gem2HashKey != -1) {
                var grid = game.GridService.getGridConfiguration(this.world);
                var gemEntity1 = game.GemService.getGemEntity(this.world, grid, gem1HashKey);
                var gem1 = game.GemService.getGem(this.world, grid, gem1HashKey);
                var gemEntity2 = game.GemService.getGemEntity(this.world, grid, gem2HashKey);
                var gem2 = game.GemService.getGem(this.world, grid, gem2HashKey);
                game.GemService.swapGems(this.world, grid, gemEntity1, gem1, gemEntity2, gem2);
                game.GemService.animateGemsSwap(this.world, grid, gemEntity1, gem1, gemEntity2, gem2);
            }
        };
        return RestoreGemSwapSystem;
    }(ut.ComponentSystem));
    game.RestoreGemSwapSystem = RestoreGemSwapSystem;
})(game || (game = {}));
/// <reference path="CheckMatchSystem.ts" />
/// <reference path="RestoreGemSwapSystem.ts" />
var game;
(function (game) {
    var ActivateGemPowerUpSystem = /** @class */ (function (_super) {
        __extends(ActivateGemPowerUpSystem, _super);
        function ActivateGemPowerUpSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ActivateGemPowerUpSystem_1 = ActivateGemPowerUpSystem;
        ActivateGemPowerUpSystem.prototype.OnUpdate = function () {
            if (game.GameService.getGameState(this.world).GameStateType != game.GameStateTypes.Game) {
                return;
            }
            var grid = game.GridService.getGridConfiguration(this.world);
            ActivateGemPowerUpSystem_1.sameColorBombTriggeredThisFrame = false;
            var deltaTime = this.scheduler.deltaTime();
            if (grid.FrozenGridTimer > 0) {
                grid.FrozenGridTimer -= deltaTime;
                this.world.setConfigData(grid);
            }
            else {
                this.activeSameColorBombAfterSwap(grid);
                this.activateMatchedBombs(grid);
            }
        };
        ActivateGemPowerUpSystem.prototype.activeSameColorBombAfterSwap = function (grid) {
            var _this = this;
            var swapedGemEntities = new Array();
            this.world.forEach([ut.Entity, game.Gem, game.GemSwap], function (entity, gem, swaped) {
                if (!gem.IsSwapping) {
                    var gridGemEntity = game.GemService.getGemEntity(_this.world, grid, gem.CellHashKey);
                    var gridGem = game.GemService.getGem(_this.world, grid, gem.CellHashKey);
                    if (gridGem != null && !gridGem.IsSwapping) {
                        swapedGemEntities.push(gridGemEntity);
                    }
                }
            });
            if (swapedGemEntities.length != 2) {
                return;
            }
            var gem1 = game.GemService.getGemFromEntity(this.world, swapedGemEntities[0]);
            var gem2 = game.GemService.getGemFromEntity(this.world, swapedGemEntities[1]);
            if (gem1.PowerUp == game.GemPowerUpTypes.SameColor || gem2.PowerUp == game.GemPowerUpTypes.SameColor) {
                var bombGemEntity = gem1.PowerUp == game.GemPowerUpTypes.SameColor ? swapedGemEntities[0] : swapedGemEntities[1];
                var otherGemEntity = gem1.PowerUp == game.GemPowerUpTypes.SameColor ? swapedGemEntities[1] : swapedGemEntities[0];
                var bombGem = gem1.PowerUp == game.GemPowerUpTypes.SameColor ? gem1 : gem2;
                var otherGem_1 = gem1.PowerUp == game.GemPowerUpTypes.SameColor ? gem2 : gem1;
                var bombGemPosition_1 = game.GridService.getPositionFromCellHashCode(grid, bombGem.CellHashKey);
                if (otherGem_1.PowerUp != game.GemPowerUpTypes.SameColor && otherGem_1.GemType != game.GemTypes.Egg) {
                    if (!this.world.hasComponent(otherGemEntity, game.Matched)) {
                        game.GameService.incrementMoveCounter(this.world);
                    }
                    ActivateGemPowerUpSystem_1.sameColorBombTriggeredThisFrame = true;
                    this.addMatchedComponent(bombGemEntity);
                    var bombGemSpriteLayerSorting = this.world.getComponentData(bombGemEntity, ut.Core2D.LayerSorting);
                    bombGemSpriteLayerSorting.order = 1000;
                    this.world.setComponentData(bombGemEntity, bombGemSpriteLayerSorting);
                    var bombGemPowerUpSpriteLayerSorting = this.world.getComponentData(bombGem.SameColorPowerUpVisual, ut.Core2D.LayerSorting);
                    bombGemPowerUpSpriteLayerSorting.order = 1001;
                    this.world.setComponentData(bombGem.SameColorPowerUpVisual, bombGemPowerUpSpriteLayerSorting);
                    game.SoundService.play(this.world, "Slash");
                    game.GridService.getGridConfiguration(this.world).GemEntities.forEach(function (gemEntity) {
                        if (_this.world.exists(gemEntity)) {
                            var gem = _this.world.getComponentData(gemEntity, game.Gem);
                            var gemPosition = game.GridService.getPositionFromCellHashCode(grid, gem.CellHashKey);
                            if (gem.GemType == otherGem_1.GemType) {
                                _this.destroyGem(grid, gemEntity, false);
                                var startPosition = game.GridService.getGridToWorldPosition(grid, bombGemPosition_1.x, bombGemPosition_1.y);
                                var endPosition = game.GridService.getGridToWorldPosition(grid, gemPosition.x, gemPosition.y);
                                _this.spawnDestroyLaserAnimation(startPosition.x, startPosition.y, endPosition.x, endPosition.y);
                            }
                        }
                    });
                }
            }
            else if (gem1.PowerUp != game.GemPowerUpTypes.None && gem2.PowerUp != game.GemPowerUpTypes.None) {
                // If two power ups are swaped together, they are both triggered.
                this.addMatchedComponent(swapedGemEntities[0]);
                this.addMatchedComponent(swapedGemEntities[1]);
            }
        };
        ActivateGemPowerUpSystem.prototype.activateMatchedBombs = function (grid) {
            var _this = this;
            var bombGems = new Array();
            this.world.forEach([ut.Entity, game.Gem, game.Matched], function (entity, gem, matched) {
                if (gem.PowerUp != game.GemPowerUpTypes.None && gem.PowerUp != game.GemPowerUpTypes.SameColor) {
                    bombGems.push(game.GemService.getGem(_this.world, grid, gem.CellHashKey));
                }
            });
            var bombTriggered = false;
            bombGems.forEach(function (gem) {
                bombTriggered = _this.activateBomb(grid, gem) || bombTriggered;
            });
            if (bombTriggered && grid.FrozenGridTimer < 0.3 && !ActivateGemPowerUpSystem_1.sameColorBombTriggeredThisFrame) {
                grid.FrozenGridTimer = 0.35;
                this.world.setConfigData(grid);
            }
        };
        ActivateGemPowerUpSystem.prototype.activateBomb = function (grid, gem) {
            var gemPosition = game.GridService.getPositionFromCellHashCode(grid, gem.CellHashKey);
            switch (gem.PowerUp) {
                case game.GemPowerUpTypes.Row: {
                    for (var i = 0; i < grid.Width; i++) {
                        this.destroyGem(grid, game.GemService.getGemEntityAtPosition(this.world, grid, i, gemPosition.y), true);
                    }
                    var startPosition = game.GridService.getGridToWorldPosition(grid, 0, gemPosition.y);
                    var endPosition = game.GridService.getGridToWorldPosition(grid, grid.Width - 1, gemPosition.y);
                    this.spawnDestroyLineAnimation(startPosition.x, startPosition.y, endPosition.x, endPosition.y);
                    game.SoundService.play(this.world, "Slash");
                    return true;
                }
                case game.GemPowerUpTypes.Column: {
                    for (var j = 0; j < grid.Height; j++) {
                        this.destroyGem(grid, game.GemService.getGemEntityAtPosition(this.world, grid, gemPosition.x, j), true);
                    }
                    var startPosition = game.GridService.getGridToWorldPosition(grid, gemPosition.x, 0);
                    var endPosition = game.GridService.getGridToWorldPosition(grid, gemPosition.x, grid.Height - 1);
                    this.spawnDestroyLineAnimation(startPosition.x, startPosition.y, endPosition.x, endPosition.y);
                    game.SoundService.play(this.world, "Slash");
                    return true;
                }
                case game.GemPowerUpTypes.Square: {
                    this.destroyGem(grid, game.GemService.getNeighborGem(this.world, grid, gem, -1, 1), true);
                    this.destroyGem(grid, game.GemService.getNeighborGem(this.world, grid, gem, -1, 0), true);
                    this.destroyGem(grid, game.GemService.getNeighborGem(this.world, grid, gem, -1, -1), true);
                    this.destroyGem(grid, game.GemService.getNeighborGem(this.world, grid, gem, 0, 1), true);
                    this.destroyGem(grid, game.GemService.getNeighborGem(this.world, grid, gem, 0, -1), true);
                    this.destroyGem(grid, game.GemService.getNeighborGem(this.world, grid, gem, 1, 1), true);
                    this.destroyGem(grid, game.GemService.getNeighborGem(this.world, grid, gem, 1, 0), true);
                    this.destroyGem(grid, game.GemService.getNeighborGem(this.world, grid, gem, 1, -1), true);
                    var startPositionLeft = game.GridService.getGridToWorldPosition(grid, gemPosition.x - 1, gemPosition.y + 1);
                    var endPositionLeft = game.GridService.getGridToWorldPosition(grid, gemPosition.x - 1, gemPosition.y - 1);
                    var startPositionRight = game.GridService.getGridToWorldPosition(grid, gemPosition.x + 1, gemPosition.y + 1);
                    var endPositionRight = game.GridService.getGridToWorldPosition(grid, gemPosition.x + 1, gemPosition.y - 1);
                    this.spawnDestroyLineAnimation(startPositionLeft.x, startPositionLeft.y + 10, endPositionLeft.x + 5, endPositionLeft.y - 10);
                    this.spawnDestroyLineAnimation(startPositionRight.x, startPositionRight.y + 10, endPositionRight.x - 5, endPositionRight.y - 10);
                    game.SoundService.play(this.world, "Slash");
                    return true;
                }
                case game.GemPowerUpTypes.DiagonalCross: {
                    for (var i = 0; i < grid.Width; i++) {
                        this.destroyGem(grid, game.GemService.getGemEntityAtPosition(this.world, grid, i, gemPosition.y + gemPosition.x - i), true);
                    }
                    for (var i = 0; i < grid.Width; i++) {
                        this.destroyGem(grid, game.GemService.getGemEntityAtPosition(this.world, grid, i, gemPosition.y + i - gemPosition.x), true);
                    }
                    var startPosition1 = this.findDiagonalEnd(grid, new Vector2(gemPosition.x, gemPosition.y), new Vector2(-1, -1));
                    var endPosition1 = this.findDiagonalEnd(grid, new Vector2(gemPosition.x, gemPosition.y), new Vector2(1, 1));
                    var startPosition2 = this.findDiagonalEnd(grid, new Vector2(gemPosition.x, gemPosition.y), new Vector2(-1, 1));
                    var endPosition2 = this.findDiagonalEnd(grid, new Vector2(gemPosition.x, gemPosition.y), new Vector2(1, -1));
                    this.spawnDestroyLineAnimation(startPosition1.x, startPosition1.y, endPosition1.x, endPosition1.y);
                    this.spawnDestroyLineAnimation(startPosition2.x, startPosition2.y, endPosition2.x, endPosition2.y);
                    game.SoundService.play(this.world, "Slash");
                    return true;
                }
            }
            return false;
        };
        ActivateGemPowerUpSystem.prototype.findDiagonalEnd = function (grid, current, direction) {
            if (current.x == 0 || current.x == grid.Width - 1 || current.y == 0 || current.y == grid.Height - 1) {
                var worldPositon = game.GridService.getGridToWorldPosition(grid, current.x, current.y);
                return new Vector2(worldPositon.x, worldPositon.y);
            }
            else {
                return this.findDiagonalEnd(grid, new Vector2(current.x + direction.x, current.y + direction.y), direction);
            }
        };
        ActivateGemPowerUpSystem.prototype.destroyGem = function (grid, gemEntity, triggerBomb) {
            var gem = game.GemService.getGemFromEntity(this.world, gemEntity);
            if (gem != null && gem.GemType != game.GemTypes.Egg && gem.GemType != game.GemTypes.ColorBomb) {
                var hadComponent = this.world.hasComponent(gemEntity, game.Matched);
                this.addMatchedComponent(gemEntity);
                if (triggerBomb && !hadComponent) {
                    this.activateBomb(grid, gem);
                }
            }
        };
        ActivateGemPowerUpSystem.prototype.addMatchedComponent = function (gemEntity) {
            if (!this.world.hasComponent(gemEntity, game.Matched)) {
                var matched = new game.Matched();
                matched.CreatedPowerUp = game.GemPowerUpTypes.None;
                this.world.addComponentData(gemEntity, matched);
            }
        };
        ActivateGemPowerUpSystem.prototype.spawnDestroyLineAnimation = function (startPositionX, startPositionY, endPositionX, endPositionY) {
            var entity = ut.EntityGroup.instantiate(this.world, "game.DestroyLineAnimation")[0];
            var destroyLineAnimation = this.world.getComponentData(entity, game.DestroyLineAnimation);
            destroyLineAnimation.StartPositionX = startPositionX;
            destroyLineAnimation.StartPositionY = startPositionY;
            destroyLineAnimation.EndPositionX = endPositionX;
            destroyLineAnimation.EndPositionY = endPositionY;
            this.world.setComponentData(entity, destroyLineAnimation);
        };
        ActivateGemPowerUpSystem.prototype.spawnDestroyLaserAnimation = function (startPositionX, startPositionY, endPositionX, endPositionY) {
            var entity = ut.EntityGroup.instantiate(this.world, "game.DestroyLaserAnimation")[0];
            var destroyLaserAnimation = this.world.getComponentData(entity, game.DestroyLaserAnimation);
            destroyLaserAnimation.StartPositionX = startPositionX;
            destroyLaserAnimation.StartPositionY = startPositionY;
            destroyLaserAnimation.EndPositionX = endPositionX;
            destroyLaserAnimation.EndPositionY = endPositionY;
            this.world.setComponentData(entity, destroyLaserAnimation);
        };
        var ActivateGemPowerUpSystem_1;
        ActivateGemPowerUpSystem.sameColorBombTriggeredThisFrame = false;
        ActivateGemPowerUpSystem = ActivateGemPowerUpSystem_1 = __decorate([
            ut.executeAfter(game.CheckMatchSystem),
            ut.executeBefore(game.RestoreGemSwapSystem)
        ], ActivateGemPowerUpSystem);
        return ActivateGemPowerUpSystem;
    }(ut.ComponentSystem));
    game.ActivateGemPowerUpSystem = ActivateGemPowerUpSystem;
})(game || (game = {}));
/// <reference path="ActivateGemPowerUpSystem.ts" />
var game;
(function (game) {
    /**
     * Update the player's score after a gem match.
     */
    var UpdateScoreSystem = /** @class */ (function (_super) {
        __extends(UpdateScoreSystem, _super);
        function UpdateScoreSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UpdateScoreSystem.prototype.OnUpdate = function () {
            if (game.GameService.getGameState(this.world).GameStateType != game.GameStateTypes.Game || game.GridService.isGridFrozen(this.world)) {
                return;
            }
            var matchedGemCount = 0;
            var gemPositionSum = new Vector2();
            this.world.forEach([ut.Entity, game.Gem, game.Matched, ut.Core2D.TransformLocalPosition], function (entity, gemToDestroy, matched, transformPosition) {
                matchedGemCount++;
                gemPositionSum.x += transformPosition.position.x;
                gemPositionSum.y += transformPosition.position.y;
            });
            if (matchedGemCount <= 0) {
                return;
            }
            // Update current score.
            var gameState = game.GameService.getGameState(this.world);
            var scoreUnitCount = Math.max(1, matchedGemCount - 2);
            var scoreGain = scoreUnitCount * 25;
            gameState.CurrentScore += scoreGain;
            this.world.setComponentData(game.GameService.gameStateEntity, gameState);
            // Spawn floating score gain label.
            gemPositionSum.x = gemPositionSum.x / matchedGemCount;
            gemPositionSum.y = gemPositionSum.y / matchedGemCount;
            this.spawnScoreGainLabel(gemPositionSum, scoreUnitCount, scoreGain);
            // Update survival mode timer.
            var levelEntity = game.GameService.getCurrentLevelEntity(this.world);
            if (this.world.hasComponent(levelEntity, game.LevelSurvival)) {
                var levelSurvival = this.world.getComponentData(levelEntity, game.LevelSurvival);
                var difficultyRatio = Math.min(1, gameState.Time / levelSurvival.DifficulyRampUpTime);
                var timeGain = levelSurvival.EndTimeGainByMatch + (1 - difficultyRatio) * (levelSurvival.StartTimeGainByMatch - levelSurvival.EndTimeGainByMatch);
                levelSurvival.SurvivalTimer += scoreUnitCount * timeGain;
                levelSurvival.SurvivalTimer = Math.max(0, Math.min(levelSurvival.MaxSurvivalTime, levelSurvival.SurvivalTimer));
                this.world.setComponentData(levelEntity, levelSurvival);
            }
        };
        UpdateScoreSystem.prototype.spawnScoreGainLabel = function (position, scoreUnitCount, scoreGain) {
            var scoreGainEntity = ut.EntityGroup.instantiate(this.world, "game.ScoreGainLabel")[0];
            var scoreGainTransform = this.world.getComponentData(scoreGainEntity, ut.Core2D.TransformLocalPosition);
            scoreGainTransform.position.x = position.x;
            scoreGainTransform.position.y = position.y + 26;
            this.world.setComponentData(scoreGainEntity, scoreGainTransform);
            var label = this.world.getComponentData(scoreGainEntity, ut.Text.Text2DRenderer);
            label.text = String(scoreGain);
            this.world.setComponentData(scoreGainEntity, label);
            var transformScale = this.world.getComponentData(scoreGainEntity, ut.Core2D.TransformLocalScale);
            var scale = Math.min(4, 1.8 + (scoreUnitCount - 1) * 0.12);
            transformScale.scale = new Vector3(scale, scale, 1);
            this.world.setComponentData(scoreGainEntity, transformScale);
        };
        UpdateScoreSystem = __decorate([
            ut.executeAfter(game.ActivateGemPowerUpSystem)
        ], UpdateScoreSystem);
        return UpdateScoreSystem;
    }(ut.ComponentSystem));
    game.UpdateScoreSystem = UpdateScoreSystem;
})(game || (game = {}));
var game;
(function (game) {
    var CollectEggSystem = /** @class */ (function (_super) {
        __extends(CollectEggSystem, _super);
        function CollectEggSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CollectEggSystem.prototype.OnUpdate = function () {
            var _this = this;
            if (game.GameService.getGameState(this.world).GameStateType != game.GameStateTypes.Game) {
                return;
            }
            var levelEntity = game.GameService.getCurrentLevelEntity(this.world);
            if (!this.world.hasComponent(levelEntity, game.LevelEggObjective)) {
                return;
            }
            var levelEggObjective = this.world.getComponentData(levelEntity, game.LevelEggObjective);
            var matchedCount = 0;
            this.world.forEach([ut.Entity, game.Gem, game.Matched], function (entity, gem, matched) {
                matchedCount++;
            });
            var gemSwapCount = 0;
            this.world.forEach([ut.Entity, game.Gem, game.GemSwap], function (entity, gem, gemSwap) {
                gemSwapCount++;
            });
            var grid = game.GridService.getGridConfiguration(this.world);
            var collectedEggCount = 0;
            if (matchedCount == 0 && gemSwapCount == 0) {
                this.world.forEach([ut.Entity, game.Gem, ut.Core2D.TransformLocalPosition], function (entity, gem, transformPosition) {
                    var gemPosition = game.GridService.getPositionFromCellHashCode(grid, gem.CellHashKey);
                    if (gem.GemType == game.GemTypes.Egg && gemPosition.y == 0 && !gem.IsFalling && !gem.IsSwapping) {
                        game.GemService.addMatchedComponent(_this.world, entity, false);
                        levelEggObjective.CollectedEggs++;
                        _this.world.setComponentData(levelEntity, levelEggObjective);
                        // Spawn gain egg currency particle
                        {
                            var gameUI = _this.world.getComponentData(_this.world.getEntityByName("GameUI"), game.GameUI);
                            var destinationPosition = ut.Core2D.TransformService.computeWorldPosition(_this.world, gameUI.ImageObjectiveEgg);
                            var collectedEggEntity = ut.EntityGroup.instantiate(_this.world, "game.CollectedEgg")[0];
                            var collectedEggCurrency = _this.world.getComponentData(collectedEggEntity, game.CollectedCurrency);
                            collectedEggCurrency.StartPosition = transformPosition.position;
                            collectedEggCurrency.MidPosition = new Vector3(-100, 0, 0);
                            collectedEggCurrency.EndPosition = destinationPosition;
                            collectedEggCurrency.StartDelay = collectedEggCount * 0.2;
                            _this.world.setComponentData(collectedEggEntity, collectedEggCurrency);
                            var collectedEggTransformPosition = _this.world.getComponentData(collectedEggEntity, ut.Core2D.TransformLocalPosition);
                            collectedEggTransformPosition.position = transformPosition.position;
                            _this.world.setComponentData(collectedEggEntity, collectedEggTransformPosition);
                        }
                        collectedEggCount++;
                    }
                });
            }
        };
        CollectEggSystem = __decorate([
            ut.executeAfter(game.ActivateGemPowerUpSystem)
        ], CollectEggSystem);
        return CollectEggSystem;
    }(ut.ComponentSystem));
    game.CollectEggSystem = CollectEggSystem;
})(game || (game = {}));
/// <reference path="CollectEggSystem.ts" />
var game;
(function (game) {
    var DeleteMatchedGemSystem = /** @class */ (function (_super) {
        __extends(DeleteMatchedGemSystem, _super);
        function DeleteMatchedGemSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DeleteMatchedGemSystem.prototype.OnUpdate = function () {
            var _this = this;
            var grid = game.GridService.getGridConfiguration(this.world);
            if (game.GridService.isGridFrozen(this.world)) {
                return;
            }
            var matchedGemCount = 0;
            this.world.forEach([ut.Entity, game.Gem, game.Matched], function (entity, gemToDestroy, matched) {
                // Do not destroy gem if it was just turned into a power up from a match combo.
                if (matched.CreatedPowerUp == game.GemPowerUpTypes.None) {
                    game.GemService.deleteGem(_this.world, grid, entity, gemToDestroy);
                }
                else {
                    _this.world.removeComponent(entity, game.Matched);
                }
                matchedGemCount++;
            });
            if (matchedGemCount <= 0) {
                return;
            }
            game.SoundService.play(this.world, "MatchSound");
            // Make existing gems fall to fill the gap left by the destroyed gems.    
            for (var i = 0; i < grid.Width; i++) {
                var fallOffset = 0;
                for (var j = 0; j < grid.Height; j++) {
                    var gemEntity = game.GemService.getGemEntityAtPosition(this.world, grid, i, j);
                    var gem = game.GemService.getGemFromEntity(this.world, gemEntity);
                    if (gem == null) {
                        fallOffset++;
                    }
                    else {
                        if (this.world.hasComponent(gemEntity, game.MatchPossibility)) {
                            this.world.removeComponent(gemEntity, game.MatchPossibility);
                        }
                        var lastCellHashKey = gem.CellHashKey;
                        var currentCellHashKey = game.GridService.getCellHashCode(grid, i, j - fallOffset);
                        if (currentCellHashKey != lastCellHashKey) {
                            game.GemService.setGem(this.world, grid, lastCellHashKey, null);
                            gem.CellHashKey = currentCellHashKey;
                            this.world.setComponentData(gemEntity, gem);
                            game.GemService.setGem(this.world, grid, currentCellHashKey, gemEntity);
                            game.GemService.animateGemFall(this.world, grid, gemEntity, gem, fallOffset);
                        }
                    }
                }
            }
            this.world.forEach([ut.Entity, game.Gem, game.GemSwap], function (entity, gem, swap) {
                _this.world.removeComponent(entity, game.GemSwap);
            });
        };
        DeleteMatchedGemSystem = __decorate([
            ut.executeAfter(game.CollectEggSystem),
            ut.executeBefore(game.RestoreGemSwapSystem)
        ], DeleteMatchedGemSystem);
        return DeleteMatchedGemSystem;
    }(ut.ComponentSystem));
    game.DeleteMatchedGemSystem = DeleteMatchedGemSystem;
})(game || (game = {}));
/// <reference path="UpdateScoreSystem.ts" />
/// <reference path="DeleteMatchedGemSystem.ts" />
var game;
(function (game) {
    /**
     * Spawn special gem bomb power up after the player makes a special match (4-match, 5-match, T-match and L-match).
     */
    var SpawnComboPowerUpSystem = /** @class */ (function (_super) {
        __extends(SpawnComboPowerUpSystem, _super);
        function SpawnComboPowerUpSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpawnComboPowerUpSystem.prototype.OnUpdate = function () {
            var _this = this;
            var grid = game.GridService.getGridConfiguration(this.world);
            if (game.GridService.isGridFrozen(this.world)) {
                return;
            }
            var gemSwapCount = 0;
            this.world.forEach([ut.Entity, game.Gem, game.Matched, game.GemSwap], function (gemEntity, gem, matched, swap) {
                // Swaped matched gems will turn into a gem power up if a match combo was made 
                gemSwapCount++;
                var gemPosition = game.GridService.getPositionFromCellHashCode(grid, gem.CellHashKey);
                var leftStretch = _this.calculateStretch(grid, gemEntity, gem, new Vector2(gemPosition.x, gemPosition.y), new Vector2(-1, 0));
                var rightStretch = _this.calculateStretch(grid, gemEntity, gem, new Vector2(gemPosition.x, gemPosition.y), new Vector2(1, 0));
                var upStretch = _this.calculateStretch(grid, gemEntity, gem, new Vector2(gemPosition.x, gemPosition.y), new Vector2(0, 1));
                var downStretch = _this.calculateStretch(grid, gemEntity, gem, new Vector2(gemPosition.x, gemPosition.y), new Vector2(0, -1));
                var createdPowerUp = game.GemPowerUpTypes.None;
                // 5 in a line
                if (leftStretch + rightStretch == 4 || upStretch + downStretch == 4) {
                    createdPowerUp = game.GemPowerUpTypes.SameColor;
                }
                // L shape
                else if ((leftStretch == 2 && upStretch == 2) || (upStretch == 2 && rightStretch == 2) ||
                    (rightStretch == 2 && downStretch == 2) || (downStretch == 2 && leftStretch == 2)) {
                    createdPowerUp = game.GemPowerUpTypes.Square;
                }
                // T shape
                else if (leftStretch + rightStretch + downStretch + upStretch == 4) {
                    createdPowerUp = game.GemPowerUpTypes.DiagonalCross;
                }
                // 4 in a row
                else if (leftStretch + rightStretch == 3) {
                    createdPowerUp = game.GemPowerUpTypes.Row;
                }
                // 4 in a column
                else if (upStretch + downStretch == 3) {
                    createdPowerUp = game.GemPowerUpTypes.Column;
                }
                matched.CreatedPowerUp = createdPowerUp;
                if (createdPowerUp != game.GemPowerUpTypes.None) {
                    gemSwapCount++;
                    game.GemService.setGemPowerUp(_this.world, gemEntity, gem, createdPowerUp);
                }
            });
            if (gemSwapCount > 0) {
                return;
            }
            this.world.forEach([ut.Entity, game.Gem, game.Matched], function (gemEntity, gem, matched) {
                var isGemSwap = _this.world.hasComponent(gemEntity, game.GemSwap);
                if (!isGemSwap) {
                    // Falling gem cascade (not triggered by player swap) can also trigger power up creation.
                    var gemPosition = game.GridService.getPositionFromCellHashCode(grid, gem.CellHashKey);
                    var leftStretch = _this.calculateStretch(grid, gemEntity, gem, new Vector2(gemPosition.x, gemPosition.y), new Vector2(-1, 0));
                    var rightStretch = _this.calculateStretch(grid, gemEntity, gem, new Vector2(gemPosition.x, gemPosition.y), new Vector2(1, 0));
                    var upStretch = _this.calculateStretch(grid, gemEntity, gem, new Vector2(gemPosition.x, gemPosition.y), new Vector2(0, 1));
                    var downStretch = _this.calculateStretch(grid, gemEntity, gem, new Vector2(gemPosition.x, gemPosition.y), new Vector2(0, -1));
                    var createdPowerUp = game.GemPowerUpTypes.None;
                    // 5 in a line
                    if (rightStretch == 4 || upStretch == 4) {
                        createdPowerUp = game.GemPowerUpTypes.SameColor;
                    }
                    // L shape
                    else if ((leftStretch == 2 && upStretch == 2) || (upStretch == 2 && rightStretch == 2) ||
                        (rightStretch == 2 && downStretch == 2) || (downStretch == 2 && leftStretch == 2)) {
                        createdPowerUp = game.GemPowerUpTypes.Square;
                    }
                    // T shape
                    else if (leftStretch == 1 && rightStretch == 1 && downStretch == 2) {
                        createdPowerUp = game.GemPowerUpTypes.DiagonalCross;
                    }
                    else if (leftStretch == 1 && rightStretch == 1 && upStretch == 2) {
                        createdPowerUp = game.GemPowerUpTypes.DiagonalCross;
                    }
                    else if (downStretch == 1 && upStretch == 1 && leftStretch == 2) {
                        createdPowerUp = game.GemPowerUpTypes.DiagonalCross;
                    }
                    else if (downStretch == 1 && upStretch == 1 && rightStretch == 2) {
                        createdPowerUp = game.GemPowerUpTypes.DiagonalCross;
                    }
                    // 4 in a row
                    else if (rightStretch == 3) {
                        createdPowerUp = game.GemPowerUpTypes.Row;
                    }
                    // 4 in a column
                    else if (upStretch == 3) {
                        createdPowerUp = game.GemPowerUpTypes.Column;
                    }
                    matched.CreatedPowerUp = createdPowerUp;
                    if (createdPowerUp != game.GemPowerUpTypes.None) {
                        game.GemService.setGemPowerUp(_this.world, gemEntity, gem, createdPowerUp);
                    }
                }
            });
        };
        SpawnComboPowerUpSystem.prototype.calculateStretch = function (grid, gemEntity, gem, origin, direction) {
            var count = 0;
            var currentPosition = new Vector2(origin.x + direction.x, origin.y + direction.y);
            for (var i = 0; i < grid.Width; i++) {
                var currentGem = game.GemService.getGemAtPosition(this.world, grid, currentPosition.x, currentPosition.y);
                if (currentGem != null && currentGem.GemType == gem.GemType) {
                    currentPosition = new Vector2(currentPosition.x + direction.x, currentPosition.y + direction.y);
                    count++;
                }
                else {
                    break;
                }
            }
            return count;
        };
        SpawnComboPowerUpSystem = __decorate([
            ut.executeAfter(game.UpdateScoreSystem),
            ut.executeBefore(game.DeleteMatchedGemSystem),
            ut.executeBefore(game.RestoreGemSwapSystem)
        ], SpawnComboPowerUpSystem);
        return SpawnComboPowerUpSystem;
    }(ut.ComponentSystem));
    game.SpawnComboPowerUpSystem = SpawnComboPowerUpSystem;
})(game || (game = {}));
/// <reference path="../Gem/ActivateGemPowerUpSystem.ts" />
/// <reference path="../Gem/SpawnComboPowerUpSystem.ts" />
var game;
(function (game) {
    /**
     * When the player makes a match, the dinosaur performs an attack.
     */
    var TriggerDinosaurAttackSystem = /** @class */ (function (_super) {
        __extends(TriggerDinosaurAttackSystem, _super);
        function TriggerDinosaurAttackSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TriggerDinosaurAttackSystem.prototype.OnUpdate = function () {
            var _this = this;
            var matchedGemType = -1;
            this.world.forEach([ut.Entity, game.Gem, game.Matched, game.GemSwap], function (entity, gemToDestroy, matched, swaped) {
                if ((matched.IsMatch && matchedGemType != game.GemTypes.ColorBomb) ||
                    (gemToDestroy.GemType == game.GemTypes.ColorBomb && matched.CreatedPowerUp == game.GemPowerUpTypes.None)) {
                    matchedGemType = gemToDestroy.GemType;
                }
            });
            if (matchedGemType == -1 || game.GridService.isGridFrozen(this.world)) {
                return;
            }
            this.world.forEach([ut.Entity, game.Dinosaur], function (entity, dinosaur) {
                if (_this.world.hasComponent(entity, game.DinosaurAttack)) {
                    return;
                }
                var dinosaurAttack = new game.DinosaurAttack;
                dinosaurAttack.AttackType = matchedGemType == game.GemTypes.ColorBomb ? game.DinosaurAttackTypes.Laser : matchedGemType;
                _this.world.addComponentData(entity, dinosaurAttack);
            });
        };
        TriggerDinosaurAttackSystem = __decorate([
            ut.executeAfter(game.ActivateGemPowerUpSystem),
            ut.executeBefore(game.SpawnComboPowerUpSystem)
        ], TriggerDinosaurAttackSystem);
        return TriggerDinosaurAttackSystem;
    }(ut.ComponentSystem));
    game.TriggerDinosaurAttackSystem = TriggerDinosaurAttackSystem;
})(game || (game = {}));
var game;
(function (game) {
    var MoveHelicopterSystem = /** @class */ (function (_super) {
        __extends(MoveHelicopterSystem, _super);
        function MoveHelicopterSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MoveHelicopterSystem.prototype.OnUpdate = function () {
            var deltaTime = this.scheduler.deltaTime();
            this.world.forEach([game.Helicopter, ut.Core2D.TransformLocalPosition], function (helicopter, localPosition) {
                var currentPosition = localPosition.position;
                if (helicopter.ReachedDestination) {
                    // Hover on place in a ∞ pattern.
                    helicopter.Timer += deltaTime;
                    var moveRadius = 4;
                    var cycleDuration = 7;
                    var progress = ((helicopter.Timer % cycleDuration) / cycleDuration + 0.25) * (2 * Math.PI);
                    var offsetPosition = new Vector3(moveRadius * 2 * Math.cos(progress), moveRadius * Math.sin(2 * progress), 0);
                    currentPosition.x = helicopter.DestinationPositionX + offsetPosition.x;
                    currentPosition.y = helicopter.DestinationPositionY + offsetPosition.y;
                }
                else {
                    // Move to destination.
                    var distanceToDestination = currentPosition.distanceTo(new Vector3(helicopter.DestinationPositionX, helicopter.DestinationPositionY, 0));
                    var moveVector = new Vector3(helicopter.DestinationPositionX - currentPosition.x, helicopter.DestinationPositionY - currentPosition.y, 0);
                    moveVector = moveVector.normalize();
                    var speedRatio = 1;
                    if (distanceToDestination < helicopter.SlowDownDistance)
                        speedRatio = distanceToDestination / helicopter.SlowDownDistance;
                    var speed = helicopter.MoveSpeed * Math.max(0.2, speedRatio);
                    currentPosition.x += moveVector.x * deltaTime * speed;
                    currentPosition.y += moveVector.y * deltaTime * speed;
                    helicopter.ReachedDestination = distanceToDestination < 0.5;
                }
                localPosition.position = currentPosition;
            });
        };
        return MoveHelicopterSystem;
    }(ut.ComponentSystem));
    game.MoveHelicopterSystem = MoveHelicopterSystem;
})(game || (game = {}));
var game;
(function (game) {
    var MovePeopleSystem = /** @class */ (function (_super) {
        __extends(MovePeopleSystem, _super);
        function MovePeopleSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MovePeopleSystem.prototype.OnUpdate = function () {
            var _this = this;
            var dinosaurEntity = game.DinosaurService.getDinosaurEntity(this.world);
            if (!this.world.exists(dinosaurEntity)) {
                return;
            }
            var dinosaurPosition = this.world.getComponentData(dinosaurEntity, ut.Core2D.TransformLocalPosition).position;
            var deltaTime = this.scheduler.deltaTime();
            this.world.forEach([game.Person, ut.Core2D.TransformLocalPosition], function (person, transformPosition) {
                if (person.State == game.PersonState.Appear) {
                    var position = transformPosition.position;
                    position.y -= deltaTime * person.MoveSpeed;
                    if (position.y <= person.WalkPositionY) {
                        position.y = person.WalkPositionY;
                        person.State = game.PersonState.Fire;
                    }
                    transformPosition.position = position;
                }
                else if (person.State == game.PersonState.Fire) {
                    if (transformPosition.position.x < dinosaurPosition.x + person.MinimumDistanceFromDinosaur) {
                        person.State = game.PersonState.Walk;
                    }
                }
                else if (person.State == game.PersonState.Walk) {
                    var fearSpeedMultiplier = (transformPosition.position.x < dinosaurPosition.x + person.MinimumDistanceFromDinosaur) ? person.FearSpeedMultiplier : 1;
                    var position = transformPosition.position;
                    position.x += deltaTime * person.MoveSpeed * person.MoveSpeedMultiplier * fearSpeedMultiplier;
                    transformPosition.position = position;
                    if (transformPosition.position.x > dinosaurPosition.x + person.MaximumDistanceFromDinosaur) {
                        person.State = game.PersonState.Fire;
                    }
                }
                game.GameService.setEntityEnabled(_this.world, person.WalkAnimation, person.State == game.PersonState.Walk || person.State == game.PersonState.Appear);
                game.GameService.setEntityEnabled(_this.world, person.FireAnimation, person.State == game.PersonState.Fire);
            });
        };
        return MovePeopleSystem;
    }(ut.ComponentSystem));
    game.MovePeopleSystem = MovePeopleSystem;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * When the dinosaur moves, it doesn't. Instead, every active ScrollingObject do.
     */
    var MoveScrollingObjectSystem = /** @class */ (function (_super) {
        __extends(MoveScrollingObjectSystem, _super);
        function MoveScrollingObjectSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MoveScrollingObjectSystem.prototype.OnUpdate = function () {
            var _this = this;
            if (!(game.GameService.getGameState(this.world).GameStateType == game.GameStateTypes.Game
                || game.GameService.getGameState(this.world).GameStateType == game.GameStateTypes.Paused
                || game.GameService.getGameState(this.world).GameStateType == game.GameStateTypes.GameOver)) {
                return;
            }
            var deltaTime = this.scheduler.deltaTime();
            var dinoMoveAmount = 0;
            // Check if dinosaur is moving.
            if (game.GameService.getGameState(this.world).GameStateType != game.GameStateTypes.GameOver || game.GameService.isObjectiveCompleted(this.world)) {
                this.world.forEach([ut.Entity, game.Dinosaur], function (entity, dinosaur) {
                    if (_this.world.hasComponent(entity, game.DinosaurAttack)) {
                        return;
                    }
                    var walkTimer = dinosaur.WalkTimer;
                    walkTimer += deltaTime;
                    dinosaur.WalkTimer = walkTimer;
                    var animTime = walkTimer % 2;
                    if (animTime < 0.5 || (animTime > 1 && animTime < 1.5)) {
                        dinoMoveAmount = deltaTime * dinosaur.MoveSpeed;
                    }
                });
            }
            var minPositionX = -game.GameService.getGameState(this.world).EnvironmentSceneWidth / 2;
            // Move scrolling objects.
            this.world.forEach([ut.Entity, game.ScrollingObject, ut.Core2D.TransformLocalPosition], function (entity, scrollingObject, transformLocalPosition) {
                if (dinoMoveAmount == 0 && scrollingObject.AutonomousSpeed == 0) {
                    return;
                }
                var position = transformLocalPosition.position;
                position.x -= dinoMoveAmount * scrollingObject.Speed;
                position.x -= scrollingObject.AutonomousSpeed * deltaTime;
                transformLocalPosition.position = position;
                if (position.x < minPositionX) {
                    ut.Core2D.TransformService.destroyTree(_this.world, entity, true);
                }
            });
        };
        return MoveScrollingObjectSystem;
    }(ut.ComponentSystem));
    game.MoveScrollingObjectSystem = MoveScrollingObjectSystem;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Spawn an helicopter if none exists.
     */
    var SpawnHelicopterSystem = /** @class */ (function (_super) {
        __extends(SpawnHelicopterSystem, _super);
        function SpawnHelicopterSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpawnHelicopterSystem.prototype.OnUpdate = function () {
            var _this = this;
            var activeHelicopterCount = 0;
            this.world.forEach([game.Helicopter], function (helicopter) {
                activeHelicopterCount++;
            });
            if (activeHelicopterCount > 0) {
                return;
            }
            var sceneWidth = game.GameService.getGameState(this.world).EnvironmentSceneWidth;
            this.world.forEach([game.HelicopterSpawner, ut.Core2D.TransformLocalPosition], function (helicopterSpawner, transformLocalPosition) {
                var helicopterEntity = ut.EntityGroup.instantiate(_this.world, "game.Helicopter")[0];
                var helicopterTransformPosition = _this.world.getComponentData(helicopterEntity, ut.Core2D.TransformLocalPosition);
                var helicopterTransformScale = _this.world.getComponentData(helicopterEntity, ut.Core2D.TransformLocalScale);
                helicopterTransformPosition.position.x = Math.random() * sceneWidth - sceneWidth / 2;
                helicopterTransformScale.scale.x = helicopterTransformPosition.position.x > 0 ? 1 : -1;
                helicopterTransformPosition.position.y = transformLocalPosition.position.y;
                _this.world.setComponentData(helicopterEntity, helicopterTransformPosition);
                _this.world.setComponentData(helicopterEntity, helicopterTransformScale);
            });
        };
        return SpawnHelicopterSystem;
    }(ut.ComponentSystem));
    game.SpawnHelicopterSystem = SpawnHelicopterSystem;
})(game || (game = {}));
var game;
(function (game) {
    var SpawnKidOnBikeSystem = /** @class */ (function (_super) {
        __extends(SpawnKidOnBikeSystem, _super);
        function SpawnKidOnBikeSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpawnKidOnBikeSystem.prototype.OnUpdate = function () {
            if (game.GameService.getGameState(this.world).GameStateType != game.GameStateTypes.Game || game.GameService.getCurrentLevel(this.world).LevelID != 3) {
                return;
            }
            var kidOnBikeSpawnerEntity = this.world.getEntityByName("KidOnBikeSpawner");
            if (!this.world.exists(kidOnBikeSpawnerEntity)) {
                return;
            }
            var activeKidCount = 0;
            this.world.forEach([game.KidOnBike], function (kid) {
                activeKidCount++;
            });
            if (activeKidCount > 0) {
                return;
            }
            var kidOnBikeSpawner = this.world.getComponentData(kidOnBikeSpawnerEntity, game.KidOnBikeSpawner);
            kidOnBikeSpawner.Timer += this.scheduler.deltaTime();
            if (kidOnBikeSpawner.Timer > kidOnBikeSpawner.SpawnDelay) {
                kidOnBikeSpawner.Timer = 0;
                var kidEntity = ut.EntityGroup.instantiate(this.world, "game.KidOnBike")[0];
                var kidTransformPosition = this.world.getComponentData(kidEntity, ut.Core2D.TransformLocalPosition);
                kidTransformPosition.position.x = game.GameService.getGameState(this.world).EnvironmentSceneWidth / 2;
                kidTransformPosition.position.y = this.world.getComponentData(kidOnBikeSpawnerEntity, ut.Core2D.TransformLocalPosition).position.y;
                this.world.setComponentData(kidEntity, kidTransformPosition);
            }
            this.world.setComponentData(kidOnBikeSpawnerEntity, kidOnBikeSpawner);
        };
        return SpawnKidOnBikeSystem;
    }(ut.ComponentSystem));
    game.SpawnKidOnBikeSystem = SpawnKidOnBikeSystem;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Spawn people characters from the side of buildings
     */
    var SpawnPeopleSystem = /** @class */ (function (_super) {
        __extends(SpawnPeopleSystem, _super);
        function SpawnPeopleSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpawnPeopleSystem.prototype.OnUpdate = function () {
            var _this = this;
            var peopleCount = 0;
            this.world.forEach([game.Person], function (person) {
                peopleCount++;
            });
            var maxPeopleCount;
            var inSpawnCooldown = false;
            var deltaTime = this.scheduler.deltaTime();
            this.world.forEach([game.PeopleSpawner], function (peopleSpawner) {
                peopleSpawner.Timer += deltaTime;
                inSpawnCooldown = peopleSpawner.Timer < peopleSpawner.SpawnInterval;
                maxPeopleCount = peopleSpawner.MaxPeopleCount;
            });
            if (inSpawnCooldown || peopleCount >= maxPeopleCount) {
                return;
            }
            var closestBuildingPosition = this.getClosestBuildingPosition();
            this.world.forEach([game.PeopleSpawner, ut.Core2D.TransformLocalPosition], function (peopleSpawner, spawnerLocalPosition) {
                peopleSpawner.Timer = 0;
                var personEntity = ut.EntityGroup.instantiate(_this.world, "game.Person")[0];
                var person = _this.world.getComponentData(personEntity, game.Person);
                person.MoveSpeedMultiplier = 1 + Math.random() * 3;
                person.WalkPositionY = spawnerLocalPosition.position.y;
                _this.world.setComponentData(personEntity, person);
                var transformLocalPosition = _this.world.getComponentData(personEntity, ut.Core2D.TransformLocalPosition);
                transformLocalPosition.position.x = closestBuildingPosition.x + 20;
                transformLocalPosition.position.y = spawnerLocalPosition.position.y + 6;
                _this.world.setComponentData(personEntity, transformLocalPosition);
            });
        };
        SpawnPeopleSystem.prototype.getClosestBuildingPosition = function () {
            var targetBuildingXPosition = 80;
            var closestBuildingEntity;
            var closestBuildingPosition;
            this.world.forEach([ut.Entity, game.Building, ut.Core2D.TransformLocalPosition], function (entity, building, transformLocalPosition) {
                if (closestBuildingEntity == null || Math.abs(transformLocalPosition.position.x - targetBuildingXPosition) < Math.abs(closestBuildingPosition.x - targetBuildingXPosition)) {
                    closestBuildingEntity = entity;
                    closestBuildingPosition = transformLocalPosition.position;
                }
            });
            return closestBuildingPosition;
        };
        return SpawnPeopleSystem;
    }(ut.ComponentSystem));
    game.SpawnPeopleSystem = SpawnPeopleSystem;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Spawn scrolling objects to fill the screen scenery with repeated tiled objects.
     */
    var SpawnScrollingObjectSystem = /** @class */ (function (_super) {
        __extends(SpawnScrollingObjectSystem, _super);
        function SpawnScrollingObjectSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpawnScrollingObjectSystem.prototype.OnUpdate = function () {
            var _this = this;
            var currentSkin = game.SkinService.getCurrentSkin(this.world);
            var halfSceneWidth = game.GameService.getGameState(this.world).EnvironmentSceneWidth / 2;
            var minPositionX = -halfSceneWidth;
            var maxPositionX = halfSceneWidth;
            var rightMostObjectPositionsBySpawner = {};
            this.world.forEach([ut.Entity, game.ScrollingObject, ut.Core2D.TransformLocalPosition], function (entity, scrollingObject, transformLocalPosition) {
                var position = transformLocalPosition.position;
                if (!(scrollingObject.SpawnerName in rightMostObjectPositionsBySpawner) || position.x > rightMostObjectPositionsBySpawner[scrollingObject.SpawnerName]) {
                    rightMostObjectPositionsBySpawner[scrollingObject.SpawnerName] = position.x;
                }
            });
            var rightMostObjectPosition = minPositionX;
            this.world.forEach([ut.Entity, game.ScrollingObjectSpawner, ut.Core2D.TransformLocalPosition], function (spawnerEntity, scrollingObjectSpawner, transformLocalPosition) {
                scrollingObjectSpawner.SpawnDetailsBySkin.forEach(function (spawnDetails) {
                    if (spawnDetails.Skin == currentSkin) {
                        var name_1 = _this.world.getEntityName(spawnerEntity);
                        rightMostObjectPosition = name_1 in rightMostObjectPositionsBySpawner ? rightMostObjectPositionsBySpawner[name_1] : minPositionX;
                        var spawnPositionY = transformLocalPosition.position.y;
                        var currentSpawnPositionX = rightMostObjectPosition + scrollingObjectSpawner.NextObjectDistance;
                        while (currentSpawnPositionX < maxPositionX) {
                            var randomObjectIndex = Math.floor(Math.random() * scrollingObjectSpawner.EntitiesToSpawn.length);
                            var randomObject = scrollingObjectSpawner.EntitiesToSpawn[randomObjectIndex];
                            var scrollingObjectEntity = ut.EntityGroup.instantiate(_this.world, randomObject)[0];
                            var scrollingObject = _this.world.getComponentData(scrollingObjectEntity, game.ScrollingObject);
                            scrollingObject.SpawnerName = _this.world.getEntityName(spawnerEntity);
                            _this.world.setComponentData(scrollingObjectEntity, scrollingObject);
                            var scrollingObjectTransformScale = _this.world.getComponentData(scrollingObjectEntity, ut.Core2D.TransformLocalScale);
                            var scrollingObjectScale = scrollingObjectTransformScale.scale;
                            if (scrollingObjectSpawner.RandomizeFlipX && Math.random() < 0.5) {
                                scrollingObjectScale.x *= -1;
                            }
                            if (scrollingObjectSpawner.RandomizeFlipY && Math.random() < 0.5) {
                                scrollingObjectScale.y *= -1;
                            }
                            scrollingObjectTransformScale.scale = scrollingObjectScale;
                            _this.world.setComponentData(scrollingObjectEntity, scrollingObjectTransformScale);
                            var xPosition = currentSpawnPositionX + scrollingObjectSpawner.NextObjectDistance;
                            var yPosition = spawnPositionY + Math.floor(Math.random() * scrollingObjectSpawner.MaxRandomYOffset);
                            var scrollingObjectTransform = _this.world.getComponentData(scrollingObjectEntity, ut.Core2D.TransformLocalPosition);
                            scrollingObjectTransform.position = new Vector3(currentSpawnPositionX, yPosition, 0);
                            _this.world.setComponentData(scrollingObjectEntity, scrollingObjectTransform);
                            currentSpawnPositionX = xPosition;
                            scrollingObjectSpawner.NextObjectDistance = spawnDetails.MinSpawnIntervalX;
                            if (Math.random() < spawnDetails.SpawnIntervalFrequency) {
                                scrollingObjectSpawner.NextObjectDistance += Math.floor(Math.random() * (spawnDetails.MaxSpawnIntervalX - spawnDetails.MinSpawnIntervalX));
                            }
                        }
                    }
                });
            });
        };
        return SpawnScrollingObjectSystem;
    }(ut.ComponentSystem));
    game.SpawnScrollingObjectSystem = SpawnScrollingObjectSystem;
})(game || (game = {}));
var game;
(function (game) {
    var UpdateDestructableStateSystem = /** @class */ (function (_super) {
        __extends(UpdateDestructableStateSystem, _super);
        function UpdateDestructableStateSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UpdateDestructableStateSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.Destructible, ut.Core2D.Sprite2DRenderer], function (destructible, spriteRenderer) {
                if (destructible.CurrentState != destructible.LastState) {
                    var spritePath = "assets/sprites/" + destructible.SpriteStates[destructible.CurrentState];
                    while (spritePath.indexOf("[Skin]") > -1) {
                        spritePath = spritePath.replace("[Skin]", game.SkinService.getCurrentSkinName(_this.world));
                    }
                    spriteRenderer.sprite = _this.world.getEntityByName(spritePath);
                    destructible.LastState = destructible.CurrentState;
                }
            });
        };
        return UpdateDestructableStateSystem;
    }(ut.ComponentSystem));
    game.UpdateDestructableStateSystem = UpdateDestructableStateSystem;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * The kid on his bike makes a wheely animation when the dinosaur makes an attack near him.
     */
    var UpdateKidOnBikeSystem = /** @class */ (function (_super) {
        __extends(UpdateKidOnBikeSystem, _super);
        function UpdateKidOnBikeSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UpdateKidOnBikeSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.KidOnBike], function (kid) {
                game.GameService.setEntityEnabled(_this.world, kid.AnimationKidBike, !kid.IsInWheelyMode);
                game.GameService.setEntityEnabled(_this.world, kid.AnimationKidWheely, kid.IsInWheelyMode);
            });
        };
        return UpdateKidOnBikeSystem;
    }(ut.ComponentSystem));
    game.UpdateKidOnBikeSystem = UpdateKidOnBikeSystem;
})(game || (game = {}));
var game;
(function (game) {
    var CheckGameOverSystem = /** @class */ (function (_super) {
        __extends(CheckGameOverSystem, _super);
        function CheckGameOverSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CheckGameOverSystem.prototype.OnUpdate = function () {
            if (game.GameService.getGameState(this.world).GameStateType != game.GameStateTypes.Game || game.GridService.isGridFrozen(this.world)) {
                return;
            }
            var levelEntity = game.GameService.getCurrentLevelEntity(this.world);
            // Trigger game over in limited move count modes.
            if (!game.GameService.hasRemainingMoves(this.world)) {
                if (!this.isGridAnimating()) {
                    game.GameStateLoadingService.setGameState(this.world, game.GameStateTypes.GameOver);
                }
            }
            // Trigger game over in survival mode.
            else if (this.world.hasComponent(levelEntity, game.LevelSurvival)) {
                var levelSurvival = this.world.getComponentData(levelEntity, game.LevelSurvival);
                if (levelSurvival.SurvivalTimer <= 0 && !this.isGridAnimating()) {
                    game.GameStateLoadingService.setGameState(this.world, game.GameStateTypes.GameOver);
                }
            }
        };
        // Wait for the gems to finish their animations before triggering the game over state
        CheckGameOverSystem.prototype.isGridAnimating = function () {
            var isGridAnimating = false;
            this.world.forEach([game.Gem], function (gem) {
                if (gem.IsFalling || gem.IsSwapping) {
                    isGridAnimating = true;
                }
            });
            return isGridAnimating;
        };
        return CheckGameOverSystem;
    }(ut.ComponentSystem));
    game.CheckGameOverSystem = CheckGameOverSystem;
})(game || (game = {}));
var game;
(function (game) {
    var GameService = /** @class */ (function () {
        function GameService() {
        }
        GameService.clear = function () {
            this.gameStateEntity = new ut.Entity();
        };
        ;
        GameService.getGameState = function (world) {
            if (!world.exists(this.gameStateEntity)) {
                this.gameStateEntity = world.getEntityByName("Game");
                if (!world.exists(this.gameStateEntity)) {
                    this.gameStateEntity = null;
                    return null;
                }
            }
            return world.getComponentData(this.gameStateEntity, game.GameState);
        };
        GameService.getCurrentLevelEntity = function (world) {
            var currentLevelID = this.getGameState(world).CurrentLevelID;
            if (currentLevelID <= 0) {
                return null;
            }
            return this.getLevelEntity(world, currentLevelID);
        };
        GameService.getCurrentLevel = function (world) {
            var levelEntity = this.getCurrentLevelEntity(world);
            if (!world.exists(levelEntity)) {
                return null;
            }
            return world.getComponentData(levelEntity, game.Level);
        };
        GameService.getLevelEntity = function (world, levelID) {
            return world.getEntityByName("Level" + levelID);
        };
        GameService.getLevel = function (world, levelID) {
            var levelEntity = this.getLevelEntity(world, levelID);
            return world.getComponentData(levelEntity, game.Level);
        };
        GameService.incrementMoveCounter = function (world) {
            var gameState = this.getGameState(world);
            gameState.CurrentMoveCount++;
            world.setComponentData(this.gameStateEntity, gameState);
            this.updateRemainingMovesLabel(world);
        };
        GameService.updateRemainingMovesLabel = function (world) {
            var currentLevel = this.getCurrentLevel(world);
            var maxMoveCount = currentLevel == null ? 0 : currentLevel.MaxMoveCount;
            var gameUI = world.getComponentData(world.getEntityByName("GameUI"), game.GameUI);
            var labelRemainingMoves = world.getComponentData(gameUI.LabelRemainingMoves, ut.Text.Text2DRenderer);
            var strRemainingMoveCount = "";
            if (maxMoveCount > 0) {
                var remainingMoveCount = maxMoveCount - this.getGameState(world).CurrentMoveCount;
                strRemainingMoveCount = String(remainingMoveCount);
            }
            labelRemainingMoves.text = strRemainingMoveCount;
            world.setComponentData(gameUI.LabelRemainingMoves, labelRemainingMoves);
        };
        GameService.hasRemainingMoves = function (world) {
            var maxMoveCount = this.getCurrentLevel(world).MaxMoveCount;
            if (maxMoveCount <= 0) {
                return true;
            }
            var remainingMoveCount = maxMoveCount - this.getGameState(world).CurrentMoveCount;
            return remainingMoveCount > 0;
        };
        GameService.isNearDeath = function (world) {
            var maxMoveCount = this.getCurrentLevel(world).MaxMoveCount;
            if (maxMoveCount > 0) {
                var remainingMoveCount = maxMoveCount - this.getGameState(world).CurrentMoveCount;
                return remainingMoveCount <= 3;
            }
            else if (world.hasComponent(GameService.getCurrentLevelEntity(world), game.LevelSurvival)) {
                var levelSurvival = world.getComponentData(GameService.getCurrentLevelEntity(world), game.LevelSurvival);
                var survivalRatio = levelSurvival.SurvivalTimer / levelSurvival.MaxSurvivalTime;
                return survivalRatio < 0.2;
            }
        };
        GameService.isObjectiveCompleted = function (world) {
            if (world.hasComponent(GameService.getCurrentLevelEntity(world), game.LevelPointObjective)) {
                var levelPointObjective = world.getComponentData(GameService.getCurrentLevelEntity(world), game.LevelPointObjective);
                return GameService.getGameState(world).CurrentScore >= levelPointObjective.ScoreObjective;
                ;
            }
            else if (world.hasComponent(GameService.getCurrentLevelEntity(world), game.LevelEggObjective)) {
                var levelEggObjective = world.getComponentData(GameService.getCurrentLevelEntity(world), game.LevelEggObjective);
                return levelEggObjective.CollectedEggs >= levelEggObjective.EggsInGridAtStart + levelEggObjective.EggsToSpawnOnEggCollected;
            }
            else if (world.hasComponent(GameService.getCurrentLevelEntity(world), game.LevelSurvival)) {
                var levelSurvival = world.getComponentData(GameService.getCurrentLevelEntity(world), game.LevelSurvival);
                return GameService.getGameState(world).Time >= levelSurvival.TimeObjective;
            }
        };
        GameService.formatTime = function (seconds) {
            var result = "";
            var hours = Math.floor(seconds / 3600);
            var minutes = Math.floor((seconds % 3600) / 60);
            var seconds = Math.floor(seconds % 60);
            if (hours > 0) {
                result += "" + hours + ":" + (minutes < 10 ? "0" : "");
            }
            result += "" + minutes + ":" + (seconds < 10 ? "0" : "");
            result += "" + seconds;
            return result;
        };
        GameService.formatNumber = function (value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            ;
        };
        GameService.unloadLevel = function (world) {
            game.SoundService.playMusic(world);
            var grid = game.GridService.getGridConfiguration(world);
            game.GridService.clear(world, grid);
            world.forEach([ut.Entity, game.ScrollingObject], function (entity, scrollingObject) {
                ut.Tweens.TweenService.removeAllTweens(world, entity);
                ut.Core2D.TransformService.destroyTree(world, entity, true);
            });
            world.forEach([ut.Entity, game.Helicopter], function (entity, helicopter) {
                ut.Tweens.TweenService.removeAllTweens(world, entity);
                ut.Core2D.TransformService.destroyTree(world, entity, true);
            });
            ut.Tweens.TweenService.removeAllTweensInWorld(world);
            ut.EntityGroup.destroyAll(world, "game.Gem");
            ut.EntityGroup.destroyAll(world, "game.Cell");
            var gameUI = world.getEntityByName("GameUI");
            if (world.exists(gameUI)) {
                ut.Core2D.TransformService.destroyTree(world, gameUI);
                ut.EntityGroup.destroyAll(world, "game.GameUI");
            }
            var pauseMenu = world.getEntityByName("PauseMenu");
            if (world.exists(pauseMenu)) {
                ut.Core2D.TransformService.destroyTree(world, pauseMenu);
                ut.EntityGroup.destroyAll(world, "game.PauseMenu");
            }
            var gameOverMenu = world.getEntityByName("GameOverMenu");
            if (world.exists(gameOverMenu)) {
                ut.Core2D.TransformService.destroyTree(world, gameOverMenu);
                ut.EntityGroup.destroyAll(world, "game.GameOverMenu");
            }
            ut.EntityGroup.destroyAll(world, "game.GameScene");
            ut.EntityGroup.destroyAll(world, "game.Dinosaur");
            ut.EntityGroup.destroyAll(world, "game.SurvivalModeTimeline");
            ut.EntityGroup.destroyAll(world, "game.BackgroundNearDeathWarning");
            ut.EntityGroup.destroyAll(world, "game.TutorialHighlight");
            ut.EntityGroup.destroyAll(world, "game.TutorialMatchPointer");
            ut.EntityGroup.destroyAll(world, "game.TutorialEggPointer");
            ut.EntityGroup.destroyAll(world, "game.TutorialSurvivalPointer");
        };
        /**
         * Utility method to enable and disable entities.
         */
        GameService.setEntityEnabled = function (world, entity, enabled) {
            var hasDisabledComponent = world.hasComponent(entity, ut.Disabled);
            if (enabled && hasDisabledComponent) {
                world.removeComponent(entity, ut.Disabled);
            }
            else if (!enabled && !hasDisabledComponent) {
                world.addComponent(entity, ut.Disabled);
            }
        };
        return GameService;
    }());
    game.GameService = GameService;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Load a specific game state and initialize it.
     */
    var GameStateLoadingService = /** @class */ (function () {
        function GameStateLoadingService() {
        }
        GameStateLoadingService.transitionToGameState = function (world, gameState) {
            this.setGameState(world, game.GameStateTypes.Transition);
            var screenTransitionEntity = ut.EntityGroup.instantiate(world, "game.ScreenTransition")[0];
            var screenTransition = world.getComponentData(screenTransitionEntity, game.ScreenTransition);
            screenTransition.TransitionToState = gameState;
            world.setComponentData(screenTransitionEntity, screenTransition);
            return screenTransitionEntity;
        };
        GameStateLoadingService.transitionToGameStateWithDuration = function (world, gameState, outDuration, inDuration) {
            var screenTransitionEntity = this.transitionToGameState(world, gameState);
            var screenTransition = world.getComponentData(screenTransitionEntity, game.ScreenTransition);
            screenTransition.OutDuration = outDuration;
            screenTransition.InDuration = inDuration;
            world.setComponentData(screenTransitionEntity, screenTransition);
        };
        GameStateLoadingService.transitionToGameStateWithScaledHole = function (world, gameState, positionOffset) {
            var screenTransitionEntity = this.transitionToGameState(world, gameState);
            var screenTransition = world.getComponentData(screenTransitionEntity, game.ScreenTransition);
            screenTransition.IsScaleHoleTransition = true;
            var scaleHoleRectTransform = world.getComponentData(screenTransition.ScaleHole, ut.UILayout.RectTransform);
            scaleHoleRectTransform.anchoredPosition = positionOffset;
            world.setComponentData(screenTransition.ScaleHole, scaleHoleRectTransform);
            world.setComponentData(screenTransitionEntity, screenTransition);
        };
        GameStateLoadingService.setGameState = function (world, gameStateType) {
            var gameState = game.GameService.getGameState(world);
            gameState.GameStateType = gameStateType;
            world.setComponentData(game.GameService.gameStateEntity, gameState);
            switch (gameStateType) {
                case game.GameStateTypes.Loading: {
                    this.loadLoadingScreen(world);
                    break;
                }
                case game.GameStateTypes.Cutscene: {
                    this.loadCutscene(world);
                    break;
                }
                case game.GameStateTypes.CutsceneEnd: {
                    this.loadEndCutscene(world);
                    break;
                }
                case game.GameStateTypes.MainMenu: {
                    this.loadMainMenu(world);
                    break;
                }
                case game.GameStateTypes.WorldMap: {
                    this.loadWorldMap(world);
                    break;
                }
                case game.GameStateTypes.Game: {
                    this.loadGame(world);
                    break;
                }
                case game.GameStateTypes.Settings: {
                    this.loadSettings(world);
                    break;
                }
                case game.GameStateTypes.Paused: {
                    this.loadPause(world);
                    break;
                }
                case game.GameStateTypes.Credits: {
                    this.loadCredits(world);
                    break;
                }
                case game.GameStateTypes.Languages: {
                    this.loadLanguages(world);
                    break;
                }
                case game.GameStateTypes.GameOver: {
                    this.loadGameOver(world);
                    break;
                }
            }
        };
        GameStateLoadingService.loadLoadingScreen = function (world) {
            game.SoundService.init(world);
            game.LocalizationService.init(world);
            game.TutorialService.init(world);
            ut.EntityGroup.instantiate(world, "game.Loading");
        };
        GameStateLoadingService.loadCutscene = function (world) {
            var mainMenu = world.getEntityByName("MainMenu");
            if (world.exists(mainMenu)) {
                ut.Core2D.TransformService.destroyTree(world, mainMenu);
                ut.EntityGroup.destroyAll(world, "game.MainMenu");
                ut.Tweens.TweenService.removeAllTweensInWorld(world);
            }
            ut.EntityGroup.instantiate(world, "game.CutsceneCamera");
            var partAEntity = ut.EntityGroup.instantiate(world, "game.CutscenePartA")[0];
            var partBEntity = ut.EntityGroup.instantiate(world, "game.CutscenePartB")[0];
            var partCEntity = ut.EntityGroup.instantiate(world, "game.CutscenePartC")[0];
            var displayInfo = world.getConfigData(ut.Core2D.DisplayInfo);
            var aspectRatio = displayInfo.width / displayInfo.height;
            var isLandscape = aspectRatio >= 16 / 9 - 0.01;
            var transformPositionPartA = world.getComponentData(partAEntity, ut.Core2D.TransformLocalPosition);
            transformPositionPartA.position.x = isLandscape ? -112 : 0;
            world.setComponentData(partAEntity, transformPositionPartA);
            var transformPositionPartC = world.getComponentData(partCEntity, ut.Core2D.TransformLocalPosition);
            transformPositionPartC.position.x = isLandscape ? 112 : 0;
            world.setComponentData(partCEntity, transformPositionPartC);
        };
        GameStateLoadingService.loadEndCutscene = function (world) {
            if (world.exists(game.DinosaurService.getDinosaurEntity(world))) {
                game.GameService.unloadLevel(world);
            }
            var worldMap = world.getEntityByName("WorldMap");
            if (world.exists(worldMap)) {
                ut.Core2D.TransformService.destroyTree(world, worldMap);
                ut.EntityGroup.destroyAll(world, "game.WorldMap");
                ut.Tweens.TweenService.removeAllTweensInWorld(world);
            }
            ut.EntityGroup.instantiate(world, "game.CutsceneCamera");
            var partAEntity = ut.EntityGroup.instantiate(world, "game.EndCutscenePartA")[0];
            var partBEntity = ut.EntityGroup.instantiate(world, "game.EndCutscenePartB")[0];
            var displayInfo = world.getConfigData(ut.Core2D.DisplayInfo);
            var aspectRatio = displayInfo.width / displayInfo.height;
            var isLandscape = aspectRatio >= 16 / 9 - 0.01;
            var transformPositionPartA = world.getComponentData(partAEntity, ut.Core2D.TransformLocalPosition);
            transformPositionPartA.position.x = isLandscape ? -55 : 0;
            world.setComponentData(partAEntity, transformPositionPartA);
            var transformPositionPartB = world.getComponentData(partBEntity, ut.Core2D.TransformLocalPosition);
            transformPositionPartB.position.x = isLandscape ? 55 : 0;
            world.setComponentData(partBEntity, transformPositionPartB);
        };
        GameStateLoadingService.loadMainMenu = function (world) {
            if (world.exists(world.getEntityByName("CutsceneCamera"))) {
                ut.EntityGroup.destroyAll(world, "game.CutsceneCamera");
                ut.EntityGroup.destroyAll(world, "game.CutscenePartA");
                ut.EntityGroup.destroyAll(world, "game.CutscenePartB");
                ut.EntityGroup.destroyAll(world, "game.CutscenePartC");
            }
            ut.EntityGroup.instantiate(world, "game.MainMenu");
            game.SoundService.playMusic(world);
        };
        GameStateLoadingService.loadWorldMap = function (world) {
            if (world.exists(game.DinosaurService.getDinosaurEntity(world))) {
                game.GameService.unloadLevel(world);
            }
            var mainMenu = world.getEntityByName("MainMenu");
            if (world.exists(mainMenu)) {
                ut.Core2D.TransformService.destroyTree(world, mainMenu);
                ut.EntityGroup.destroyAll(world, "game.MainMenu");
                ut.Tweens.TweenService.removeAllTweensInWorld(world);
            }
            if (world.exists(world.getEntityByName("CutsceneCamera"))) {
                ut.EntityGroup.destroyAll(world, "game.CutsceneCamera");
                ut.EntityGroup.destroyAll(world, "game.EndCutscenePartA");
                ut.EntityGroup.destroyAll(world, "game.EndCutscenePartB");
            }
            // Load world map.
            var worldMapEntity = ut.EntityGroup.instantiate(world, "game.WorldMap")[0];
            var worldMap = world.getComponentData(worldMapEntity, game.WorldMap);
            worldMap.CurrentLevelIndex = game.UserDataService.getSelectedWorldMapIndex();
            worldMap.CurrentScrollIndexPosition = worldMap.CurrentLevelIndex;
            worldMap.LastBeatenLevelID = game.UserDataService.getLastBeatenLevelID();
            world.setComponentData(worldMapEntity, worldMap);
            // Load level items.
            for (var i = 0; i < game.GameService.getGameState(world).LevelCount; i++) {
                var worldMapItemEntity = ut.EntityGroup.instantiate(world, "game.WorldMapItem")[0];
                var worldMapItem = world.getComponentData(worldMapItemEntity, game.WorldMapItem);
                worldMapItem.Index = i;
                world.setComponentData(worldMapItemEntity, worldMapItem);
                var worldMapTransformNode = world.getComponentData(worldMapItemEntity, ut.Core2D.TransformNode);
                worldMapTransformNode.parent = worldMapEntity;
                world.setComponentData(worldMapItemEntity, worldMapTransformNode);
                var level = game.GameService.getLevel(world, i + 1);
                var skinName = game.SkinService.getSkinName(level.Skin);
                var spritePath = "assets/sprites/WorldMap/" + skinName + "_WorldMap_Icon";
                var spriteRendererLevelPreview = world.getComponentData(worldMapItem.ImageLevelPreview, ut.Core2D.Sprite2DRenderer);
                spriteRendererLevelPreview.sprite = world.getEntityByName(spritePath);
                world.setComponentData(worldMapItem.ImageLevelPreview, spriteRendererLevelPreview);
                var sprite = world.getComponentData(spriteRendererLevelPreview.sprite, ut.Core2D.Sprite2D);
                var image = world.getComponentData(sprite.image, ut.Core2D.Image2D);
                var imageWidth = sprite.imageRegion.width * image.imagePixelSize.x;
                var imageHeight = sprite.imageRegion.height * image.imagePixelSize.y;
                var rectTransformLevelPreview = world.getComponentData(worldMapItem.ImageLevelPreview, ut.UILayout.RectTransform);
                rectTransformLevelPreview.sizeDelta = new Vector2(imageWidth, imageHeight);
                world.setComponentData(worldMapItem.ImageLevelPreview, rectTransformLevelPreview);
            }
        };
        GameStateLoadingService.loadGame = function (world) {
            var worldMap = world.getEntityByName("WorldMap");
            if (world.exists(worldMap)) {
                ut.Core2D.TransformService.destroyTree(world, worldMap);
                ut.EntityGroup.destroyAll(world, "game.WorldMap");
                ut.Tweens.TweenService.removeAllTweensInWorld(world);
            }
            var levelID = game.UserDataService.getSelectedWorldMapIndex() + 1;
            var levelEntity = world.getEntityByName("Level" + levelID);
            var level = world.getComponentData(levelEntity, game.Level);
            game.SkinService.setCurrentSkin(world, level.Skin);
            ut.EntityGroup.instantiate(world, "game.GameScene");
            ut.EntityGroup.instantiate(world, "game.Dinosaur");
            ut.EntityGroup.instantiate(world, "game.BackgroundNearDeathWarning");
            var gameUIEntity = ut.EntityGroup.instantiate(world, "game.GameUI")[0];
            var gameUI = world.getComponentData(gameUIEntity, game.GameUI);
            var labelObjective = world.getComponentData(gameUI.LabelObjective, ut.Text.Text2DRenderer);
            var isPointObjective = world.hasComponent(levelEntity, game.LevelPointObjective);
            var isEggObjective = world.hasComponent(levelEntity, game.LevelEggObjective);
            var isSurvivalObjective = world.hasComponent(levelEntity, game.LevelSurvival);
            game.GameService.setEntityEnabled(world, gameUI.ImageObjectivePoint, isPointObjective);
            game.GameService.setEntityEnabled(world, gameUI.ImageObjectiveEgg, isEggObjective);
            game.GameService.setEntityEnabled(world, gameUI.ImageObjectiveSurvival, isSurvivalObjective);
            game.GameService.setEntityEnabled(world, gameUI.ImageMoves, !isSurvivalObjective);
            game.GameService.setEntityEnabled(world, gameUI.ImageNoMovesWarning, !isSurvivalObjective);
            if (isPointObjective) {
                var pointObjective = world.getComponentData(levelEntity, game.LevelPointObjective);
                labelObjective.text = game.GameService.formatNumber(pointObjective.ScoreObjective);
                world.setComponentData(gameUI.LabelObjective, labelObjective);
            }
            else if (isSurvivalObjective) {
                var survivalObjective = world.getComponentData(levelEntity, game.LevelSurvival);
                labelObjective.text = game.GameService.formatTime(survivalObjective.TimeObjective);
                world.setComponentData(gameUI.LabelObjective, labelObjective);
                ut.EntityGroup.instantiate(world, "game.SurvivalModeTimeline");
            }
            var gameState = game.GameService.getGameState(world);
            gameState.CurrentLevelID = levelID;
            gameState.CurrentMoveCount = 0;
            gameState.CurrentScore = 0;
            gameState.Time = 0;
            world.setComponentData(game.GameService.gameStateEntity, gameState);
            if (world.hasComponent(levelEntity, game.LevelSurvival)) {
                var levelSurvival = world.getComponentData(levelEntity, game.LevelSurvival);
                levelSurvival.SurvivalTimer = levelSurvival.MaxSurvivalTime;
                world.setComponentData(levelEntity, levelSurvival);
            }
            game.GameService.updateRemainingMovesLabel(world);
            game.SoundService.playMusic(world);
        };
        GameStateLoadingService.loadSettings = function (world) {
            var settingsMenuEntity = ut.EntityGroup.instantiate(world, "game.SettingsMenu")[0];
            this.loadAudioSettings(world, settingsMenuEntity);
            var settingsMenu = world.getComponentData(settingsMenuEntity, game.SettingsMenu);
            var displayInfo = world.getConfigData(ut.Core2D.DisplayInfo);
            var labelRenderMode = world.getComponentData(settingsMenu.LabelRenderMode, game.LocalizedText);
            labelRenderMode.TextID = "Settings_Rendering";
            labelRenderMode.TextParameters = [(displayInfo.renderMode == ut.Core2D.RenderMode.WebGL ? "WebGL" : "Canvas")];
            labelRenderMode.LastTextID = ""; // Set dirty to force refresh
            world.setComponentData(settingsMenu.LabelRenderMode, labelRenderMode);
        };
        GameStateLoadingService.loadAudioSettings = function (world, entity) {
            var settingsMenuAudio = world.getComponentData(entity, game.SettingsMenuAudio);
            var soundSpriteRenderer = world.getComponentData(settingsMenuAudio.ButtonSound, ut.Core2D.Sprite2DRenderer);
            soundSpriteRenderer.sprite = game.SoundService.getIsSoundOn(world) ? settingsMenuAudio.SpriteAudioOn : settingsMenuAudio.SpriteAudioOff;
            world.setComponentData(settingsMenuAudio.ButtonSound, soundSpriteRenderer);
            var musicSpriteRenderer = world.getComponentData(settingsMenuAudio.ButtonMusic, ut.Core2D.Sprite2DRenderer);
            musicSpriteRenderer.sprite = game.SoundService.getIsMusicOn(world) ? settingsMenuAudio.SpriteAudioOn : settingsMenuAudio.SpriteAudioOff;
            world.setComponentData(settingsMenuAudio.ButtonMusic, musicSpriteRenderer);
        };
        GameStateLoadingService.loadPause = function (world) {
            var pauseMenuEntity = ut.EntityGroup.instantiate(world, "game.PauseMenu")[0];
            this.loadAudioSettings(world, pauseMenuEntity);
        };
        GameStateLoadingService.loadCredits = function (world) {
            ut.EntityGroup.instantiate(world, "game.CreditsMenu");
        };
        GameStateLoadingService.loadLanguages = function (world) {
            ut.EntityGroup.instantiate(world, "game.LanguagesMenu");
        };
        GameStateLoadingService.loadGameOver = function (world) {
            var _this = this;
            var gameState = game.GameService.getGameState(world);
            var gameOverEntity = ut.EntityGroup.instantiate(world, "game.GameOverMenu")[0];
            var gameOverMenu = world.getComponentData(gameOverEntity, game.GameOverMenu);
            var isObjectiveComplete = game.GameService.isObjectiveCompleted(world);
            var isSurvivalMode = world.hasComponent(game.GameService.getCurrentLevelEntity(world), game.LevelSurvival);
            var gameOverTextID = isObjectiveComplete ? "GameOver_Success" : "GameOver_Failure";
            var labelGameOver = world.getComponentData(gameOverMenu.LabelGameOver, game.LocalizedText);
            labelGameOver.TextID = gameOverTextID;
            world.setComponentData(gameOverMenu.LabelGameOver, labelGameOver);
            var labelGameOverShadow = world.getComponentData(gameOverMenu.LabelGameOverShadow, game.LocalizedText);
            labelGameOverShadow.TextID = gameOverTextID;
            world.setComponentData(gameOverMenu.LabelGameOverShadow, labelGameOverShadow);
            gameOverMenu.SuccessArms.forEach(function (armSuccess) {
                game.GameService.setEntityEnabled(world, armSuccess, isObjectiveComplete);
                _this.animateGameOverArm(world, armSuccess);
            });
            gameOverMenu.FailArms.forEach(function (armFail) {
                game.GameService.setEntityEnabled(world, armFail, !isObjectiveComplete);
                _this.animateGameOverArm(world, armFail);
            });
            var labelScore = world.getComponentData(gameOverMenu.LabelScoreValue, ut.Text.Text2DRenderer);
            labelScore.text = game.GameService.formatNumber(gameState.CurrentScore) + " pts";
            world.setComponentData(gameOverMenu.LabelScoreValue, labelScore);
            var labelTime = world.getComponentData(gameOverMenu.LabelTime, game.LocalizedText);
            labelTime.TextID = isSurvivalMode ? "GameOver_Time" : " ";
            world.setComponentData(gameOverMenu.LabelTime, labelTime);
            var labelTimeValue = world.getComponentData(gameOverMenu.LabelTimeValue, ut.Text.Text2DRenderer);
            labelTimeValue.text = isSurvivalMode ? game.GameService.formatTime(gameState.Time) : "";
            world.setComponentData(gameOverMenu.LabelTimeValue, labelTimeValue);
            var oldBestScore = game.UserDataService.getBestScore(gameState.CurrentLevelID);
            var isBestScore = gameState.CurrentScore > oldBestScore && isObjectiveComplete;
            var isNewBestScore = isBestScore && oldBestScore > 0;
            var isFirstTimeBeaten = isBestScore && oldBestScore == 0;
            game.GameService.setEntityEnabled(world, gameOverMenu.ImageNewBestScore, isNewBestScore);
            game.GameService.setEntityEnabled(world, gameOverMenu.ImageNewBestScoreGlow, isNewBestScore);
            var labelNewBest = world.getComponentData(gameOverMenu.LabelNewBestScore, game.LocalizedText);
            labelNewBest.TextID = isNewBestScore ? "GameOver_NewBest" : " ";
            world.setComponentData(gameOverMenu.LabelNewBestScore, labelNewBest);
            if (isBestScore) {
                game.UserDataService.setBestScore(gameState.CurrentLevelID, gameState.CurrentScore);
            }
            if (isObjectiveComplete && gameState.CurrentLevelID > game.UserDataService.getLastBeatenLevelID()) {
                game.UserDataService.setLastBeatenLevelID(gameState.CurrentLevelID);
            }
            // Set new unlocked level as selected level on the world map.
            if (isFirstTimeBeaten) {
                var currentLevelIndex = Math.min(2, Math.max(0, gameState.CurrentLevelID));
                game.UserDataService.setSelectedWorldMapIndex(currentLevelIndex);
            }
            game.DinosaurService.setEndGameAnimation(world, isObjectiveComplete);
        };
        GameStateLoadingService.animateGameOverArm = function (world, armEntity) {
            if (world.hasComponent(armEntity, ut.Disabled)) {
                return;
            }
            var transformRotation = world.getComponentData(armEntity, ut.Core2D.TransformLocalRotation);
            var transformScale = world.getComponentData(armEntity, ut.Core2D.TransformLocalScale);
            var startRotation = new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), 0);
            var endRotation = new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), (transformScale.scale.x < 0 ? -15 : 15) * Math.PI / 180);
            var rotateArmTween = new ut.Tweens.TweenDesc;
            rotateArmTween.cid = ut.Core2D.TransformLocalRotation.cid;
            rotateArmTween.offset = 0;
            rotateArmTween.duration = 0.5;
            rotateArmTween.func = ut.Tweens.TweenFunc.Cosine;
            rotateArmTween.loop = ut.Core2D.LoopMode.PingPong;
            rotateArmTween.destroyWhenDone = true;
            rotateArmTween.t = 0;
            ut.Tweens.TweenService.addTweenQuaternion(world, armEntity, startRotation, endRotation, rotateArmTween);
            transformRotation.rotation = startRotation;
            world.setComponentData(armEntity, transformRotation);
        };
        return GameStateLoadingService;
    }());
    game.GameStateLoadingService = GameStateLoadingService;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Update the current game state.
     */
    var GameStateUpdateService = /** @class */ (function () {
        function GameStateUpdateService() {
        }
        GameStateUpdateService.updateGameState = function (world, gameState) {
            switch (gameState.GameStateType) {
                case game.GameStateTypes.Boot: {
                    this.updateBoot(world, gameState);
                    break;
                }
                case game.GameStateTypes.Loading: {
                    this.updateLoading(world, gameState);
                    break;
                }
                case game.GameStateTypes.MainMenu: {
                    this.updateMainMenu(world, gameState);
                    break;
                }
                case game.GameStateTypes.WorldMap: {
                    this.updateWorldMap(world, gameState);
                    break;
                }
                case game.GameStateTypes.Game: {
                    this.updateGame(world, gameState);
                    break;
                }
                case game.GameStateTypes.Settings: {
                    this.updateSettings(world, gameState);
                    break;
                }
                case game.GameStateTypes.Paused: {
                    this.updatePause(world, gameState);
                    break;
                }
                case game.GameStateTypes.Credits: {
                    this.updateCredits(world, gameState);
                    break;
                }
                case game.GameStateTypes.Languages: {
                    this.updateLanguages(world, gameState);
                    break;
                }
                case game.GameStateTypes.GameOver: {
                    this.updateGameOver(world, gameState);
                    break;
                }
            }
        };
        GameStateUpdateService.updateBoot = function (world, gameState) {
            game.GameStateLoadingService.setGameState(world, game.GameStateTypes.Loading);
            for (var levelID = 1; levelID <= game.GameService.getGameState(world).LevelCount; levelID++) {
                ut.EntityGroup.instantiate(world, "game.Level" + levelID);
            }
        };
        GameStateUpdateService.updateLoading = function (world, gameState) {
            ut.EntityGroup.destroyAll(world, "game.Loading");
            if (game.UserDataService.getHasSeenCutscene()) {
                game.GameStateLoadingService.setGameState(world, game.GameStateTypes.MainMenu);
            }
            else {
                game.UserDataService.setHasSeenCutscene(true);
                game.GameStateLoadingService.setGameState(world, game.GameStateTypes.Cutscene);
            }
        };
        GameStateUpdateService.updateMainMenu = function (world, gameState) {
            var mainMenu = world.getComponentData(world.getEntityByName("MainMenu"), game.MainMenu);
            var buttonPlay = world.getComponentData(mainMenu.ButtonPlay, game.CustomButton);
            var buttonWatchIntro = world.getComponentData(mainMenu.ButtonWatchIntro, game.CustomButton);
            var buttonSettings = world.getComponentData(mainMenu.ButtonSettings, game.CustomButton);
            if (buttonPlay.JustClicked) {
                game.GameStateLoadingService.transitionToGameStateWithScaledHole(world, game.GameStateTypes.WorldMap, new Vector2(0, 50));
                game.SoundService.play(world, "GenericClickSound");
            }
            else if (buttonWatchIntro.JustClicked) {
                game.GameStateLoadingService.transitionToGameState(world, game.GameStateTypes.Cutscene);
                game.SoundService.play(world, "GenericClickSound");
                game.SoundService.stopMusic(world);
            }
            else if (buttonSettings.JustClicked) {
                game.GameStateLoadingService.setGameState(world, game.GameStateTypes.Settings);
                game.SoundService.play(world, "GenericClickSound");
            }
        };
        GameStateUpdateService.updateWorldMap = function (world, gameState) {
            var worldMap = world.getComponentData(world.getEntityByName("WorldMap"), game.WorldMap);
            var buttonPlay = world.getComponentData(worldMap.ButtonPlay, game.CustomButton);
            var buttonSettings = world.getComponentData(worldMap.ButtonSettings, game.CustomButton);
            var buttonLeft = world.getComponentData(worldMap.ButtonLeft, game.CustomButton);
            var buttonRight = world.getComponentData(worldMap.ButtonRight, game.CustomButton);
            var buttonCutscene = world.getComponentData(worldMap.ButtonCutscene, game.CustomButton);
            if (buttonPlay.JustClicked) {
                var currentLevelIndex = worldMap.CurrentLevelIndex;
                game.UserDataService.setSelectedWorldMapIndex(currentLevelIndex);
                game.GameStateLoadingService.transitionToGameStateWithScaledHole(world, game.GameStateTypes.Game, new Vector2(0, 0));
                game.SoundService.play(world, "GameStartSound");
            }
            else if (buttonLeft.JustClicked || buttonRight.JustClicked) {
                var increment = buttonRight.JustClicked ? 1 : -1;
                var worldMapEntity = world.getEntityByName("WorldMap");
                var worldMap_1 = world.getComponentData(worldMapEntity, game.WorldMap);
                var currentLevelIndex = worldMap_1.CurrentLevelIndex;
                currentLevelIndex += increment;
                currentLevelIndex = Math.min(2, Math.max(0, currentLevelIndex));
                worldMap_1.CurrentLevelIndex = currentLevelIndex;
                world.setComponentData(worldMapEntity, worldMap_1);
                game.SoundService.play(world, "GenericClickSound");
            }
            else if (buttonSettings.JustClicked) {
                game.GameStateLoadingService.setGameState(world, game.GameStateTypes.Settings);
                game.SoundService.play(world, "GenericClickSound");
            }
            else if (buttonCutscene.JustClicked) {
                game.UserDataService.setSelectedWorldMapIndex(worldMap.CurrentLevelIndex);
                game.GameStateLoadingService.transitionToGameState(world, game.GameStateTypes.CutsceneEnd);
                game.SoundService.play(world, "GenericClickSound");
                game.SoundService.stopMusic(world);
            }
        };
        GameStateUpdateService.updateGame = function (world, gameState) {
            gameState.Time += world.scheduler().deltaTime();
            var gameUIEntity = world.getEntityByName("GameUI");
            var gameUI = world.getComponentData(gameUIEntity, game.GameUI);
            var buttonPause = world.getComponentData(gameUI.ButtonPause, game.CustomButton);
            var labelTime = world.getComponentData(gameUI.LabelTime, ut.Text.Text2DRenderer);
            var labelObjective = world.getComponentData(gameUI.LabelObjective, ut.Text.Text2DRenderer);
            var levelEntity = game.GameService.getCurrentLevelEntity(world);
            var isPointObjective = world.hasComponent(levelEntity, game.LevelPointObjective);
            var isSurvivalObjective = world.hasComponent(levelEntity, game.LevelSurvival);
            var isEggObjective = world.hasComponent(levelEntity, game.LevelEggObjective);
            var heldEgg = 0;
            world.forEach([game.CollectedCurrency], function (collectedCurrency) { heldEgg++; });
            var isObjectiveComplete = heldEgg == 0 && game.GameService.isObjectiveCompleted(world);
            game.GameService.setEntityEnabled(world, gameUI.ImageObjectiveCompleteGlow, isObjectiveComplete);
            game.GameService.setEntityEnabled(world, gameUI.ImageObjectivePoint, isPointObjective && isObjectiveComplete);
            game.GameService.setEntityEnabled(world, gameUI.ImageObjectiveEgg, isEggObjective && isObjectiveComplete);
            game.GameService.setEntityEnabled(world, gameUI.ImageObjectiveSurvival, isSurvivalObjective && isObjectiveComplete);
            game.GameService.setEntityEnabled(world, gameUI.ImageObjectivePointIncomplete, isPointObjective && !isObjectiveComplete);
            game.GameService.setEntityEnabled(world, gameUI.ImageObjectiveEggIncomplete, isEggObjective && !isObjectiveComplete);
            game.GameService.setEntityEnabled(world, gameUI.ImageObjectiveSurvivalIncomplete, isSurvivalObjective && !isObjectiveComplete);
            if (isObjectiveComplete) {
                var objectiveGlowTransformRotation = world.getComponentData(gameUI.ImageObjectiveCompleteGlow, ut.Core2D.TransformLocalRotation);
                objectiveGlowTransformRotation.rotation.setFromAxisAngle(new Vector3(0, 0, 1), gameState.Time);
                world.setComponentData(gameUI.ImageObjectiveCompleteGlow, objectiveGlowTransformRotation);
                if (!gameUI.LastIsObjectiveComplete) {
                    gameUI.LastIsObjectiveComplete = true;
                    world.setComponentData(gameUIEntity, gameUI);
                    this.punchScale(world, gameUI.LabelObjective, 1.35);
                    this.punchScale(world, gameUI.ImageObjectivePoint, 1.1);
                    this.punchScale(world, gameUI.ImageObjectiveEgg, 1.1);
                    this.punchScale(world, gameUI.ImageObjectiveSurvival, 1.1);
                }
            }
            if (isSurvivalObjective) {
                labelTime.text = String(game.GameService.formatTime(gameState.Time));
                world.setComponentData(gameUI.LabelTime, labelTime);
            }
            else if (isEggObjective) {
                var eggObjective = world.getComponentData(levelEntity, game.LevelEggObjective);
                var totalToCollect = eggObjective.EggsInGridAtStart + eggObjective.EggsToSpawnOnEggCollected;
                var collectedEgg = eggObjective.CollectedEggs - heldEgg;
                if (collectedEgg > gameUI.LastCollectedEggCount) {
                    gameUI.LastCollectedEggCount = collectedEgg;
                    world.setComponentData(gameUIEntity, gameUI);
                    this.punchScale(world, gameUI.LabelObjective, 1.35);
                    this.punchScale(world, gameUI.ImageObjectiveEggIncomplete, 1.1);
                }
                var remainingEggCount = collectedEgg + "/" + totalToCollect;
                if (remainingEggCount != labelObjective.text) {
                    labelObjective.text = remainingEggCount;
                    world.setComponentData(gameUI.LabelObjective, labelObjective);
                }
            }
            if (buttonPause.JustClicked) {
                game.GameStateLoadingService.setGameState(world, game.GameStateTypes.Paused);
                game.SoundService.play(world, "GenericClickSound");
            }
        };
        GameStateUpdateService.punchScale = function (world, entity, scale) {
            var transformScale = world.getComponentData(entity, ut.Core2D.TransformLocalScale);
            var startScale = transformScale.scale;
            var endScale = new Vector3(scale, scale, 1);
            var punchLevelTitleTween = new ut.Tweens.TweenDesc;
            punchLevelTitleTween.cid = ut.Core2D.TransformLocalScale.cid;
            punchLevelTitleTween.offset = 0;
            punchLevelTitleTween.duration = 0.1;
            punchLevelTitleTween.func = ut.Tweens.TweenFunc.OutCubic;
            punchLevelTitleTween.loop = ut.Core2D.LoopMode.PingPongOnce;
            punchLevelTitleTween.destroyWhenDone = true;
            punchLevelTitleTween.t = 0.0;
            ut.Tweens.TweenService.addTweenVector3(world, entity, startScale, endScale, punchLevelTitleTween);
        };
        GameStateUpdateService.updateSettings = function (world, gameState) {
            var settingsMenuEntity = world.getEntityByName("SettingsMenu");
            var settingsMenu = world.getComponentData(settingsMenuEntity, game.SettingsMenu);
            this.updateAudioSettings(world, settingsMenuEntity);
            var buttonResetProgress = world.getComponentData(settingsMenu.ButtonResetProgress, game.CustomButton);
            var buttonRenderMode = world.getComponentData(settingsMenu.ButtonRenderMode, game.CustomButton);
            var buttonCredits = world.getComponentData(settingsMenu.ButtonCredits, game.CustomButton);
            var buttonLanguages = world.getComponentData(settingsMenu.ButtonLanguage, game.CustomButton);
            var buttonOK = world.getComponentData(settingsMenu.ButtonOK, game.CustomButton);
            if (buttonResetProgress.JustClicked) {
                if (confirm(game.LocalizationService.getText(world, "Settings_ResetProgressConfirm"))) {
                    game.UserDataService.deleteAllCookies();
                    location.reload();
                }
            }
            else if (buttonRenderMode.JustClicked) {
                var displayInfo = world.getConfigData(ut.Core2D.DisplayInfo);
                displayInfo.renderMode = displayInfo.renderMode == ut.Core2D.RenderMode.WebGL ? ut.Core2D.RenderMode.Canvas : ut.Core2D.RenderMode.WebGL;
                world.setConfigData(displayInfo);
                var labelRenderMode = world.getComponentData(settingsMenu.LabelRenderMode, game.LocalizedText);
                labelRenderMode.TextID = "Settings_Rendering";
                labelRenderMode.TextParameters = [(displayInfo.renderMode == ut.Core2D.RenderMode.WebGL ? "WebGL" : "Canvas")];
                labelRenderMode.LastTextID = ""; // Set dirty to force refresh
                world.setComponentData(settingsMenu.LabelRenderMode, labelRenderMode);
            }
            else if (buttonCredits.JustClicked) {
                game.GameStateLoadingService.transitionToGameState(world, game.GameStateTypes.Credits);
            }
            else if (buttonLanguages.JustClicked) {
                game.GameStateLoadingService.setGameState(world, game.GameStateTypes.Languages);
            }
            else if (buttonOK.JustClicked) {
                ut.Tweens.TweenService.removeAllTweensInWorld(world);
                ut.Core2D.TransformService.destroyTree(world, settingsMenuEntity);
                ut.EntityGroup.destroyAll(world, "game.SettingsMenu");
                game.SoundService.play(world, "GenericClickSound");
                if (world.exists(world.getEntityByName("MainMenu"))) {
                    gameState.GameStateType = game.GameStateTypes.MainMenu;
                }
                else {
                    gameState.GameStateType = game.GameStateTypes.WorldMap;
                }
            }
        };
        GameStateUpdateService.updateAudioSettings = function (world, audioSettingsMenuEntity) {
            var audioSettingsMenu = world.getComponentData(audioSettingsMenuEntity, game.SettingsMenuAudio);
            var buttonSound = world.getComponentData(audioSettingsMenu.ButtonSound, game.CustomButton);
            var buttonMusic = world.getComponentData(audioSettingsMenu.ButtonMusic, game.CustomButton);
            if (buttonSound.JustClicked) {
                game.SoundService.toggleSoundIsOn(world);
                game.SoundService.play(world, "GenericClickSound");
                var soundSpriteRenderer = world.getComponentData(audioSettingsMenu.ButtonSound, ut.Core2D.Sprite2DRenderer);
                soundSpriteRenderer.sprite = game.SoundService.getIsSoundOn(world) ? audioSettingsMenu.SpriteAudioOn : audioSettingsMenu.SpriteAudioOff;
                world.setComponentData(audioSettingsMenu.ButtonSound, soundSpriteRenderer);
            }
            else if (buttonMusic.JustClicked) {
                game.SoundService.toggleMusicIsOn(world);
                game.SoundService.play(world, "GenericClickSound");
                var musicSpriteRenderer = world.getComponentData(audioSettingsMenu.ButtonMusic, ut.Core2D.Sprite2DRenderer);
                musicSpriteRenderer.sprite = game.SoundService.getIsMusicOn(world) ? audioSettingsMenu.SpriteAudioOn : audioSettingsMenu.SpriteAudioOff;
                world.setComponentData(audioSettingsMenu.ButtonMusic, musicSpriteRenderer);
            }
        };
        GameStateUpdateService.updatePause = function (world, gameState) {
            var pauseMenuEntity = world.getEntityByName("PauseMenu");
            var pauseMenu = world.getComponentData(pauseMenuEntity, game.PauseMenu);
            var buttonResume = world.getComponentData(pauseMenu.ButtonResume, game.CustomButton);
            var buttonQuit = world.getComponentData(pauseMenu.ButtonQuit, game.CustomButton);
            this.updateAudioSettings(world, pauseMenuEntity);
            if (buttonResume.JustClicked) {
                gameState.GameStateType = game.GameStateTypes.Game;
                ut.Core2D.TransformService.destroyTree(world, pauseMenuEntity);
                ut.EntityGroup.destroyAll(world, "game.PauseMenu");
                game.SoundService.play(world, "GenericClickSound");
            }
            else if (buttonQuit.JustClicked) {
                game.GameStateLoadingService.transitionToGameState(world, game.GameStateTypes.WorldMap);
                game.SoundService.play(world, "GenericClickSound");
            }
        };
        GameStateUpdateService.updateGameOver = function (world, gameState) {
            var gameOverMenuEntity = world.getEntityByName("GameOverMenu");
            var gameOverMenu = world.getComponentData(gameOverMenuEntity, game.GameOverMenu);
            var popup = world.getComponentData(gameOverMenuEntity, game.Popup);
            var buttonQuit = world.getComponentData(gameOverMenu.ButtonQuit, game.CustomButton);
            gameOverMenu.Timer += world.scheduler().deltaTime();
            world.setComponentData(gameOverMenuEntity, gameOverMenu);
            if (!world.hasComponent(gameOverMenu.ImageNewBestScoreGlow, ut.Disabled)) {
                var newBestScoreGlowTransformRotation = world.getComponentData(gameOverMenu.ImageNewBestScoreGlow, ut.Core2D.TransformLocalRotation);
                newBestScoreGlowTransformRotation.rotation.setFromAxisAngle(new Vector3(0, 0, 1), gameOverMenu.Timer);
                world.setComponentData(gameOverMenu.ImageNewBestScoreGlow, newBestScoreGlowTransformRotation);
            }
            if (buttonQuit.JustClicked && gameOverMenu.Timer > popup.DelayIn + popup.ScaleInDuration / 2) {
                game.SoundService.play(world, "GenericClickSound");
                if (game.GameService.getCurrentLevel(world).LevelID == 3 && game.GameService.isObjectiveCompleted(world) && !game.UserDataService.getHasSeenEndCutscene()) {
                    game.UserDataService.setHasSeenEndCutscene(true);
                    game.GameStateLoadingService.transitionToGameState(world, game.GameStateTypes.CutsceneEnd);
                }
                else {
                    game.GameStateLoadingService.transitionToGameState(world, game.GameStateTypes.WorldMap);
                }
            }
        };
        GameStateUpdateService.updateCredits = function (world, gameState) {
            var creditsMenuEntity = world.getEntityByName("CreditsMenu");
            var creditsMenu = world.getComponentData(creditsMenuEntity, game.CreditsMenu);
            var buttonClose = world.getComponentData(creditsMenu.ButtonClose, game.CustomButton);
            if (buttonClose.JustClicked) {
                gameState.GameStateType = game.GameStateTypes.Settings;
                ut.Core2D.TransformService.destroyTree(world, creditsMenuEntity);
                ut.EntityGroup.destroyAll(world, "game.CreditsMenu");
                game.SoundService.play(world, "GenericClickSound");
            }
        };
        GameStateUpdateService.updateLanguages = function (world, gameState) {
            var languagesMenuEntity = world.getEntityByName("LanguagesMenu");
            var languagesMenu = world.getComponentData(languagesMenuEntity, game.LanguagesMenu);
            var buttonEnglish = world.getComponentData(languagesMenu.ButtonEnglish, game.CustomButton);
            var buttonFrench = world.getComponentData(languagesMenu.ButtonFrench, game.CustomButton);
            var buttonCancel = world.getComponentData(languagesMenu.ButtonCancel, game.CustomButton);
            if (buttonEnglish.JustClicked) {
                game.LocalizationService.setLanguageID(world, "en");
            }
            else if (buttonFrench.JustClicked) {
                game.LocalizationService.setLanguageID(world, "fr");
            }
            if (buttonEnglish.JustClicked || buttonFrench.JustClicked || buttonCancel.JustClicked) {
                gameState.GameStateType = game.GameStateTypes.Settings;
                ut.Tweens.TweenService.removeAllTweensInWorld(world);
                ut.Core2D.TransformService.destroyTree(world, languagesMenuEntity);
                ut.EntityGroup.destroyAll(world, "game.LanguagesMenu");
                game.SoundService.play(world, "GenericClickSound");
            }
        };
        GameStateUpdateService = __decorate([
            ut.executeAfter(ut.Shared.UserCodeEnd)
        ], GameStateUpdateService);
        return GameStateUpdateService;
    }());
    game.GameStateUpdateService = GameStateUpdateService;
})(game || (game = {}));
var game;
(function (game) {
    var UpdateGameStateSystem = /** @class */ (function (_super) {
        __extends(UpdateGameStateSystem, _super);
        function UpdateGameStateSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UpdateGameStateSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.GameState], function (gameState) {
                game.GameStateUpdateService.updateGameState(_this.world, gameState);
            });
        };
        return UpdateGameStateSystem;
    }(ut.ComponentSystem));
    game.UpdateGameStateSystem = UpdateGameStateSystem;
})(game || (game = {}));
var game;
(function (game) {
    var UpdateSurvivalModeSystem = /** @class */ (function (_super) {
        __extends(UpdateSurvivalModeSystem, _super);
        function UpdateSurvivalModeSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UpdateSurvivalModeSystem.prototype.OnUpdate = function () {
            if (game.GameService.getGameState(this.world).GameStateType != game.GameStateTypes.Game || game.GridService.isGridFrozen(this.world)) {
                return;
            }
            var currentLevelEntity = game.GameService.getCurrentLevelEntity(this.world);
            if (this.world.hasComponent(currentLevelEntity, game.LevelSurvival)) {
                var levelSurvival = this.world.getComponentData(currentLevelEntity, game.LevelSurvival);
                var survivalRatio = -1;
                levelSurvival.SurvivalTimer -= levelSurvival.TimeDepleteRate * this.scheduler.deltaTime();
                levelSurvival.SurvivalTimer = Math.max(0, Math.min(levelSurvival.MaxSurvivalTime, levelSurvival.SurvivalTimer));
                survivalRatio = levelSurvival.SurvivalTimer / levelSurvival.MaxSurvivalTime;
                this.world.setComponentData(currentLevelEntity, levelSurvival);
                if (survivalRatio == -1) {
                    return;
                }
                var survivalTimeline = this.world.getComponentData(this.world.getEntityByName("SurvivalModeTimeline"), game.SurvivalModeTimeline);
                var transformPositionDinosaur = this.world.getComponentData(survivalTimeline.DinosaurCursor, ut.Core2D.TransformLocalPosition);
                transformPositionDinosaur.position.x = survivalRatio * survivalTimeline.Width - survivalTimeline.Width / 2;
                this.world.setComponentData(survivalTimeline.DinosaurCursor, transformPositionDinosaur);
                var transformScaleFilling = this.world.getComponentData(survivalTimeline.ContainerFilling, ut.Core2D.TransformLocalScale);
                transformScaleFilling.scale.x = survivalRatio;
                this.world.setComponentData(survivalTimeline.ContainerFilling, transformScaleFilling);
            }
        };
        return UpdateSurvivalModeSystem;
    }(ut.ComponentSystem));
    game.UpdateSurvivalModeSystem = UpdateSurvivalModeSystem;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Create the grid cells and the gems at the start of a game.
     */
    var CreateNewGemBoardSystem = /** @class */ (function (_super) {
        __extends(CreateNewGemBoardSystem, _super);
        function CreateNewGemBoardSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CreateNewGemBoardSystem.prototype.OnUpdate = function () {
            if (game.GameService.getGameState(this.world).GameStateType != game.GameStateTypes.Game) {
                return;
            }
            var grid = game.GridService.getGridConfiguration(this.world);
            if (grid == null) {
                return;
            }
            if (!grid.IsGridCreated) {
                if (this.world.hasComponent(game.GameService.getCurrentLevelEntity(this.world), game.LevelSurvival)) {
                    grid.GridOffsetPositionY = -7;
                }
                else {
                    grid.GridOffsetPositionY = 0;
                }
                game.GridService.createGridCells(this.world, grid);
                var gemEntities = this.createBoard(grid);
                this.placeStartEggs(gemEntities, grid);
                this.placeStartPowerUps(gemEntities);
                grid.IsGridCreated = true;
                this.world.setConfigData(grid);
            }
        };
        CreateNewGemBoardSystem.prototype.createBoard = function (grid) {
            var createdGems = new Array();
            var currentLevel = game.GameService.getCurrentLevel(this.world);
            for (var i = 0; i < grid.Width; i++) {
                var _loop_1 = function (j) {
                    var possibleGemTypes = [0, 1, 2, 3, 4, 5];
                    currentLevel.MissingGems.forEach(function (missingGem) {
                        var indexToRemove = possibleGemTypes.indexOf(missingGem);
                        possibleGemTypes.splice(indexToRemove, 1);
                    });
                    var leftGem = game.GemService.getGemAtPosition(this_1.world, grid, i - 1, j);
                    var secondLeftGem = game.GemService.getGemAtPosition(this_1.world, grid, i - 2, j);
                    if (leftGem != null && secondLeftGem != null && leftGem.GemType == secondLeftGem.GemType) {
                        this_1.removePossibleGemType(possibleGemTypes, leftGem.GemType);
                    }
                    var downGem = game.GemService.getGemAtPosition(this_1.world, grid, i, j - 1);
                    var secondDownGem = game.GemService.getGemAtPosition(this_1.world, grid, i, j - 2);
                    if (downGem != null && secondDownGem != null && downGem.GemType == secondDownGem.GemType) {
                        this_1.removePossibleGemType(possibleGemTypes, downGem.GemType);
                    }
                    var gemType = possibleGemTypes[Math.floor(Math.random() * possibleGemTypes.length)];
                    var gemEntity = game.GemService.createGemOfType(this_1.world, grid, game.GridService.getCellHashCode(grid, i, j), gemType);
                    createdGems.push(gemEntity);
                };
                var this_1 = this;
                for (var j = 0; j < grid.Height; j++) {
                    _loop_1(j);
                }
            }
            return createdGems;
        };
        CreateNewGemBoardSystem.prototype.removePossibleGemType = function (possibleGemTypes, gemType) {
            for (var i = 0; i < possibleGemTypes.length; i++) {
                if (possibleGemTypes[i] == gemType) {
                    possibleGemTypes.splice(i, 1);
                    i--;
                }
            }
        };
        CreateNewGemBoardSystem.prototype.placeStartEggs = function (gemEntities, grid) {
            var gemXPositions = [1, 2, 3, 4, 5, 6, 7];
            var levelEntity = game.GameService.getCurrentLevelEntity(this.world);
            if (this.world.hasComponent(levelEntity, game.LevelEggObjective)) {
                var levelEggObjective = this.world.getComponentData(levelEntity, game.LevelEggObjective);
                var eggCountAtStart = levelEggObjective.EggsInGridAtStart;
                for (var i = 0; i < eggCountAtStart; i++) {
                    var randomIndex = Math.floor(Math.random() * gemXPositions.length);
                    var randomGemXPosition = gemXPositions[randomIndex];
                    gemXPositions.splice(randomIndex, 1);
                    var gemEntity = new ut.Entity();
                    for (var j = 0; j < gemEntities.length; j++) {
                        var currentGemEntity = gemEntities[j];
                        var currentGem = this.world.getComponentData(currentGemEntity, game.Gem);
                        var gemPosition = game.GridService.getPositionFromCellHashCode(grid, currentGem.CellHashKey);
                        if (gemPosition.y == grid.Height - 1 && gemPosition.x == randomGemXPosition) {
                            gemEntity = gemEntities[j];
                            game.GemService.setSpecialGemType(this.world, currentGemEntity, currentGem, game.GemTypes.Egg);
                            this.world.setComponentData(gemEntity, currentGem);
                            gemEntities.splice(j, 1);
                            break;
                        }
                    }
                }
            }
        };
        CreateNewGemBoardSystem.prototype.placeStartPowerUps = function (gemEntities) {
            var level = game.GameService.getCurrentLevel(this.world);
            var powerUpsToPlace = level.StartPowerUps;
            for (var i = 0; i < powerUpsToPlace.length; i++) {
                var randomGemIndex = Math.floor(Math.random() * gemEntities.length);
                var gemEntity = gemEntities[randomGemIndex];
                var gem = this.world.getComponentData(gemEntity, game.Gem);
                game.GemService.setGemPowerUp(this.world, gemEntity, gem, powerUpsToPlace[i]);
                this.world.setComponentData(gemEntity, gem);
                gemEntities.splice(randomGemIndex, 1);
            }
        };
        return CreateNewGemBoardSystem;
    }(ut.ComponentSystem));
    game.CreateNewGemBoardSystem = CreateNewGemBoardSystem;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Create new gems to refill the grid after the player matched and destroyed gems.
     */
    var ReplenishGemBoardSystem = /** @class */ (function (_super) {
        __extends(ReplenishGemBoardSystem, _super);
        function ReplenishGemBoardSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ReplenishGemBoardSystem.prototype.OnUpdate = function () {
            if (game.GameService.getGameState(this.world).GameStateType != game.GameStateTypes.Game || game.GridService.isGridFrozen(this.world)) {
                return;
            }
            var possibleGemTypes = [0, 1, 2, 3, 4, 5];
            var currentLevel = game.GameService.getCurrentLevel(this.world);
            currentLevel.MissingGems.forEach(function (missingGem) {
                var indexToRemove = possibleGemTypes.indexOf(missingGem);
                possibleGemTypes.splice(indexToRemove, 1);
            });
            var grid = game.GridService.getGridConfiguration(this.world);
            for (var i = 0; i < grid.Width; i++) {
                var fallOffset = 0;
                for (var j = 0; j < grid.Height; j++) {
                    var existingGemEntity = game.GemService.getGemEntityAtPosition(this.world, grid, i, j);
                    if (existingGemEntity == null) {
                        var newGemEntity = game.GemService.createGem(this.world, grid, game.GridService.getCellHashCode(grid, i, j), possibleGemTypes);
                        var newGem = this.world.getComponentData(newGemEntity, game.Gem);
                        var spawnYPosition = grid.Height + fallOffset;
                        var transformLocalPosition = this.world.getComponentData(newGemEntity, ut.Core2D.TransformLocalPosition);
                        var newPosition = game.GridService.getGridToWorldPosition(grid, i, spawnYPosition);
                        transformLocalPosition.position.x = newPosition.x;
                        transformLocalPosition.position.y = newPosition.y;
                        this.world.setComponentData(newGemEntity, transformLocalPosition);
                        game.GemService.animateGemFall(this.world, grid, newGemEntity, newGem, spawnYPosition - j);
                        fallOffset++;
                    }
                }
            }
        };
        ReplenishGemBoardSystem = __decorate([
            ut.executeAfter(game.DeleteMatchedGemSystem),
            ut.executeAfter(game.CreateNewGemBoardSystem)
        ], ReplenishGemBoardSystem);
        return ReplenishGemBoardSystem;
    }(ut.ComponentSystem));
    game.ReplenishGemBoardSystem = ReplenishGemBoardSystem;
})(game || (game = {}));
/// <reference path="ReplenishGemBoardSystem.ts" />
var game;
(function (game) {
    /**
     * Find possible gem swap to create a match and mark these gems as a possible match.
     * Used by the match hint mechanism.
     */
    var FindPossibleMatchSystem = /** @class */ (function (_super) {
        __extends(FindPossibleMatchSystem, _super);
        function FindPossibleMatchSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FindPossibleMatchSystem.prototype.OnUpdate = function () {
            var _this = this;
            var matchableGemCount = 0;
            this.world.forEach([ut.Entity, game.Gem, game.MatchPossibility], function (entity, gem) {
                matchableGemCount++;
            });
            if (matchableGemCount > 0) {
                return;
            }
            var grid = game.GridService.getGridConfiguration(this.world);
            if (grid == null) {
                return;
            }
            var foundMatch = false;
            this.world.forEach([game.Gem], function (gem) {
                if (!foundMatch && _this.isMatchable(gem)) {
                    var gemPosition = game.GridService.getPositionFromCellHashCode(grid, gem.CellHashKey);
                    if ((gemPosition.x + gemPosition.y) % 2 == 0) {
                        var gemEntity = game.GemService.getGemEntity(_this.world, grid, gem.CellHashKey);
                        var leftGemEntity = game.GemService.getNeighborGem(_this.world, grid, gem, -1, 0);
                        var rightGemEntity = game.GemService.getNeighborGem(_this.world, grid, gem, 1, 0);
                        var downGemEntity = game.GemService.getNeighborGem(_this.world, grid, gem, 0, -1);
                        var upGemEntity = game.GemService.getNeighborGem(_this.world, grid, gem, 0, 1);
                        if (_this.trySwapAndMatch(grid, gemEntity, leftGemEntity)) {
                            foundMatch = true;
                        }
                        else if (_this.trySwapAndMatch(grid, gemEntity, rightGemEntity)) {
                            foundMatch = true;
                        }
                        else if (_this.trySwapAndMatch(grid, gemEntity, downGemEntity)) {
                            foundMatch = true;
                        }
                        else if (_this.trySwapAndMatch(grid, gemEntity, upGemEntity)) {
                            foundMatch = true;
                        }
                    }
                }
            });
            // TODO: if (foundMatch == false), trigger blocked!
        };
        FindPossibleMatchSystem.prototype.trySwapAndMatch = function (grid, gemEntity1, gemEntity2) {
            var gem1 = game.GemService.getGemFromEntity(this.world, gemEntity1);
            var gem2 = game.GemService.getGemFromEntity(this.world, gemEntity2);
            if (!this.isMatchable(gem1) || !this.isMatchable(gem2)) {
                return false;
            }
            game.GemService.swapGems(this.world, grid, gemEntity1, gem1, gemEntity2, gem2);
            var matched = this.checkMatchPossibility(grid, gem1, gem2);
            game.GemService.swapGems(this.world, grid, gemEntity1, gem1, gemEntity2, gem2);
            return matched;
        };
        FindPossibleMatchSystem.prototype.checkMatchPossibility = function (grid, swapedGem1, swapedGem2) {
            var matchPossibilityCount = 0;
            for (var i = 0; i < grid.GemEntities.length; i++) {
                var gemEntity = grid.GemEntities[i];
                if (!this.world.exists(gemEntity)) {
                    continue;
                }
                var gem = this.world.getComponentData(gemEntity, game.Gem);
                if (this.isMatchable(gem)) {
                    var leftGemEntity = game.GemService.getNeighborGem(this.world, grid, gem, -1, 0);
                    var rightGemEntity = game.GemService.getNeighborGem(this.world, grid, gem, 1, 0);
                    var downGemEntity = game.GemService.getNeighborGem(this.world, grid, gem, 0, -1);
                    var upGemEntity = game.GemService.getNeighborGem(this.world, grid, gem, 0, 1);
                    var leftGem = game.GemService.getGemFromEntity(this.world, leftGemEntity);
                    var rightGem = game.GemService.getGemFromEntity(this.world, rightGemEntity);
                    var downGem = game.GemService.getGemFromEntity(this.world, downGemEntity);
                    var upGem = game.GemService.getGemFromEntity(this.world, upGemEntity);
                    if (this.isMatchable(leftGem) && this.isMatchable(rightGem) && gem.GemType == leftGem.GemType && gem.GemType == rightGem.GemType) {
                        matchPossibilityCount++;
                        this.addMatchPossibility(gemEntity, gem, swapedGem1, swapedGem2);
                        this.addMatchPossibility(leftGemEntity, leftGem, swapedGem1, swapedGem2);
                        this.addMatchPossibility(rightGemEntity, rightGem, swapedGem1, swapedGem2);
                    }
                    else if (this.isMatchable(downGem) && this.isMatchable(upGem) && gem.GemType == downGem.GemType && gem.GemType == upGem.GemType) {
                        matchPossibilityCount++;
                        this.addMatchPossibility(gemEntity, gem, swapedGem1, swapedGem2);
                        this.addMatchPossibility(downGemEntity, downGem, swapedGem1, swapedGem2);
                        this.addMatchPossibility(upGemEntity, upGem, swapedGem1, swapedGem2);
                    }
                }
            }
            return matchPossibilityCount > 0;
        };
        FindPossibleMatchSystem.prototype.addMatchPossibility = function (gemEntity, gem, swapedGem1, swapedGem2) {
            if (!this.world.hasComponent(gemEntity, game.MatchPossibility)) {
                var matchPossibility = new game.MatchPossibility();
                matchPossibility.NeedsSwap = (gem.CellHashKey == swapedGem1.CellHashKey || gem.CellHashKey == swapedGem2.CellHashKey);
                matchPossibility.SwapGem1HashKey = swapedGem1.CellHashKey;
                matchPossibility.SwapGem2HashKey = swapedGem2.CellHashKey;
                this.world.addComponentData(gemEntity, matchPossibility);
            }
        };
        FindPossibleMatchSystem.prototype.isMatchable = function (gem) {
            return gem != null && gem.GemType != game.GemTypes.Egg && gem.GemType != game.GemTypes.ColorBomb;
        };
        FindPossibleMatchSystem = __decorate([
            ut.executeAfter(game.ReplenishGemBoardSystem)
        ], FindPossibleMatchSystem);
        return FindPossibleMatchSystem;
    }(ut.ComponentSystem));
    game.FindPossibleMatchSystem = FindPossibleMatchSystem;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Set gems IsFalling field to false after its falling animation ended.
     */
    var GemFallTweenEndSystem = /** @class */ (function (_super) {
        __extends(GemFallTweenEndSystem, _super);
        function GemFallTweenEndSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GemFallTweenEndSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([ut.Entity, ut.Tweens.TweenComponent, game.GemFallTweenEndCallback], function (tweenEntity, tween, callback) {
                var gem = _this.world.getComponentData(callback.GemEntity, game.Gem);
                if (tween.ended) {
                    if (gem.IsFalling) {
                        gem.IsFalling = false;
                        _this.world.setComponentData(callback.GemEntity, gem);
                    }
                    ut.Core2D.TransformService.destroyTree(_this.world, tweenEntity, true);
                }
            });
        };
        GemFallTweenEndSystem = __decorate([
            ut.executeBefore(game.CheckMatchSystem)
        ], GemFallTweenEndSystem);
        return GemFallTweenEndSystem;
    }(ut.ComponentSystem));
    game.GemFallTweenEndSystem = GemFallTweenEndSystem;
})(game || (game = {}));
var game;
(function (game) {
    var GemService = /** @class */ (function () {
        function GemService() {
        }
        GemService.getGemEntity = function (world, grid, cellHashCode) {
            var gemEntity = grid.GemEntities[cellHashCode];
            if (world.exists(gemEntity)) {
                return gemEntity;
            }
            else {
                return null;
            }
        };
        GemService.getGem = function (world, grid, cellHashCode) {
            var gemEntity = grid.GemEntities[cellHashCode];
            if (world.exists(gemEntity) && world.hasComponent(gemEntity, game.Gem)) {
                return world.getComponentData(gemEntity, game.Gem);
            }
            else {
                return null;
            }
        };
        GemService.getGemFromEntity = function (world, gemEntity) {
            if (world.exists(gemEntity) && world.hasComponent(gemEntity, game.Gem)) {
                return world.getComponentData(gemEntity, game.Gem);
            }
            else {
                return null;
            }
        };
        GemService.setGem = function (world, grid, cellHashCode, gemEntity) {
            if (gemEntity == null) {
                grid.GemEntities[cellHashCode] = new ut.Entity();
            }
            else {
                grid.GemEntities[cellHashCode] = gemEntity;
            }
            world.setConfigData(grid);
        };
        GemService.createGem = function (world, grid, cellHashCode, possibleGemTypes) {
            var gemType = possibleGemTypes[Math.floor(Math.random() * possibleGemTypes.length)];
            return this.createGemOfType(world, grid, cellHashCode, gemType);
        };
        GemService.createGemOfType = function (world, grid, cellHashCode, gemType) {
            var entity = ut.EntityGroup.instantiate(world, "game.Gem")[0];
            var gem = world.getComponentData(entity, game.Gem);
            gem.GemType = gemType;
            gem.CellHashKey = cellHashCode;
            world.setComponentData(entity, gem);
            this.setGem(world, grid, cellHashCode, entity);
            var gemName = "";
            if (gemType == game.GemTypes.Blue) {
                gemName = "Blue";
            }
            else if (gemType == game.GemTypes.Green) {
                gemName = "Green";
            }
            else if (gemType == game.GemTypes.Purple) {
                gemName = "Purple";
            }
            else if (gemType == game.GemTypes.Red) {
                gemName = "Red";
            }
            else if (gemType == game.GemTypes.Silver) {
                gemName = "Silver";
            }
            else if (gemType == game.GemTypes.Yellow) {
                gemName = "Yellow";
            }
            var pathGemSprite = "assets/sprites/Gems/" + "Gem_" + gemName;
            var spriteRenderer = world.getComponentData(entity, ut.Core2D.Sprite2DRenderer);
            spriteRenderer.sprite = world.getEntityByName(pathGemSprite + "_Plain");
            world.setComponentData(entity, spriteRenderer);
            var highlightedSpriteRenderer = world.getComponentData(gem.SpriteRendererHighlightGem, ut.Core2D.Sprite2DRenderer);
            highlightedSpriteRenderer.sprite = (world.getEntityByName(pathGemSprite + "_Highlighted"));
            world.setComponentData(gem.SpriteRendererHighlightGem, highlightedSpriteRenderer);
            return entity;
        };
        ;
        GemService.deleteGem = function (world, grid, gemEntity, gem) {
            var gemHashKey = gem.CellHashKey;
            if (world.hasComponent(gemEntity, game.MatchPossibility)) {
                world.removeComponent(gemEntity, game.MatchPossibility);
            }
            ut.Tweens.TweenService.removeAllTweens(world, gemEntity);
            ut.Core2D.TransformService.destroyTree(world, gemEntity, true);
            this.setGem(world, grid, gemHashKey, null);
        };
        GemService.setGemPowerUp = function (world, gemEntity, gem, powerUp) {
            gem.PowerUp = powerUp;
            if (powerUp == game.GemPowerUpTypes.SameColor) {
                this.setSpecialGemType(world, gemEntity, gem, game.GemTypes.ColorBomb);
            }
        };
        GemService.setSpecialGemType = function (world, gemEntity, gem, gemType) {
            var pathGemSprite = "assets/sprites/Gems/";
            if (gemType == game.GemTypes.ColorBomb) {
                gem.GemType = gemType;
                var spriteRenderer = world.getComponentData(gemEntity, ut.Core2D.Sprite2DRenderer);
                spriteRenderer.sprite = world.getEntityByName(pathGemSprite + "Gem_Colorless_Plain_Glow");
                world.setComponentData(gemEntity, spriteRenderer);
                var layerSorting = world.getComponentData(gemEntity, ut.Core2D.LayerSorting);
                layerSorting.order = 9;
                world.setComponentData(gemEntity, layerSorting);
            }
            else if (gemType == game.GemTypes.Egg) {
                gem.GemType = gemType;
                var spriteRenderer = world.getComponentData(gemEntity, ut.Core2D.Sprite2DRenderer);
                spriteRenderer.sprite = world.getEntityByName(pathGemSprite + "Gem_Egg_Plain");
                world.setComponentData(gemEntity, spriteRenderer);
                var spriteRendererHighlight = world.getComponentData(gem.SpriteRendererHighlightGem, ut.Core2D.Sprite2DRenderer);
                spriteRendererHighlight.sprite = world.getEntityByName(pathGemSprite + "Gem_Egg_Highlighted");
                world.setComponentData(gem.SpriteRendererHighlightGem, spriteRendererHighlight); // 
            }
        };
        GemService.addMatchedComponent = function (world, gemEntity, isMatch) {
            if (!world.hasComponent(gemEntity, game.Matched)) {
                var matched = new game.Matched();
                matched.CreatedPowerUp = game.GemPowerUpTypes.None;
                matched.IsMatch = isMatch;
                world.addComponentData(gemEntity, matched);
            }
        };
        GemService.getGemEntityAtPosition = function (world, grid, x, y) {
            return this.getGemEntity(world, grid, game.GridService.getCellHashCode(grid, x, y));
        };
        GemService.getGemAtPosition = function (world, grid, x, y) {
            return this.getGem(world, grid, game.GridService.getCellHashCode(grid, x, y));
        };
        GemService.getNeighborGem = function (world, grid, gem, xOffset, yOffset) {
            var gemPosition = game.GridService.getPositionFromCellHashCode(grid, gem.CellHashKey);
            var neighborGemHashKey = game.GridService.getCellHashCode(grid, gemPosition.x + xOffset, gemPosition.y + yOffset);
            return this.getGemEntity(world, grid, neighborGemHashKey);
        };
        GemService.areGemsNeighbor = function (grid, gem1, gem2) {
            var gem1Position = game.GridService.getPositionFromCellHashCode(grid, gem1.CellHashKey);
            var gem2Position = game.GridService.getPositionFromCellHashCode(grid, gem2.CellHashKey);
            return Math.abs(gem1Position.x - gem2Position.x) + Math.abs(gem1Position.y - gem2Position.y) == 1;
        };
        GemService.animateGemFall = function (world, grid, gemEntity, gem, fallHeight) {
            if (fallHeight == 0) {
                return;
            }
            var transformPosition = world.getComponentData(gemEntity, ut.Core2D.TransformLocalPosition);
            var targetPosition = game.GemService.getGemWorldPosition(grid, gem);
            var fallDuration = 0;
            for (var i = 1; i <= fallHeight; i++) {
                fallDuration += 0.4 / i;
            }
            var gemTween = new ut.Tweens.TweenDesc;
            gemTween.cid = ut.Core2D.TransformLocalPosition.cid;
            gemTween.offset = 0;
            gemTween.duration = fallDuration;
            gemTween.func = ut.Tweens.TweenFunc.OutBounce;
            gemTween.loop = ut.Core2D.LoopMode.Once;
            gemTween.destroyWhenDone = false;
            gemTween.t = 0.0;
            var tweenEntity = ut.Tweens.TweenService.addTweenVector3(world, gemEntity, transformPosition.position, targetPosition, gemTween);
            var gemCallback = new game.GemFallTweenEndCallback;
            gemCallback.GemEntity = gemEntity;
            world.addComponentData(tweenEntity, gemCallback);
            gem.IsFalling = true;
            world.setComponentData(gemEntity, gem);
        };
        GemService.swapGems = function (world, grid, gemEntity1, gem1, gemEntity2, gem2) {
            var gem2HashKey = gem2.CellHashKey;
            this.setGem(world, grid, gem1.CellHashKey, gemEntity2);
            gem2.CellHashKey = gem1.CellHashKey;
            world.setComponentData(gemEntity2, gem2);
            this.setGem(world, grid, gem2HashKey, gemEntity1);
            gem1.CellHashKey = gem2HashKey;
            world.setComponentData(gemEntity1, gem1);
        };
        GemService.animateGemsSwap = function (world, grid, gemEntity1, gem1, gemEntity2, gem2) {
            this.animateGemSwap(world, grid, gemEntity1, gem1);
            this.animateGemSwap(world, grid, gemEntity2, gem2);
        };
        GemService.animateGemSwap = function (world, grid, gemEntity, gem) {
            var transformPosition = world.getComponentData(gemEntity, ut.Core2D.TransformLocalPosition);
            var targetPosition = game.GemService.getGemWorldPosition(grid, gem);
            var gemTween = new ut.Tweens.TweenDesc;
            gemTween.cid = ut.Core2D.TransformLocalPosition.cid;
            gemTween.offset = 0;
            gemTween.duration = 0.12;
            gemTween.func = ut.Tweens.TweenFunc.Linear;
            gemTween.loop = ut.Core2D.LoopMode.Once;
            gemTween.destroyWhenDone = false;
            gemTween.t = 0.0;
            var tweenEntity = ut.Tweens.TweenService.addTweenVector3(world, gemEntity, transformPosition.position, targetPosition, gemTween);
            var gemCallback = new game.GemSwapTweenEndCallback;
            gemCallback.GemEntity = gemEntity;
            world.addComponentData(tweenEntity, gemCallback);
            gem.IsSwapping = true;
            world.setComponentData(gemEntity, gem);
        };
        GemService.getGemWorldPosition = function (grid, gem) {
            var gemPosition = game.GridService.getPositionFromCellHashCode(grid, gem.CellHashKey);
            var gemWorldPosition = game.GridService.getGridToWorldPosition(grid, gemPosition.x, gemPosition.y);
            return new Vector3(gemWorldPosition.x - 0.5, gemWorldPosition.y + 0.5, 0);
        };
        GemService.getGemParticleColor = function (world, gem) {
            switch (gem.GemType) {
                case game.GemTypes.Blue: {
                    return new ut.Core2D.Color(0 / 255, 102 / 255, 255 / 255, 1);
                }
                case game.GemTypes.Red: {
                    return new ut.Core2D.Color(236 / 255, 23 / 255, 40 / 255, 1);
                }
                case game.GemTypes.Green: {
                    return new ut.Core2D.Color(0, 1, 0, 1);
                }
                case game.GemTypes.Yellow: {
                    return new ut.Core2D.Color(255 / 255, 198 / 255, 0 / 255, 1);
                }
                case game.GemTypes.Silver: {
                    return new ut.Core2D.Color(199 / 255, 255 / 255, 255 / 255, 1);
                }
                case game.GemTypes.Purple: {
                    return new ut.Core2D.Color(205 / 255, 39 / 255, 255 / 255, 1);
                }
                default: {
                    return new ut.Core2D.Color(1, 1, 1, 1);
                }
            }
        };
        return GemService;
    }());
    game.GemService = GemService;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Set gems IsSwapping field to false after its swaping animation ended.
     */
    var GemSwapTweenEndSystem = /** @class */ (function (_super) {
        __extends(GemSwapTweenEndSystem, _super);
        function GemSwapTweenEndSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GemSwapTweenEndSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([ut.Entity, ut.Tweens.TweenComponent, game.GemSwapTweenEndCallback], function (tweenEntity, tween, callback) {
                var gem = _this.world.getComponentData(callback.GemEntity, game.Gem);
                if (tween.ended) {
                    if (gem.IsSwapping) {
                        gem.IsSwapping = false;
                        _this.world.setComponentData(callback.GemEntity, gem);
                    }
                    ut.Core2D.TransformService.destroyTree(_this.world, tweenEntity, true);
                }
            });
        };
        GemSwapTweenEndSystem = __decorate([
            ut.executeBefore(game.CheckMatchSystem)
        ], GemSwapTweenEndSystem);
        return GemSwapTweenEndSystem;
    }(ut.ComponentSystem));
    game.GemSwapTweenEndSystem = GemSwapTweenEndSystem;
})(game || (game = {}));
var game;
(function (game) {
    var PositionGemSystem = /** @class */ (function (_super) {
        __extends(PositionGemSystem, _super);
        function PositionGemSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PositionGemSystem.prototype.OnUpdate = function () {
            var grid = game.GridService.getGridConfiguration(this.world);
            this.world.forEach([game.Gem, ut.Core2D.TransformLocalPosition], function (gem, transformLocalPosition) {
                if (!gem.IsFalling && !gem.IsSwapping) {
                    transformLocalPosition.position = game.GemService.getGemWorldPosition(grid, gem);
                }
            });
        };
        PositionGemSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeEnd),
            ut.executeBefore(ut.Shared.RenderingFence)
        ], PositionGemSystem);
        return PositionGemSystem;
    }(ut.ComponentSystem));
    game.PositionGemSystem = PositionGemSystem;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Spawn particle explosions for each gem to destroy on the grid.
     */
    var SpawnGemExplosionSystem = /** @class */ (function (_super) {
        __extends(SpawnGemExplosionSystem, _super);
        function SpawnGemExplosionSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpawnGemExplosionSystem.prototype.OnUpdate = function () {
            var _this = this;
            if (game.GridService.isGridFrozen(this.world)) {
                return;
            }
            this.world.forEach([game.Gem, game.Matched, ut.Core2D.TransformLocalPosition], function (gemToDestroy, matched, gemTransformLocalPosition) {
                var particleEntity1 = ut.EntityGroup.instantiate(_this.world, "game.ExplodingGem1")[0];
                _this.initParticleSystem(particleEntity1, gemToDestroy, gemTransformLocalPosition);
                var particleEntity2 = ut.EntityGroup.instantiate(_this.world, "game.ExplodingGem2")[0];
                _this.initParticleSystem(particleEntity2, gemToDestroy, gemTransformLocalPosition);
            });
        };
        SpawnGemExplosionSystem.prototype.initParticleSystem = function (explosionEntity, gemToDestroy, gemTransformLocalPosition) {
            var emitter = this.world.getComponentData(explosionEntity, ut.Particles.ParticleEmitter);
            var particleSpriteRenderer = this.world.getComponentData(emitter.particle, ut.Core2D.Sprite2DRenderer);
            particleSpriteRenderer.color = game.GemService.getGemParticleColor(this.world, gemToDestroy);
            this.world.setComponentData(emitter.particle, particleSpriteRenderer);
            var gemPosition = gemTransformLocalPosition.position;
            var explosionTransformPosition = this.world.getComponentData(explosionEntity, ut.Core2D.TransformLocalPosition);
            var position = explosionTransformPosition.position;
            position.x = gemPosition.x;
            position.y = gemPosition.y;
            explosionTransformPosition.position = position;
            this.world.setComponentData(explosionEntity, explosionTransformPosition);
        };
        SpawnGemExplosionSystem = __decorate([
            ut.executeAfter(game.UpdateScoreSystem),
            ut.executeBefore(game.DeleteMatchedGemSystem)
        ], SpawnGemExplosionSystem);
        return SpawnGemExplosionSystem;
    }(ut.ComponentSystem));
    game.SpawnGemExplosionSystem = SpawnGemExplosionSystem;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Swap the clicked or dragged gems with another one.
     */
    var SwapGemSystem = /** @class */ (function (_super) {
        __extends(SwapGemSystem, _super);
        function SwapGemSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SwapGemSystem.prototype.OnUpdate = function () {
            if (game.GameService.getGameState(this.world).GameStateType != game.GameStateTypes.Game || !game.GameService.hasRemainingMoves(this.world)) {
                return;
            }
            var grid = game.GridService.getGridConfiguration(this.world);
            var previouslySelectedGemHashKey = -1;
            var previouslySelectedGemPosition;
            var hoveredGemHashKey = -1;
            var isGemAnimating = false;
            var pointerWorldPosition = game.InputService.getPointerWorldPosition(this.world, this.world.getEntityByName("GridCamera"));
            var pointerDown = ut.Runtime.Input.getMouseButtonDown(0) || (ut.Runtime.Input.touchCount() == 1 && ut.Runtime.Input.getTouch(0).phase == ut.Core2D.TouchState.Began);
            var pointerPressed = ut.Runtime.Input.getMouseButton(0) || (ut.Runtime.Input.touchCount() == 1 &&
                (ut.Runtime.Input.getTouch(0).phase == ut.Core2D.TouchState.Stationary || ut.Runtime.Input.getTouch(0).phase == ut.Core2D.TouchState.Moved));
            // Find the gem currently under the input pointer.
            this.world.forEach([game.Gem, ut.Core2D.TransformLocalPosition], function (gem, gemTransform) {
                if (gem.IsFalling || gem.IsSwapping) {
                    isGemAnimating = true;
                    return;
                }
                if (gem.IsSelected) {
                    previouslySelectedGemHashKey = gem.CellHashKey;
                    previouslySelectedGemPosition = new Vector2(gemTransform.position.x, gemTransform.position.y);
                    if (pointerDown) {
                        gem.IsSelected = false;
                    }
                }
                var gemPosition = new Vector2(gemTransform.position.x, gemTransform.position.y);
                if (Math.abs(gemPosition.x - pointerWorldPosition.x) <= grid.CellDimension / 2 && Math.abs(gemPosition.y - pointerWorldPosition.y) <= grid.CellDimension / 2) {
                    hoveredGemHashKey = gem.CellHashKey;
                }
            });
            if (isGemAnimating) {
                return;
            }
            if (pointerDown && hoveredGemHashKey != -1) {
                // Handle gem selection and two-step click match.
                var clickedGemEntity = game.GemService.getGemEntity(this.world, grid, hoveredGemHashKey);
                var clickedGem = game.GemService.getGemFromEntity(this.world, clickedGemEntity);
                var previouslySelectedGemEntity = game.GemService.getGemEntity(this.world, grid, previouslySelectedGemHashKey);
                var previouslySelectedGem = game.GemService.getGemFromEntity(this.world, previouslySelectedGemEntity);
                if (previouslySelectedGemHashKey != -1 && clickedGem.CellHashKey == previouslySelectedGem.CellHashKey) {
                    // Deselect gem if previously clicked gem is already selected.
                    previouslySelectedGem.IsSelected = false;
                    this.world.setComponentData(previouslySelectedGemEntity, previouslySelectedGem);
                }
                else if (previouslySelectedGemHashKey == -1 || !game.GemService.areGemsNeighbor(grid, clickedGem, previouslySelectedGem)) {
                    clickedGem.IsSelected = true;
                    this.world.setComponentData(clickedGemEntity, clickedGem);
                }
                else {
                    this.swapGems(grid, previouslySelectedGemEntity, previouslySelectedGem, clickedGemEntity, clickedGem);
                }
            }
            else if (pointerPressed && hoveredGemHashKey != previouslySelectedGemHashKey && previouslySelectedGemHashKey != -1) {
                // Trigger gem swap when the selected gem is dragged over another gem.
                var gemToSwapWithPosition = void 0;
                var gemPosition = game.GridService.getPositionFromCellHashCode(grid, previouslySelectedGemHashKey);
                var xDiff = pointerWorldPosition.x - previouslySelectedGemPosition.x;
                var yDiff = pointerWorldPosition.y - previouslySelectedGemPosition.y;
                var isHorizontalMatch = Math.abs(xDiff) > Math.abs(yDiff);
                if (isHorizontalMatch && xDiff > 0) {
                    gemToSwapWithPosition = new Vector2(gemPosition.x + 1, gemPosition.y);
                }
                else if (isHorizontalMatch && xDiff < 0) {
                    gemToSwapWithPosition = new Vector2(gemPosition.x - 1, gemPosition.y);
                }
                else if (!isHorizontalMatch && yDiff > 0) {
                    gemToSwapWithPosition = new Vector2(gemPosition.x, gemPosition.y + 1);
                }
                else if (!isHorizontalMatch && yDiff < 0) {
                    gemToSwapWithPosition = new Vector2(gemPosition.x, gemPosition.y - 1);
                }
                var previouslySelectedGemEntity = game.GemService.getGemEntity(this.world, grid, previouslySelectedGemHashKey);
                var previouslySelectedGem = game.GemService.getGemFromEntity(this.world, previouslySelectedGemEntity);
                var gemToSwapWithEntity = game.GemService.getGemEntityAtPosition(this.world, grid, gemToSwapWithPosition.x, gemToSwapWithPosition.y);
                var gemToSwapWith = game.GemService.getGemFromEntity(this.world, gemToSwapWithEntity);
                if (gemToSwapWith != null) {
                    this.swapGems(grid, previouslySelectedGemEntity, previouslySelectedGem, gemToSwapWithEntity, gemToSwapWith);
                }
                previouslySelectedGem.IsSelected = false;
                this.world.setComponentData(previouslySelectedGemEntity, previouslySelectedGem);
            }
        };
        SwapGemSystem.prototype.swapGems = function (grid, gemEntity1, gem1, gemEntity2, gem2) {
            if (!this.world.hasComponent(gemEntity1, game.GemSwap)) {
                this.world.addComponent(gemEntity1, game.GemSwap);
            }
            if (!this.world.hasComponent(gemEntity2, game.GemSwap)) {
                this.world.addComponent(gemEntity2, game.GemSwap);
            }
            game.GemService.swapGems(this.world, grid, gemEntity1, gem1, gemEntity2, gem2);
            game.GemService.animateGemsSwap(this.world, grid, gemEntity1, gem1, gemEntity2, gem2);
            game.SoundService.play(this.world, "GemSwapSound");
        };
        SwapGemSystem = __decorate([
            ut.executeBefore(game.CheckMatchSystem)
        ], SwapGemSystem);
        return SwapGemSystem;
    }(ut.ComponentSystem));
    game.SwapGemSystem = SwapGemSystem;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Update the dinosaur claw/stratch animation and the laser gem destroy animations.
     */
    var UpdateDestroyLineAnimation = /** @class */ (function (_super) {
        __extends(UpdateDestroyLineAnimation, _super);
        function UpdateDestroyLineAnimation() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UpdateDestroyLineAnimation.prototype.OnUpdate = function () {
            var _this = this;
            var deltaTime = this.scheduler.deltaTime();
            // Update the claw/stratch animation when using a special gem power up.
            this.world.forEach([game.DestroyLineAnimation, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.Sprite2DRendererOptions, ut.Core2D.Sprite2DRenderer], function (destroyLineAnimation, transformPosition, transformRotation, rendererOptions, spriteRenderer) {
                destroyLineAnimation.Timer += deltaTime;
                var position = transformPosition.position;
                position.x = destroyLineAnimation.StartPositionX;
                position.y = destroyLineAnimation.StartPositionY;
                transformPosition.position = position;
                var scaleRatio = Math.min(1, destroyLineAnimation.Timer / destroyLineAnimation.ScaleDuration);
                var startPosition = new Vector2(destroyLineAnimation.StartPositionX, destroyLineAnimation.StartPositionY);
                var endPosition = new Vector2(destroyLineAnimation.EndPositionX, destroyLineAnimation.EndPositionY);
                var startToEndDistance = startPosition.distanceTo(endPosition);
                rendererOptions.size = new Vector2(rendererOptions.size.x, scaleRatio * startToEndDistance);
                var colorRatio = Math.min(1, destroyLineAnimation.Timer / destroyLineAnimation.Duration);
                spriteRenderer.color = ut.Interpolation.InterpolationService.evaluateCurveColor(_this.world, colorRatio, destroyLineAnimation.ColorGradient);
                var angle = Math.atan2(endPosition.y - startPosition.y, endPosition.x - startPosition.x) - Math.PI / 2;
                transformRotation.rotation = new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), angle);
            });
            // Update the gem laser animation when using a special 5-match same color bomb power up.
            this.world.forEach([game.DestroyLaserAnimation, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.Sprite2DRendererOptions], function (destroyLaserAnimation, transformPosition, transformRotation, rendererOptions) {
                destroyLaserAnimation.Timer += deltaTime;
                var position = transformPosition.position;
                position.x = destroyLaserAnimation.StartPositionX;
                position.y = destroyLaserAnimation.StartPositionY;
                transformPosition.position = position;
                var startPosition = new Vector2(destroyLaserAnimation.StartPositionX, destroyLaserAnimation.StartPositionY);
                var endPosition = new Vector2(destroyLaserAnimation.EndPositionX, destroyLaserAnimation.EndPositionY);
                var startToEndDistance = startPosition.distanceTo(endPosition);
                rendererOptions.size = new Vector2(startToEndDistance, rendererOptions.size.y);
                var angle = Math.atan2(endPosition.y - startPosition.y, endPosition.x - startPosition.x);
                transformRotation.rotation = new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), angle);
            });
        };
        UpdateDestroyLineAnimation = __decorate([
            ut.executeAfter(ut.Shared.UserCodeEnd),
            ut.executeBefore(ut.Shared.RenderingFence)
        ], UpdateDestroyLineAnimation);
        return UpdateDestroyLineAnimation;
    }(ut.ComponentSystem));
    game.UpdateDestroyLineAnimation = UpdateDestroyLineAnimation;
})(game || (game = {}));
var game;
(function (game) {
    var UpdateGemVisualSystem = /** @class */ (function (_super) {
        __extends(UpdateGemVisualSystem, _super);
        function UpdateGemVisualSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UpdateGemVisualSystem.prototype.OnUpdate = function () {
            var _this = this;
            var showHintDelay = game.GameService.getGameState(this.world).ShowHintDelay;
            var deltaTime = this.scheduler.deltaTime();
            this.world.forEach([ut.Entity, game.Gem], function (gemEntity, gem) {
                _this.updateHighlightAlpha(gemEntity, gem, showHintDelay, deltaTime);
                _this.updatePowerUpVisual(gem);
            });
        };
        UpdateGemVisualSystem.prototype.updateHighlightAlpha = function (gemEntity, gem, showHintDelay, deltaTime) {
            var highlightAlpha = 0;
            if (gem.IsSelected && gem.GemType != game.GemTypes.ColorBomb) {
                // Highlight gem if it's selected.
                highlightAlpha = 1;
            }
            else if (this.world.hasComponent(gemEntity, game.MatchPossibility)) {
                // Update the gem highlight opacity animation for match hint.
                var matchPossibility = this.world.getComponentData(gemEntity, game.MatchPossibility);
                var timer = matchPossibility.HintTimer;
                timer += deltaTime;
                matchPossibility.HintTimer = timer;
                this.world.setComponentData(gemEntity, matchPossibility);
                if (timer > showHintDelay) {
                    highlightAlpha = 1 - ((Math.cos(6 * (timer - showHintDelay)) + 1) / 2);
                }
            }
            if (highlightAlpha != gem.HighlightAlpha) {
                gem.HighlightAlpha = highlightAlpha;
                var highlightSpriteRenderer = this.world.getComponentData(gem.SpriteRendererHighlightGem, ut.Core2D.Sprite2DRenderer);
                var color = highlightSpriteRenderer.color;
                color.a = highlightAlpha;
                highlightSpriteRenderer.color = color;
                this.world.setComponentData(gem.SpriteRendererHighlightGem, highlightSpriteRenderer);
            }
        };
        UpdateGemVisualSystem.prototype.updatePowerUpVisual = function (gem) {
            if (gem.CurrentPowerUpVisual != gem.PowerUp) {
                gem.CurrentPowerUpVisual = gem.PowerUp;
                game.GameService.setEntityEnabled(this.world, gem.RowPowerUpVisual, gem.PowerUp == game.GemPowerUpTypes.Row);
                game.GameService.setEntityEnabled(this.world, gem.ColumnPowerUpVisual, gem.PowerUp == game.GemPowerUpTypes.Column);
                game.GameService.setEntityEnabled(this.world, gem.SquarePowerUpVisual, gem.PowerUp == game.GemPowerUpTypes.Square);
                game.GameService.setEntityEnabled(this.world, gem.DiagonalPowerUpVisual, gem.PowerUp == game.GemPowerUpTypes.DiagonalCross);
                game.GameService.setEntityEnabled(this.world, gem.SameColorPowerUpVisual, gem.PowerUp == game.GemPowerUpTypes.SameColor);
            }
        };
        UpdateGemVisualSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeEnd),
            ut.executeBefore(ut.Shared.RenderingFence)
        ], UpdateGemVisualSystem);
        return UpdateGemVisualSystem;
    }(ut.ComponentSystem));
    game.UpdateGemVisualSystem = UpdateGemVisualSystem;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Update the gem match flying score gain label animation.
     */
    var UpdateScoreGainLabel = /** @class */ (function (_super) {
        __extends(UpdateScoreGainLabel, _super);
        function UpdateScoreGainLabel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UpdateScoreGainLabel.prototype.OnUpdate = function () {
            var _this = this;
            var deltaTime = this.scheduler.deltaTime();
            this.world.forEach([ut.Entity, game.ScoreGainLabel, ut.Core2D.TransformLocalPosition], function (entity, scoreGainLabel, transformLocalPosition) {
                var progress = scoreGainLabel.Timer / scoreGainLabel.Duration;
                if (progress > 1) {
                    ut.Core2D.TransformService.destroyTree(_this.world, entity, true);
                }
                else {
                    scoreGainLabel.Timer += deltaTime;
                    var position = transformLocalPosition.position;
                    position.y += deltaTime * scoreGainLabel.SpeedY;
                    transformLocalPosition.position = position;
                    var alpha = ut.Interpolation.InterpolationService.evaluateCurveFloat(_this.world, progress, scoreGainLabel.AlphaCurve);
                    var childCount = ut.Core2D.TransformService.countChildren(_this.world, entity);
                    for (var i = 0; i < childCount; i++) {
                        var characterEntity = ut.Core2D.TransformService.getChild(_this.world, entity, i);
                        var spriteRenderer = _this.world.getComponentData(characterEntity, ut.Core2D.Sprite2DRenderer);
                        spriteRenderer.color = new ut.Core2D.Color(spriteRenderer.color.r, spriteRenderer.color.g, spriteRenderer.color.b, alpha);
                        _this.world.setComponentData(characterEntity, spriteRenderer);
                    }
                }
            });
        };
        return UpdateScoreGainLabel;
    }(ut.ComponentSystem));
    game.UpdateScoreGainLabel = UpdateScoreGainLabel;
})(game || (game = {}));
var game;
(function (game) {
    var GridService = /** @class */ (function () {
        function GridService() {
        }
        GridService.getGridConfiguration = function (world) {
            return world.getConfigData(game.GridConfiguration);
        };
        GridService.clear = function (world, grid) {
            grid.IsGridCreated = false;
            grid.CellEntities = new Array(grid.Width * grid.Height);
            for (var i = 0; i < grid.CellEntities.length; i++) {
                grid.CellEntities[i] = new ut.Entity;
            }
            grid.GemEntities = new Array(grid.Width * grid.Height);
            for (var i = 0; i < grid.GemEntities.length; i++) {
                grid.GemEntities[i] = new ut.Entity;
            }
            world.setConfigData(grid);
        };
        ;
        GridService.isGridFrozen = function (world) {
            return (this.getGridConfiguration(world).FrozenGridTimer > 0);
        };
        GridService.getCellAt = function (world, grid, x, y) {
            var hashCode = this.getCellHashCode(grid, x, y);
            if (world.exists(grid.CellEntities[hashCode])) {
                return world.getComponentData(grid.CellEntities[hashCode], game.Cell);
            }
            else {
                return null;
            }
        };
        GridService.getCellHashCode = function (grid, x, y) {
            return x * (grid.Width + 1) + y;
        };
        GridService.getPositionFromCellHashCode = function (grid, hashCode) {
            var width = (grid.Width + 1);
            return new Vector2(Math.floor(hashCode / width), hashCode % width);
        };
        GridService.getCellWorldPosition = function (grid, cell) {
            return this.getGridToWorldPosition(grid, cell.X, cell.Y);
        };
        GridService.getGridToWorldPosition = function (grid, x, y) {
            var cellSize = grid.CellDimension;
            var gridWidth = cellSize * grid.Width;
            var gridHeight = cellSize * grid.Height;
            var position = new Vector3(x * cellSize - gridWidth / 2 + cellSize / 2, grid.GridDefaultPositionY + grid.GridOffsetPositionY + y * cellSize - gridHeight / 2 + cellSize / 2, 0);
            return position;
        };
        GridService.createGridCells = function (world, grid) {
            this.clear(world, grid);
            for (var i = 0; i < grid.Width; i++) {
                for (var j = 0; j < grid.Height; j++) {
                    var cell = this.getCellAt(world, grid, i, j);
                    if (cell == null) {
                        var entity = this.createCell(grid, world, i, j);
                        cell = world.getComponentData(entity, game.Cell);
                        var transformLocalPosition = world.getComponentData(entity, ut.Core2D.TransformLocalPosition);
                        var position = this.getCellWorldPosition(grid, cell);
                        transformLocalPosition.position.x = position.x;
                        transformLocalPosition.position.y = position.y;
                        world.setComponentData(entity, transformLocalPosition);
                        var spriteRendererOptions = world.getComponentData(entity, ut.Core2D.Sprite2DRendererOptions);
                        spriteRendererOptions.size = new Vector2(cell.Size, cell.Size);
                        world.setComponentData(entity, spriteRendererOptions);
                        var spriteName = "Center";
                        if (i == 0 && j == 0) {
                            spriteName = "BottomLeft";
                        }
                        else if (i == grid.Width - 1 && j == 0) {
                            spriteName = "BottomRight";
                        }
                        else if (i == grid.Width - 1 && j == grid.Height - 1) {
                            spriteName = "TopRight";
                        }
                        else if (i == 0 && j == grid.Height - 1) {
                            spriteName = "TopLeft";
                        }
                        else if (j == 0) {
                            spriteName = "Bottom";
                        }
                        else if (i == grid.Width - 1) {
                            spriteName = "Right";
                        }
                        var path = "assets/sprites/Cells/" + spriteName;
                        var spriteRenderer = world.getComponentData(entity, ut.Core2D.Sprite2DRenderer);
                        spriteRenderer.sprite = world.getEntityByName(path);
                        world.setComponentData(entity, spriteRenderer);
                    }
                }
            }
            world.setConfigData(grid);
        };
        GridService.createCell = function (grid, world, x, y) {
            var cellEntity = ut.EntityGroup.instantiate(world, "game.Cell")[0];
            var cell = world.getComponentData(cellEntity, game.Cell);
            cell.X = x;
            cell.Y = y;
            world.setComponentData(cellEntity, cell);
            grid.CellEntities[this.getCellHashCode(grid, x, y)] = cellEntity;
            return cellEntity;
        };
        ;
        return GridService;
    }());
    game.GridService = GridService;
})(game || (game = {}));
var game;
(function (game) {
    var ChangeSkinSystem = /** @class */ (function (_super) {
        __extends(ChangeSkinSystem, _super);
        function ChangeSkinSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ChangeSkinSystem.prototype.OnUpdate = function () {
            var _this = this;
            var currentSkin = game.SkinService.getCurrentSkin(this.world);
            // Update sprite renderer sprites if the current skin changed.
            this.world.forEach([game.SpriteRendererSkin, ut.Core2D.Sprite2DRenderer], function (spriteRendererSkin, spriteRenderer) {
                if (spriteRendererSkin.CurrentSkinIndex != currentSkin) {
                    // Set sprite.
                    if (spriteRendererSkin.SpritePath.length > 0) {
                        var spritePath = "assets/sprites/" + spriteRendererSkin.SpritePath;
                        while (spritePath.indexOf("[Skin]") > -1) {
                            spritePath = spritePath.replace("[Skin]", game.SkinService.getCurrentSkinName(_this.world));
                        }
                        spriteRenderer.sprite = _this.world.getEntityByName(spritePath);
                    }
                    // Set solor by skin.
                    spriteRendererSkin.SkinColorInfo.forEach(function (skinInfo) {
                        if (skinInfo.Skin == currentSkin) {
                            spriteRenderer.color = skinInfo.Color;
                        }
                    });
                    spriteRendererSkin.CurrentSkinIndex = currentSkin;
                }
            });
            // Update animation sprite sequences if the current skin changed.
            this.world.forEach([game.SpriteSequenceSkin, ut.Core2D.Sprite2DSequence], function (spriteSequenceSkin, spriteSequence) {
                if (spriteSequenceSkin.CurrentSkinIndex != currentSkin) {
                    // Set sprite.
                    var sprites = new Array();
                    for (var i = 0; i < spriteSequenceSkin.SpritePaths.length; i++) {
                        var spritePath = "assets/sprites/" + spriteSequenceSkin.SpritePaths[i];
                        while (spritePath.indexOf("[Skin]") > -1) {
                            spritePath = spritePath.replace("[Skin]", game.SkinService.getCurrentSkinName(_this.world));
                        }
                        var sprite = _this.world.getEntityByName(spritePath);
                        sprites.push(sprite);
                    }
                    spriteSequence.sprites = sprites;
                    spriteSequenceSkin.CurrentSkinIndex = currentSkin;
                }
            });
        };
        return ChangeSkinSystem;
    }(ut.ComponentSystem));
    game.ChangeSkinSystem = ChangeSkinSystem;
})(game || (game = {}));
var game;
(function (game) {
    var SkinService = /** @class */ (function () {
        function SkinService() {
        }
        SkinService.getSkinConfiguration = function (world) {
            return world.getConfigData(game.SkinConfiguration);
        };
        SkinService.getCurrentSkin = function (world) {
            return this.getSkinConfiguration(world).CurrentSkin;
        };
        SkinService.setCurrentSkin = function (world, skin) {
            var skinData = this.getSkinConfiguration(world);
            skinData.CurrentSkin = skin;
            world.setConfigData(skinData);
        };
        SkinService.getCurrentSkinName = function (world) {
            return this.getSkinName(this.getCurrentSkin(world));
        };
        SkinService.getSkinName = function (skin) {
            switch (skin) {
                case game.SkinTypes.Camp:
                    return "Camp";
                case game.SkinTypes.Farm:
                    return "Farm";
                case game.SkinTypes.City:
                default:
                    return "City";
            }
        };
        return SkinService;
    }());
    game.SkinService = SkinService;
})(game || (game = {}));
var game;
(function (game) {
    var TutorialService = /** @class */ (function () {
        function TutorialService() {
        }
        TutorialService.getTutorialConfiguration = function (world) {
            return world.getConfigData(game.TutorialConfiguration);
        };
        TutorialService.init = function (world) {
            var tutorialConfig = this.getTutorialConfiguration(world);
            tutorialConfig.IsMatchTutorialDone = game.UserDataService.getIsMatchTutorialDone();
            tutorialConfig.IsEggTutorialDone = game.UserDataService.getIsEggTutorialDone();
            tutorialConfig.IsSurvivalTutorialDone = game.UserDataService.getIsSurvivalTutorialDone();
            world.setConfigData(tutorialConfig);
        };
        TutorialService.getIsMatchTutorialDone = function (world) {
            return this.getTutorialConfiguration(world).IsMatchTutorialDone;
        };
        TutorialService.setIsMatchTutorialDone = function (world, value) {
            var tutorialConfig = this.getTutorialConfiguration(world);
            tutorialConfig.IsMatchTutorialDone = value;
            world.setConfigData(tutorialConfig);
            game.UserDataService.setIsMatchTutorialDone(value);
        };
        TutorialService.getIsEggTutorialDone = function (world) {
            return this.getTutorialConfiguration(world).IsEggTutorialDone;
        };
        TutorialService.setIsEggTutorialDone = function (world, value) {
            var tutorialConfig = this.getTutorialConfiguration(world);
            tutorialConfig.IsEggTutorialDone = value;
            world.setConfigData(tutorialConfig);
            game.UserDataService.setIsEggTutorialDone(value);
        };
        TutorialService.getIsSurvivalTutorialDone = function (world) {
            return this.getTutorialConfiguration(world).IsSurvivalTutorialDone;
        };
        TutorialService.setIsSurvivalTutorialDone = function (world, value) {
            var tutorialConfig = this.getTutorialConfiguration(world);
            tutorialConfig.IsSurvivalTutorialDone = value;
            world.setConfigData(tutorialConfig);
            game.UserDataService.setIsSurvivalTutorialDone(value);
        };
        TutorialService.spawnTutorialHighlightOnGems = function (world, gemTransformPositions, labelPositionY) {
            if (labelPositionY === void 0) { labelPositionY = -1; }
            var minX = 1000;
            var maxX = -1000;
            var minY = 1000;
            var maxY = -1000;
            gemTransformPositions.forEach(function (transformPosition) {
                if (transformPosition.x < minX) {
                    minX = transformPosition.x;
                }
                if (transformPosition.x > maxX) {
                    maxX = transformPosition.x;
                }
                if (transformPosition.y < minY) {
                    minY = transformPosition.y;
                }
                if (transformPosition.y > maxY) {
                    maxY = transformPosition.y;
                }
            });
            var padding = 19;
            minX -= padding;
            maxX += padding;
            minY -= padding;
            maxY += padding;
            var position = new Vector2(minX + (maxX - minX) / 2, minY + (maxY - minY) / 2);
            var size = new Vector2(maxX - minX, maxY - minY);
            return this.spawnTutorialHighlight(world, position, size, labelPositionY);
        };
        // Spawn an highlight on the screen, darkening everything except a rectangle to draw attention to its content.
        TutorialService.spawnTutorialHighlight = function (world, position, size, labelPositionY) {
            if (labelPositionY === void 0) { labelPositionY = -1; }
            var tutorialHighlightEntity = ut.EntityGroup.instantiate(world, "game.TutorialHighlight")[0];
            var tutorialHighlight = world.getComponentData(tutorialHighlightEntity, game.TutorialHighlight);
            var highlightRectTransform = world.getComponentData(tutorialHighlight.HighlightRect, ut.UILayout.RectTransform);
            highlightRectTransform.anchoredPosition = position;
            highlightRectTransform.sizeDelta = size;
            world.setComponentData(tutorialHighlight.HighlightRect, highlightRectTransform);
            var instructionsDefaultPositionY = labelPositionY == -1 ? position.y + size.y / 2 + 10 : labelPositionY;
            tutorialHighlight.LabelDefaultPositionY = instructionsDefaultPositionY;
            world.setComponentData(tutorialHighlightEntity, tutorialHighlight);
            var labelInstructionsRectTransform = world.getComponentData(tutorialHighlight.LabelInstructions, ut.UILayout.RectTransform);
            labelInstructionsRectTransform.anchoredPosition.x = 0;
            labelInstructionsRectTransform.anchoredPosition.y = instructionsDefaultPositionY;
            world.setComponentData(tutorialHighlight.LabelInstructions, labelInstructionsRectTransform);
            return tutorialHighlightEntity;
        };
        return TutorialService;
    }());
    game.TutorialService = TutorialService;
})(game || (game = {}));
var game;
(function (game) {
    var UpdateEggTutorialSystem = /** @class */ (function (_super) {
        __extends(UpdateEggTutorialSystem, _super);
        function UpdateEggTutorialSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UpdateEggTutorialSystem.prototype.OnUpdate = function () {
            var _this = this;
            if (game.GameService.getGameState(this.world).GameStateType != game.GameStateTypes.Game ||
                !this.world.hasComponent(game.GameService.getCurrentLevelEntity(this.world), game.LevelEggObjective) ||
                game.TutorialService.getIsEggTutorialDone(this.world)) {
                return;
            }
            var tutorialHighlightEntity = this.world.getEntityByName("TutorialHighlight");
            if (!this.world.exists(tutorialHighlightEntity) && game.GameService.getGameState(this.world).CurrentScore == 0) {
                // Find gem positions in the bottom row.
                var grid_1 = game.GridService.getGridConfiguration(this.world);
                var gemTransformPositions_1 = [];
                this.world.forEach([game.Gem], function (gem) {
                    var gemPosition = game.GridService.getPositionFromCellHashCode(grid_1, gem.CellHashKey);
                    if (gemPosition.y == 0) {
                        var gemWorldPosition = game.GemService.getGemWorldPosition(grid_1, gem);
                        gemTransformPositions_1.push(new Vector2(gemWorldPosition.x, gemWorldPosition.y));
                    }
                });
                if (gemTransformPositions_1.length > 0) {
                    // Highlight gems in the bottom row.
                    var newTutorialHighlightEntity = game.TutorialService.spawnTutorialHighlightOnGems(this.world, gemTransformPositions_1, 35);
                    var tutorialHighlight = this.world.getComponentData(newTutorialHighlightEntity, game.TutorialHighlight);
                    tutorialHighlight.AutoCloseDelay = 4;
                    this.world.setComponentData(newTutorialHighlightEntity, tutorialHighlight);
                    var labelInstructions = this.world.getComponentData(tutorialHighlight.LabelInstructions, ut.Text.Text2DRenderer);
                    labelInstructions.text = game.LocalizationService.getText(this.world, "Tutorial_Eggs");
                    this.world.setComponentData(tutorialHighlight.LabelInstructions, labelInstructions);
                    this.world.forEach([game.Gem], function (gem) {
                        if (gem.GemType == game.GemTypes.Egg) {
                            // Spawn an arrow pointer that will animate from the egg to the bottom row.
                            var tutorialPointerEntity = ut.EntityGroup.instantiate(_this.world, "game.TutorialEggPointer")[0];
                            var tutorialPointer = _this.world.getComponentData(tutorialPointerEntity, game.TutorialPointer);
                            var startWorldPosition = game.GemService.getGemWorldPosition(grid_1, gem);
                            var endWorldPosition = game.GridService.getGridToWorldPosition(grid_1, game.GridService.getPositionFromCellHashCode(grid_1, gem.CellHashKey).x, 0);
                            tutorialPointer.StartPosition.x = startWorldPosition.x;
                            tutorialPointer.StartPosition.y = startWorldPosition.y - 12;
                            tutorialPointer.EndPosition.x = endWorldPosition.x;
                            tutorialPointer.EndPosition.y = endWorldPosition.y + 12;
                            _this.world.setComponentData(tutorialPointerEntity, tutorialPointer);
                            var tutorialEggPointer = _this.world.getComponentData(tutorialPointerEntity, game.TutorialEggPointer);
                            var tutorialPointerTransform = _this.world.getComponentData(tutorialEggPointer.ImageEgg, ut.Core2D.TransformLocalPosition);
                            tutorialPointerTransform.position.x = startWorldPosition.x;
                            tutorialPointerTransform.position.y = startWorldPosition.y;
                            _this.world.setComponentData(tutorialEggPointer.ImageEgg, tutorialPointerTransform);
                        }
                    });
                }
            }
            else if (this.world.exists(tutorialHighlightEntity)) {
                // Auto close the egg tutorial after a delay.
                var tutorialHighlight = this.world.getComponentData(tutorialHighlightEntity, game.TutorialHighlight);
                if (!tutorialHighlight.IsClosing && tutorialHighlight.Timer > tutorialHighlight.AutoCloseDelay) {
                    tutorialHighlight.IsClosing = true;
                    tutorialHighlight.Timer = 0;
                    this.world.setComponentData(tutorialHighlightEntity, tutorialHighlight);
                    game.TutorialService.setIsEggTutorialDone(this.world, true);
                }
            }
        };
        return UpdateEggTutorialSystem;
    }(ut.ComponentSystem));
    game.UpdateEggTutorialSystem = UpdateEggTutorialSystem;
})(game || (game = {}));
var game;
(function (game) {
    var UpdateMatchTutorialSystem = /** @class */ (function (_super) {
        __extends(UpdateMatchTutorialSystem, _super);
        function UpdateMatchTutorialSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UpdateMatchTutorialSystem.prototype.OnUpdate = function () {
            var _this = this;
            if (game.GameService.getGameState(this.world).GameStateType != game.GameStateTypes.Game ||
                game.GameService.getCurrentLevel(this.world).LevelID != 1 ||
                game.TutorialService.getIsMatchTutorialDone(this.world)) {
                return;
            }
            var tutorialHighlightEntity = this.world.getEntityByName("TutorialHighlight");
            if (!this.world.exists(tutorialHighlightEntity) && game.GameService.getGameState(this.world).CurrentScore == 0) {
                var grid = game.GridService.getGridConfiguration(this.world);
                var gemTransformPositions_2 = [];
                var gemToSwap_1 = -1;
                var gem1ToSwap_1 = -1;
                var gem2ToSwap_1 = -1;
                this.world.forEach([game.Gem, game.MatchPossibility, ut.Core2D.TransformLocalPosition], function (gem, matchPossibility, transformPosition) {
                    // Change hint timer to show hint highlight right away.
                    matchPossibility.HintTimer = game.GameService.getGameState(_this.world).ShowHintDelay;
                    gemTransformPositions_2.push(new Vector2(transformPosition.position.x, transformPosition.position.y));
                    gem1ToSwap_1 = matchPossibility.SwapGem1HashKey;
                    gem2ToSwap_1 = matchPossibility.SwapGem2HashKey;
                    if (matchPossibility.NeedsSwap) {
                        gemToSwap_1 = gem.CellHashKey;
                    }
                });
                if (gemTransformPositions_2.length > 0) {
                    var gemToSwapWith = gemToSwap_1 == gem1ToSwap_1 ? gem2ToSwap_1 : gem1ToSwap_1;
                    var newTutorialHighlightEntity = game.TutorialService.spawnTutorialHighlightOnGems(this.world, gemTransformPositions_2);
                    var tutorialHighlight = this.world.getComponentData(newTutorialHighlightEntity, game.TutorialHighlight);
                    var labelInstructions = this.world.getComponentData(tutorialHighlight.LabelInstructions, ut.Text.Text2DRenderer);
                    labelInstructions.text = game.LocalizationService.getText(this.world, "Tutorial_Match");
                    this.world.setComponentData(tutorialHighlight.LabelInstructions, labelInstructions);
                    var tutorialPointerEntity = ut.EntityGroup.instantiate(this.world, "game.TutorialMatchPointer")[0];
                    var tutorialPointer = this.world.getComponentData(tutorialPointerEntity, game.TutorialPointer);
                    var startPosition = game.GridService.getPositionFromCellHashCode(grid, gemToSwap_1);
                    var endPosition = game.GridService.getPositionFromCellHashCode(grid, gemToSwapWith);
                    var startWorldPosition = game.GridService.getGridToWorldPosition(grid, startPosition.x, startPosition.y);
                    var endWorldPosition = game.GridService.getGridToWorldPosition(grid, endPosition.x, endPosition.y);
                    tutorialPointer.StartPosition.x = startWorldPosition.x;
                    tutorialPointer.StartPosition.y = startWorldPosition.y;
                    tutorialPointer.EndPosition.x = endWorldPosition.x;
                    tutorialPointer.EndPosition.y = endWorldPosition.y;
                    this.world.setComponentData(tutorialPointerEntity, tutorialPointer);
                }
            }
            else if (this.world.exists(tutorialHighlightEntity) && game.GameService.getGameState(this.world).CurrentScore > 0) {
                var tutorialHighlight = this.world.getComponentData(tutorialHighlightEntity, game.TutorialHighlight);
                if (!tutorialHighlight.IsClosing) {
                    tutorialHighlight.IsClosing = true;
                    tutorialHighlight.Timer = 0;
                    this.world.setComponentData(tutorialHighlightEntity, tutorialHighlight);
                    game.TutorialService.setIsMatchTutorialDone(this.world, true);
                }
            }
        };
        return UpdateMatchTutorialSystem;
    }(ut.ComponentSystem));
    game.UpdateMatchTutorialSystem = UpdateMatchTutorialSystem;
})(game || (game = {}));
var game;
(function (game) {
    var UpdateSurvivalTutorialSystem = /** @class */ (function (_super) {
        __extends(UpdateSurvivalTutorialSystem, _super);
        function UpdateSurvivalTutorialSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UpdateSurvivalTutorialSystem.prototype.OnUpdate = function () {
            if (game.GameService.getGameState(this.world).GameStateType != game.GameStateTypes.Game ||
                !this.world.hasComponent(game.GameService.getCurrentLevelEntity(this.world), game.LevelSurvival) ||
                game.TutorialService.getIsSurvivalTutorialDone(this.world)) {
                return;
            }
            var tutorialHighlightEntity = this.world.getEntityByName("TutorialHighlight");
            if (!this.world.exists(tutorialHighlightEntity) && game.GameService.getGameState(this.world).CurrentScore == 0) {
                // Spawn tutorial highlight over the survival timer bar.
                var newTutorialHighlightEntity = game.TutorialService.spawnTutorialHighlight(this.world, new Vector2(0, 31.5), new Vector2(198, 30));
                var tutorialHighlight = this.world.getComponentData(newTutorialHighlightEntity, game.TutorialHighlight);
                tutorialHighlight.AutoCloseDelay = 3.5;
                this.world.setComponentData(newTutorialHighlightEntity, tutorialHighlight);
                var labelInstructions = this.world.getComponentData(tutorialHighlight.LabelInstructions, ut.Text.Text2DRenderer);
                labelInstructions.text = game.LocalizationService.getText(this.world, "Tutorial_Survival");
                this.world.setComponentData(tutorialHighlight.LabelInstructions, labelInstructions);
                // Animate an arrow pointer from the right to the left of the time bar to indicate that it's depleting.
                var tutorialPointerEntity = ut.EntityGroup.instantiate(this.world, "game.TutorialSurvivalPointer")[0];
                var tutorialPointer = this.world.getComponentData(tutorialPointerEntity, game.TutorialPointer);
                tutorialPointer.StartPosition.x = 88;
                tutorialPointer.StartPosition.y = -4;
                tutorialPointer.EndPosition.x = -88;
                tutorialPointer.EndPosition.y = -4;
                this.world.setComponentData(tutorialPointerEntity, tutorialPointer);
            }
            else if (this.world.exists(tutorialHighlightEntity)) {
                // Auto close the tutorial after a delay.
                var tutorialHighlight = this.world.getComponentData(tutorialHighlightEntity, game.TutorialHighlight);
                if (!tutorialHighlight.IsClosing && tutorialHighlight.Timer > tutorialHighlight.AutoCloseDelay) {
                    tutorialHighlight.IsClosing = true;
                    tutorialHighlight.Timer = 0;
                    this.world.setComponentData(tutorialHighlightEntity, tutorialHighlight);
                    game.TutorialService.setIsSurvivalTutorialDone(this.world, true);
                    // Give time back.
                    this.world.forEach([ut.Entity, game.LevelSurvival], function (entity, levelSurvival) {
                        levelSurvival.SurvivalTimer = levelSurvival.MaxSurvivalTime;
                    });
                }
            }
        };
        return UpdateSurvivalTutorialSystem;
    }(ut.ComponentSystem));
    game.UpdateSurvivalTutorialSystem = UpdateSurvivalTutorialSystem;
})(game || (game = {}));
var game;
(function (game) {
    var UpdateTutorialHighlightSystem = /** @class */ (function (_super) {
        __extends(UpdateTutorialHighlightSystem, _super);
        function UpdateTutorialHighlightSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UpdateTutorialHighlightSystem.prototype.OnUpdate = function () {
            var _this = this;
            if (game.GameService.getGameState(this.world).GameStateType != game.GameStateTypes.Game) {
                return;
            }
            var deltaTime = this.scheduler.deltaTime();
            this.world.forEach([ut.Entity, game.TutorialHighlight], function (entity, tutorialHighlight) {
                var progress = Math.min(1, tutorialHighlight.Timer / tutorialHighlight.FadeDuration);
                var alpha = progress;
                var labelFloatAnimationOffset = Math.sin(tutorialHighlight.Timer) * 3.5;
                // Fade out.
                if (tutorialHighlight.IsClosing) {
                    alpha = 1 - alpha;
                    labelFloatAnimationOffset = 0;
                    if (progress == 1) {
                        ut.Core2D.TransformService.destroyTree(_this.world, entity, true);
                        _this.world.forEach([ut.Entity, game.TutorialPointer], function (pointerEntity, tutorialPointer) {
                            ut.Core2D.TransformService.destroyTree(_this.world, pointerEntity, true);
                        });
                        return;
                    }
                }
                // Set opacity.
                var color = new ut.Core2D.Color(0, 0, 0, alpha * tutorialHighlight.MaxAlpha);
                tutorialHighlight.SpriteRenderers.forEach(function (spriteRendererEntity) {
                    var spriteRenderer = _this.world.getComponentData(spriteRendererEntity, ut.Core2D.Sprite2DRenderer);
                    spriteRenderer.color = color;
                    _this.world.setComponentData(spriteRendererEntity, spriteRenderer);
                });
                // Set text opacity.
                var labelInstructions = _this.world.getComponentData(tutorialHighlight.LabelInstructions, ut.Text.Text2DStyle);
                labelInstructions.color = new ut.Core2D.Color(1, 1, 1, alpha * alpha * tutorialHighlight.LabelMaxAlpha);
                _this.world.setComponentData(tutorialHighlight.LabelInstructions, labelInstructions);
                // Animate text pulsing position animation.
                if (labelFloatAnimationOffset != 0) {
                    var labelInstructionsRectTransform = _this.world.getComponentData(tutorialHighlight.LabelInstructions, ut.UILayout.RectTransform);
                    labelInstructionsRectTransform.anchoredPosition.y = tutorialHighlight.LabelDefaultPositionY + labelFloatAnimationOffset;
                    _this.world.setComponentData(tutorialHighlight.LabelInstructions, labelInstructionsRectTransform);
                }
                if (tutorialHighlight.StartDelay > 0) {
                    tutorialHighlight.StartDelay -= deltaTime;
                }
                else {
                    tutorialHighlight.Timer += deltaTime;
                }
            });
        };
        return UpdateTutorialHighlightSystem;
    }(ut.ComponentSystem));
    game.UpdateTutorialHighlightSystem = UpdateTutorialHighlightSystem;
})(game || (game = {}));
var game;
(function (game) {
    var UpdateTutorialPointerSystem = /** @class */ (function (_super) {
        __extends(UpdateTutorialPointerSystem, _super);
        function UpdateTutorialPointerSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UpdateTutorialPointerSystem.prototype.OnUpdate = function () {
            var _this = this;
            if (game.GameService.getGameState(this.world).GameStateType != game.GameStateTypes.Game) {
                return;
            }
            var tutorialHighlightEntity = this.world.getEntityByName("TutorialHighlight");
            var isTutorialHighlightVisible = this.world.exists(tutorialHighlightEntity) && this.world.getComponentData(tutorialHighlightEntity, game.TutorialHighlight).StartDelay <= 0;
            var deltaTime = this.scheduler.deltaTime();
            this.world.forEach([game.TutorialPointer], function (tutorialPointer) {
                if (isTutorialHighlightVisible) {
                    tutorialPointer.Timer += deltaTime;
                }
                // Move animation
                var progress = (tutorialPointer.Timer % tutorialPointer.Duration) / tutorialPointer.Duration;
                var moveProgress = ut.Interpolation.InterpolationService.evaluateCurveFloat(_this.world, progress, tutorialPointer.MoveCurve);
                var pointerEntity = tutorialPointer.Pointer;
                var pointerTransform = _this.world.getComponentData(pointerEntity, ut.Core2D.TransformLocalPosition);
                if (tutorialPointer.StretchToMove && _this.world.hasComponent(pointerEntity, ut.Core2D.Sprite2DRendererOptions)) {
                    pointerTransform.position.x = tutorialPointer.StartPosition.x;
                    pointerTransform.position.y = tutorialPointer.StartPosition.y;
                    var spriteRendererOptions = _this.world.getComponentData(pointerEntity, ut.Core2D.Sprite2DRendererOptions);
                    spriteRendererOptions.size.y = Math.abs(moveProgress * (tutorialPointer.EndPosition.y - tutorialPointer.StartPosition.y));
                    _this.world.setComponentData(pointerEntity, spriteRendererOptions);
                }
                else {
                    pointerTransform.position.x = tutorialPointer.StartPosition.x + moveProgress * (tutorialPointer.EndPosition.x - tutorialPointer.StartPosition.x);
                    pointerTransform.position.y = tutorialPointer.StartPosition.y + moveProgress * (tutorialPointer.EndPosition.y - tutorialPointer.StartPosition.y);
                }
                _this.world.setComponentData(pointerEntity, pointerTransform);
                // Fade animation
                var fadeProgress = ut.Interpolation.InterpolationService.evaluateCurveFloat(_this.world, progress, tutorialPointer.AlphaCurve);
                var pointerSpriteRenderer = _this.world.getComponentData(pointerEntity, ut.Core2D.Sprite2DRenderer);
                pointerSpriteRenderer.color = new ut.Core2D.Color(1, 1, 1, fadeProgress);
                _this.world.setComponentData(pointerEntity, pointerSpriteRenderer);
            });
        };
        return UpdateTutorialPointerSystem;
    }(ut.ComponentSystem));
    game.UpdateTutorialPointerSystem = UpdateTutorialPointerSystem;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Update popup animation on show.
     */
    var AnimatePopupSystem = /** @class */ (function (_super) {
        __extends(AnimatePopupSystem, _super);
        function AnimatePopupSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AnimatePopupSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.Popup], function (popup) {
                if (!popup.HasPlayedInTransition) {
                    popup.HasPlayedInTransition = true;
                    _this.updatePopupShowAnimation(popup);
                }
                if (_this.world.exists(popup.ImageBackground)) {
                    var targetAlpha = popup.TargetFadeAlpha * Math.min(1, Math.max(0, (popup.Timer - popup.DelayIn) / popup.FadeInDuration));
                    var backgroundSpriteRenderer = _this.world.getComponentData(popup.ImageBackground, ut.Core2D.Sprite2DRenderer);
                    if (backgroundSpriteRenderer.color.a != targetAlpha) {
                        backgroundSpriteRenderer.color.a = targetAlpha;
                        _this.world.setComponentData(popup.ImageBackground, backgroundSpriteRenderer);
                    }
                }
                popup.Timer += _this.scheduler.deltaTime();
            });
        };
        AnimatePopupSystem.prototype.updatePopupShowAnimation = function (popup) {
            var transformScale = this.world.getComponentData(popup.PanelContent, ut.Core2D.TransformLocalScale);
            var startScale = new Vector3(0, 0, 1);
            var endScale = new Vector3(1, 1, 1);
            transformScale.scale = startScale;
            this.world.setComponentData(popup.PanelContent, transformScale);
            var scaleContentTween = new ut.Tweens.TweenDesc;
            scaleContentTween.cid = ut.Core2D.TransformLocalScale.cid;
            scaleContentTween.offset = 0;
            scaleContentTween.duration = popup.ScaleInDuration;
            scaleContentTween.func = ut.Tweens.TweenFunc.OutBack;
            scaleContentTween.loop = ut.Core2D.LoopMode.Once;
            scaleContentTween.destroyWhenDone = true;
            scaleContentTween.t = -popup.DelayIn;
            ut.Tweens.TweenService.addTweenVector3(this.world, popup.PanelContent, startScale, endScale, scaleContentTween);
            if (this.world.exists(popup.ImageBackground)) {
                var backgroundSpriteRenderer = this.world.getComponentData(popup.ImageBackground, ut.Core2D.Sprite2DRenderer);
                popup.TargetFadeAlpha = backgroundSpriteRenderer.color.a;
            }
        };
        AnimatePopupSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeEnd),
            ut.executeBefore(ut.Shared.RenderingFence)
        ], AnimatePopupSystem);
        return AnimatePopupSystem;
    }(ut.ComponentSystem));
    game.AnimatePopupSystem = AnimatePopupSystem;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Refresh the current score label when it changes.
     */
    var DisplayScoreSystem = /** @class */ (function (_super) {
        __extends(DisplayScoreSystem, _super);
        function DisplayScoreSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DisplayScoreSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.ScoreDisplay, ut.Text.Text2DRenderer], function (score, tr) {
                var strScore = game.GameService.formatNumber(game.GameService.getGameState(_this.world).CurrentScore);
                if (strScore != tr.text) {
                    tr.text = strScore;
                }
            });
        };
        return DisplayScoreSystem;
    }(ut.ComponentSystem));
    game.DisplayScoreSystem = DisplayScoreSystem;
})(game || (game = {}));
var game;
(function (game) {
    var UpdateCurrentWorldMapItemSystem = /** @class */ (function (_super) {
        __extends(UpdateCurrentWorldMapItemSystem, _super);
        function UpdateCurrentWorldMapItemSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UpdateCurrentWorldMapItemSystem.prototype.OnUpdate = function () {
            var _this = this;
            var deltaTime = this.scheduler.deltaTime();
            var currentLevelIndex = 0;
            var currentIndexPosition = 0;
            this.world.forEach([game.WorldMap], function (worldMap) {
                currentLevelIndex = worldMap.CurrentLevelIndex;
                // Animate level scroll animation.
                {
                    currentIndexPosition = worldMap.CurrentScrollIndexPosition;
                    var distanceToDestination = Math.abs(currentLevelIndex - currentIndexPosition);
                    var moveDirection = (currentLevelIndex - currentIndexPosition) > 0 ? 1 : -1;
                    var speedRatio = 1;
                    var scrollSpeed = worldMap.ScrollSpeed;
                    if (distanceToDestination < 0.4) {
                        speedRatio = distanceToDestination / 0.25;
                    }
                    var speed = scrollSpeed * Math.max(0.2, speedRatio);
                    currentIndexPosition += moveDirection * deltaTime * speed;
                    if (distanceToDestination < 0.05) {
                        currentIndexPosition = currentLevelIndex;
                    }
                    worldMap.CurrentScrollIndexPosition = currentIndexPosition;
                }
                // Update current level title and info.
                if (worldMap.CurrentLevelIndex != worldMap.LastLevelIndex || game.LocalizationService.getLanguageID(_this.world) != worldMap.LastLanguageID) {
                    var levelEntity = game.GameService.getLevelEntity(_this.world, currentLevelIndex + 1);
                    var level = game.GameService.getLevel(_this.world, currentLevelIndex + 1);
                    // Update button visibility.
                    var buttonLeft = _this.world.getComponentData(worldMap.ButtonLeft, game.CustomButton);
                    buttonLeft.IsInteractable = currentLevelIndex > 0;
                    _this.world.setComponentData(worldMap.ButtonLeft, buttonLeft);
                    var buttonRight = _this.world.getComponentData(worldMap.ButtonRight, game.CustomButton);
                    buttonRight.IsInteractable = currentLevelIndex < 2;
                    _this.world.setComponentData(worldMap.ButtonRight, buttonRight);
                    var showCutsceneButton = currentLevelIndex == 2 && worldMap.LastBeatenLevelID >= 3;
                    var buttonCutscene = _this.world.getComponentData(worldMap.ButtonCutscene, game.CustomButton);
                    buttonCutscene.IsInteractable = showCutsceneButton;
                    _this.world.setComponentData(worldMap.ButtonCutscene, buttonCutscene);
                    var buttonCutsceneRenderer = _this.world.getComponentData(worldMap.ButtonCutscene, ut.Core2D.Sprite2DRenderer);
                    buttonCutsceneRenderer.color = showCutsceneButton ? new ut.Core2D.Color(1, 1, 1, 1) : new ut.Core2D.Color(1, 1, 1, 0);
                    _this.world.setComponentData(worldMap.ButtonCutscene, buttonCutsceneRenderer);
                    var labelCutsceneButton = _this.world.getComponentData(worldMap.LabelButtonCutscene, ut.Text.Text2DStyle);
                    labelCutsceneButton.color = new ut.Core2D.Color(labelCutsceneButton.color.r, labelCutsceneButton.color.g, labelCutsceneButton.color.b, showCutsceneButton ? 1 : 0);
                    _this.world.setComponentData(worldMap.LabelButtonCutscene, labelCutsceneButton);
                    // Update baked title sprite.
                    var spriteName = game.SkinService.getSkinName(level.Skin);
                    var spritePath = "assets/sprites/WorldMap/" + spriteName;
                    var titleSpriteRenderer = _this.world.getComponentData(worldMap.LabelLevelTitle, ut.Core2D.Sprite2DRenderer);
                    titleSpriteRenderer.sprite = _this.world.getEntityByName(spritePath + "_Title");
                    _this.world.setComponentData(worldMap.LabelLevelTitle, titleSpriteRenderer);
                    var titleSpriteRectTransform = _this.world.getComponentData(worldMap.LabelLevelTitle, ut.UILayout.RectTransform);
                    var titleSprite = _this.world.getComponentData(titleSpriteRenderer.sprite, ut.Core2D.Sprite2D);
                    var titleImage = _this.world.getComponentData(titleSprite.image, ut.Core2D.Image2D);
                    var width = titleSprite.imageRegion.width * titleImage.imagePixelSize.x;
                    var height = titleSprite.imageRegion.height * titleImage.imagePixelSize.y;
                    titleSpriteRectTransform.sizeDelta.x = width;
                    titleSpriteRectTransform.sizeDelta.y = height;
                    _this.world.setComponentData(worldMap.LabelLevelTitle, titleSpriteRectTransform);
                    var isPointObjective = _this.world.hasComponent(levelEntity, game.LevelPointObjective);
                    var isEggObjective = _this.world.hasComponent(levelEntity, game.LevelEggObjective);
                    var isSurvivalObjective = _this.world.hasComponent(levelEntity, game.LevelSurvival);
                    // Refresh level objective description.
                    {
                        var labelLevelInfoLine1_1 = _this.world.getComponentData(worldMap.LabelLevelInfoLine1, ut.Text.Text2DRenderer);
                        var labelLevelInfoLine2_1 = _this.world.getComponentData(worldMap.LabelLevelInfoLine2, ut.Text.Text2DRenderer);
                        labelLevelInfoLine1_1.text = "";
                        labelLevelInfoLine2_1.text = "";
                        var strObjective = "";
                        if (isPointObjective) {
                            var pointObjective = _this.world.getComponentData(levelEntity, game.LevelPointObjective);
                            strObjective = game.LocalizationService.getText(_this.world, "Objective_Points", String(pointObjective.ScoreObjective), String(level.MaxMoveCount));
                        }
                        else if (isEggObjective) {
                            var eggObjective = _this.world.getComponentData(levelEntity, game.LevelEggObjective);
                            var eggCount = eggObjective.EggsInGridAtStart + eggObjective.EggsToSpawnOnEggCollected;
                            strObjective = game.LocalizationService.getText(_this.world, "Objective_Eggs", String(eggCount), String(level.MaxMoveCount));
                        }
                        else if (isSurvivalObjective) {
                            var survivalObjective = _this.world.getComponentData(levelEntity, game.LevelSurvival);
                            strObjective = game.LocalizationService.getText(_this.world, "Objective_Survival", game.GameService.formatTime(survivalObjective.TimeObjective));
                        }
                        var words = strObjective.split(" ");
                        words.forEach(function (word) {
                            if (labelLevelInfoLine1_1.text.length + word.length <= 25) {
                                labelLevelInfoLine1_1.text += word + " ";
                            }
                            else {
                                labelLevelInfoLine2_1.text += word + " ";
                            }
                        });
                        _this.world.setComponentData(worldMap.LabelLevelInfoLine1, labelLevelInfoLine1_1);
                        _this.world.setComponentData(worldMap.LabelLevelInfoLine2, labelLevelInfoLine2_1);
                    }
                    game.GameService.setEntityEnabled(_this.world, worldMap.ImagePointObjective, isPointObjective);
                    game.GameService.setEntityEnabled(_this.world, worldMap.ImageEggObjective, isEggObjective);
                    game.GameService.setEntityEnabled(_this.world, worldMap.ImageSurvivalObjective, isSurvivalObjective);
                    var isLevelUnlocked_1 = currentLevelIndex <= worldMap.LastBeatenLevelID;
                    var buttonPlay = _this.world.getComponentData(worldMap.ButtonPlay, game.CustomButton);
                    buttonPlay.IsInteractable = isLevelUnlocked_1;
                    _this.world.setComponentData(worldMap.ButtonPlay, buttonPlay);
                    var labelPlayButton = _this.world.getComponentData(worldMap.LabelButtonPlay, game.CustomLabel);
                    var labelColor = _this.world.getComponentData(worldMap.LabelButtonPlay, ut.Text.Text2DStyle);
                    var playButtonTextColor = isLevelUnlocked_1 ? worldMap.PlayButtonColor : worldMap.PlayButtonDisabledColor;
                    if (labelColor.color != playButtonTextColor) {
                        labelColor.color = playButtonTextColor;
                        labelPlayButton.LastText = ""; // Set dirty
                        _this.world.setComponentData(worldMap.LabelButtonPlay, labelPlayButton);
                        _this.world.setComponentData(worldMap.LabelButtonPlay, labelColor);
                    }
                    worldMap.ImageLock.forEach(function (imageEntity) {
                        game.GameService.setEntityEnabled(_this.world, imageEntity, !isLevelUnlocked_1);
                    });
                    // Punch animate level title.
                    if (worldMap.LastLevelIndex != -1) {
                        var transformScale = _this.world.getComponentData(worldMap.LabelLevelTitle, ut.Core2D.TransformLocalScale);
                        var startScale = transformScale.scale;
                        var endScale = new Vector3(1.2, 1.2, 1);
                        var punchLevelTitleTween = new ut.Tweens.TweenDesc;
                        punchLevelTitleTween.cid = ut.Core2D.TransformLocalScale.cid;
                        punchLevelTitleTween.offset = 0;
                        punchLevelTitleTween.duration = 0.1;
                        punchLevelTitleTween.func = ut.Tweens.TweenFunc.OutCubic;
                        punchLevelTitleTween.loop = ut.Core2D.LoopMode.PingPongOnce;
                        punchLevelTitleTween.destroyWhenDone = true;
                        punchLevelTitleTween.t = 0.0;
                        ut.Tweens.TweenService.addTweenVector3(_this.world, worldMap.LabelLevelTitle, startScale, endScale, punchLevelTitleTween);
                    }
                    // Update best score.
                    var bestScore = game.UserDataService.getBestScore(currentLevelIndex + 1);
                    var labelBestScore = _this.world.getComponentData(worldMap.LabelBestScore, ut.Text.Text2DRenderer);
                    if (bestScore == 0) {
                        labelBestScore.text = "---";
                    }
                    else {
                        labelBestScore.text = game.GameService.formatNumber(bestScore) + " pts";
                    }
                    _this.world.setComponentData(worldMap.LabelBestScore, labelBestScore);
                    worldMap.LastLevelIndex = worldMap.CurrentLevelIndex;
                    worldMap.LastLanguageID = game.LocalizationService.getLanguageID(_this.world);
                }
                // Update sky and ground sprite and transition sprite.
                if (worldMap.CurrentScrollIndexPosition != worldMap.LastScrollIndexPosition) {
                    var environmentSpritePath = "assets/sprites/WorldMap/";
                    var currentLevelSkinName = game.SkinService.getSkinName(game.GameService.getLevel(_this.world, Math.floor(currentIndexPosition) + 1).Skin);
                    var transitionLevelSkinName = game.SkinService.getSkinName(game.GameService.getLevel(_this.world, Math.ceil(currentIndexPosition) + 1).Skin);
                    // Sky
                    var skySpriteRenderer = _this.world.getComponentData(worldMap.Sky, ut.Core2D.Sprite2DRenderer);
                    skySpriteRenderer.sprite = _this.world.getEntityByName(environmentSpritePath + currentLevelSkinName + "_Sky");
                    _this.world.setComponentData(worldMap.Sky, skySpriteRenderer);
                    var skyTransitionSpriteRenderer = _this.world.getComponentData(worldMap.SkyTransition, ut.Core2D.Sprite2DRenderer);
                    skyTransitionSpriteRenderer.sprite = _this.world.getEntityByName(environmentSpritePath + transitionLevelSkinName + "_Sky");
                    skyTransitionSpriteRenderer.color.a = currentIndexPosition % 1;
                    _this.world.setComponentData(worldMap.SkyTransition, skyTransitionSpriteRenderer);
                    // Ground
                    var groundSpriteRenderer = _this.world.getComponentData(worldMap.Ground, ut.Core2D.Sprite2DRenderer);
                    groundSpriteRenderer.sprite = _this.world.getEntityByName(environmentSpritePath + currentLevelSkinName + "_Ground");
                    _this.world.setComponentData(worldMap.Ground, groundSpriteRenderer);
                    var groundTransitionSpriteRenderer = _this.world.getComponentData(worldMap.GroundTransition, ut.Core2D.Sprite2DRenderer);
                    groundTransitionSpriteRenderer.sprite = _this.world.getEntityByName(environmentSpritePath + transitionLevelSkinName + "_Ground");
                    groundTransitionSpriteRenderer.color.a = currentIndexPosition % 1;
                    _this.world.setComponentData(worldMap.GroundTransition, groundTransitionSpriteRenderer);
                    worldMap.LastScrollIndexPosition = worldMap.CurrentScrollIndexPosition;
                }
            });
            // Update position and scale of all world map level items.
            this.world.forEach([game.WorldMapItem, ut.UILayout.RectTransform, ut.Core2D.TransformLocalScale], function (worldMapItem, rectTransform, transformLocalScale) {
                var position = rectTransform.anchoredPosition;
                position.x = (worldMapItem.Index - currentIndexPosition) * worldMapItem.DistanceBetweenLevelItems;
                rectTransform.anchoredPosition = position;
                var scale = Math.min(Math.abs(position.x), worldMapItem.DistanceBetweenLevelItems) / worldMapItem.DistanceBetweenLevelItems;
                scale = worldMapItem.UnfocusedScale + (worldMapItem.FocusedScale - worldMapItem.UnfocusedScale) * (1 - scale);
                transformLocalScale.scale = new Vector3(scale, scale, 1);
                var levelPreviewEntity = worldMapItem.ImageLevelPreview;
                var levelPreviewSprite = _this.world.getComponentData(levelPreviewEntity, ut.Core2D.Sprite2DRenderer);
                levelPreviewSprite.color.a = scale;
                _this.world.setComponentData(levelPreviewEntity, levelPreviewSprite);
            });
        };
        return UpdateCurrentWorldMapItemSystem;
    }(ut.ComponentSystem));
    game.UpdateCurrentWorldMapItemSystem = UpdateCurrentWorldMapItemSystem;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Update the screen transition animation played between game state changes.
     */
    var UpdateScreenTransition = /** @class */ (function (_super) {
        __extends(UpdateScreenTransition, _super);
        function UpdateScreenTransition() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UpdateScreenTransition.prototype.OnUpdate = function () {
            var _this = this;
            var deltaTime = this.scheduler.deltaTime();
            var entitiesToDestroy = [];
            this.world.forEach([ut.Entity, game.ScreenTransition], function (entity, screenTransition) {
                if (!screenTransition.IsTransitionIn && screenTransition.Timer >= screenTransition.OutDuration) {
                    screenTransition.Timer = 0;
                    screenTransition.IsTransitionIn = true;
                    game.GameStateLoadingService.setGameState(_this.world, screenTransition.TransitionToState);
                }
                screenTransition.Timer += deltaTime;
                if (screenTransition.IsTransitionIn && screenTransition.SkipFrameCount < 6) {
                    screenTransition.Timer = 0;
                    screenTransition.SkipFrameCount++;
                }
                var duration = screenTransition.IsTransitionIn ? screenTransition.InDuration : screenTransition.OutDuration;
                var progress = Math.min(1, Math.max(0, screenTransition.Timer / duration));
                if (screenTransition.IsTransitionIn) {
                    progress = 1 - progress;
                }
                // Destroy screen transition when it's done.
                if (screenTransition.IsTransitionIn && screenTransition.Timer >= screenTransition.InDuration) {
                    var entityToDestroy = new ut.Entity();
                    entityToDestroy.version = entity.version;
                    entityToDestroy.index = entity.index;
                    entitiesToDestroy.push(entityToDestroy);
                }
                if (screenTransition.IsScaleHoleTransition) {
                    // Update scaled hole transition animation.
                    var scaleHoleRectTransform = _this.world.getComponentData(screenTransition.ScaleHole, ut.UILayout.RectTransform);
                    var size = 2000 * (1 - ut.Interpolation.InterpolationService.evaluateCurveFloat(_this.world, progress, screenTransition.ScaleHoleCurve));
                    scaleHoleRectTransform.sizeDelta = new Vector2(size, size);
                    _this.world.setComponentData(screenTransition.ScaleHole, scaleHoleRectTransform);
                }
                else {
                    // Update fade transition animation.
                    var curtainSpriteRenderer = _this.world.getComponentData(screenTransition.BlackCurtain, ut.Core2D.Sprite2DRenderer);
                    curtainSpriteRenderer.color.a = progress;
                    _this.world.setComponentData(screenTransition.BlackCurtain, curtainSpriteRenderer);
                }
            });
            // TODO: Replace destroyAllEntityGroups by foreach loop on entitiesToDestroy.
            if (entitiesToDestroy.length > 0) {
                ut.EntityGroup.destroyAll(this.world, "game.ScreenTransition");
            }
        };
        UpdateScreenTransition = __decorate([
            ut.executeAfter(ut.Shared.UserCodeEnd),
            ut.executeBefore(ut.Shared.RenderingFence)
        ], UpdateScreenTransition);
        return UpdateScreenTransition;
    }(ut.ComponentSystem));
    game.UpdateScreenTransition = UpdateScreenTransition;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Animate collected currencies (eggs) from collected position to an end (UI) position.
     */
    var AnimateCollectedCurrencySystem = /** @class */ (function (_super) {
        __extends(AnimateCollectedCurrencySystem, _super);
        function AnimateCollectedCurrencySystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AnimateCollectedCurrencySystem.prototype.OnUpdate = function () {
            var _this = this;
            var deltaTime = this.scheduler.deltaTime();
            this.world.forEach([ut.Entity, game.CollectedCurrency, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalScale], function (entity, collectedCurrency, transformLocalPosition, transformLocalScale) {
                if (collectedCurrency.StartDelay > 0) {
                    collectedCurrency.StartDelay -= deltaTime;
                    return;
                }
                var progress = collectedCurrency.Timer / collectedCurrency.Duration;
                if (progress > 1) {
                    ut.Core2D.TransformService.destroyTree(_this.world, entity, true);
                    return;
                }
                var scale = ut.Interpolation.InterpolationService.evaluateCurveFloat(_this.world, progress, collectedCurrency.ScaleCurve);
                transformLocalScale.scale = new Vector3(scale, scale, 1);
                progress = ut.Interpolation.InterpolationService.evaluateCurveFloat(_this.world, progress, collectedCurrency.ProgressCurve);
                // Calculate bezier curve.
                var xa = _this.getPoint(progress, collectedCurrency.StartPosition.x, collectedCurrency.MidPosition.x);
                var ya = _this.getPoint(progress, collectedCurrency.StartPosition.y, collectedCurrency.MidPosition.y);
                var xb = _this.getPoint(progress, collectedCurrency.MidPosition.x, collectedCurrency.EndPosition.x);
                var yb = _this.getPoint(progress, collectedCurrency.MidPosition.y, collectedCurrency.EndPosition.y);
                var position = transformLocalPosition.position;
                position.x = _this.getPoint(progress, xa, xb);
                position.y = _this.getPoint(progress, ya, yb);
                transformLocalPosition.position = position;
                collectedCurrency.Timer += deltaTime;
            });
        };
        AnimateCollectedCurrencySystem.prototype.getPoint = function (progress, n1, n2) {
            var diff = n2 - n1;
            return n1 + (progress * diff);
        };
        return AnimateCollectedCurrencySystem;
    }(ut.ComponentSystem));
    game.AnimateCollectedCurrencySystem = AnimateCollectedCurrencySystem;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Animate sprite opacity to create a warning pulse animation when the user is close to the end of the game.
     */
    var AnimateNearDeathOpacitySystem = /** @class */ (function (_super) {
        __extends(AnimateNearDeathOpacitySystem, _super);
        function AnimateNearDeathOpacitySystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AnimateNearDeathOpacitySystem.prototype.OnUpdate = function () {
            var _this = this;
            var deltaTime = this.scheduler.deltaTime();
            this.world.forEach([ut.Entity, game.NearDeathOpacityAnimation, ut.Core2D.Sprite2DRenderer], function (entity, nearDeathAnimation, spriteRenderer) {
                var alpha = 0;
                if (game.GameService.isNearDeath(_this.world)) {
                    nearDeathAnimation.Timer += deltaTime * nearDeathAnimation.Speed;
                    var animationRatio = (Math.sin(nearDeathAnimation.Timer) + 1) / 2;
                    alpha = nearDeathAnimation.MinAlpha + animationRatio * (nearDeathAnimation.MaxAlpha - nearDeathAnimation.MinAlpha);
                }
                spriteRenderer.color = new ut.Core2D.Color(1, 1, 1, alpha);
            });
        };
        return AnimateNearDeathOpacitySystem;
    }(ut.ComponentSystem));
    game.AnimateNearDeathOpacitySystem = AnimateNearDeathOpacitySystem;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Animate a shake effect on a Transform.
     */
    var AnimateShakeSystem = /** @class */ (function (_super) {
        __extends(AnimateShakeSystem, _super);
        function AnimateShakeSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AnimateShakeSystem.prototype.OnUpdate = function () {
            var _this = this;
            var deltaTime = this.scheduler.deltaTime();
            this.world.forEach([ut.Entity, game.ShakeAnimation, game.ShakeAnimationPlayer, ut.Core2D.TransformLocalPosition], function (entity, shakeAnimation, shakeAnimationPlayer, transformLocalPosition) {
                if (shakeAnimationPlayer.StartDelay > 0) {
                    shakeAnimationPlayer.StartDelay -= deltaTime;
                    return;
                }
                _this.setShakeDefaultPosition(shakeAnimation, transformLocalPosition);
                var animationTime = shakeAnimationPlayer.Timer;
                animationTime += deltaTime;
                var isPlaying = animationTime < shakeAnimationPlayer.Duration;
                shakeAnimationPlayer.Timer = animationTime;
                var position = new Vector3(shakeAnimation.DefaultX, shakeAnimation.DefaultY, shakeAnimation.DefaultZ);
                if (isPlaying) {
                    var shakeRatio = 1 - (animationTime / shakeAnimationPlayer.Duration);
                    var randomXOffset = Math.random() * shakeAnimationPlayer.ShakeRadiusX * shakeRatio;
                    if (Math.random() < 0.5) {
                        randomXOffset *= -1;
                    }
                    var randomYOffset = Math.random() * shakeAnimationPlayer.ShakeRadiusY * shakeRatio;
                    if (Math.random() < 0.5) {
                        randomYOffset *= -1;
                    }
                    position = new Vector3(position.x + randomXOffset, position.y + randomYOffset, 0);
                }
                else {
                    _this.world.removeComponent(entity, game.ShakeAnimationPlayer);
                }
                transformLocalPosition.position = position;
            });
        };
        AnimateShakeSystem.prototype.setShakeDefaultPosition = function (shakeAnimation, transformLocalPosition) {
            if (shakeAnimation.IsDefaultPositionSet) {
                return;
            }
            shakeAnimation.DefaultX = transformLocalPosition.position.x;
            shakeAnimation.DefaultY = transformLocalPosition.position.y;
            shakeAnimation.DefaultZ = transformLocalPosition.position.z;
            shakeAnimation.IsDefaultPositionSet = true;
        };
        return AnimateShakeSystem;
    }(ut.ComponentSystem));
    game.AnimateShakeSystem = AnimateShakeSystem;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Make a tiled background that moves and repeats itself endlessly.
     */
    var AnimateTilingBackgroundSystem = /** @class */ (function (_super) {
        __extends(AnimateTilingBackgroundSystem, _super);
        function AnimateTilingBackgroundSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AnimateTilingBackgroundSystem.prototype.OnUpdate = function () {
            var _this = this;
            var deltaTime = this.scheduler.deltaTime();
            this.world.forEach([ut.Entity, game.TilingBackground], function (entity, tilingBackground) {
                if (_this.world.hasComponent(entity, ut.UILayout.RectTransform)) {
                    var rectTransform = _this.world.getComponentData(entity, ut.UILayout.RectTransform);
                    var position = rectTransform.anchoredPosition;
                    position = _this.movePosition(position, deltaTime, tilingBackground);
                    rectTransform.anchoredPosition = position;
                    _this.world.setComponentData(entity, rectTransform);
                }
                else if (_this.world.hasComponent(entity, ut.Core2D.TransformLocalPosition)) {
                    var transformPosition = _this.world.getComponentData(entity, ut.Core2D.TransformLocalPosition);
                    var position = new Vector2(transformPosition.position.x, transformPosition.position.y);
                    position = _this.movePosition(position, deltaTime, tilingBackground);
                    transformPosition.position.x = position.x;
                    transformPosition.position.y = position.y;
                    _this.world.setComponentData(entity, transformPosition);
                }
            });
        };
        AnimateTilingBackgroundSystem.prototype.movePosition = function (position, deltaTime, tilingBackground) {
            position.x += tilingBackground.SpeedX * deltaTime;
            position.y += tilingBackground.SpeedY * deltaTime;
            if (tilingBackground.SpeedX != 0 && position.x < -tilingBackground.TileSize) {
                position.x += tilingBackground.TileSize;
            }
            else if (tilingBackground.SpeedX != 0 && position.x > tilingBackground.TileSize) {
                position.x -= tilingBackground.TileSize;
            }
            if (tilingBackground.SpeedY != 0 && position.y < -tilingBackground.TileSize) {
                position.y += tilingBackground.TileSize;
            }
            else if (tilingBackground.SpeedY != 0 && position.y > tilingBackground.TileSize) {
                position.y -= tilingBackground.TileSize;
            }
            return position;
        };
        return AnimateTilingBackgroundSystem;
    }(ut.ComponentSystem));
    game.AnimateTilingBackgroundSystem = AnimateTilingBackgroundSystem;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Destroy an entity after a delay of time.
     */
    var DestroyAfterDelaySystem = /** @class */ (function (_super) {
        __extends(DestroyAfterDelaySystem, _super);
        function DestroyAfterDelaySystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DestroyAfterDelaySystem.prototype.OnUpdate = function () {
            var _this = this;
            var deltaTime = this.scheduler.deltaTime();
            this.world.forEach([ut.Entity, game.DestroyAfterDelay], function (entity, destroyAfterDelay) {
                var destroyDelay = destroyAfterDelay.Delay;
                destroyDelay -= deltaTime;
                destroyAfterDelay.Delay = destroyDelay;
                if (destroyDelay <= 0) {
                    ut.Core2D.TransformService.destroyTree(_this.world, entity, true);
                }
            });
        };
        return DestroyAfterDelaySystem;
    }(ut.ComponentSystem));
    game.DestroyAfterDelaySystem = DestroyAfterDelaySystem;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Adjust screen layout to fit any aspect ratio.
     */
    var FitScreenLayoutSystem = /** @class */ (function (_super) {
        __extends(FitScreenLayoutSystem, _super);
        function FitScreenLayoutSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FitScreenLayoutSystem.prototype.OnUpdate = function () {
            var _this = this;
            var displayInfo = this.world.getConfigData(ut.Core2D.DisplayInfo);
            var aspectRatio = displayInfo.height / displayInfo.width;
            var referenceRatio = 16 / 9;
            var isTallDisplay = aspectRatio > referenceRatio + 0.01;
            var matchWidthOrHeight = isTallDisplay ? 0 : 1;
            // If resolution is taller than 9/16, make UI canvas match the width.
            this.world.forEach([game.CanvasResolutionFitter, ut.UILayout.UICanvas], function (resolutionFitter, canvas) {
                canvas.matchWidthOrHeight = matchWidthOrHeight;
                var referenceHalfSize = 200;
                var halfVerticalSize = isTallDisplay ? aspectRatio * referenceHalfSize / referenceRatio : referenceHalfSize;
                var camera = _this.world.getComponentData(canvas.camera, ut.Core2D.Camera2D);
                camera.halfVerticalSize = halfVerticalSize;
            });
            // If resolution is taller than 9/16, zoom out the camera.
            this.world.forEach([game.CameraResolutionFitter, ut.Core2D.Camera2D], function (resolutionFitter, camera) {
                if (resolutionFitter.DefaultHalfVerticalSize == 0) {
                    resolutionFitter.DefaultHalfVerticalSize = camera.halfVerticalSize;
                }
                var referenceHalfSize = resolutionFitter.DefaultHalfVerticalSize;
                var halfVerticalSize = isTallDisplay ? aspectRatio * referenceHalfSize / referenceRatio : referenceHalfSize;
                camera.halfVerticalSize = halfVerticalSize;
            });
        };
        return FitScreenLayoutSystem;
    }(ut.ComponentSystem));
    game.FitScreenLayoutSystem = FitScreenLayoutSystem;
})(game || (game = {}));
var game;
(function (game) {
    var InputService = /** @class */ (function () {
        function InputService() {
        }
        InputService.getPointerWorldPosition = function (world, cameraEntity) {
            var displayInfo = world.getConfigData(ut.Core2D.DisplayInfo);
            var displaySize = new Vector2(displayInfo.width, displayInfo.height);
            var inputPosition = ut.Runtime.Input.getInputPosition();
            return ut.Core2D.TransformService.windowToWorld(world, cameraEntity, inputPosition, displaySize);
        };
        return InputService;
    }());
    game.InputService = InputService;
})(game || (game = {}));
var game;
(function (game) {
    var LocalizationService = /** @class */ (function () {
        function LocalizationService() {
        }
        LocalizationService.getLocalizationConfiguration = function (world) {
            return world.getConfigData(game.LocalizationConfiguration);
        };
        LocalizationService.init = function (world) {
            var localizationConfig = this.getLocalizationConfiguration(world);
            localizationConfig.LanguageID = game.UserDataService.getLanguageID();
            world.setConfigData(localizationConfig);
        };
        /**
         * Get a localized text.
         * @param world The world.
         * @param textID The ID of the text element to translate.
         * @param params The parameters to be inserted in the formated transalted text in the form of {0}, {1}, etc
         */
        LocalizationService.getText = function (world, textID) {
            var params = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                params[_i - 2] = arguments[_i];
            }
            if (textID.trim() == "") {
                return textID;
            }
            var localizationConfig = this.getLocalizationConfiguration(world);
            var result = "(" + textID + ")";
            localizationConfig.Texts.forEach(function (text) {
                if (textID == text.TextID) {
                    result = text[localizationConfig.LanguageID];
                }
            });
            for (var i = 0; params != null && i < params.length; i++) {
                result = result.replace("{" + i + "}", params[i]);
            }
            return result;
        };
        LocalizationService.getLanguageID = function (world) {
            return this.getLocalizationConfiguration(world).LanguageID;
        };
        LocalizationService.setLanguageID = function (world, value) {
            var localizationConfig = this.getLocalizationConfiguration(world);
            localizationConfig.LanguageID = value;
            world.setConfigData(localizationConfig);
            game.UserDataService.setLanguageID(value);
            return value;
        };
        return LocalizationService;
    }());
    game.LocalizationService = LocalizationService;
})(game || (game = {}));
var game;
(function (game) {
    var RenderModeSelector = /** @class */ (function (_super) {
        __extends(RenderModeSelector, _super);
        function RenderModeSelector() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RenderModeSelector.prototype.OnUpdate = function () {
            var _this = this;
            var modeEntity = this.world.getEntityByName("RenderMode");
            if (modeEntity != null && this.world.exists(modeEntity)) {
                this.world.usingComponentData(modeEntity, [game.CurrentRenderMode], function (currentRenderMode) {
                    if (currentRenderMode.apply) {
                        currentRenderMode.apply = false;
                        var di = _this.world.getConfigData(ut.Core2D.DisplayInfo);
                        if (di.renderMode != currentRenderMode.desiredMode) {
                            di.renderMode = currentRenderMode.desiredMode;
                            _this.world.setConfigData(di);
                        }
                    }
                });
            }
        };
        return RenderModeSelector;
    }(ut.ComponentSystem));
    game.RenderModeSelector = RenderModeSelector;
})(game || (game = {}));
var game;
(function (game) {
    var SoundService = /** @class */ (function () {
        function SoundService() {
        }
        SoundService.getSoundConfiguration = function (world) {
            return world.getConfigData(game.SoundConfiguration);
        };
        SoundService.init = function (world) {
            var soundConfig = this.getSoundConfiguration(world);
            soundConfig.IsSoundOn = game.UserDataService.getIsSoundOn();
            soundConfig.IsMusicOn = game.UserDataService.getIsMusicOn();
            world.setConfigData(soundConfig);
        };
        SoundService.play = function (world, entityName) {
            if (this.getIsSoundOn(world)) {
                var soundEntity = world.getEntityByName(entityName);
                if (world.exists(soundEntity) && !world.hasComponent(soundEntity, ut.Audio.AudioSourceStart)) {
                    world.addComponent(soundEntity, ut.Audio.AudioSourceStart);
                }
            }
        };
        SoundService.stop = function (world, entityName) {
            world.addComponent(world.getEntityByName(entityName), ut.Audio.AudioSourceStop);
        };
        SoundService.playMusic = function (world) {
            this.stopMusic(world);
            if (!this.getIsMusicOn(world)) {
                return;
            }
            var gameState = game.GameService.getGameState(world);
            var musicName = "";
            switch (gameState.GameStateType) {
                case game.GameStateTypes.Paused:
                case game.GameStateTypes.Game: {
                    musicName = "Music" + game.SkinService.getCurrentSkinName(world);
                    break;
                }
                default: {
                    musicName = "MusicMenu";
                    break;
                }
            }
            var soundConfiguration = this.getSoundConfiguration(world);
            soundConfiguration.CurrentMusic = musicName;
            world.setConfigData(soundConfiguration);
            var musicEntity = world.getEntityByName(musicName);
            if (world.exists(musicEntity)) {
                world.addComponent(musicEntity, ut.Audio.AudioSourceStart);
            }
            else {
                console.log("[" + musicName + "] entity does not exists.");
            }
        };
        SoundService.stopMusic = function (world) {
            if (this.getSoundConfiguration(world).CurrentMusic != "") {
                world.addComponent(world.getEntityByName(this.getSoundConfiguration(world).CurrentMusic), ut.Audio.AudioSourceStop);
            }
        };
        SoundService.toggleSoundIsOn = function (world) {
            return this.setIsSoundOn(world, !this.getIsSoundOn(world));
        };
        SoundService.getIsSoundOn = function (world) {
            return this.getSoundConfiguration(world).IsSoundOn;
        };
        SoundService.setIsSoundOn = function (world, value) {
            var soundConfig = this.getSoundConfiguration(world);
            soundConfig.IsSoundOn = value;
            world.setConfigData(soundConfig);
            game.UserDataService.setIsSoundOn(value);
            return value;
        };
        SoundService.toggleMusicIsOn = function (world) {
            return this.setIsMusicOn(world, !this.getIsMusicOn(world));
        };
        SoundService.getIsMusicOn = function (world) {
            return this.getSoundConfiguration(world).IsMusicOn;
        };
        SoundService.setIsMusicOn = function (world, value) {
            var soundConfig = this.getSoundConfiguration(world);
            soundConfig.IsMusicOn = value;
            world.setConfigData(soundConfig);
            game.UserDataService.setIsMusicOn(value);
            this.playMusic(world);
            return value;
        };
        return SoundService;
    }());
    game.SoundService = SoundService;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Update the sprite and other visual elements of buttons depending on their current state.
     */
    var UpdateCustomButtonSystem = /** @class */ (function (_super) {
        __extends(UpdateCustomButtonSystem, _super);
        function UpdateCustomButtonSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UpdateCustomButtonSystem.prototype.OnUpdate = function () {
            var _this = this;
            var deltaTime = this.scheduler.deltaTime();
            this.world.forEach([game.CustomButton, ut.Core2D.Sprite2DRenderer, ut.UIControls.MouseInteraction], function (button, spriteRenderer, mouseInteraction) {
                button.IsPressed = mouseInteraction.down && button.IsInteractable;
                button.JustDown = !button.LastDown && mouseInteraction.down && button.IsInteractable;
                button.JustUp = button.LastDown && !mouseInteraction.down && button.IsInteractable;
                button.JustClicked = mouseInteraction.clicked && button.IsInteractable;
                if (button.IsPressed) {
                    button.TimePressed += deltaTime;
                }
                if (button.JustDown || button.JustUp || mouseInteraction.over != button.IsPointerOver || button.LastIsInteractable != button.IsInteractable) {
                    button.LastIsInteractable = button.IsInteractable;
                    var sprite = button.DefaultSprite;
                    if (!button.IsInteractable) {
                        sprite = button.DisabledSprite;
                    }
                    else if (mouseInteraction.over && button.IsPressed) {
                        sprite = button.PressedSprite;
                    }
                    else if (mouseInteraction.over) {
                        sprite = button.HoveredSprite;
                    }
                    if (_this.world.exists(sprite)) {
                        spriteRenderer.sprite = sprite;
                    }
                    if (_this.world.exists(button.ContentToOffsetOnPress) && button.IsInteractable) {
                        var contentRectTransform = _this.world.getComponentData(button.ContentToOffsetOnPress, ut.UILayout.RectTransform);
                        if (!button.ContentDefautPositionIsSet) {
                            button.ContentDefautPositionIsSet = true;
                            button.ContentDefautPositionY = contentRectTransform.anchoredPosition.y;
                        }
                        var contentPosition = contentRectTransform.anchoredPosition;
                        contentPosition.y = button.ContentDefautPositionY + (mouseInteraction.over && button.IsPressed ? button.PressedOffsetY : 0);
                        contentRectTransform.anchoredPosition = contentPosition;
                        _this.world.setComponentData(button.ContentToOffsetOnPress, contentRectTransform);
                    }
                }
                button.IsPointerOver = mouseInteraction.over;
                button.LastDown = mouseInteraction.down;
                button.LastOver = mouseInteraction.over;
            });
        };
        return UpdateCustomButtonSystem;
    }(ut.ComponentSystem));
    game.UpdateCustomButtonSystem = UpdateCustomButtonSystem;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Update the localized text associated to labels.
     */
    var UpdateLocalizedText = /** @class */ (function (_super) {
        __extends(UpdateLocalizedText, _super);
        function UpdateLocalizedText() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UpdateLocalizedText.prototype.OnUpdate = function () {
            var _this = this;
            var languageID = game.LocalizationService.getLanguageID(this.world);
            this.world.forEach([game.LocalizedText, ut.Text.Text2DRenderer], function (localizedText, textRenderer) {
                if (localizedText.TextID != localizedText.LastTextID || languageID != localizedText.LastLanguageID) {
                    localizedText.LastTextID = localizedText.TextID;
                    localizedText.LastLanguageID = languageID;
                    var text = game.LocalizationService.getText.apply(game.LocalizationService, [_this.world, localizedText.TextID].concat(localizedText.TextParameters));
                    if (localizedText.ToUpper) {
                        text = text.toUpperCase();
                    }
                    textRenderer.text = text;
                }
            });
        };
        return UpdateLocalizedText;
    }(ut.ComponentSystem));
    game.UpdateLocalizedText = UpdateLocalizedText;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Save and load player data into web cookies.
     */
    var UserDataService = /** @class */ (function () {
        function UserDataService() {
        }
        UserDataService.getBestScore = function (levelID) {
            var cookieName = "BestScore" + levelID;
            var value = this.getCookie(cookieName);
            if (value) {
                return Number(value);
            }
            else {
                return 0;
            }
        };
        UserDataService.setBestScore = function (levelID, score) {
            var cookieName = "BestScore" + levelID;
            this.setCookie(cookieName, String(score));
        };
        UserDataService.getSelectedWorldMapIndex = function () {
            var cookieName = "SelectedWorldMapIndex";
            var value = this.getCookie(cookieName);
            if (value) {
                return Number(value);
            }
            else {
                return 0;
            }
        };
        UserDataService.setSelectedWorldMapIndex = function (itemIndex) {
            var cookieName = "SelectedWorldMapIndex";
            this.setCookie(cookieName, String(itemIndex));
        };
        UserDataService.getLastBeatenLevelID = function () {
            var cookieName = "LastBeatenLevelID";
            var value = this.getCookie(cookieName);
            if (value) {
                return Number(value);
            }
            else {
                return 0;
            }
        };
        UserDataService.setLastBeatenLevelID = function (levelID) {
            var cookieName = "LastBeatenLevelID";
            this.setCookie(cookieName, String(levelID));
        };
        UserDataService.getIsSoundOn = function () {
            var cookieName = "Sound";
            var value = this.getCookie(cookieName);
            if (value) {
                return this.getCookie(cookieName) == "1" ? true : false;
            }
            else {
                return true;
            }
        };
        UserDataService.setIsSoundOn = function (isSoundOn) {
            var cookieName = "Sound";
            this.setCookie(cookieName, String(isSoundOn ? 1 : 0));
        };
        UserDataService.getIsMusicOn = function () {
            var cookieName = "Music";
            var value = this.getCookie(cookieName);
            if (value) {
                return this.getCookie(cookieName) == "1" ? true : false;
            }
            else {
                return true;
            }
        };
        UserDataService.setIsMusicOn = function (isMusicOn) {
            var cookieName = "Music";
            this.setCookie(cookieName, String(isMusicOn ? 1 : 0));
        };
        UserDataService.getLanguageID = function () {
            var cookieName = "LanguageID";
            var value = this.getCookie(cookieName);
            if (value) {
                return this.getCookie(cookieName);
            }
            else {
                return "en";
            }
        };
        UserDataService.setLanguageID = function (languageID) {
            var cookieName = "LanguageID";
            this.setCookie(cookieName, languageID);
        };
        UserDataService.getHasSeenCutscene = function () {
            var cookieName = "CutsceneSeen";
            var value = this.getCookie(cookieName);
            if (value) {
                return this.getCookie(cookieName) == "1" ? true : false;
            }
            else {
                return false;
            }
        };
        UserDataService.setHasSeenCutscene = function (hasSeen) {
            var cookieName = "CutsceneSeen";
            this.setCookie(cookieName, String(hasSeen ? 1 : 0));
        };
        UserDataService.getHasSeenEndCutscene = function () {
            var cookieName = "EndCutsceneSeen";
            var value = this.getCookie(cookieName);
            if (value) {
                return this.getCookie(cookieName) == "1" ? true : false;
            }
            else {
                return false;
            }
        };
        UserDataService.setHasSeenEndCutscene = function (hasSeen) {
            var cookieName = "EndCutsceneSeen";
            this.setCookie(cookieName, String(hasSeen ? 1 : 0));
        };
        UserDataService.getIsMatchTutorialDone = function () {
            var cookieName = "MatchTutorialDone";
            var value = this.getCookie(cookieName);
            if (value) {
                return this.getCookie(cookieName) == "1" ? true : false;
            }
            else {
                return false;
            }
        };
        UserDataService.setIsMatchTutorialDone = function (value) {
            var cookieName = "MatchTutorialDone";
            this.setCookie(cookieName, String(value ? 1 : 0));
        };
        UserDataService.getIsEggTutorialDone = function () {
            var cookieName = "EggTutorialDone";
            var value = this.getCookie(cookieName);
            if (value) {
                return this.getCookie(cookieName) == "1" ? true : false;
            }
            else {
                return false;
            }
        };
        UserDataService.setIsEggTutorialDone = function (value) {
            var cookieName = "EggTutorialDone";
            this.setCookie(cookieName, String(value ? 1 : 0));
        };
        UserDataService.getIsSurvivalTutorialDone = function () {
            var cookieName = "SurvivalTutorialDone";
            var value = this.getCookie(cookieName);
            if (value) {
                return this.getCookie(cookieName) == "1" ? true : false;
            }
            else {
                return false;
            }
        };
        UserDataService.setIsSurvivalTutorialDone = function (value) {
            var cookieName = "SurvivalTutorialDone";
            this.setCookie(cookieName, String(value ? 1 : 0));
        };
        UserDataService.getCookie = function (name) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + name + "=");
            if (parts.length == 2) {
                return parts.pop().split(";").shift();
            }
        };
        UserDataService.setCookie = function (name, val) {
            var date = new Date();
            var value = val;
            date.setTime(date.getTime() + (1000 * 24 * 60 * 60 * 1000));
            document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
        };
        UserDataService.deleteCookie = function (name) {
            var date = new Date();
            date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
            document.cookie = name + "=; expires=" + date.toUTCString() + "; path=/";
        };
        UserDataService.deleteAllCookies = function () {
            var cookies = document.cookie.split(";");
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                var eqPos = cookie.indexOf("=");
                var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }
        };
        return UserDataService;
    }());
    game.UserDataService = UserDataService;
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