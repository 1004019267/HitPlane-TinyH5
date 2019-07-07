declare namespace game {
enum GameStateTypes {
  Boot = 0,
  Loading = 1,
  MainMenu = 2,
  Game = 3,
  GameOver = 4,
  Settings = 5,
  Credits = 6,
  Paused = 7,
  WorldMap = 8,
  Cutscene = 9,
  CutsceneEnd = 10,
  Transition = 11,
  Languages = 12,
}
}
declare namespace game {
enum DinosaurAttackTypes {
  TailWhip = 0,
  Crush = 1,
  Launch = 2,
  Jump = 3,
  Stomp = 4,
  Bite = 5,
  Laser = 6,
}
}
declare namespace game {
enum PersonState {
  Appear = 0,
  Fire = 1,
  Walk = 2,
}
}
declare namespace game {
enum GemPowerUpTypes {
  None = 0,
  Row = 1,
  Column = 2,
  Square = 3,
  DiagonalCross = 4,
  SameColor = 5,
}
}
declare namespace game {
enum GemTypes {
  Blue = 0,
  Green = 1,
  Purple = 2,
  Red = 3,
  Silver = 4,
  Yellow = 5,
  Egg = 6,
  ColorBomb = 7,
}
}
declare namespace game {
enum SkinTypes {
  Camp = 0,
  Farm = 1,
  City = 2,
}
}
declare namespace game {
enum CustomLabelAlignment {
  Left = 0,
  Center = 1,
  Right = 2,
}
}
declare namespace game {

class ScrollingObjectSpawnerDetails {
  constructor(Skin?: SkinTypes, MinSpawnIntervalX?: number, MaxSpawnIntervalX?: number, SpawnIntervalFrequency?: number);
  Skin: SkinTypes;
  MinSpawnIntervalX: number;
  MaxSpawnIntervalX: number;
  SpawnIntervalFrequency: number;
  static _size: number;
  static _fromPtr(p: number, v?: ScrollingObjectSpawnerDetails): ScrollingObjectSpawnerDetails;
  static _toPtr(p: number, v: ScrollingObjectSpawnerDetails): void;
  static _tempHeapPtr(v: ScrollingObjectSpawnerDetails): number;
}
interface ScrollingObjectSpawnerDetailsComponentFieldDesc extends ut.ComponentFieldDesc {
  
  static readonly MinSpawnIntervalX: ComponentFieldDesc;
  static readonly MaxSpawnIntervalX: ComponentFieldDesc;
  static readonly SpawnIntervalFrequency: ComponentFieldDesc;
}

}
declare namespace game {

class SpriteRendererSkinColorInfo {
  constructor(Skin?: SkinTypes, Color?: Color);
  Skin: SkinTypes;
  Color: Color;
  static _size: number;
  static _fromPtr(p: number, v?: SpriteRendererSkinColorInfo): SpriteRendererSkinColorInfo;
  static _toPtr(p: number, v: SpriteRendererSkinColorInfo): void;
  static _tempHeapPtr(v: SpriteRendererSkinColorInfo): number;
}
interface SpriteRendererSkinColorInfoComponentFieldDesc extends ut.ComponentFieldDesc {
  
  static readonly Color: ColorComponentFieldDesc;
}

}
declare namespace game {

class LocalizationItem {
  constructor(TextID?: string, en?: string, fr?: string);
  TextID: string;
  en: string;
  fr: string;
  static _size: number;
  static _fromPtr(p: number, v?: LocalizationItem): LocalizationItem;
  static _toPtr(p: number, v: LocalizationItem): void;
  static _tempHeapPtr(v: LocalizationItem): number;
}
interface LocalizationItemComponentFieldDesc extends ut.ComponentFieldDesc {
  
  
  
}

}
declare namespace entities.game.Bootstrap {

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
declare namespace entities.game.CutsceneCamera {

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
declare namespace entities.game.CutscenePartA {

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
declare namespace entities.game.CutscenePartB {

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
declare namespace entities.game.CutscenePartC {

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
declare namespace entities.game.EndCutscenePartA {

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
declare namespace entities.game.EndCutscenePartB {

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
declare namespace entities.game.Dinosaur {

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
declare namespace entities.game.DinosaurLaserAttackBlackCover {

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
declare namespace entities.game.Bird {

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
declare namespace entities.game.BuildingMedium {

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
declare namespace entities.game.BuildingSmall {

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
declare namespace entities.game.BuildingSmall2 {

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
declare namespace entities.game.BuildingTall {

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
declare namespace entities.game.Car1 {

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
declare namespace entities.game.Car2 {

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
declare namespace entities.game.CarSkyFall {

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
declare namespace entities.game.Cloud1 {

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
declare namespace entities.game.Cloud2 {

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
declare namespace entities.game.Cloud3 {

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
declare namespace entities.game.Explosion1 {

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
declare namespace entities.game.Explosion2 {

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
declare namespace entities.game.FireTruck {

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
declare namespace entities.game.Floor {

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
declare namespace entities.game.GameScene {

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
declare namespace entities.game.GroundDeco1 {

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
declare namespace entities.game.GroundDeco2 {

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
declare namespace entities.game.GroundDeco3 {

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
declare namespace entities.game.GroundDeco4 {

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
declare namespace entities.game.Helicopter {

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
declare namespace entities.game.KidOnBike {

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
declare namespace entities.game.Parallax1 {

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
declare namespace entities.game.Parallax2 {

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
declare namespace entities.game.Parallax3 {

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
declare namespace entities.game.Parallax4 {

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
declare namespace entities.game.Parallax5 {

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
declare namespace entities.game.ParticleExplosion {

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
declare namespace entities.game.Person {

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
declare namespace entities.game.Prop1 {

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
declare namespace entities.game.Prop2 {

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
declare namespace entities.game.Prop3 {

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
declare namespace entities.game.SewerStraight {

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
declare namespace entities.game.SewerT {

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
declare namespace entities.game.Cell {

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
declare namespace entities.game.CollectedEgg {

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
declare namespace entities.game.DestroyLaserAnimation {

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
declare namespace entities.game.DestroyLineAnimation {

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
declare namespace entities.game.ExplodingGem1 {

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
declare namespace entities.game.ExplodingGem2 {

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
declare namespace entities.game.Gem {

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
declare namespace entities.game.ScoreGainLabel {

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
declare namespace entities.game.Level1 {

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
declare namespace entities.game.Level2 {

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
declare namespace entities.game.Level3 {

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
declare namespace entities.game.TutorialEggPointer {

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
declare namespace entities.game.TutorialHighlight {

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
declare namespace entities.game.TutorialMatchPointer {

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
declare namespace entities.game.TutorialSurvivalPointer {

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
declare namespace entities.game.CreditsMenu {

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
declare namespace entities.game.GameOverMenu {

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
declare namespace entities.game.GameUI {

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
declare namespace entities.game.LanguagesMenu {

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
declare namespace entities.game.Loading {

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
declare namespace entities.game.MainMenu {

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
declare namespace entities.game.PauseMenu {

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
declare namespace entities.game.ScreenTransition {

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
declare namespace entities.game.SettingsMenu {

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
declare namespace entities.game.SurvivalModeTimeline {

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
declare namespace entities.game.WorldMap {

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
declare namespace entities.game.WorldMapItem {

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
declare namespace entities.game.BackgroundNearDeathWarning {

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
declare namespace entities.game.CustomLabelCharacter {

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

class GameState extends ut.Component {
  constructor(GameStateType?: GameStateTypes, CurrentLevelID?: number, CurrentScore?: number, CurrentMoveCount?: number, Time?: number, SurvivalTimer?: number, LevelCount?: number, ShowHintDelay?: number, EnvironmentSceneWidth?: number);
  GameStateType: GameStateTypes;
  CurrentLevelID: number;
  CurrentScore: number;
  CurrentMoveCount: number;
  Time: number;
  SurvivalTimer: number;
  LevelCount: number;
  ShowHintDelay: number;
  EnvironmentSceneWidth: number;
  
  
  static readonly CurrentScore: ComponentFieldDesc;
  static readonly CurrentMoveCount: ComponentFieldDesc;
  static readonly Time: ComponentFieldDesc;
  static readonly SurvivalTimer: ComponentFieldDesc;
  static readonly LevelCount: ComponentFieldDesc;
  static readonly ShowHintDelay: ComponentFieldDesc;
  static readonly EnvironmentSceneWidth: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: GameState): GameState;
  static _toPtr(p: number, v: GameState): void;
  static _tempHeapPtr(v: GameState): number;
  static _dtorFn(v: GameState): void;
}

}
declare namespace game {

class CutsceneDirector extends ut.Component {
  constructor(CurrentElementIndex?: number, Speed?: number, PauseDelayTimer?: number);
  CurrentElementIndex: number;
  Speed: number;
  PauseDelayTimer: number;
  static readonly CurrentElementIndex: ComponentFieldDesc;
  static readonly Speed: ComponentFieldDesc;
  static readonly PauseDelayTimer: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: CutsceneDirector): CutsceneDirector;
  static _toPtr(p: number, v: CutsceneDirector): void;
  static _tempHeapPtr(v: CutsceneDirector): number;
  static _dtorFn(v: CutsceneDirector): void;
}

}
declare namespace game {

class CutsceneElement extends ut.Component {
  constructor(Index?: number, Duration?: number, ClearPreviousElements?: boolean, Timer?: number);
  Index: number;
  Duration: number;
  ClearPreviousElements: boolean;
  Timer: number;
  
