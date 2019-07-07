declare namespace entities.game.BulletGroup {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.EnemyGroup {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.ExplosionGroup {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.MainGroup {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace game {

class Boundaries extends ut.Component {
  constructor(minX?: number, maxX?: number, minY?: number, maxY?: number);
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  static readonly minX: ComponentFieldDesc;
  static readonly maxX: ComponentFieldDesc;
  static readonly minY: ComponentFieldDesc;
  static readonly maxY: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Boundaries): Boundaries;
  static _toPtr(p: number, v: Boundaries): void;
  static _tempHeapPtr(v: Boundaries): number;
  static _dtorFn(v: Boundaries): void;
}

}
declare namespace game {

class ChangeOverTime extends ut.Component {
  constructor(changePerSecond?: number);
  changePerSecond: number;
  static readonly changePerSecond: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: ChangeOverTime): ChangeOverTime;
  static _toPtr(p: number, v: ChangeOverTime): void;
  static _tempHeapPtr(v: ChangeOverTime): number;
  static _dtorFn(v: ChangeOverTime): void;
}

}
declare namespace game {

class EnemyTag extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: EnemyTag): EnemyTag;
  static _toPtr(p: number, v: EnemyTag): void;
  static _tempHeapPtr(v: EnemyTag): number;
  static _dtorFn(v: EnemyTag): void;
}

}
declare namespace game {

class Laser extends ut.Component {
  constructor(speed?: number);
  speed: number;
  static readonly speed: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Laser): Laser;
  static _toPtr(p: number, v: Laser): void;
  static _tempHeapPtr(v: Laser): number;
  static _dtorFn(v: Laser): void;
}

}
declare namespace game {

class MoveSpeed extends ut.Component {
  constructor(speed?: number);
  speed: number;
  static readonly speed: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: MoveSpeed): MoveSpeed;
  static _toPtr(p: number, v: MoveSpeed): void;
  static _tempHeapPtr(v: MoveSpeed): number;
  static _dtorFn(v: MoveSpeed): void;
}

}
declare namespace game {

class MoveWithInput extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: MoveWithInput): MoveWithInput;
  static _toPtr(p: number, v: MoveWithInput): void;
  static _tempHeapPtr(v: MoveWithInput): number;
  static _dtorFn(v: MoveWithInput): void;
}

}
declare namespace game {

class PlayerTag extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: PlayerTag): PlayerTag;
  static _toPtr(p: number, v: PlayerTag): void;
  static _tempHeapPtr(v: PlayerTag): number;
  static _dtorFn(v: PlayerTag): void;
}

}
declare namespace game {

class ScrollingBackground extends ut.Component {
  constructor(speed?: number, threshold?: number, distance?: number);
  speed: number;
  threshold: number;
  distance: number;
  static readonly speed: ComponentFieldDesc;
  static readonly threshold: ComponentFieldDesc;
  static readonly distance: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: ScrollingBackground): ScrollingBackground;
  static _toPtr(p: number, v: ScrollingBackground): void;
  static _tempHeapPtr(v: ScrollingBackground): number;
  static _dtorFn(v: ScrollingBackground): void;
}

}
declare namespace game {

class Spawner extends ut.Component {
  constructor(time?: number, delay?: number, isPaused?: boolean, spawnedGroup?: string);
  time: number;
  delay: number;
  isPaused: boolean;
  spawnedGroup: string;
  static readonly time: ComponentFieldDesc;
  static readonly delay: ComponentFieldDesc;
  static readonly isPaused: ComponentFieldDesc;
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Spawner): Spawner;
  static _toPtr(p: number, v: Spawner): void;
  static _tempHeapPtr(v: Spawner): number;
  static _dtorFn(v: Spawner): void;
}

}
declare namespace ut.Core2D.layers {

class Default extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Default): Default;
  static _toPtr(p: number, v: Default): void;
  static _tempHeapPtr(v: Default): number;
  static _dtorFn(v: Default): void;
}

}
declare namespace ut.Core2D.layers {

class TransparentFX extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: TransparentFX): TransparentFX;
  static _toPtr(p: number, v: TransparentFX): void;
  static _tempHeapPtr(v: TransparentFX): number;
  static _dtorFn(v: TransparentFX): void;
}

}
declare namespace ut.Core2D.layers {

class IgnoreRaycast extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: IgnoreRaycast): IgnoreRaycast;
  static _toPtr(p: number, v: IgnoreRaycast): void;
  static _tempHeapPtr(v: IgnoreRaycast): number;
  static _dtorFn(v: IgnoreRaycast): void;
}

}
declare namespace ut.Core2D.layers {

class Water extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Water): Water;
  static _toPtr(p: number, v: Water): void;
  static _tempHeapPtr(v: Water): number;
  static _dtorFn(v: Water): void;
}

}
declare namespace ut.Core2D.layers {

class UI extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: UI): UI;
  static _toPtr(p: number, v: UI): void;
  static _tempHeapPtr(v: UI): number;
  static _dtorFn(v: UI): void;
}

}
declare namespace ut.Core2D.layers {

class PostProcessing extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: PostProcessing): PostProcessing;
  static _toPtr(p: number, v: PostProcessing): void;
  static _tempHeapPtr(v: PostProcessing): number;
  static _dtorFn(v: PostProcessing): void;
}

}
declare namespace ut.Core2D.layers {

class Cutscene extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Cutscene): Cutscene;
  static _toPtr(p: number, v: Cutscene): void;
  static _tempHeapPtr(v: Cutscene): number;
  static _dtorFn(v: Cutscene): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceAnimationClip extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceAnimationClip): AssetReferenceAnimationClip;
  static _toPtr(p: number, v: AssetReferenceAnimationClip): void;
  static _tempHeapPtr(v: AssetReferenceAnimationClip): number;
  static _dtorFn(v: AssetReferenceAnimationClip): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceAudioClip extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceAudioClip): AssetReferenceAudioClip;
  static _toPtr(p: number, v: AssetReferenceAudioClip): void;
  static _tempHeapPtr(v: AssetReferenceAudioClip): number;
  static _dtorFn(v: AssetReferenceAudioClip): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceSprite extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceSprite): AssetReferenceSprite;
  static _toPtr(p: number, v: AssetReferenceSprite): void;
  static _tempHeapPtr(v: AssetReferenceSprite): number;
  static _dtorFn(v: AssetReferenceSprite): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceSpriteAtlas extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceSpriteAtlas): AssetReferenceSpriteAtlas;
  static _toPtr(p: number, v: AssetReferenceSpriteAtlas): void;
  static _tempHeapPtr(v: AssetReferenceSpriteAtlas): number;
  static _dtorFn(v: AssetReferenceSpriteAtlas): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceTexture2D extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceTexture2D): AssetReferenceTexture2D;
  static _toPtr(p: number, v: AssetReferenceTexture2D): void;
  static _tempHeapPtr(v: AssetReferenceTexture2D): number;
  static _dtorFn(v: AssetReferenceTexture2D): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceTileBase extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceTileBase): AssetReferenceTileBase;
  static _toPtr(p: number, v: AssetReferenceTileBase): void;
  static _tempHeapPtr(v: AssetReferenceTileBase): number;
  static _dtorFn(v: AssetReferenceTileBase): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceTMP_FontAsset extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceTMP_FontAsset): AssetReferenceTMP_FontAsset;
  static _toPtr(p: number, v: AssetReferenceTMP_FontAsset): void;
  static _tempHeapPtr(v: AssetReferenceTMP_FontAsset): number;
  static _dtorFn(v: AssetReferenceTMP_FontAsset): void;
}

}
declare namespace ut.EditorExtensions {

class CameraCullingMask extends ut.Component {
  constructor(mask?: number);
  mask: number;
  static readonly mask: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: CameraCullingMask): CameraCullingMask;
  static _toPtr(p: number, v: CameraCullingMask): void;
  static _tempHeapPtr(v: CameraCullingMask): number;
  static _dtorFn(v: CameraCullingMask): void;
}

}
declare namespace ut.EditorExtensions {

class EntityLayer extends ut.Component {
  constructor(layer?: number);
  layer: number;
  static readonly layer: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: EntityLayer): EntityLayer;
  static _toPtr(p: number, v: EntityLayer): void;
  static _tempHeapPtr(v: EntityLayer): number;
  static _dtorFn(v: EntityLayer): void;
}

}
declare namespace game {

class EnemyBehaviorFilter_State extends ut.Component {
  constructor(initialized?: boolean, enabled?: boolean, onEnableCalled?: boolean, onDisableCalled?: boolean);
  initialized: boolean;
  enabled: boolean;
  onEnableCalled: boolean;
  onDisableCalled: boolean;
  static readonly initialized: ComponentFieldDesc;
  static readonly enabled: ComponentFieldDesc;
  static readonly onEnableCalled: ComponentFieldDesc;
  static readonly onDisableCalled: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: EnemyBehaviorFilter_State): EnemyBehaviorFilter_State;
  static _toPtr(p: number, v: EnemyBehaviorFilter_State): void;
  static _tempHeapPtr(v: EnemyBehaviorFilter_State): number;
  static _dtorFn(v: EnemyBehaviorFilter_State): void;
}

}
declare namespace game {
var InputMovementSystemJS: ut.SystemJS;
}
declare namespace game {
var LaserSystemJS: ut.SystemJS;
}
declare namespace game {
var PlayerCollisionSystemJS: ut.SystemJS;
}
declare namespace game {
var SpawnSystemJS: ut.SystemJS;
}
declare namespace game {
var TimeJS: ut.SystemJS;
}
declare namespace game {
var EnemyBehaviorFilter_OnEntityEnableJS: ut.SystemJS;
}
declare namespace game {
var EnemyBehaviorFilter_OnEntityUpdateJS: ut.SystemJS;
}


declare namespace Module {

}

