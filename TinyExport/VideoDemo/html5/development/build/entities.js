/**
 * TINY GENERATED CODE, DO NOT EDIT BY HAND
 * @project VideoDemo
 */

entities.game.NewEntityGroup.name = "NewEntityGroup";
entities.game.NewEntityGroup.load = function(world) {
    var arch0 = world.createArchetype(this.Component, ut.Core2D.Camera2D, ut.Core2D.TransformNode, ut.EditorExtensions.CameraCullingMask, ut.layers.Default)
    var e0 = world.createEntity(arch0);
    world.setEntityName(e0, "Camera");
    var arch1 = world.createArchetype(this.Component, ut.layers.Default, ut.Video.VideoClip, ut.Video.VideoPlayer)
    var e1 = world.createEntity(arch1);
    world.setEntityName(e1, "VideoPlayer");
    var c0 = new ut.Core2D.TransformNode();
    world.setComponentData(e0, c0);
    var c1 = new ut.Core2D.Camera2D();
    c1.halfVerticalSize = 5;
    var s0 = new ut.Math.Rect();
    s0.x = 0;
    s0.y = 0;
    s0.width = 1;
    s0.height = 1;
    c1.rect = s0;
    var s1 = new ut.Core2D.Color();
    s1.r = 0.5471698;
    s1.g = 0.5471698;
    s1.b = 0.5471698;
    s1.a = 1;
    c1.backgroundColor = s1;
    c1.clearFlags = 1;
    c1.depth = -1;
    c1.cullingMask = [ut.layers.Default.cid, ut.layers.TransparentFX.cid, ut.layers.IgnoreRaycast.cid, ut.layers.Water.cid, ut.layers.UI.cid, ut.layers.PostProcessing.cid, ut.layers.Cutscene.cid];
    c1.cullingMode = 2;
    world.setComponentData(e0, c1);
    var c2 = new ut.EditorExtensions.CameraCullingMask();
    c2.mask = -1;
    world.setComponentData(e0, c2);
    var c3 = new ut.Video.VideoPlayer();
    c3.loop = true;
    world.setComponentData(e1, c3);
    var c4 = new ut.Video.VideoClip();
    c4.src = "Assets/SampleVideo.mp4";
    c4.status = 0;
    world.setComponentData(e1, c4);
    return [e0, e1];
}