  static readonly Duration: ComponentFieldDesc;
  static readonly ClearPreviousElements: ComponentFieldDesc;
  static readonly Timer: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: CutsceneElement): CutsceneElement;
  static _toPtr(p: number, v: CutsceneElement): void;
  static _tempHeapPtr(v: CutsceneElement): number;
  static _dtorFn(v: CutsceneElement): void;
}

}
declare namespace game {

class CutsceneFade extends ut.Component {
  constructor(Duration?: number);
  Duration: number;
  static readonly Duration: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: CutsceneFade): CutsceneFade;
  static _toPtr(p: number, v: CutsceneFade): void;
  static _tempHeapPtr(v: CutsceneFade): number;
  static _dtorFn(v: CutsceneFade): void;
}

}
declare namespace game {

class CutsceneMove extends ut.Component {
  constructor(Duration?: number, StartOffset?: Vector2, Easing?: TweenFunc);
  Duration: number;
  StartOffset: Vector2;
  Easing: TweenFunc;
  static readonly Duration: ComponentFieldDesc;
  static readonly StartOffset: Vector2ComponentFieldDesc;
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: CutsceneMove): CutsceneMove;
  static _toPtr(p: number, v: CutsceneMove): void;
  static _tempHeapPtr(v: CutsceneMove): number;
  static _dtorFn(v: CutsceneMove): void;
}

}
declare namespace game {

class CutsceneScale extends ut.Component {
  constructor(Duration?: number, Easing?: TweenFunc, StartScale?: Vector3);
  Duration: number;
  Easing: TweenFunc;
  StartScale: Vector3;
  static readonly Duration: ComponentFieldDesc;
  
  static readonly StartScale: Vector3ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: CutsceneScale): CutsceneScale;
  static _toPtr(p: number, v: CutsceneScale): void;
  static _tempHeapPtr(v: CutsceneScale): number;
  static _dtorFn(v: CutsceneScale): void;
}

}
declare namespace game {

class Dinosaur extends ut.Component {
  constructor(MoveSpeed?: number, WalkTimer?: number, WalkAnimation?: Entity, TailWhipAnimation?: Entity, StompAnimation?: Entity, BiteAnimation?: Entity, CrushAnimation?: Entity, LaunchAnimation?: Entity, JumpAnimation?: Entity, JumpAnimationHeightCurve?: Entity, DefaultPositionY?: number, JumpHeight?: number, Shadow?: Entity, LaserAnimation?: Entity, DeathAnimation?: Entity, LaserBeam1?: Entity, LaserBeam2?: Entity);
  MoveSpeed: number;
  WalkTimer: number;
  WalkAnimation: Entity;
  TailWhipAnimation: Entity;
  StompAnimation: Entity;
  BiteAnimation: Entity;
  CrushAnimation: Entity;
  LaunchAnimation: Entity;
  JumpAnimation: Entity;
  JumpAnimationHeightCurve: Entity;
  DefaultPositionY: number;
  JumpHeight: number;
  Shadow: Entity;
  LaserAnimation: Entity;
  DeathAnimation: Entity;
  LaserBeam1: Entity;
  LaserBeam2: Entity;
  static readonly MoveSpeed: ComponentFieldDesc;
  static readonly WalkTimer: ComponentFieldDesc;
  static readonly WalkAnimation: EntityComponentFieldDesc;
  static readonly TailWhipAnimation: EntityComponentFieldDesc;
  static readonly StompAnimation: EntityComponentFieldDesc;
  static readonly BiteAnimation: EntityComponentFieldDesc;
  static readonly CrushAnimation: EntityComponentFieldDesc;
  static readonly LaunchAnimation: EntityComponentFieldDesc;
  static readonly JumpAnimation: EntityComponentFieldDesc;
  static readonly JumpAnimationHeightCurve: EntityComponentFieldDesc;
  static readonly DefaultPositionY: ComponentFieldDesc;
  static readonly JumpHeight: ComponentFieldDesc;
  static readonly Shadow: EntityComponentFieldDesc;
  static readonly LaserAnimation: EntityComponentFieldDesc;
  static readonly DeathAnimation: EntityComponentFieldDesc;
  static readonly LaserBeam1: EntityComponentFieldDesc;
  static readonly LaserBeam2: EntityComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Dinosaur): Dinosaur;
  static _toPtr(p: number, v: Dinosaur): void;
  static _tempHeapPtr(v: Dinosaur): number;
  static _dtorFn(v: Dinosaur): void;
}

}
declare namespace game {

class DinosaurAttack extends ut.Component {
  constructor(Timer?: number, AttackType?: DinosaurAttackTypes, IsDone?: boolean);
  Timer: number;
  AttackType: DinosaurAttackTypes;
  IsDone: boolean;
  static readonly Timer: ComponentFieldDesc;
  
  static readonly IsDone: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: DinosaurAttack): DinosaurAttack;
  static _toPtr(p: number, v: DinosaurAttack): void;
  static _tempHeapPtr(v: DinosaurAttack): number;
  static _dtorFn(v: DinosaurAttack): void;
}

}
declare namespace game {

class DinosaurLaserAttackBlackCover extends ut.Component {
  constructor(AlphaCurve?: Entity);
  AlphaCurve: Entity;
  static readonly AlphaCurve: EntityComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: DinosaurLaserAttackBlackCover): DinosaurLaserAttackBlackCover;
  static _toPtr(p: number, v: DinosaurLaserAttackBlackCover): void;
  static _tempHeapPtr(v: DinosaurLaserAttackBlackCover): number;
  static _dtorFn(v: DinosaurLaserAttackBlackCover): void;
}

}
declare namespace game {

class Building extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Building): Building;
  static _toPtr(p: number, v: Building): void;
  static _tempHeapPtr(v: Building): number;
  static _dtorFn(v: Building): void;
}

}
declare namespace game {

class Car extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Car): Car;
  static _toPtr(p: number, v: Car): void;
  static _tempHeapPtr(v: Car): number;
  static _dtorFn(v: Car): void;
}

}
declare namespace game {

class Destructible extends ut.Component {
  constructor(CurrentState?: number, LastState?: number, SpriteStates?: string[], ExplosionOffsetX?: number, ExplosionOffsetY?: number, ExplosionRangeX?: number, ExplosionRangeY?: number, ExplosionMinCount?: number, ExplosionMaxCount?: number);
  CurrentState: number;
  LastState: number;
  SpriteStates: string[];
  ExplosionOffsetX: number;
  ExplosionOffsetY: number;
  ExplosionRangeX: number;
  ExplosionRangeY: number;
  ExplosionMinCount: number;
  ExplosionMaxCount: number;
  static readonly CurrentState: ComponentFieldDesc;
  static readonly LastState: ComponentFieldDesc;
  
  static readonly ExplosionOffsetX: ComponentFieldDesc;
  static readonly ExplosionOffsetY: ComponentFieldDesc;
  static readonly ExplosionRangeX: ComponentFieldDesc;
  static readonly ExplosionRangeY: ComponentFieldDesc;
  static readonly ExplosionMinCount: ComponentFieldDesc;
  static readonly ExplosionMaxCount: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Destructible): Destructible;
  static _toPtr(p: number, v: Destructible): void;
  static _tempHeapPtr(v: Destructible): number;
  static _dtorFn(v: Destructible): void;
}

}
declare namespace game {

class FireTruck extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: FireTruck): FireTruck;
  static _toPtr(p: number, v: FireTruck): void;
  static _tempHeapPtr(v: FireTruck): number;
  static _dtorFn(v: FireTruck): void;
}

}
declare namespace game {

class Helicopter extends ut.Component {
  constructor(MoveSpeed?: number, SlowDownDistance?: number, DestinationPositionX?: number, DestinationPositionY?: number, ReachedDestination?: boolean, Timer?: number);
  MoveSpeed: number;
  SlowDownDistance: number;
  DestinationPositionX: number;
  DestinationPositionY: number;
  ReachedDestination: boolean;
  Timer: number;
  static readonly MoveSpeed: ComponentFieldDesc;
  static readonly SlowDownDistance: ComponentFieldDesc;
  static readonly DestinationPositionX: ComponentFieldDesc;
  static readonly DestinationPositionY: ComponentFieldDesc;
  static readonly ReachedDestination: ComponentFieldDesc;
  static readonly Timer: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Helicopter): Helicopter;
  static _toPtr(p: number, v: Helicopter): void;
  static _tempHeapPtr(v: Helicopter): number;
  static _dtorFn(v: Helicopter): void;
}

}
declare namespace game {

class HelicopterSpawner extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: HelicopterSpawner): HelicopterSpawner;
  static _toPtr(p: number, v: HelicopterSpawner): void;
  static _tempHeapPtr(v: HelicopterSpawner): number;
  static _dtorFn(v: HelicopterSpawner): void;
}

}
declare namespace game {

class KidOnBike extends ut.Component {
  constructor(IsInWheelyMode?: boolean, AnimationKidBike?: Entity, AnimationKidWheely?: Entity);
  IsInWheelyMode: boolean;
  AnimationKidBike: Entity;
  AnimationKidWheely: Entity;
  static readonly IsInWheelyMode: ComponentFieldDesc;
  static readonly AnimationKidBike: EntityComponentFieldDesc;
  static readonly AnimationKidWheely: EntityComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: KidOnBike): KidOnBike;
  static _toPtr(p: number, v: KidOnBike): void;
  static _tempHeapPtr(v: KidOnBike): number;
  static _dtorFn(v: KidOnBike): void;
}

}
declare namespace game {

class KidOnBikeSpawner extends ut.Component {
  constructor(Timer?: number, SpawnDelay?: number);
  Timer: number;
  SpawnDelay: number;
  static readonly Timer: ComponentFieldDesc;
  static readonly SpawnDelay: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: KidOnBikeSpawner): KidOnBikeSpawner;
  static _toPtr(p: number, v: KidOnBikeSpawner): void;
  static _tempHeapPtr(v: KidOnBikeSpawner): number;
  static _dtorFn(v: KidOnBikeSpawner): void;
}

}
declare namespace game {

class PeopleSpawner extends ut.Component {
  constructor(MaxPeopleCount?: number, Timer?: number, SpawnInterval?: number);
  MaxPeopleCount: number;
  Timer: number;
  SpawnInterval: number;
  
