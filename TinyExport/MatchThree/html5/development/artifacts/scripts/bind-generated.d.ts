
declare namespace ut {

  /** Base class for user-defined Systems.*/
  abstract class ComponentSystem {

    /** Scheduler executing this system.*/
    readonly scheduler: ut.Scheduler;

    /** World on which this system operates on.*/
    readonly world: ut.World;

    /** Override this method to define your system update function.*/
    abstract OnUpdate():void;
  }

  type Schedulable = typeof ComponentBehaviour | typeof ComponentSystem | System | SystemJS;
  
  /** Decorator. This system will be executed after the given systems.*/
  function executeAfter(...args: Schedulable[]) : any;

  /** Decorator. This system will be executed before the given systems.*/
  function executeBefore(...args: Schedulable[]) : any;

  /** Decorator. These components are required by this system.*/
  function requiredComponents(...args: typeof Component[]) : any;

  /** Decorator. These components are optionally affected by this system.*/
  function optionalComponents(...args: typeof Component[]) : any;

  /** Classes based on EntityFilter can be used to iterate on entities.
   * 
   * This class is parsed by the Editor according to this convention:
   * - Add ut.Component fields to a filter to require them when iterating.
   * - Add the optional modifier '?' to ut.Component fields to require them if they exist.
   * - Add the 'readonly' modifier to ut.Component fields to tell the runtime this data is not modified.
   *
  */
  abstract class EntityFilter {
    /** Populates this filter from the given entity.*/
    Read(world: ut.World, entity: ut.Entity): void;
    /** Writes the contents of this filter to the given entity.*/
    Write(world: ut.World, entity: ut.Entity): void;
    /** Resets all fields to undefined.*/
    Reset(): void;
    /** Invokes the given callback for each entity matching this filter.*/
    ForEach(world: ut.World, callback: (entity: ut.Entity) => void): void;
  }

  /** Decorator. Declare that this system or behaviour may use the given EntityFilter during processing.*/
  function usingFilters(...filters: typeof EntityFilter[]) : any;

  /** Base class to define multiple systems following a familiar component lifecycle.
   * 
   * You must add an EntityFilter field to access per-entity data.
   * 
   * You must also define at least one of the following methods to get callbacks per entity matching the filter:
   * - OnEntityEnable. Called only once, the first frame this entity is matched by this behaviour.
   * - OnEntityUpdate. Called every frame on matching entities.
   * - OnEntityDisable. Called only once, the first frame this entity is marked as disabled by this behaviour.
  */
  abstract class ComponentBehaviour {
    /** Single instance for this class.*/
    static readonly Instance: ComponentBehaviour;

    readonly scheduler: ut.Scheduler;
    readonly world: ut.World;
    readonly entity: ut.Entity;

