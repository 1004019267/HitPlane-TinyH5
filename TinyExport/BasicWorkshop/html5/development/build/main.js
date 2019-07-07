/**
 * TINY GENERATED CODE, DO NOT EDIT BY HAND
 * @project BasicWorkshop
 */

console.log('runtime version: internal');

ut.importModule(ut.Core2D);
ut.importModule(ut.Math);
ut.importModule(ut);
ut.importModule(ut.Shared);
ut.importModule(ut.Core2D);
ut.importModule(ut.HTML);
ut.importModule(ut.Rendering);
ut.importModule(ut.Rendering);
ut.importModule(ut.HTML);
ut.importModule(ut.Core2D);
ut.importModule(ut.Rendering);
ut.importModule(ut.Rendering);
ut.importModule(ut.Physics2D);
ut.importModule(ut.Particles);
ut.importModule(ut.Interpolation);
ut.importModule(ut.HitBox2D);
ut.importModule(ut.Core2D);
ut.main = function() {
    game.EnemyBehaviorFilterFilter._Components = [ut.Entity, 
        game.EnemyTag, game.MoveSpeed, game.ChangeOverTime, game.Boundaries
    ];
    game.EnemyBehaviorFilterFilter.prototype.Read = function(world, entity) {
        this.entity = entity;
        this.position = world.hasComponent(entity, ut.Core2D.TransformLocalPosition) ? world.getComponentData(entity, ut.Core2D.TransformLocalPosition) : undefined;
        this.tag = world.getComponentData(entity, game.EnemyTag);
        this.speed = world.getComponentData(entity, game.MoveSpeed);
        this.speedChange = world.getComponentData(entity, game.ChangeOverTime);
        this.bounds = world.getComponentData(entity, game.Boundaries);
    };
    game.EnemyBehaviorFilterFilter.prototype.Reset = function() {
        this.entity = undefined;
        this.position = undefined;
        this.tag = undefined;
        this.speed = undefined;
        this.speedChange = undefined;
        this.bounds = undefined;
    };
    game.EnemyBehaviorFilterFilter.prototype.Write = function(world, entity) {
        if (this.position) { world.setOrAddComponentData(entity, this.position); }
        world.setComponentData(entity, this.tag);
        world.setComponentData(entity, this.speed);
        world.setComponentData(entity, this.speedChange);
        world.setComponentData(entity, this.bounds);
    };
    game.EnemyBehaviorFilterFilter.prototype.ForEach = function(world, callback) {
        var _this = this;
        world.forEach(this.constructor._Components, function($entity, tag, speed, speedChange, bounds) {
            _this.Read(world, $entity);
            callback($entity);
            if (world.exists($entity)) { _this.Write(world, $entity); }
        });
    };
    game.EnemyBehaviorFilter.Instance = new game.EnemyBehaviorFilter();
    game.EnemyBehaviorFilter._StateType = game.EnemyBehaviorFilter_State;
    game.EnemyBehaviorFilter.prototype._GetFilter = function() { if (!this.data) { this.data = new game.EnemyBehaviorFilterFilter(); } return this.data; }
    // Singleton world
    var world = new ut.World();

    // Schedule all systems
    var scheduler = world.scheduler();
    game.EnemyBehaviorFilter_OnEntityEnableJS.update = game.EnemyBehaviorFilter.Instance._MakeOnEntityEnable();
    game.InputMovementSystemJS.update = new game.InputMovementSystem()._MakeSystemFn();
    game.TimeJS.update = new game.Time()._MakeSystemFn();
    game.LaserSystemJS.update = new game.LaserSystem()._MakeSystemFn();
    game.PlayerCollisionSystemJS.update = new game.PlayerCollisionSystem()._MakeSystemFn();
    game.SpawnSystemJS.update = new game.SpawnSystem()._MakeSystemFn();
    game.EnemyBehaviorFilter_OnEntityUpdateJS.update = game.EnemyBehaviorFilter.Instance._MakeOnEntityUpdate();
    scheduler.schedule(ut.HTML.InputHandler);
    scheduler.schedule(ut.HTML.AssetLoader);
    scheduler.schedule(ut.HitBox2D.HitBox2DSystem);
    scheduler.schedule(ut.Core2D.SequencePlayerSystem);
    scheduler.schedule(game.EnemyBehaviorFilter_OnEntityEnableJS);
    scheduler.schedule(ut.Shared.InputFence);
    scheduler.schedule(game.InputMovementSystemJS);
    scheduler.schedule(game.TimeJS);
    scheduler.schedule(ut.Shared.UserCodeStart);
    scheduler.schedule(game.LaserSystemJS);
    scheduler.schedule(game.PlayerCollisionSystemJS);
    scheduler.schedule(game.SpawnSystemJS);
    scheduler.schedule(game.EnemyBehaviorFilter_OnEntityUpdateJS);
    scheduler.schedule(ut.Shared.UserCodeEnd);
    scheduler.schedule(ut.Particles.ParticleSystem);
    scheduler.schedule(ut.Shared.RenderingFence);
    scheduler.schedule(ut.Core2D.UpdateLocalTransformSystem);
    scheduler.schedule(ut.Core2D.UpdateWorldTransformSystem);
    scheduler.schedule(ut.Core2D.Sprite2DInitSystem);
    scheduler.schedule(ut.Core2D.DisplayList);
    scheduler.schedule(ut.Shared.PlatformRenderingFence);
    scheduler.schedule(ut.Rendering.RendererCanvas);
    scheduler.schedule(ut.Rendering.RendererGLWebGL);
    scheduler.schedule(ut.Physics2D.Physics2DSystem);

    // Initialize all configuration data
    var c0 = world.getConfigData(ut.Core2D.DisplayInfo);
    c0.width = 600;
    c0.height = 800;
    c0.renderMode = 0;
    world.setConfigData(c0);
    var c1 = world.getConfigData(ut.Physics2D.Physics2DConfig);
    var s0 = new ut.Math.Vector2();
    s0.x = 0;
    s0.y = -10;
    c1.gravity = s0;
    world.setConfigData(c1);

    // Create and initialize all resource entities
    UT_ASSETS_SETUP(world);

    // Create and initialize all startup entities
    ut.EntityGroup.instantiate(world, "game.MainGroup");

    // Set up the WebSocket client
    ut._wsclient = ut._wsclient || {};
    ut._wsclient.world = world;

    // Start the player loop
    try { ut.Runtime.Service.run(world); } catch (e) { if (e !== 'SimulateInfiniteLoop') throw e; }
}