  static readonly Timer: ComponentFieldDesc;
  static readonly SpawnInterval: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: PeopleSpawner): PeopleSpawner;
  static _toPtr(p: number, v: PeopleSpawner): void;
  static _tempHeapPtr(v: PeopleSpawner): number;
  static _dtorFn(v: PeopleSpawner): void;
}

}
declare namespace game {

class Person extends ut.Component {
  constructor(MoveSpeed?: number, MoveSpeedMultiplier?: number, FearSpeedMultiplier?: number, MinimumDistanceFromDinosaur?: number, MaximumDistanceFromDinosaur?: number, State?: PersonState, WalkPositionY?: number, WalkAnimation?: Entity, FireAnimation?: Entity);
  MoveSpeed: number;
  MoveSpeedMultiplier: number;
  FearSpeedMultiplier: number;
  MinimumDistanceFromDinosaur: number;
  MaximumDistanceFromDinosaur: number;
  State: PersonState;
  WalkPositionY: number;
  WalkAnimation: Entity;
  FireAnimation: Entity;
  static readonly MoveSpeed: ComponentFieldDesc;
  static readonly MoveSpeedMultiplier: ComponentFieldDesc;
  static readonly FearSpeedMultiplier: ComponentFieldDesc;
  static readonly MinimumDistanceFromDinosaur: ComponentFieldDesc;
  static readonly MaximumDistanceFromDinosaur: ComponentFieldDesc;
  
  static readonly WalkPositionY: ComponentFieldDesc;
  static readonly WalkAnimation: EntityComponentFieldDesc;
  static readonly FireAnimation: EntityComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Person): Person;
  static _toPtr(p: number, v: Person): void;
  static _tempHeapPtr(v: Person): number;
  static _dtorFn(v: Person): void;
}

}
declare namespace game {

class Prop extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Prop): Prop;
  static _toPtr(p: number, v: Prop): void;
  static _tempHeapPtr(v: Prop): number;
  static _dtorFn(v: Prop): void;
}

}
declare namespace game {

class ScrollingObject extends ut.Component {
  constructor(Speed?: number, AutonomousSpeed?: number, SpawnerName?: string);
  Speed: number;
  AutonomousSpeed: number;
  SpawnerName: string;
  static readonly Speed: ComponentFieldDesc;
  static readonly AutonomousSpeed: ComponentFieldDesc;
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: ScrollingObject): ScrollingObject;
  static _toPtr(p: number, v: ScrollingObject): void;
  static _tempHeapPtr(v: ScrollingObject): number;
  static _dtorFn(v: ScrollingObject): void;
}

}
declare namespace game {

class ScrollingObjectSpawner extends ut.Component {
  constructor(SpawnDetailsBySkin?: ScrollingObjectSpawnerDetails[], EntitiesToSpawn?: string[], MaxRandomYOffset?: number, RandomizeFlipX?: boolean, RandomizeFlipY?: boolean, NextObjectDistance?: number);
  SpawnDetailsBySkin: ScrollingObjectSpawnerDetails[];
  EntitiesToSpawn: string[];
  MaxRandomYOffset: number;
  RandomizeFlipX: boolean;
  RandomizeFlipY: boolean;
  NextObjectDistance: number;
  
  
  static readonly MaxRandomYOffset: ComponentFieldDesc;
  static readonly RandomizeFlipX: ComponentFieldDesc;
  static readonly RandomizeFlipY: ComponentFieldDesc;
  static readonly NextObjectDistance: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: ScrollingObjectSpawner): ScrollingObjectSpawner;
  static _toPtr(p: number, v: ScrollingObjectSpawner): void;
  static _tempHeapPtr(v: ScrollingObjectSpawner): number;
  static _dtorFn(v: ScrollingObjectSpawner): void;
}

}
declare namespace game {

class Cell extends ut.Component {
  constructor(X?: number, Y?: number, Size?: number);
  X: number;
  Y: number;
  Size: number;
  static readonly X: ComponentFieldDesc;
  static readonly Y: ComponentFieldDesc;
  static readonly Size: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Cell): Cell;
  static _toPtr(p: number, v: Cell): void;
  static _tempHeapPtr(v: Cell): number;
  static _dtorFn(v: Cell): void;
}

}
declare namespace game {

class DestroyLaserAnimation extends ut.Component {
  constructor(Timer?: number, Duration?: number, StartPositionX?: number, StartPositionY?: number, EndPositionX?: number, EndPositionY?: number);
  Timer: number;
  Duration: number;
  StartPositionX: number;
  StartPositionY: number;
  EndPositionX: number;
  EndPositionY: number;
  static readonly Timer: ComponentFieldDesc;
  static readonly Duration: ComponentFieldDesc;
  static readonly StartPositionX: ComponentFieldDesc;
  static readonly StartPositionY: ComponentFieldDesc;
  static readonly EndPositionX: ComponentFieldDesc;
  static readonly EndPositionY: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: DestroyLaserAnimation): DestroyLaserAnimation;
  static _toPtr(p: number, v: DestroyLaserAnimation): void;
  static _tempHeapPtr(v: DestroyLaserAnimation): number;
  static _dtorFn(v: DestroyLaserAnimation): void;
}

}
declare namespace game {

class DestroyLineAnimation extends ut.Component {
  constructor(Timer?: number, Duration?: number, ScaleDuration?: number, StartPositionX?: number, StartPositionY?: number, EndPositionX?: number, EndPositionY?: number, ColorGradient?: Entity);
  Timer: number;
  Duration: number;
  ScaleDuration: number;
  StartPositionX: number;
  StartPositionY: number;
  EndPositionX: number;
  EndPositionY: number;
  ColorGradient: Entity;
  static readonly Timer: ComponentFieldDesc;
  static readonly Duration: ComponentFieldDesc;
  static readonly ScaleDuration: ComponentFieldDesc;
  static readonly StartPositionX: ComponentFieldDesc;
  static readonly StartPositionY: ComponentFieldDesc;
  static readonly EndPositionX: ComponentFieldDesc;
  static readonly EndPositionY: ComponentFieldDesc;
  static readonly ColorGradient: EntityComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: DestroyLineAnimation): DestroyLineAnimation;
  static _toPtr(p: number, v: DestroyLineAnimation): void;
  static _tempHeapPtr(v: DestroyLineAnimation): number;
  static _dtorFn(v: DestroyLineAnimation): void;
}

}
declare namespace game {

class Gem extends ut.Component {
  constructor(CellHashKey?: number, IsSelected?: boolean, IsFalling?: boolean, IsSwapping?: boolean, SpriteRendererHighlightGem?: Entity, GemType?: number, HighlightAlpha?: number, IsPossibleMatch?: boolean, PowerUp?: GemPowerUpTypes, CurrentPowerUpVisual?: GemPowerUpTypes, RowPowerUpVisual?: Entity, ColumnPowerUpVisual?: Entity, DiagonalPowerUpVisual?: Entity, SquarePowerUpVisual?: Entity, SameColorPowerUpVisual?: Entity);
  CellHashKey: number;
  IsSelected: boolean;
  IsFalling: boolean;
  IsSwapping: boolean;
  SpriteRendererHighlightGem: Entity;
  GemType: number;
  HighlightAlpha: number;
  IsPossibleMatch: boolean;
  PowerUp: GemPowerUpTypes;
  CurrentPowerUpVisual: GemPowerUpTypes;
  RowPowerUpVisual: Entity;
  ColumnPowerUpVisual: Entity;
  DiagonalPowerUpVisual: Entity;
  SquarePowerUpVisual: Entity;
  SameColorPowerUpVisual: Entity;
  