    /** Returns true if this behaviour is currently enabled on this entity.
     * Note that this method will return false if OnEnable was not called at least once.*/
    IsEnabled(world: ut.World, entity: ut.Entity): boolean;
    /** Enables this behaviour on the given entity.*/
    Enable(world: ut.World, entity: ut.Entity): void;
    /** Disables this behaviour on the given entity.*/
    Disable(world: ut.World, entity: ut.Entity): void;
  }
}
declare var UT_ASSETS: Object;
declare namespace game{
    class GridConfiguration extends ut.Component {
        constructor();
        GemEntities: ut.Entity[];
        CellEntities: ut.Entity[];
        FrozenGridTimer: number;
        Width: number;
        Height: number;
        CellDimension: number;
        GridDefaultPositionY: number;
        GridOffsetPositionY: number;
        IsGridCreated: boolean;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: GridConfiguration): GridConfiguration;
        static _toPtr(p: number, v: GridConfiguration): void;
        static _tempHeapPtr(v: GridConfiguration): number;
        static _dtorFn(v: GridConfiguration): void;
    }
    class SkinConfiguration extends ut.Component {
        constructor();
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
    class TutorialConfiguration extends ut.Component {
        constructor();
        IsMatchTutorialDone: boolean;
        IsEggTutorialDone: boolean;
        IsSurvivalTutorialDone: boolean;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: TutorialConfiguration): TutorialConfiguration;
        static _toPtr(p: number, v: TutorialConfiguration): void;
        static _tempHeapPtr(v: TutorialConfiguration): number;
        static _dtorFn(v: TutorialConfiguration): void;
    }
    class LocalizationConfiguration extends ut.Component {
        constructor();
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
    class SoundConfiguration extends ut.Component {
        constructor();
        IsSoundOn: boolean;
        IsMusicOn: boolean;
        CurrentMusic: string;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: SoundConfiguration): SoundConfiguration;
        static _toPtr(p: number, v: SoundConfiguration): void;
        static _tempHeapPtr(v: SoundConfiguration): number;
        static _dtorFn(v: SoundConfiguration): void;
    }
    class GameState extends ut.Component {
        constructor();
        GameStateType: GameStateTypes;
        CurrentLevelID: number;
        CurrentScore: number;
        CurrentMoveCount: number;
        Time: number;
        SurvivalTimer: number;
        LevelCount: number;
        ShowHintDelay: number;
        EnvironmentSceneWidth: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: GameState): GameState;
        static _toPtr(p: number, v: GameState): void;
        static _tempHeapPtr(v: GameState): number;
        static _dtorFn(v: GameState): void;
    }
    class CutsceneDirector extends ut.Component {
        constructor();
        CurrentElementIndex: number;
        Speed: number;
        PauseDelayTimer: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: CutsceneDirector): CutsceneDirector;
        static _toPtr(p: number, v: CutsceneDirector): void;
        static _tempHeapPtr(v: CutsceneDirector): number;
        static _dtorFn(v: CutsceneDirector): void;
    }
    class CutsceneElement extends ut.Component {
        constructor();
        Index: number;
        Duration: number;
        ClearPreviousElements: boolean;
        Timer: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: CutsceneElement): CutsceneElement;
        static _toPtr(p: number, v: CutsceneElement): void;
        static _tempHeapPtr(v: CutsceneElement): number;
        static _dtorFn(v: CutsceneElement): void;
    }
    class CutsceneFade extends ut.Component {
        constructor();
        Duration: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: CutsceneFade): CutsceneFade;
        static _toPtr(p: number, v: CutsceneFade): void;
        static _tempHeapPtr(v: CutsceneFade): number;
        static _dtorFn(v: CutsceneFade): void;
    }
    class CutsceneMove extends ut.Component {
        constructor();
        Duration: number;
        StartOffset: ut.Math.Vector2;
        Easing: ut.Tweens.TweenFunc;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: CutsceneMove): CutsceneMove;
        static _toPtr(p: number, v: CutsceneMove): void;
        static _tempHeapPtr(v: CutsceneMove): number;
        static _dtorFn(v: CutsceneMove): void;
    }
    class CutsceneScale extends ut.Component {
        constructor();
        Duration: number;
        Easing: ut.Tweens.TweenFunc;
        StartScale: ut.Math.Vector3;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: CutsceneScale): CutsceneScale;
        static _toPtr(p: number, v: CutsceneScale): void;
        static _tempHeapPtr(v: CutsceneScale): number;
        static _dtorFn(v: CutsceneScale): void;
    }
    class Dinosaur extends ut.Component {
        constructor();
        MoveSpeed: number;
        WalkTimer: number;
        WalkAnimation: ut.Entity;
        TailWhipAnimation: ut.Entity;
        StompAnimation: ut.Entity;
        BiteAnimation: ut.Entity;
        CrushAnimation: ut.Entity;
        LaunchAnimation: ut.Entity;
        JumpAnimation: ut.Entity;
        JumpAnimationHeightCurve: ut.Entity;
        DefaultPositionY: number;
        JumpHeight: number;
        Shadow: ut.Entity;
        LaserAnimation: ut.Entity;
        DeathAnimation: ut.Entity;
        LaserBeam1: ut.Entity;
        LaserBeam2: ut.Entity;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: Dinosaur): Dinosaur;
        static _toPtr(p: number, v: Dinosaur): void;
        static _tempHeapPtr(v: Dinosaur): number;
        static _dtorFn(v: Dinosaur): void;
    }
    class DinosaurAttack extends ut.Component {
        constructor();
        Timer: number;
        AttackType: DinosaurAttackTypes;
        IsDone: boolean;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: DinosaurAttack): DinosaurAttack;
        static _toPtr(p: number, v: DinosaurAttack): void;
        static _tempHeapPtr(v: DinosaurAttack): number;
        static _dtorFn(v: DinosaurAttack): void;
    }
    class DinosaurLaserAttackBlackCover extends ut.Component {
        constructor();
        AlphaCurve: ut.Entity;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: DinosaurLaserAttackBlackCover): DinosaurLaserAttackBlackCover;
        static _toPtr(p: number, v: DinosaurLaserAttackBlackCover): void;
        static _tempHeapPtr(v: DinosaurLaserAttackBlackCover): number;
        static _dtorFn(v: DinosaurLaserAttackBlackCover): void;
    }
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
    class Destructible extends ut.Component {
        constructor();
        CurrentState: number;
        LastState: number;
        SpriteStates: string[];
        ExplosionOffsetX: number;
        ExplosionOffsetY: number;
        ExplosionRangeX: number;
        ExplosionRangeY: number;
        ExplosionMinCount: number;
        ExplosionMaxCount: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: Destructible): Destructible;
        static _toPtr(p: number, v: Destructible): void;
        static _tempHeapPtr(v: Destructible): number;
        static _dtorFn(v: Destructible): void;
    }
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
    class Helicopter extends ut.Component {
        constructor();
        MoveSpeed: number;
        SlowDownDistance: number;
        DestinationPositionX: number;
        DestinationPositionY: number;
        ReachedDestination: boolean;
        Timer: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: Helicopter): Helicopter;
        static _toPtr(p: number, v: Helicopter): void;
        static _tempHeapPtr(v: Helicopter): number;
        static _dtorFn(v: Helicopter): void;
    }
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
    class KidOnBike extends ut.Component {
        constructor();
        IsInWheelyMode: boolean;
        AnimationKidBike: ut.Entity;
        AnimationKidWheely: ut.Entity;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: KidOnBike): KidOnBike;
        static _toPtr(p: number, v: KidOnBike): void;
        static _tempHeapPtr(v: KidOnBike): number;
        static _dtorFn(v: KidOnBike): void;
    }
    class KidOnBikeSpawner extends ut.Component {
        constructor();
        Timer: number;
        SpawnDelay: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: KidOnBikeSpawner): KidOnBikeSpawner;
        static _toPtr(p: number, v: KidOnBikeSpawner): void;
        static _tempHeapPtr(v: KidOnBikeSpawner): number;
        static _dtorFn(v: KidOnBikeSpawner): void;
    }
    class PeopleSpawner extends ut.Component {
        constructor();
        MaxPeopleCount: number;
        Timer: number;
        SpawnInterval: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: PeopleSpawner): PeopleSpawner;
        static _toPtr(p: number, v: PeopleSpawner): void;
        static _tempHeapPtr(v: PeopleSpawner): number;
        static _dtorFn(v: PeopleSpawner): void;
    }
    class Person extends ut.Component {
        constructor();
        MoveSpeed: number;
        MoveSpeedMultiplier: number;
        FearSpeedMultiplier: number;
        MinimumDistanceFromDinosaur: number;
        MaximumDistanceFromDinosaur: number;
        State: PersonState;
        WalkPositionY: number;
        WalkAnimation: ut.Entity;
        FireAnimation: ut.Entity;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: Person): Person;
        static _toPtr(p: number, v: Person): void;
        static _tempHeapPtr(v: Person): number;
        static _dtorFn(v: Person): void;
    }
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
    class ScrollingObject extends ut.Component {
        constructor();
        Speed: number;
        AutonomousSpeed: number;
        SpawnerName: string;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: ScrollingObject): ScrollingObject;
        static _toPtr(p: number, v: ScrollingObject): void;
        static _tempHeapPtr(v: ScrollingObject): number;
        static _dtorFn(v: ScrollingObject): void;
    }
    class ScrollingObjectSpawner extends ut.Component {
        constructor();
        SpawnDetailsBySkin: ScrollingObjectSpawnerDetails[];
        EntitiesToSpawn: string[];
        MaxRandomYOffset: number;
        RandomizeFlipX: boolean;
        RandomizeFlipY: boolean;
        NextObjectDistance: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: ScrollingObjectSpawner): ScrollingObjectSpawner;
        static _toPtr(p: number, v: ScrollingObjectSpawner): void;
        static _tempHeapPtr(v: ScrollingObjectSpawner): number;
        static _dtorFn(v: ScrollingObjectSpawner): void;
    }
    class Cell extends ut.Component {
        constructor();
        X: number;
        Y: number;
        Size: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: Cell): Cell;
        static _toPtr(p: number, v: Cell): void;
        static _tempHeapPtr(v: Cell): number;
        static _dtorFn(v: Cell): void;
    }
    class DestroyLaserAnimation extends ut.Component {
        constructor();
        Timer: number;
        Duration: number;
        StartPositionX: number;
        StartPositionY: number;
        EndPositionX: number;
        EndPositionY: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: DestroyLaserAnimation): DestroyLaserAnimation;
        static _toPtr(p: number, v: DestroyLaserAnimation): void;
        static _tempHeapPtr(v: DestroyLaserAnimation): number;
        static _dtorFn(v: DestroyLaserAnimation): void;
    }
    class DestroyLineAnimation extends ut.Component {
        constructor();
        Timer: number;
        Duration: number;
        ScaleDuration: number;
        StartPositionX: number;
        StartPositionY: number;
        EndPositionX: number;
        EndPositionY: number;
        ColorGradient: ut.Entity;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: DestroyLineAnimation): DestroyLineAnimation;
        static _toPtr(p: number, v: DestroyLineAnimation): void;
        static _tempHeapPtr(v: DestroyLineAnimation): number;
        static _dtorFn(v: DestroyLineAnimation): void;
    }
    class Gem extends ut.Component {
        constructor();
        CellHashKey: number;
        IsSelected: boolean;
        IsFalling: boolean;
        IsSwapping: boolean;
        SpriteRendererHighlightGem: ut.Entity;
        GemType: number;
        HighlightAlpha: number;
        IsPossibleMatch: boolean;
        PowerUp: GemPowerUpTypes;
        CurrentPowerUpVisual: GemPowerUpTypes;
        RowPowerUpVisual: ut.Entity;
        ColumnPowerUpVisual: ut.Entity;
        DiagonalPowerUpVisual: ut.Entity;
        SquarePowerUpVisual: ut.Entity;
        SameColorPowerUpVisual: ut.Entity;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: Gem): Gem;
        static _toPtr(p: number, v: Gem): void;
        static _tempHeapPtr(v: Gem): number;
        static _dtorFn(v: Gem): void;
    }
    class GemFallTweenEndCallback extends ut.Component {
        constructor();
        GemEntity: ut.Entity;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: GemFallTweenEndCallback): GemFallTweenEndCallback;
        static _toPtr(p: number, v: GemFallTweenEndCallback): void;
        static _tempHeapPtr(v: GemFallTweenEndCallback): number;
        static _dtorFn(v: GemFallTweenEndCallback): void;
    }
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
    class GemSwapTweenEndCallback extends ut.Component {
        constructor();
        GemEntity: ut.Entity;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: GemSwapTweenEndCallback): GemSwapTweenEndCallback;
        static _toPtr(p: number, v: GemSwapTweenEndCallback): void;
        static _tempHeapPtr(v: GemSwapTweenEndCallback): number;
        static _dtorFn(v: GemSwapTweenEndCallback): void;
    }
    class Matched extends ut.Component {
        constructor();
        CreatedPowerUp: GemPowerUpTypes;
        IsMatch: boolean;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: Matched): Matched;
        static _toPtr(p: number, v: Matched): void;
        static _tempHeapPtr(v: Matched): number;
        static _dtorFn(v: Matched): void;
    }
    class MatchPossibility extends ut.Component {
        constructor();
        HintTimer: number;
        SwapGem1HashKey: number;
        SwapGem2HashKey: number;
        NeedsSwap: boolean;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: MatchPossibility): MatchPossibility;
        static _toPtr(p: number, v: MatchPossibility): void;
        static _tempHeapPtr(v: MatchPossibility): number;
        static _dtorFn(v: MatchPossibility): void;
    }
    class Level extends ut.Component {
        constructor();
        LevelID: number;
        Skin: SkinTypes;
        MaxMoveCount: number;
        StartPowerUps: GemPowerUpTypes[];
        MissingGems: GemTypes[];
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: Level): Level;
        static _toPtr(p: number, v: Level): void;
        static _tempHeapPtr(v: Level): number;
        static _dtorFn(v: Level): void;
    }
    class LevelEggObjective extends ut.Component {
        constructor();
        EggsInGridAtStart: number;
        EggsToSpawnOnEggCollected: number;
        CollectedEggs: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: LevelEggObjective): LevelEggObjective;
        static _toPtr(p: number, v: LevelEggObjective): void;
        static _tempHeapPtr(v: LevelEggObjective): number;
        static _dtorFn(v: LevelEggObjective): void;
    }
    class LevelPointObjective extends ut.Component {
        constructor();
        ScoreObjective: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: LevelPointObjective): LevelPointObjective;
        static _toPtr(p: number, v: LevelPointObjective): void;
        static _tempHeapPtr(v: LevelPointObjective): number;
        static _dtorFn(v: LevelPointObjective): void;
    }
    class LevelSurvival extends ut.Component {
        constructor();
        MaxSurvivalTime: number;
        TimeDepleteRate: number;
        SurvivalTimer: number;
        StartTimeGainByMatch: number;
        EndTimeGainByMatch: number;
        DifficulyRampUpTime: number;
        TimeObjective: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: LevelSurvival): LevelSurvival;
        static _toPtr(p: number, v: LevelSurvival): void;
        static _tempHeapPtr(v: LevelSurvival): number;
        static _dtorFn(v: LevelSurvival): void;
    }
    class SpriteRendererSkin extends ut.Component {
        constructor();
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
    class SpriteSequenceSkin extends ut.Component {
        constructor();
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
    class TutorialEggPointer extends ut.Component {
        constructor();
        ImageEgg: ut.Entity;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: TutorialEggPointer): TutorialEggPointer;
        static _toPtr(p: number, v: TutorialEggPointer): void;
        static _tempHeapPtr(v: TutorialEggPointer): number;
        static _dtorFn(v: TutorialEggPointer): void;
    }
    class TutorialHighlight extends ut.Component {
        constructor();
        HighlightRect: ut.Entity;
        LabelInstructions: ut.Entity;
        SpriteRenderers: ut.Entity[];
        MaxAlpha: number;
        LabelMaxAlpha: number;
        IsClosing: boolean;
        Timer: number;
        FadeDuration: number;
        StartDelay: number;
        LabelDefaultPositionY: number;
        AutoCloseDelay: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: TutorialHighlight): TutorialHighlight;
        static _toPtr(p: number, v: TutorialHighlight): void;
        static _tempHeapPtr(v: TutorialHighlight): number;
        static _dtorFn(v: TutorialHighlight): void;
    }
    class TutorialPointer extends ut.Component {
        constructor();
        Pointer: ut.Entity;
        StartPosition: ut.Math.Vector2;
        EndPosition: ut.Math.Vector2;
        Duration: number;
        AlphaCurve: ut.Entity;
        MoveCurve: ut.Entity;
        Timer: number;
        StretchToMove: boolean;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: TutorialPointer): TutorialPointer;
        static _toPtr(p: number, v: TutorialPointer): void;
        static _tempHeapPtr(v: TutorialPointer): number;
        static _dtorFn(v: TutorialPointer): void;
    }
    class CreditsMenu extends ut.Component {
        constructor();
        ButtonClose: ut.Entity;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: CreditsMenu): CreditsMenu;
        static _toPtr(p: number, v: CreditsMenu): void;
        static _tempHeapPtr(v: CreditsMenu): number;
        static _dtorFn(v: CreditsMenu): void;
    }
    class GameOverMenu extends ut.Component {
        constructor();
        ButtonQuit: ut.Entity;
        LabelScoreValue: ut.Entity;
        LabelTime: ut.Entity;
        LabelTimeValue: ut.Entity;
        LabelGameOver: ut.Entity;
        LabelGameOverShadow: ut.Entity;
        LabelNewBestScore: ut.Entity;
        ImageNewBestScore: ut.Entity;
        ImageNewBestScoreGlow: ut.Entity;
        SuccessArms: ut.Entity[];
        FailArms: ut.Entity[];
        Timer: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: GameOverMenu): GameOverMenu;
        static _toPtr(p: number, v: GameOverMenu): void;
        static _tempHeapPtr(v: GameOverMenu): number;
        static _dtorFn(v: GameOverMenu): void;
    }
    class GameUI extends ut.Component {
        constructor();
        ButtonPause: ut.Entity;
        LabelScore: ut.Entity;
        LabelRemainingMoves: ut.Entity;
        ImageMoves: ut.Entity;
        LabelObjective: ut.Entity;
        ImageObjectivePoint: ut.Entity;
        ImageObjectiveEgg: ut.Entity;
        ImageObjectiveSurvival: ut.Entity;
        ImageObjectivePointIncomplete: ut.Entity;
        ImageObjectiveEggIncomplete: ut.Entity;
        ImageObjectiveSurvivalIncomplete: ut.Entity;
        ImageObjectiveCompleteGlow: ut.Entity;
        LabelTime: ut.Entity;
        ImageNoMovesWarning: ut.Entity;
        LastCollectedEggCount: number;
        LastIsObjectiveComplete: boolean;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: GameUI): GameUI;
        static _toPtr(p: number, v: GameUI): void;
        static _tempHeapPtr(v: GameUI): number;
        static _dtorFn(v: GameUI): void;
    }
    class LanguagesMenu extends ut.Component {
        constructor();
        ButtonCancel: ut.Entity;
        ButtonEnglish: ut.Entity;
        ButtonFrench: ut.Entity;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: LanguagesMenu): LanguagesMenu;
        static _toPtr(p: number, v: LanguagesMenu): void;
        static _tempHeapPtr(v: LanguagesMenu): number;
        static _dtorFn(v: LanguagesMenu): void;
    }
    class MainMenu extends ut.Component {
        constructor();
        ImageLogo: ut.Entity;
        ButtonPlay: ut.Entity;
        TilingBackgroundEntity: ut.Entity;
        TilingBackgroundSpeed: number;
        ButtonWatchIntro: ut.Entity;
        ButtonSettings: ut.Entity;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: MainMenu): MainMenu;
        static _toPtr(p: number, v: MainMenu): void;
        static _tempHeapPtr(v: MainMenu): number;
        static _dtorFn(v: MainMenu): void;
    }
    class PauseMenu extends ut.Component {
        constructor();
        ButtonResume: ut.Entity;
        ButtonQuit: ut.Entity;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: PauseMenu): PauseMenu;
        static _toPtr(p: number, v: PauseMenu): void;
        static _tempHeapPtr(v: PauseMenu): number;
        static _dtorFn(v: PauseMenu): void;
    }
    class Popup extends ut.Component {
        constructor();
        HasPlayedInTransition: boolean;
        PanelContent: ut.Entity;
        ImageBackground: ut.Entity;
        TargetFadeAlpha: number;
        Timer: number;
        FadeInDuration: number;
        ScaleInDuration: number;
        DelayIn: number;
        HasFinishedDelay: boolean;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: Popup): Popup;
        static _toPtr(p: number, v: Popup): void;
        static _tempHeapPtr(v: Popup): number;
        static _dtorFn(v: Popup): void;
    }
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
    class ScoreGainLabel extends ut.Component {
        constructor();
        Timer: number;
        Duration: number;
        SpeedY: number;
        AlphaCurve: ut.Entity;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: ScoreGainLabel): ScoreGainLabel;
        static _toPtr(p: number, v: ScoreGainLabel): void;
        static _tempHeapPtr(v: ScoreGainLabel): number;
        static _dtorFn(v: ScoreGainLabel): void;
    }
    class ScreenTransition extends ut.Component {
        constructor();
        InDuration: number;
        OutDuration: number;
        BlackCurtain: ut.Entity;
        IsTransitionIn: boolean;
        Timer: number;
        TransitionToState: GameStateTypes;
        ScaleHole: ut.Entity;
        SkipFrameCount: number;
        ScaleHoleCurve: ut.Entity;
        IsScaleHoleTransition: boolean;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: ScreenTransition): ScreenTransition;
        static _toPtr(p: number, v: ScreenTransition): void;
        static _tempHeapPtr(v: ScreenTransition): number;
        static _dtorFn(v: ScreenTransition): void;
    }
    class SettingsMenu extends ut.Component {
        constructor();
        ButtonOK: ut.Entity;
        ButtonCredits: ut.Entity;
        ButtonResetProgress: ut.Entity;
        ButtonLanguage: ut.Entity;
        ButtonRenderMode: ut.Entity;
        LabelRenderMode: ut.Entity;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: SettingsMenu): SettingsMenu;
        static _toPtr(p: number, v: SettingsMenu): void;
        static _tempHeapPtr(v: SettingsMenu): number;
        static _dtorFn(v: SettingsMenu): void;
    }
    class SettingsMenuAudio extends ut.Component {
        constructor();
        ButtonSound: ut.Entity;
        ButtonMusic: ut.Entity;
        SpriteAudioOn: ut.Entity;
        SpriteAudioOff: ut.Entity;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: SettingsMenuAudio): SettingsMenuAudio;
        static _toPtr(p: number, v: SettingsMenuAudio): void;
        static _tempHeapPtr(v: SettingsMenuAudio): number;
        static _dtorFn(v: SettingsMenuAudio): void;
    }
    class SurvivalModeTimeline extends ut.Component {
        constructor();
        ContainerFilling: ut.Entity;
        DinosaurCursor: ut.Entity;
        Width: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: SurvivalModeTimeline): SurvivalModeTimeline;
        static _toPtr(p: number, v: SurvivalModeTimeline): void;
        static _tempHeapPtr(v: SurvivalModeTimeline): number;
        static _dtorFn(v: SurvivalModeTimeline): void;
    }
    class WorldMap extends ut.Component {
        constructor();
        IsCreated: boolean;
        CurrentLevelIndex: number;
        ScrollSpeed: number;
        CurrentScrollIndexPosition: number;
        ButtonLeft: ut.Entity;
        ButtonRight: ut.Entity;
        Ground: ut.Entity;
        GroundTransition: ut.Entity;
        Sky: ut.Entity;
        SkyTransition: ut.Entity;
        LabelLevelTitle: ut.Entity;
        LabelLevelInfoLine1: ut.Entity;
        LabelLevelInfoLine2: ut.Entity;
        LastLevelIndex: number;
        LastScrollIndexPosition: number;
        ButtonPlay: ut.Entity;
        ButtonSettings: ut.Entity;
        LabelBestScore: ut.Entity;
        ImagePointObjective: ut.Entity;
        ImageEggObjective: ut.Entity;
        ImageSurvivalObjective: ut.Entity;
        ImageLock: ut.Entity[];
        LastBeatenLevelID: number;
        LabelButtonPlay: ut.Entity;
        PlayButtonColor: ut.Core2D.Color;
        PlayButtonDisabledColor: ut.Core2D.Color;
        ButtonCutscene: ut.Entity;
        LabelButtonCutscene: ut.Entity;
        LastLanguageID: string;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: WorldMap): WorldMap;
        static _toPtr(p: number, v: WorldMap): void;
        static _tempHeapPtr(v: WorldMap): number;
        static _dtorFn(v: WorldMap): void;
    }
    class WorldMapItem extends ut.Component {
        constructor();
        Index: number;
        ImageLevelPreview: ut.Entity;
        DistanceBetweenLevelItems: number;
        FocusedScale: number;
        UnfocusedScale: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: WorldMapItem): WorldMapItem;
        static _toPtr(p: number, v: WorldMapItem): void;
        static _tempHeapPtr(v: WorldMapItem): number;
        static _dtorFn(v: WorldMapItem): void;
    }
    class CameraResolutionFitter extends ut.Component {
        constructor();
        DefaultHalfVerticalSize: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: CameraResolutionFitter): CameraResolutionFitter;
        static _toPtr(p: number, v: CameraResolutionFitter): void;
        static _tempHeapPtr(v: CameraResolutionFitter): number;
        static _dtorFn(v: CameraResolutionFitter): void;
    }
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
    class CollectedCurrency extends ut.Component {
        constructor();
        StartPosition: ut.Math.Vector3;
        MidPosition: ut.Math.Vector3;
        EndPosition: ut.Math.Vector3;
        Duration: number;
        Timer: number;
        ProgressCurve: ut.Entity;
        ScaleCurve: ut.Entity;
        StartDelay: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: CollectedCurrency): CollectedCurrency;
        static _toPtr(p: number, v: CollectedCurrency): void;
        static _tempHeapPtr(v: CollectedCurrency): number;
        static _dtorFn(v: CollectedCurrency): void;
    }
    class CurrentRenderMode extends ut.Component {
        constructor();
        desiredMode: ut.Core2D.RenderMode;
        apply: boolean;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: CurrentRenderMode): CurrentRenderMode;
        static _toPtr(p: number, v: CurrentRenderMode): void;
        static _tempHeapPtr(v: CurrentRenderMode): number;
        static _dtorFn(v: CurrentRenderMode): void;
    }
    class CustomButton extends ut.Component {
        constructor();
        IsPressed: boolean;
        JustDown: boolean;
        JustUp: boolean;
        JustClicked: boolean;
        TimePressed: number;
        LastDown: boolean;
        LastOver: boolean;
        DefaultSprite: ut.Entity;
        HoveredSprite: ut.Entity;
        PressedSprite: ut.Entity;
        DisabledSprite: ut.Entity;
        ContentToOffsetOnPress: ut.Entity;
        PressedOffsetY: number;
        ContentDefautPositionY: number;
        ContentDefautPositionIsSet: boolean;
        IsPointerOver: boolean;
        IsInteractable: boolean;
        LastIsInteractable: boolean;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: CustomButton): CustomButton;
        static _toPtr(p: number, v: CustomButton): void;
        static _tempHeapPtr(v: CustomButton): number;
        static _dtorFn(v: CustomButton): void;
    }
    class CustomLabel extends ut.Component {
        constructor();
        LastText: string;
        LastColor: ut.Core2D.Color;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: CustomLabel): CustomLabel;
        static _toPtr(p: number, v: CustomLabel): void;
        static _tempHeapPtr(v: CustomLabel): number;
        static _dtorFn(v: CustomLabel): void;
    }
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
    class DestroyAfterDelay extends ut.Component {
        constructor();
        Delay: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: DestroyAfterDelay): DestroyAfterDelay;
        static _toPtr(p: number, v: DestroyAfterDelay): void;
        static _tempHeapPtr(v: DestroyAfterDelay): number;
        static _dtorFn(v: DestroyAfterDelay): void;
    }
    class LocalizedText extends ut.Component {
        constructor();
        TextID: string;
        LastTextID: string;
        ToUpper: boolean;
        LastLanguageID: string;
        TextParameters: string[];
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: LocalizedText): LocalizedText;
        static _toPtr(p: number, v: LocalizedText): void;
        static _tempHeapPtr(v: LocalizedText): number;
        static _dtorFn(v: LocalizedText): void;
    }
    class NearDeathOpacityAnimation extends ut.Component {
        constructor();
        Speed: number;
        MinAlpha: number;
        MaxAlpha: number;
        Timer: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: NearDeathOpacityAnimation): NearDeathOpacityAnimation;
        static _toPtr(p: number, v: NearDeathOpacityAnimation): void;
        static _tempHeapPtr(v: NearDeathOpacityAnimation): number;
        static _dtorFn(v: NearDeathOpacityAnimation): void;
    }
    class ShakeAnimation extends ut.Component {
        constructor();
        DefaultX: number;
        DefaultY: number;
        DefaultZ: number;
        IsDefaultPositionSet: boolean;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: ShakeAnimation): ShakeAnimation;
        static _toPtr(p: number, v: ShakeAnimation): void;
        static _tempHeapPtr(v: ShakeAnimation): number;
        static _dtorFn(v: ShakeAnimation): void;
    }
    class ShakeAnimationPlayer extends ut.Component {
        constructor();
        Duration: number;
        ShakeRadiusX: number;
        ShakeRadiusY: number;
        Timer: number;
        StartDelay: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: ShakeAnimationPlayer): ShakeAnimationPlayer;
        static _toPtr(p: number, v: ShakeAnimationPlayer): void;
        static _tempHeapPtr(v: ShakeAnimationPlayer): number;
        static _dtorFn(v: ShakeAnimationPlayer): void;
    }
    class TilingBackground extends ut.Component {
        constructor();
        SpeedX: number;
        SpeedY: number;
        TileSize: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: TilingBackground): TilingBackground;
        static _toPtr(p: number, v: TilingBackground): void;
        static _tempHeapPtr(v: TilingBackground): number;
        static _dtorFn(v: TilingBackground): void;
    }
    class ScrollingObjectSpawnerDetails {
        Skin: SkinTypes;
        MinSpawnIntervalX: number;
        MaxSpawnIntervalX: number;
        SpawnIntervalFrequency: number;
        static _size: number;
        static _fromPtr(p: number, v?: ScrollingObjectSpawnerDetails): ScrollingObjectSpawnerDetails;
        static _toPtr(p: number, v: ScrollingObjectSpawnerDetails): void;
        static _tempHeapPtr(v: ScrollingObjectSpawnerDetails): number;
    }
    class SpriteRendererSkinColorInfo {
        Skin: SkinTypes;
        Color: ut.Core2D.Color;
        static _size: number;
        static _fromPtr(p: number, v?: SpriteRendererSkinColorInfo): SpriteRendererSkinColorInfo;
        static _toPtr(p: number, v: SpriteRendererSkinColorInfo): void;
        static _tempHeapPtr(v: SpriteRendererSkinColorInfo): number;
    }
    class LocalizationItem {
        TextID: string;
        en: string;
        fr: string;
        static _size: number;
        static _fromPtr(p: number, v?: LocalizationItem): LocalizationItem;
        static _toPtr(p: number, v: LocalizationItem): void;
        static _tempHeapPtr(v: LocalizationItem): number;
    }
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
    enum DinosaurAttackTypes {
        TailWhip = 0,
        Crush = 1,
        Launch = 2,
        Jump = 3,
        Stomp = 4,
        Bite = 5,
        Laser = 6,
    }
    enum PersonState {
        Appear = 0,
        Fire = 1,
        Walk = 2,
    }
    enum GemPowerUpTypes {
        None = 0,
        Row = 1,
        Column = 2,
        Square = 3,
        DiagonalCross = 4,
        SameColor = 5,
    }
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
    enum SkinTypes {
        Camp = 0,
        Farm = 1,
        City = 2,
    }
    enum CustomLabelAlignment {
        Left = 0,
        Center = 1,
        Right = 2,
    }
}
declare namespace ut{
}
declare namespace ut.EditorExtensions{
    class AssetReferenceAnimationClip extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceAnimationClip): AssetReferenceAnimationClip;
        static _toPtr(p: number, v: AssetReferenceAnimationClip): void;
        static _tempHeapPtr(v: AssetReferenceAnimationClip): number;
        static _dtorFn(v: AssetReferenceAnimationClip): void;
    }
    class AssetReferenceAudioClip extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceAudioClip): AssetReferenceAudioClip;
        static _toPtr(p: number, v: AssetReferenceAudioClip): void;
        static _tempHeapPtr(v: AssetReferenceAudioClip): number;
        static _dtorFn(v: AssetReferenceAudioClip): void;
    }
    class AssetReferenceSprite extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceSprite): AssetReferenceSprite;
        static _toPtr(p: number, v: AssetReferenceSprite): void;
        static _tempHeapPtr(v: AssetReferenceSprite): number;
        static _dtorFn(v: AssetReferenceSprite): void;
    }
    class AssetReferenceSpriteAtlas extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceSpriteAtlas): AssetReferenceSpriteAtlas;
        static _toPtr(p: number, v: AssetReferenceSpriteAtlas): void;
        static _tempHeapPtr(v: AssetReferenceSpriteAtlas): number;
        static _dtorFn(v: AssetReferenceSpriteAtlas): void;
    }
    class AssetReferenceTexture2D extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceTexture2D): AssetReferenceTexture2D;
        static _toPtr(p: number, v: AssetReferenceTexture2D): void;
        static _tempHeapPtr(v: AssetReferenceTexture2D): number;
        static _dtorFn(v: AssetReferenceTexture2D): void;
    }
    class AssetReferenceTileBase extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceTileBase): AssetReferenceTileBase;
        static _toPtr(p: number, v: AssetReferenceTileBase): void;
        static _tempHeapPtr(v: AssetReferenceTileBase): number;
        static _dtorFn(v: AssetReferenceTileBase): void;
    }
    class AssetReferenceTMP_FontAsset extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceTMP_FontAsset): AssetReferenceTMP_FontAsset;
        static _toPtr(p: number, v: AssetReferenceTMP_FontAsset): void;
        static _tempHeapPtr(v: AssetReferenceTMP_FontAsset): number;
        static _dtorFn(v: AssetReferenceTMP_FontAsset): void;
    }
    class CameraCullingMask extends ut.Component {
        constructor();
        mask: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: CameraCullingMask): CameraCullingMask;
        static _toPtr(p: number, v: CameraCullingMask): void;
        static _tempHeapPtr(v: CameraCullingMask): number;
        static _dtorFn(v: CameraCullingMask): void;
    }
    class EntityLayer extends ut.Component {
        constructor();
        layer: number;
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
declare namespace ut{
    class EntityGroupData extends Object{
        Component: ut.ComponentClass<any>;
        load(world: ut.World): ut.Entity[];
        name: string;
    }
    interface EntityGroups{
        [module: string]: any;
        game: {
            [data: string]: EntityGroupData;
            Bootstrap: EntityGroupData;
            CutsceneCamera: EntityGroupData;
            CutscenePartA: EntityGroupData;
            CutscenePartB: EntityGroupData;
            CutscenePartC: EntityGroupData;
            EndCutscenePartA: EntityGroupData;
            EndCutscenePartB: EntityGroupData;
            Dinosaur: EntityGroupData;
            DinosaurLaserAttackBlackCover: EntityGroupData;
            Bird: EntityGroupData;
            BuildingMedium: EntityGroupData;
            BuildingSmall: EntityGroupData;
            BuildingSmall2: EntityGroupData;
            BuildingTall: EntityGroupData;
            Car1: EntityGroupData;
            Car2: EntityGroupData;
            CarSkyFall: EntityGroupData;
            Cloud1: EntityGroupData;
            Cloud2: EntityGroupData;
            Cloud3: EntityGroupData;
            Explosion1: EntityGroupData;
            Explosion2: EntityGroupData;
            FireTruck: EntityGroupData;
            Floor: EntityGroupData;
            GameScene: EntityGroupData;
            GroundDeco1: EntityGroupData;
            GroundDeco2: EntityGroupData;
            GroundDeco3: EntityGroupData;
            GroundDeco4: EntityGroupData;
            Helicopter: EntityGroupData;
            KidOnBike: EntityGroupData;
            Parallax1: EntityGroupData;
            Parallax2: EntityGroupData;
            Parallax3: EntityGroupData;
            Parallax4: EntityGroupData;
            Parallax5: EntityGroupData;
            ParticleExplosion: EntityGroupData;
            Person: EntityGroupData;
            Prop1: EntityGroupData;
            Prop2: EntityGroupData;
            Prop3: EntityGroupData;
            SewerStraight: EntityGroupData;
            SewerT: EntityGroupData;
            Cell: EntityGroupData;
            CollectedEgg: EntityGroupData;
            DestroyLaserAnimation: EntityGroupData;
            DestroyLineAnimation: EntityGroupData;
            ExplodingGem1: EntityGroupData;
            ExplodingGem2: EntityGroupData;
            Gem: EntityGroupData;
            ScoreGainLabel: EntityGroupData;
            Level1: EntityGroupData;
            Level2: EntityGroupData;
            Level3: EntityGroupData;
            TutorialEggPointer: EntityGroupData;
            TutorialHighlight: EntityGroupData;
            TutorialMatchPointer: EntityGroupData;
            TutorialSurvivalPointer: EntityGroupData;
            CreditsMenu: EntityGroupData;
            GameOverMenu: EntityGroupData;
            GameUI: EntityGroupData;
            LanguagesMenu: EntityGroupData;
            Loading: EntityGroupData;
            MainMenu: EntityGroupData;
            PauseMenu: EntityGroupData;
            ScreenTransition: EntityGroupData;
            SettingsMenu: EntityGroupData;
            SurvivalModeTimeline: EntityGroupData;
            WorldMap: EntityGroupData;
            WorldMapItem: EntityGroupData;
            BackgroundNearDeathWarning: EntityGroupData;
            CustomLabelCharacter: EntityGroupData;
        }
    }
}
declare let entities: ut.EntityGroups;
declare namespace ut.Core2D.layers{
    class Default extends ut.Component {
        static _wrap(w: number, e: number): Default;
        static readonly cid: number;
    }
    class TransparentFX extends ut.Component {
        static _wrap(w: number, e: number): TransparentFX;
        static readonly cid: number;
    }
    class IgnoreRaycast extends ut.Component {
        static _wrap(w: number, e: number): IgnoreRaycast;
        static readonly cid: number;
    }
    class Water extends ut.Component {
        static _wrap(w: number, e: number): Water;
        static readonly cid: number;
    }
    class UI extends ut.Component {
        static _wrap(w: number, e: number): UI;
        static readonly cid: number;
    }
    class PostProcessing extends ut.Component {
        static _wrap(w: number, e: number): PostProcessing;
        static readonly cid: number;
    }
    class Cutscene extends ut.Component {
        static _wrap(w: number, e: number): Cutscene;
        static readonly cid: number;
    }
}
