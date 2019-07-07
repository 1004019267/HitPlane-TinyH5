/**
 * TINY GENERATED CODE, DO NOT EDIT BY HAND
 * @project GalaxyRaiders
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
ut.importModule(ut.HitBox2D);
ut.importModule(ut.Core2D);
ut.importModule(ut.Text);
ut.importModule(ut.HTML);
ut.importModule(ut.UILayout);
ut.main = function() {
    // Singleton world
    var world = new ut.World();

    // Schedule all systems
    var scheduler = world.scheduler();
    game.DamageSystemJS.update = new game.DamageSystem()._MakeSystemFn();
    game.ExplosionSystemJS.update = new game.ExplosionSystem()._MakeSystemFn();
    game.GameManagerSystemJS.update = new game.GameManagerSystem()._MakeSystemFn();
    game.HitSystemJS.update = new game.HitSystem()._MakeSystemFn();
    game.LaserSystemJS.update = new game.LaserSystem()._MakeSystemFn();
    game.LifeManagerSystemJS.update = new game.LifeManagerSystem()._MakeSystemFn();
    game.MoveSystemJS.update = new game.MoveSystem()._MakeSystemFn();
    game.RaidersSystemJS.update = new game.RaidersSystem()._MakeSystemFn();
    game.RaiderSystemJS.update = new game.RaiderSystem()._MakeSystemFn();
    game.ScoreSystemJS.update = new game.ScoreSystem()._MakeSystemFn();
    game.SpaceshipSystemJS.update = new game.SpaceshipSystem()._MakeSystemFn();
    scheduler.schedule(ut.HTML.InputHandler);
    scheduler.schedule(ut.HTML.AssetLoader);
    scheduler.schedule(ut.HitBox2D.HitBox2DSystem);
    scheduler.schedule(ut.Core2D.SequencePlayerSystem);
    scheduler.schedule(ut.Shared.InputFence);
    scheduler.schedule(ut.Shared.UserCodeStart);
    scheduler.schedule(game.DamageSystemJS);
    scheduler.schedule(game.ExplosionSystemJS);
    scheduler.schedule(game.GameManagerSystemJS);
    scheduler.schedule(game.HitSystemJS);
    scheduler.schedule(game.LaserSystemJS);
    scheduler.schedule(game.LifeManagerSystemJS);
    scheduler.schedule(game.MoveSystemJS);
    scheduler.schedule(game.RaidersSystemJS);
    scheduler.schedule(game.RaiderSystemJS);
    scheduler.schedule(game.ScoreSystemJS);
    scheduler.schedule(game.SpaceshipSystemJS);
    scheduler.schedule(ut.Shared.UserCodeEnd);
    scheduler.schedule(ut.UILayout.UICanvasSystem);
    scheduler.schedule(ut.UILayout.UILayoutSystem);
    scheduler.schedule(ut.UILayout.SetRectTransformSizeSystem);
    scheduler.schedule(ut.HTML.TextMeasurement);
    scheduler.schedule(ut.UILayout.SetSprite2DSizeSystem);
    scheduler.schedule(ut.Shared.RenderingFence);
    scheduler.schedule(ut.Core2D.UpdateLocalTransformSystem);
    scheduler.schedule(ut.Core2D.UpdateWorldTransformSystem);
    scheduler.schedule(ut.Core2D.Sprite2DInitSystem);
    scheduler.schedule(ut.Text.Text2DInitSystem);
    scheduler.schedule(ut.Core2D.DisplayList);
    scheduler.schedule(ut.Shared.PlatformRenderingFence);
    scheduler.schedule(ut.Rendering.RendererCanvas);
    scheduler.schedule(ut.Rendering.RendererGLWebGL);

    // Initialize all configuration data
    var c0 = world.getConfigData(ut.Core2D.DisplayInfo);
    c0.width = 1920;
    c0.height = 1080;
    c0.autoSizeToFrame = true;
    c0.renderMode = 0;
    world.setConfigData(c0);
    var c1 = world.getConfigData(game.GameContext);
    c1.RaidersCanShoot = true;
    c1.PlayerCanShoot = true;
    c1.Life = 2;
    c1.State = 0;
    c1.FlickeringInterval = 0.25;
    c1.StartShootingDelay = 0.5;
    world.setConfigData(c1);

    // Create and initialize all resource entities
    UT_ASSETS_SETUP(world);

    // Create and initialize all startup entities
    ut.EntityGroup.instantiate(world, "game.Bootstrap");

    // Set up the WebSocket client
    ut._wsclient = ut._wsclient || {};
    ut._wsclient.world = world;

    // Start the player loop
    try { ut.Runtime.Service.run(world); } catch (e) { if (e !== 'SimulateInfiniteLoop') throw e; }
}