  static readonly IsSelected: ComponentFieldDesc;
  static readonly IsFalling: ComponentFieldDesc;
  static readonly IsSwapping: ComponentFieldDesc;
  static readonly SpriteRendererHighlightGem: EntityComponentFieldDesc;
  static readonly GemType: ComponentFieldDesc;
  static readonly HighlightAlpha: ComponentFieldDesc;
  static readonly IsPossibleMatch: ComponentFieldDesc;
  
  
  static readonly RowPowerUpVisual: EntityComponentFieldDesc;
  static readonly ColumnPowerUpVisual: EntityComponentFieldDesc;
  static readonly DiagonalPowerUpVisual: EntityComponentFieldDesc;
  static readonly SquarePowerUpVisual: EntityComponentFieldDesc;
  static readonly SameColorPowerUpVisual: EntityComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Gem): Gem;
  static _toPtr(p: number, v: Gem): void;
  static _tempHeapPtr(v: Gem): number;
  static _dtorFn(v: Gem): void;
}

}
declare namespace game {

class GemFallTweenEndCallback extends ut.Component {
  constructor(GemEntity?: Entity);
  GemEntity: Entity;
  static readonly GemEntity: EntityComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: GemFallTweenEndCallback): GemFallTweenEndCallback;
  static _toPtr(p: number, v: GemFallTweenEndCallback): void;
  static _tempHeapPtr(v: GemFallTweenEndCallback): number;
  static _dtorFn(v: GemFallTweenEndCallback): void;
}

}
declare namespace game {

class GemSwap extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: GemSwap): GemSwap;
  static _toPtr(p: number, v: GemSwap): void;
  static _tempHeapPtr(v: GemSwap): number;
  static _dtorFn(v: GemSwap): void;
}

}
declare namespace game {

class GemSwapTweenEndCallback extends ut.Component {
  constructor(GemEntity?: Entity);
  GemEntity: Entity;
  static readonly GemEntity: EntityComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: GemSwapTweenEndCallback): GemSwapTweenEndCallback;
  static _toPtr(p: number, v: GemSwapTweenEndCallback): void;
  static _tempHeapPtr(v: GemSwapTweenEndCallback): number;
  static _dtorFn(v: GemSwapTweenEndCallback): void;
}

}
declare namespace game {

class Matched extends ut.Component {
  constructor(CreatedPowerUp?: GemPowerUpTypes, IsMatch?: boolean);
  CreatedPowerUp: GemPowerUpTypes;
  IsMatch: boolean;
  
  static readonly IsMatch: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Matched): Matched;
  static _toPtr(p: number, v: Matched): void;
  static _tempHeapPtr(v: Matched): number;
  static _dtorFn(v: Matched): void;
}

}
declare namespace game {

class MatchPossibility extends ut.Component {
  constructor(HintTimer?: number, SwapGem1HashKey?: number, SwapGem2HashKey?: number, NeedsSwap?: boolean);
  HintTimer: number;
  SwapGem1HashKey: number;
  SwapGem2HashKey: number;
  NeedsSwap: boolean;
  static readonly HintTimer: ComponentFieldDesc;
  static readonly SwapGem1HashKey: ComponentFieldDesc;
  static readonly SwapGem2HashKey: ComponentFieldDesc;
  static readonly NeedsSwap: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: MatchPossibility): MatchPossibility;
  static _toPtr(p: number, v: MatchPossibility): void;
  static _tempHeapPtr(v: MatchPossibility): number;
  static _dtorFn(v: MatchPossibility): void;
}

}
declare namespace game {

class Level extends ut.Component {
  constructor(LevelID?: number, Skin?: SkinTypes, MaxMoveCount?: number, StartPowerUps?: GemPowerUpTypes[], MissingGems?: GemTypes[]);
  LevelID: number;
  Skin: SkinTypes;
  MaxMoveCount: number;
  StartPowerUps: GemPowerUpTypes[];
  MissingGems: GemTypes[];
  static readonly LevelID: ComponentFieldDesc;
  
  static readonly MaxMoveCount: ComponentFieldDesc;
  
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Level): Level;
  static _toPtr(p: number, v: Level): void;
  static _tempHeapPtr(v: Level): number;
  static _dtorFn(v: Level): void;
}

}
declare namespace game {

class LevelEggObjective extends ut.Component {
  constructor(EggsInGridAtStart?: number, EggsToSpawnOnEggCollected?: number, CollectedEggs?: number);
  EggsInGridAtStart: number;
  EggsToSpawnOnEggCollected: number;
  CollectedEggs: number;
  static readonly EggsInGridAtStart: ComponentFieldDesc;
  static readonly EggsToSpawnOnEggCollected: ComponentFieldDesc;
  static readonly CollectedEggs: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: LevelEggObjective): LevelEggObjective;
  static _toPtr(p: number, v: LevelEggObjective): void;
  static _tempHeapPtr(v: LevelEggObjective): number;
  static _dtorFn(v: LevelEggObjective): void;
}

}
declare namespace game {

class LevelPointObjective extends ut.Component {
  constructor(ScoreObjective?: number);
  ScoreObjective: number;
  static readonly ScoreObjective: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: LevelPointObjective): LevelPointObjective;
  static _toPtr(p: number, v: LevelPointObjective): void;
  static _tempHeapPtr(v: LevelPointObjective): number;
  static _dtorFn(v: LevelPointObjective): void;
}

}
declare namespace game {

class LevelSurvival extends ut.Component {
  constructor(MaxSurvivalTime?: number, TimeDepleteRate?: number, SurvivalTimer?: number, StartTimeGainByMatch?: number, EndTimeGainByMatch?: number, DifficulyRampUpTime?: number, TimeObjective?: number);
  MaxSurvivalTime: number;
  TimeDepleteRate: number;
  SurvivalTimer: number;
  StartTimeGainByMatch: number;
  EndTimeGainByMatch: number;
  DifficulyRampUpTime: number;
  TimeObjective: number;
  static readonly MaxSurvivalTime: ComponentFieldDesc;
  static readonly TimeDepleteRate: ComponentFieldDesc;
  static readonly SurvivalTimer: ComponentFieldDesc;
  static readonly StartTimeGainByMatch: ComponentFieldDesc;
  static readonly EndTimeGainByMatch: ComponentFieldDesc;
  static readonly DifficulyRampUpTime: ComponentFieldDesc;
  static readonly TimeObjective: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: LevelSurvival): LevelSurvival;
  static _toPtr(p: number, v: LevelSurvival): void;
  static _tempHeapPtr(v: LevelSurvival): number;
  static _dtorFn(v: LevelSurvival): void;
}

}
declare namespace game {

class SpriteRendererSkin extends ut.Component {
  constructor(SpritePath?: string, SkinColorInfo?: SpriteRendererSkinColorInfo[], CurrentSkinIndex?: number);
  SpritePath: string;
  SkinColorInfo: SpriteRendererSkinColorInfo[];
  CurrentSkinIndex: number;
  
  
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: SpriteRendererSkin): SpriteRendererSkin;
  static _toPtr(p: number, v: SpriteRendererSkin): void;
  static _tempHeapPtr(v: SpriteRendererSkin): number;
  static _dtorFn(v: SpriteRendererSkin): void;
}

}
declare namespace game {

class SpriteSequenceSkin extends ut.Component {
  constructor(SpritePaths?: string[], CurrentSkinIndex?: number);
  SpritePaths: string[];
  CurrentSkinIndex: number;
  
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: SpriteSequenceSkin): SpriteSequenceSkin;
  static _toPtr(p: number, v: SpriteSequenceSkin): void;
  static _tempHeapPtr(v: SpriteSequenceSkin): number;
  static _dtorFn(v: SpriteSequenceSkin): void;
}

}
declare namespace game {

class TutorialEggPointer extends ut.Component {
  constructor(ImageEgg?: Entity);
  ImageEgg: Entity;
  static readonly ImageEgg: EntityComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: TutorialEggPointer): TutorialEggPointer;
  static _toPtr(p: number, v: TutorialEggPointer): void;
  static _tempHeapPtr(v: TutorialEggPointer): number;
  static _dtorFn(v: TutorialEggPointer): void;
}

}
declare namespace game {

class TutorialHighlight extends ut.Component {
  constructor(HighlightRect?: Entity, LabelInstructions?: Entity, SpriteRenderers?: Entity[], MaxAlpha?: number, LabelMaxAlpha?: number, IsClosing?: boolean, Timer?: number, FadeDuration?: number, StartDelay?: number, LabelDefaultPositionY?: number, AutoCloseDelay?: number);
  HighlightRect: Entity;
  LabelInstructions: Entity;
  SpriteRenderers: Entity[];
  MaxAlpha: number;
  LabelMaxAlpha: number;
  IsClosing: boolean;
  Timer: number;
  FadeDuration: number;
  StartDelay: number;
  LabelDefaultPositionY: number;
  AutoCloseDelay: number;
  static readonly HighlightRect: EntityComponentFieldDesc;
  static readonly LabelInstructions: EntityComponentFieldDesc;
  
  static readonly MaxAlpha: ComponentFieldDesc;
  static readonly LabelMaxAlpha: ComponentFieldDesc;
  static readonly IsClosing: ComponentFieldDesc;
  static readonly Timer: ComponentFieldDesc;
  static readonly FadeDuration: ComponentFieldDesc;
  static readonly StartDelay: ComponentFieldDesc;
  static readonly LabelDefaultPositionY: ComponentFieldDesc;
  static readonly AutoCloseDelay: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: TutorialHighlight): TutorialHighlight;
  static _toPtr(p: number, v: TutorialHighlight): void;
  static _tempHeapPtr(v: TutorialHighlight): number;
  static _dtorFn(v: TutorialHighlight): void;
}

}
declare namespace game {

class TutorialPointer extends ut.Component {
  constructor(Pointer?: Entity, StartPosition?: Vector2, EndPosition?: Vector2, Duration?: number, AlphaCurve?: Entity, MoveCurve?: Entity, Timer?: number, StretchToMove?: boolean);
  Pointer: Entity;
  StartPosition: Vector2;
  EndPosition: Vector2;
  Duration: number;
  AlphaCurve: Entity;
  MoveCurve: Entity;
  Timer: number;
  StretchToMove: boolean;
  static readonly Pointer: EntityComponentFieldDesc;
  static readonly StartPosition: Vector2ComponentFieldDesc;
  static readonly EndPosition: Vector2ComponentFieldDesc;
  static readonly Duration: ComponentFieldDesc;
  static readonly AlphaCurve: EntityComponentFieldDesc;
  static readonly MoveCurve: EntityComponentFieldDesc;
  static readonly Timer: ComponentFieldDesc;
  static readonly StretchToMove: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: TutorialPointer): TutorialPointer;
  static _toPtr(p: number, v: TutorialPointer): void;
  static _tempHeapPtr(v: TutorialPointer): number;
  static _dtorFn(v: TutorialPointer): void;
}

}
declare namespace game {

class CreditsMenu extends ut.Component {
  constructor(ButtonClose?: Entity);
  ButtonClose: Entity;
  static readonly ButtonClose: EntityComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: CreditsMenu): CreditsMenu;
  static _toPtr(p: number, v: CreditsMenu): void;
  static _tempHeapPtr(v: CreditsMenu): number;
  static _dtorFn(v: CreditsMenu): void;
}

}
declare namespace game {

class GameOverMenu extends ut.Component {
  constructor(ButtonQuit?: Entity, LabelScoreValue?: Entity, LabelTime?: Entity, LabelTimeValue?: Entity, LabelGameOver?: Entity, LabelGameOverShadow?: Entity, LabelNewBestScore?: Entity, ImageNewBestScore?: Entity, ImageNewBestScoreGlow?: Entity, SuccessArms?: Entity[], FailArms?: Entity[], Timer?: number);
  ButtonQuit: Entity;
  LabelScoreValue: Entity;
  LabelTime: Entity;
  LabelTimeValue: Entity;
  LabelGameOver: Entity;
  LabelGameOverShadow: Entity;
  LabelNewBestScore: Entity;
  ImageNewBestScore: Entity;
  ImageNewBestScoreGlow: Entity;
  SuccessArms: Entity[];
  FailArms: Entity[];
  Timer: number;
  static readonly ButtonQuit: EntityComponentFieldDesc;
  static readonly LabelScoreValue: EntityComponentFieldDesc;
  static readonly LabelTime: EntityComponentFieldDesc;
  static readonly LabelTimeValue: EntityComponentFieldDesc;
  static readonly LabelGameOver: EntityComponentFieldDesc;
  static readonly LabelGameOverShadow: EntityComponentFieldDesc;
  static readonly LabelNewBestScore: EntityComponentFieldDesc;
  static readonly ImageNewBestScore: EntityComponentFieldDesc;
  static readonly ImageNewBestScoreGlow: EntityComponentFieldDesc;
  
  
  static readonly Timer: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: GameOverMenu): GameOverMenu;
  static _toPtr(p: number, v: GameOverMenu): void;
  static _tempHeapPtr(v: GameOverMenu): number;
  static _dtorFn(v: GameOverMenu): void;
}

}
declare namespace game {

class GameUI extends ut.Component {
  constructor(ButtonPause?: Entity, LabelScore?: Entity, LabelRemainingMoves?: Entity, ImageMoves?: Entity, LabelObjective?: Entity, ImageObjectivePoint?: Entity, ImageObjectiveEgg?: Entity, ImageObjectiveSurvival?: Entity, ImageObjectivePointIncomplete?: Entity, ImageObjectiveEggIncomplete?: Entity, ImageObjectiveSurvivalIncomplete?: Entity, ImageObjectiveCompleteGlow?: Entity, LabelTime?: Entity, ImageNoMovesWarning?: Entity, LastCollectedEggCount?: number, LastIsObjectiveComplete?: boolean);
  ButtonPause: Entity;
  LabelScore: Entity;
  LabelRemainingMoves: Entity;
  ImageMoves: Entity;
  LabelObjective: Entity;
  ImageObjectivePoint: Entity;
  ImageObjectiveEgg: Entity;
  ImageObjectiveSurvival: Entity;
  ImageObjectivePointIncomplete: Entity;
  ImageObjectiveEggIncomplete: Entity;
  ImageObjectiveSurvivalIncomplete: Entity;
  ImageObjectiveCompleteGlow: Entity;
  LabelTime: Entity;
  ImageNoMovesWarning: Entity;
  LastCollectedEggCount: number;
  LastIsObjectiveComplete: boolean;
  static readonly ButtonPause: EntityComponentFieldDesc;
  static readonly LabelScore: EntityComponentFieldDesc;
  static readonly LabelRemainingMoves: EntityComponentFieldDesc;
  static readonly ImageMoves: EntityComponentFieldDesc;
  static readonly LabelObjective: EntityComponentFieldDesc;
  static readonly ImageObjectivePoint: EntityComponentFieldDesc;
  static readonly ImageObjectiveEgg: EntityComponentFieldDesc;
  static readonly ImageObjectiveSurvival: EntityComponentFieldDesc;
  static readonly ImageObjectivePointIncomplete: EntityComponentFieldDesc;
  static readonly ImageObjectiveEggIncomplete: EntityComponentFieldDesc;
  static readonly ImageObjectiveSurvivalIncomplete: EntityComponentFieldDesc;
  static readonly ImageObjectiveCompleteGlow: EntityComponentFieldDesc;
  static readonly LabelTime: EntityComponentFieldDesc;
  static readonly ImageNoMovesWarning: EntityComponentFieldDesc;
  static readonly LastCollectedEggCount: ComponentFieldDesc;
  static readonly LastIsObjectiveComplete: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: GameUI): GameUI;
  static _toPtr(p: number, v: GameUI): void;
  static _tempHeapPtr(v: GameUI): number;
  static _dtorFn(v: GameUI): void;
}

}
declare namespace game {

class LanguagesMenu extends ut.Component {
  constructor(ButtonCancel?: Entity, ButtonEnglish?: Entity, ButtonFrench?: Entity);
  ButtonCancel: Entity;
  ButtonEnglish: Entity;
  ButtonFrench: Entity;
  static readonly ButtonCancel: EntityComponentFieldDesc;
  static readonly ButtonEnglish: EntityComponentFieldDesc;
  static readonly ButtonFrench: EntityComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: LanguagesMenu): LanguagesMenu;
  static _toPtr(p: number, v: LanguagesMenu): void;
  static _tempHeapPtr(v: LanguagesMenu): number;
  static _dtorFn(v: LanguagesMenu): void;
}

}
declare namespace game {

class MainMenu extends ut.Component {
  constructor(ImageLogo?: Entity, ButtonPlay?: Entity, TilingBackgroundEntity?: Entity, TilingBackgroundSpeed?: number, ButtonWatchIntro?: Entity, ButtonSettings?: Entity);
  ImageLogo: Entity;
  ButtonPlay: Entity;
  TilingBackgroundEntity: Entity;
  TilingBackgroundSpeed: number;
  ButtonWatchIntro: Entity;
  ButtonSettings: Entity;
  static readonly ImageLogo: EntityComponentFieldDesc;
  static readonly ButtonPlay: EntityComponentFieldDesc;
  static readonly TilingBackgroundEntity: EntityComponentFieldDesc;
  static readonly TilingBackgroundSpeed: ComponentFieldDesc;
  static readonly ButtonWatchIntro: EntityComponentFieldDesc;
  static readonly ButtonSettings: EntityComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: MainMenu): MainMenu;
  static _toPtr(p: number, v: MainMenu): void;
  static _tempHeapPtr(v: MainMenu): number;
  static _dtorFn(v: MainMenu): void;
}

}
declare namespace game {

class PauseMenu extends ut.Component {
  constructor(ButtonResume?: Entity, ButtonQuit?: Entity);
  ButtonResume: Entity;
  ButtonQuit: Entity;
  static readonly ButtonResume: EntityComponentFieldDesc;
  static readonly ButtonQuit: EntityComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: PauseMenu): PauseMenu;
  static _toPtr(p: number, v: PauseMenu): void;
  static _tempHeapPtr(v: PauseMenu): number;
  static _dtorFn(v: PauseMenu): void;
}

}
declare namespace game {

class Popup extends ut.Component {
  constructor(HasPlayedInTransition?: boolean, PanelContent?: Entity, ImageBackground?: Entity, TargetFadeAlpha?: number, Timer?: number, FadeInDuration?: number, ScaleInDuration?: number, DelayIn?: number, HasFinishedDelay?: boolean);
  HasPlayedInTransition: boolean;
  PanelContent: Entity;
  ImageBackground: Entity;
  TargetFadeAlpha: number;
  Timer: number;
  FadeInDuration: number;
  ScaleInDuration: number;
  DelayIn: number;
  HasFinishedDelay: boolean;
  static readonly HasPlayedInTransition: ComponentFieldDesc;
  static readonly PanelContent: EntityComponentFieldDesc;
  static readonly ImageBackground: EntityComponentFieldDesc;
  static readonly TargetFadeAlpha: ComponentFieldDesc;
  static readonly Timer: ComponentFieldDesc;
  static readonly FadeInDuration: ComponentFieldDesc;
  static readonly ScaleInDuration: ComponentFieldDesc;
  static readonly DelayIn: ComponentFieldDesc;
  static readonly HasFinishedDelay: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Popup): Popup;
  static _toPtr(p: number, v: Popup): void;
  static _tempHeapPtr(v: Popup): number;
  static _dtorFn(v: Popup): void;
}

}
declare namespace game {

class ScoreDisplay extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: ScoreDisplay): ScoreDisplay;
  static _toPtr(p: number, v: ScoreDisplay): void;
  static _tempHeapPtr(v: ScoreDisplay): number;
  static _dtorFn(v: ScoreDisplay): void;
}

}
declare namespace game {

class ScoreGainLabel extends ut.Component {
  constructor(Timer?: number, Duration?: number, SpeedY?: number, AlphaCurve?: Entity);
  Timer: number;
  Duration: number;
  SpeedY: number;
  AlphaCurve: Entity;
  static readonly Timer: ComponentFieldDesc;
  static readonly Duration: ComponentFieldDesc;
  static readonly SpeedY: ComponentFieldDesc;
  static readonly AlphaCurve: EntityComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: ScoreGainLabel): ScoreGainLabel;
  static _toPtr(p: number, v: ScoreGainLabel): void;
  static _tempHeapPtr(v: ScoreGainLabel): number;
  static _dtorFn(v: ScoreGainLabel): void;
}

}
declare namespace game {

class ScreenTransition extends ut.Component {
  constructor(InDuration?: number, OutDuration?: number, BlackCurtain?: Entity, IsTransitionIn?: boolean, Timer?: number, TransitionToState?: GameStateTypes, ScaleHole?: Entity, SkipFrameCount?: number, ScaleHoleCurve?: Entity, IsScaleHoleTransition?: boolean);
  InDuration: number;
  OutDuration: number;
  BlackCurtain: Entity;
  IsTransitionIn: boolean;
  Timer: number;
  TransitionToState: GameStateTypes;
  ScaleHole: Entity;
  SkipFrameCount: number;
  ScaleHoleCurve: Entity;
  IsScaleHoleTransition: boolean;
  static readonly InDuration: ComponentFieldDesc;
  static readonly OutDuration: ComponentFieldDesc;
  static readonly BlackCurtain: EntityComponentFieldDesc;
  static readonly IsTransitionIn: ComponentFieldDesc;
  static readonly Timer: ComponentFieldDesc;
  
  static readonly ScaleHole: EntityComponentFieldDesc;
  static readonly SkipFrameCount: ComponentFieldDesc;
  static readonly ScaleHoleCurve: EntityComponentFieldDesc;
  static readonly IsScaleHoleTransition: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: ScreenTransition): ScreenTransition;
  static _toPtr(p: number, v: ScreenTransition): void;
  static _tempHeapPtr(v: ScreenTransition): number;
  static _dtorFn(v: ScreenTransition): void;
}

}
declare namespace game {

class SettingsMenu extends ut.Component {
  constructor(ButtonOK?: Entity, ButtonCredits?: Entity, ButtonResetProgress?: Entity, ButtonLanguage?: Entity, ButtonRenderMode?: Entity, LabelRenderMode?: Entity);
  ButtonOK: Entity;
  ButtonCredits: Entity;
  ButtonResetProgress: Entity;
  ButtonLanguage: Entity;
  ButtonRenderMode: Entity;
  LabelRenderMode: Entity;
  static readonly ButtonOK: EntityComponentFieldDesc;
  static readonly ButtonCredits: EntityComponentFieldDesc;
  static readonly ButtonResetProgress: EntityComponentFieldDesc;
  static readonly ButtonLanguage: EntityComponentFieldDesc;
  static readonly ButtonRenderMode: EntityComponentFieldDesc;
  static readonly LabelRenderMode: EntityComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: SettingsMenu): SettingsMenu;
  static _toPtr(p: number, v: SettingsMenu): void;
  static _tempHeapPtr(v: SettingsMenu): number;
  static _dtorFn(v: SettingsMenu): void;
}

}
declare namespace game {

class SettingsMenuAudio extends ut.Component {
  constructor(ButtonSound?: Entity, ButtonMusic?: Entity, SpriteAudioOn?: Entity, SpriteAudioOff?: Entity);
  ButtonSound: Entity;
  ButtonMusic: Entity;
  SpriteAudioOn: Entity;
  SpriteAudioOff: Entity;
  static readonly ButtonSound: EntityComponentFieldDesc;
  static readonly ButtonMusic: EntityComponentFieldDesc;
  static readonly SpriteAudioOn: EntityComponentFieldDesc;
  static readonly SpriteAudioOff: EntityComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: SettingsMenuAudio): SettingsMenuAudio;
  static _toPtr(p: number, v: SettingsMenuAudio): void;
  static _tempHeapPtr(v: SettingsMenuAudio): number;
  static _dtorFn(v: SettingsMenuAudio): void;
}

}
declare namespace game {

class SurvivalModeTimeline extends ut.Component {
  constructor(ContainerFilling?: Entity, DinosaurCursor?: Entity, Width?: number);
  ContainerFilling: Entity;
  DinosaurCursor: Entity;
  Width: number;
  static readonly ContainerFilling: EntityComponentFieldDesc;
  static readonly DinosaurCursor: EntityComponentFieldDesc;
  static readonly Width: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: SurvivalModeTimeline): SurvivalModeTimeline;
  static _toPtr(p: number, v: SurvivalModeTimeline): void;
  static _tempHeapPtr(v: SurvivalModeTimeline): number;
  static _dtorFn(v: SurvivalModeTimeline): void;
}

}
declare namespace game {

class WorldMap extends ut.Component {
  constructor(IsCreated?: boolean, CurrentLevelIndex?: number, ScrollSpeed?: number, CurrentScrollIndexPosition?: number, ButtonLeft?: Entity, ButtonRight?: Entity, Ground?: Entity, GroundTransition?: Entity, Sky?: Entity, SkyTransition?: Entity, LabelLevelTitle?: Entity, LabelLevelInfoLine1?: Entity, LabelLevelInfoLine2?: Entity, LastLevelIndex?: number, LastScrollIndexPosition?: number, ButtonPlay?: Entity, ButtonSettings?: Entity, LabelBestScore?: Entity, ImagePointObjective?: Entity, ImageEggObjective?: Entity, ImageSurvivalObjective?: Entity, ImageLock?: Entity[], LastBeatenLevelID?: number, LabelButtonPlay?: Entity, PlayButtonColor?: Color, PlayButtonDisabledColor?: Color, ButtonCutscene?: Entity, LabelButtonCutscene?: Entity, LastLanguageID?: string);
  IsCreated: boolean;
  CurrentLevelIndex: number;
  ScrollSpeed: number;
  CurrentScrollIndexPosition: number;
  ButtonLeft: Entity;
  ButtonRight: Entity;
  Ground: Entity;
  GroundTransition: Entity;
  Sky: Entity;
  SkyTransition: Entity;
  LabelLevelTitle: Entity;
  LabelLevelInfoLine1: Entity;
  LabelLevelInfoLine2: Entity;
  LastLevelIndex: number;
  LastScrollIndexPosition: number;
  ButtonPlay: Entity;
  ButtonSettings: Entity;
  LabelBestScore: Entity;
  ImagePointObjective: Entity;
  ImageEggObjective: Entity;
  ImageSurvivalObjective: Entity;
  ImageLock: Entity[];
  LastBeatenLevelID: number;
  LabelButtonPlay: Entity;
  PlayButtonColor: Color;
  PlayButtonDisabledColor: Color;
  ButtonCutscene: Entity;
  LabelButtonCutscene: Entity;
  LastLanguageID: string;
  static readonly IsCreated: ComponentFieldDesc;
  static readonly CurrentLevelIndex: ComponentFieldDesc;
  static readonly ScrollSpeed: ComponentFieldDesc;
  static readonly CurrentScrollIndexPosition: ComponentFieldDesc;
  static readonly ButtonLeft: EntityComponentFieldDesc;
  static readonly ButtonRight: EntityComponentFieldDesc;
  static readonly Ground: EntityComponentFieldDesc;
  static readonly GroundTransition: EntityComponentFieldDesc;
  static readonly Sky: EntityComponentFieldDesc;
  static readonly SkyTransition: EntityComponentFieldDesc;
  static readonly LabelLevelTitle: EntityComponentFieldDesc;
  static readonly LabelLevelInfoLine1: EntityComponentFieldDesc;
  static readonly LabelLevelInfoLine2: EntityComponentFieldDesc;
  static readonly LastLevelIndex: ComponentFieldDesc;
  static readonly LastScrollIndexPosition: ComponentFieldDesc;
  static readonly ButtonPlay: EntityComponentFieldDesc;
  static readonly ButtonSettings: EntityComponentFieldDesc;
  static readonly LabelBestScore: EntityComponentFieldDesc;
  static readonly ImagePointObjective: EntityComponentFieldDesc;
  static readonly ImageEggObjective: EntityComponentFieldDesc;
  static readonly ImageSurvivalObjective: EntityComponentFieldDesc;
  
  static readonly LastBeatenLevelID: ComponentFieldDesc;
  static readonly LabelButtonPlay: EntityComponentFieldDesc;
  static readonly PlayButtonColor: ColorComponentFieldDesc;
  static readonly PlayButtonDisabledColor: ColorComponentFieldDesc;
  static readonly ButtonCutscene: EntityComponentFieldDesc;
  static readonly LabelButtonCutscene: EntityComponentFieldDesc;
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: WorldMap): WorldMap;
  static _toPtr(p: number, v: WorldMap): void;
  static _tempHeapPtr(v: WorldMap): number;
  static _dtorFn(v: WorldMap): void;
}

}
declare namespace game {

class WorldMapItem extends ut.Component {
  constructor(Index?: number, ImageLevelPreview?: Entity, DistanceBetweenLevelItems?: number, FocusedScale?: number, UnfocusedScale?: number);
  Index: number;
  ImageLevelPreview: Entity;
  DistanceBetweenLevelItems: number;
  FocusedScale: number;
  UnfocusedScale: number;
  static readonly Index: ComponentFieldDesc;
  static readonly ImageLevelPreview: EntityComponentFieldDesc;
  static readonly DistanceBetweenLevelItems: ComponentFieldDesc;
  static readonly FocusedScale: ComponentFieldDesc;
  static readonly UnfocusedScale: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: WorldMapItem): WorldMapItem;
  static _toPtr(p: number, v: WorldMapItem): void;
  static _tempHeapPtr(v: WorldMapItem): number;
  static _dtorFn(v: WorldMapItem): void;
}

}
declare namespace game {

class CameraResolutionFitter extends ut.Component {
  constructor(DefaultHalfVerticalSize?: number);
  DefaultHalfVerticalSize: number;
  static readonly DefaultHalfVerticalSize: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: CameraResolutionFitter): CameraResolutionFitter;
  static _toPtr(p: number, v: CameraResolutionFitter): void;
  static _tempHeapPtr(v: CameraResolutionFitter): number;
  static _dtorFn(v: CameraResolutionFitter): void;
}

}
declare namespace game {

class CanvasResolutionFitter extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: CanvasResolutionFitter): CanvasResolutionFitter;
  static _toPtr(p: number, v: CanvasResolutionFitter): void;
  static _tempHeapPtr(v: CanvasResolutionFitter): number;
  static _dtorFn(v: CanvasResolutionFitter): void;
}

}
declare namespace game {

class CollectedCurrency extends ut.Component {
  constructor(StartPosition?: Vector3, MidPosition?: Vector3, EndPosition?: Vector3, Duration?: number, Timer?: number, ProgressCurve?: Entity, ScaleCurve?: Entity, StartDelay?: number);
  StartPosition: Vector3;
  MidPosition: Vector3;
  EndPosition: Vector3;
  Duration: number;
  Timer: number;
  ProgressCurve: Entity;
  ScaleCurve: Entity;
  StartDelay: number;
  static readonly StartPosition: Vector3ComponentFieldDesc;
  static readonly MidPosition: Vector3ComponentFieldDesc;
  static readonly EndPosition: Vector3ComponentFieldDesc;
  static readonly Duration: ComponentFieldDesc;
  static readonly Timer: ComponentFieldDesc;
  static readonly ProgressCurve: EntityComponentFieldDesc;
  static readonly ScaleCurve: EntityComponentFieldDesc;
  static readonly StartDelay: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: CollectedCurrency): CollectedCurrency;
  static _toPtr(p: number, v: CollectedCurrency): void;
  static _tempHeapPtr(v: CollectedCurrency): number;
  static _dtorFn(v: CollectedCurrency): void;
}

}
declare namespace game {

class CurrentRenderMode extends ut.Component {
  constructor(desiredMode?: RenderMode, apply?: boolean);
  desiredMode: RenderMode;
  apply: boolean;
  
  static readonly apply: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: CurrentRenderMode): CurrentRenderMode;
  static _toPtr(p: number, v: CurrentRenderMode): void;
  static _tempHeapPtr(v: CurrentRenderMode): number;
  static _dtorFn(v: CurrentRenderMode): void;
}

}
declare namespace game {

class CustomButton extends ut.Component {
  constructor(IsPressed?: boolean, JustDown?: boolean, JustUp?: boolean, JustClicked?: boolean, TimePressed?: number, LastDown?: boolean, LastOver?: boolean, DefaultSprite?: Entity, HoveredSprite?: Entity, PressedSprite?: Entity, DisabledSprite?: Entity, ContentToOffsetOnPress?: Entity, PressedOffsetY?: number, ContentDefautPositionY?: number, ContentDefautPositionIsSet?: boolean, IsPointerOver?: boolean, IsInteractable?: boolean, LastIsInteractable?: boolean);
  IsPressed: boolean;
  JustDown: boolean;
  JustUp: boolean;
  JustClicked: boolean;
  TimePressed: number;
  LastDown: boolean;
  LastOver: boolean;
  DefaultSprite: Entity;
  HoveredSprite: Entity;
  PressedSprite: Entity;
  DisabledSprite: Entity;
  ContentToOffsetOnPress: Entity;
  PressedOffsetY: number;
  ContentDefautPositionY: number;
  ContentDefautPositionIsSet: boolean;
  IsPointerOver: boolean;
  IsInteractable: boolean;
  LastIsInteractable: boolean;
  static readonly IsPressed: ComponentFieldDesc;
  static readonly JustDown: ComponentFieldDesc;
  static readonly JustUp: ComponentFieldDesc;
  static readonly JustClicked: ComponentFieldDesc;
  static readonly TimePressed: ComponentFieldDesc;
  static readonly LastDown: ComponentFieldDesc;
  static readonly LastOver: ComponentFieldDesc;
  static readonly DefaultSprite: EntityComponentFieldDesc;
  static readonly HoveredSprite: EntityComponentFieldDesc;
  static readonly PressedSprite: EntityComponentFieldDesc;
  static readonly DisabledSprite: EntityComponentFieldDesc;
  static readonly ContentToOffsetOnPress: EntityComponentFieldDesc;
  static readonly PressedOffsetY: ComponentFieldDesc;
  static readonly ContentDefautPositionY: ComponentFieldDesc;
  static readonly ContentDefautPositionIsSet: ComponentFieldDesc;
  static readonly IsPointerOver: ComponentFieldDesc;
  static readonly IsInteractable: ComponentFieldDesc;
  static readonly LastIsInteractable: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: CustomButton): CustomButton;
  static _toPtr(p: number, v: CustomButton): void;
  static _tempHeapPtr(v: CustomButton): number;
  static _dtorFn(v: CustomButton): void;
}

}
declare namespace game {

class CustomLabel extends ut.Component {
  constructor(LastText?: string, LastColor?: Color);
  LastText: string;
  LastColor: Color;
  
  static readonly LastColor: ColorComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: CustomLabel): CustomLabel;
  static _toPtr(p: number, v: CustomLabel): void;
  static _tempHeapPtr(v: CustomLabel): number;
  static _dtorFn(v: CustomLabel): void;
}

}
declare namespace game {

class CustomLabelCharacter extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: CustomLabelCharacter): CustomLabelCharacter;
  static _toPtr(p: number, v: CustomLabelCharacter): void;
  static _tempHeapPtr(v: CustomLabelCharacter): number;
  static _dtorFn(v: CustomLabelCharacter): void;
}

}
declare namespace game {

class DestroyAfterDelay extends ut.Component {
  constructor(Delay?: number);
  Delay: number;
  static readonly Delay: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: DestroyAfterDelay): DestroyAfterDelay;
  static _toPtr(p: number, v: DestroyAfterDelay): void;
  static _tempHeapPtr(v: DestroyAfterDelay): number;
  static _dtorFn(v: DestroyAfterDelay): void;
}

}
declare namespace game {

class LocalizedText extends ut.Component {
  constructor(TextID?: string, LastTextID?: string, ToUpper?: boolean, LastLanguageID?: string, TextParameters?: string[]);
  TextID: string;
  LastTextID: string;
  ToUpper: boolean;
  LastLanguageID: string;
  TextParameters: string[];
  
  
  static readonly ToUpper: ComponentFieldDesc;
  
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: LocalizedText): LocalizedText;
  static _toPtr(p: number, v: LocalizedText): void;
  static _tempHeapPtr(v: LocalizedText): number;
  static _dtorFn(v: LocalizedText): void;
}

}
declare namespace game {

class NearDeathOpacityAnimation extends ut.Component {
  constructor(Speed?: number, MinAlpha?: number, MaxAlpha?: number, Timer?: number);
  Speed: number;
  MinAlpha: number;
  MaxAlpha: number;
  Timer: number;
  static readonly Speed: ComponentFieldDesc;
  static readonly MinAlpha: ComponentFieldDesc;
  static readonly MaxAlpha: ComponentFieldDesc;
  static readonly Timer: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: NearDeathOpacityAnimation): NearDeathOpacityAnimation;
  static _toPtr(p: number, v: NearDeathOpacityAnimation): void;
  static _tempHeapPtr(v: NearDeathOpacityAnimation): number;
  static _dtorFn(v: NearDeathOpacityAnimation): void;
}

}
declare namespace game {

class ShakeAnimation extends ut.Component {
  constructor(DefaultX?: number, DefaultY?: number, DefaultZ?: number, IsDefaultPositionSet?: boolean);
  DefaultX: number;
  DefaultY: number;
  DefaultZ: number;
  IsDefaultPositionSet: boolean;
  static readonly DefaultX: ComponentFieldDesc;
  static readonly DefaultY: ComponentFieldDesc;
  static readonly DefaultZ: ComponentFieldDesc;
  static readonly IsDefaultPositionSet: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: ShakeAnimation): ShakeAnimation;
  static _toPtr(p: number, v: ShakeAnimation): void;
  static _tempHeapPtr(v: ShakeAnimation): number;
  static _dtorFn(v: ShakeAnimation): void;
}

}
declare namespace game {

class ShakeAnimationPlayer extends ut.Component {
  constructor(Duration?: number, ShakeRadiusX?: number, ShakeRadiusY?: number, Timer?: number, StartDelay?: number);
  Duration: number;
  ShakeRadiusX: number;
  ShakeRadiusY: number;
  Timer: number;
  StartDelay: number;
  static readonly Duration: ComponentFieldDesc;
  static readonly ShakeRadiusX: ComponentFieldDesc;
  static readonly ShakeRadiusY: ComponentFieldDesc;
  static readonly Timer: ComponentFieldDesc;
  static readonly StartDelay: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: ShakeAnimationPlayer): ShakeAnimationPlayer;
  static _toPtr(p: number, v: ShakeAnimationPlayer): void;
  static _tempHeapPtr(v: ShakeAnimationPlayer): number;
  static _dtorFn(v: ShakeAnimationPlayer): void;
}

}
declare namespace game {

class TilingBackground extends ut.Component {
  constructor(SpeedX?: number, SpeedY?: number, TileSize?: number);
  SpeedX: number;
  SpeedY: number;
  TileSize: number;
  static readonly SpeedX: ComponentFieldDesc;
  static readonly SpeedY: ComponentFieldDesc;
  static readonly TileSize: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: TilingBackground): TilingBackground;
  static _toPtr(p: number, v: TilingBackground): void;
  static _tempHeapPtr(v: TilingBackground): number;
  static _dtorFn(v: TilingBackground): void;
}

}
declare namespace game {

class GridConfiguration extends ut.Component {
  constructor(GemEntities?: Entity[], CellEntities?: Entity[], FrozenGridTimer?: number, Width?: number, Height?: number, CellDimension?: number, GridDefaultPositionY?: number, GridOffsetPositionY?: number, IsGridCreated?: boolean);
  GemEntities: Entity[];
  CellEntities: Entity[];
  FrozenGridTimer: number;
  Width: number;
  Height: number;
  CellDimension: number;
  GridDefaultPositionY: number;
  GridOffsetPositionY: number;
  IsGridCreated: boolean;
  
  
  static readonly FrozenGridTimer: ComponentFieldDesc;
  static readonly Width: ComponentFieldDesc;
  static readonly Height: ComponentFieldDesc;
  static readonly CellDimension: ComponentFieldDesc;
  static readonly GridDefaultPositionY: ComponentFieldDesc;
  static readonly GridOffsetPositionY: ComponentFieldDesc;
  static readonly IsGridCreated: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: GridConfiguration): GridConfiguration;
  static _toPtr(p: number, v: GridConfiguration): void;
  static _tempHeapPtr(v: GridConfiguration): number;
  static _dtorFn(v: GridConfiguration): void;
}

}
declare namespace game {

class SkinConfiguration extends ut.Component {
  constructor(CurrentSkin?: SkinTypes);
  CurrentSkin: SkinTypes;
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: SkinConfiguration): SkinConfiguration;
  static _toPtr(p: number, v: SkinConfiguration): void;
  static _tempHeapPtr(v: SkinConfiguration): number;
  static _dtorFn(v: SkinConfiguration): void;
}

}
declare namespace game {

class TutorialConfiguration extends ut.Component {
  constructor(IsMatchTutorialDone?: boolean, IsEggTutorialDone?: boolean, IsSurvivalTutorialDone?: boolean);
  IsMatchTutorialDone: boolean;
  IsEggTutorialDone: boolean;
  IsSurvivalTutorialDone: boolean;
  static readonly IsMatchTutorialDone: ComponentFieldDesc;
  static readonly IsEggTutorialDone: ComponentFieldDesc;
  static readonly IsSurvivalTutorialDone: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: TutorialConfiguration): TutorialConfiguration;
  static _toPtr(p: number, v: TutorialConfiguration): void;
  static _tempHeapPtr(v: TutorialConfiguration): number;
  static _dtorFn(v: TutorialConfiguration): void;
}

}
declare namespace game {

class LocalizationConfiguration extends ut.Component {
  constructor(Texts?: LocalizationItem[], LanguageID?: string);
  Texts: LocalizationItem[];
  LanguageID: string;
  
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: LocalizationConfiguration): LocalizationConfiguration;
  static _toPtr(p: number, v: LocalizationConfiguration): void;
  static _tempHeapPtr(v: LocalizationConfiguration): number;
  static _dtorFn(v: LocalizationConfiguration): void;
}

}
declare namespace game {

class SoundConfiguration extends ut.Component {
  constructor(IsSoundOn?: boolean, IsMusicOn?: boolean, CurrentMusic?: string);
  IsSoundOn: boolean;
  IsMusicOn: boolean;
  CurrentMusic: string;
  static readonly IsSoundOn: ComponentFieldDesc;
  static readonly IsMusicOn: ComponentFieldDesc;
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: SoundConfiguration): SoundConfiguration;
  static _toPtr(p: number, v: SoundConfiguration): void;
  static _tempHeapPtr(v: SoundConfiguration): number;
  static _dtorFn(v: SoundConfiguration): void;
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
var AnimateCutsceneSystemJS: ut.SystemJS;
}
declare namespace game {
var PerformDinosaurAttackSystemJS: ut.SystemJS;
}
declare namespace game {
var CheckMatchSystemJS: ut.SystemJS;
}
declare namespace game {
var RestoreGemSwapSystemJS: ut.SystemJS;
}
declare namespace game {
var ActivateGemPowerUpSystemJS: ut.SystemJS;
}
declare namespace game {
var UpdateScoreSystemJS: ut.SystemJS;
}
declare namespace game {
var CollectEggSystemJS: ut.SystemJS;
}
declare namespace game {
var DeleteMatchedGemSystemJS: ut.SystemJS;
}
declare namespace game {
var SpawnComboPowerUpSystemJS: ut.SystemJS;
}
declare namespace game {
var TriggerDinosaurAttackSystemJS: ut.SystemJS;
}
declare namespace game {
var MoveHelicopterSystemJS: ut.SystemJS;
}
declare namespace game {
var MovePeopleSystemJS: ut.SystemJS;
}
declare namespace game {
var MoveScrollingObjectSystemJS: ut.SystemJS;
}
declare namespace game {
var SpawnHelicopterSystemJS: ut.SystemJS;
}
declare namespace game {
var SpawnKidOnBikeSystemJS: ut.SystemJS;
}
declare namespace game {
var SpawnPeopleSystemJS: ut.SystemJS;
}
declare namespace game {
var SpawnScrollingObjectSystemJS: ut.SystemJS;
}
declare namespace game {
var UpdateDestructableStateSystemJS: ut.SystemJS;
}
declare namespace game {
var UpdateKidOnBikeSystemJS: ut.SystemJS;
}
declare namespace game {
var CheckGameOverSystemJS: ut.SystemJS;
}
declare namespace game {
var UpdateGameStateSystemJS: ut.SystemJS;
}
declare namespace game {
var UpdateSurvivalModeSystemJS: ut.SystemJS;
}
declare namespace game {
var CreateNewGemBoardSystemJS: ut.SystemJS;
}
declare namespace game {
var ReplenishGemBoardSystemJS: ut.SystemJS;
}
declare namespace game {
var FindPossibleMatchSystemJS: ut.SystemJS;
}
declare namespace game {
var GemFallTweenEndSystemJS: ut.SystemJS;
}
declare namespace game {
var GemSwapTweenEndSystemJS: ut.SystemJS;
}
declare namespace game {
var PositionGemSystemJS: ut.SystemJS;
}
declare namespace game {
var SpawnGemExplosionSystemJS: ut.SystemJS;
}
declare namespace game {
var SwapGemSystemJS: ut.SystemJS;
}
declare namespace game {
var UpdateDestroyLineAnimationJS: ut.SystemJS;
}
declare namespace game {
var UpdateGemVisualSystemJS: ut.SystemJS;
}
declare namespace game {
var UpdateScoreGainLabelJS: ut.SystemJS;
}
declare namespace game {
var ChangeSkinSystemJS: ut.SystemJS;
}
declare namespace game {
var UpdateEggTutorialSystemJS: ut.SystemJS;
}
declare namespace game {
var UpdateMatchTutorialSystemJS: ut.SystemJS;
}
declare namespace game {
var UpdateSurvivalTutorialSystemJS: ut.SystemJS;
}
declare namespace game {
var UpdateTutorialHighlightSystemJS: ut.SystemJS;
}
declare namespace game {
var UpdateTutorialPointerSystemJS: ut.SystemJS;
}
declare namespace game {
var AnimatePopupSystemJS: ut.SystemJS;
}
declare namespace game {
var DisplayScoreSystemJS: ut.SystemJS;
}
declare namespace game {
var UpdateCurrentWorldMapItemSystemJS: ut.SystemJS;
}
declare namespace game {
var UpdateScreenTransitionJS: ut.SystemJS;
}
declare namespace game {
var AnimateCollectedCurrencySystemJS: ut.SystemJS;
}
declare namespace game {
var AnimateNearDeathOpacitySystemJS: ut.SystemJS;
}
declare namespace game {
var AnimateShakeSystemJS: ut.SystemJS;
}
declare namespace game {
var AnimateTilingBackgroundSystemJS: ut.SystemJS;
}
declare namespace game {
var DestroyAfterDelaySystemJS: ut.SystemJS;
}
declare namespace game {
var FitScreenLayoutSystemJS: ut.SystemJS;
}
declare namespace game {
var RenderModeSelectorJS: ut.SystemJS;
}
declare namespace game {
var UpdateCustomButtonSystemJS: ut.SystemJS;
}
declare namespace game {
var UpdateLocalizedTextJS: ut.SystemJS;
}


declare namespace Module {

}

