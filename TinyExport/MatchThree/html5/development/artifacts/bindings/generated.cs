using UTiny;
using UTiny.Core2D;
using UTiny.Math;
using UTiny.Shared;
using UTiny.HTML;
using UTiny.Rendering;
using UTiny.UILayout;
using UTiny.Particles;
using UTiny.Interpolation;
using UTiny.Audio;
using ut;
using UTiny.Tweens;
using UTiny.UIControls;
using UTiny.Profiler;
using ut.EditorExtensions;
using UTiny.Text;

/*
 * !!! TEMP UNITL PROPER SCENE FORMAT !!!
 */
namespace entities.game
{
    namespace Bootstrap
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace CutsceneCamera
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace CutscenePartA
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace CutscenePartB
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace CutscenePartC
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace EndCutscenePartA
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace EndCutscenePartB
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Dinosaur
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace DinosaurLaserAttackBlackCover
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Bird
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace BuildingMedium
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace BuildingSmall
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace BuildingSmall2
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace BuildingTall
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Car1
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Car2
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace CarSkyFall
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Cloud1
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Cloud2
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Cloud3
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Explosion1
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Explosion2
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace FireTruck
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Floor
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace GameScene
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace GroundDeco1
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace GroundDeco2
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace GroundDeco3
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace GroundDeco4
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Helicopter
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace KidOnBike
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Parallax1
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Parallax2
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Parallax3
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Parallax4
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Parallax5
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace ParticleExplosion
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Person
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Prop1
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Prop2
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Prop3
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace SewerStraight
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace SewerT
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Cell
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace CollectedEgg
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace DestroyLaserAnimation
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace DestroyLineAnimation
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace ExplodingGem1
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace ExplodingGem2
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Gem
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace ScoreGainLabel
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Level1
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Level2
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Level3
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace TutorialEggPointer
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace TutorialHighlight
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace TutorialMatchPointer
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace TutorialSurvivalPointer
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace CreditsMenu
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace GameOverMenu
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace GameUI
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace LanguagesMenu
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Loading
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace MainMenu
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace PauseMenu
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace ScreenTransition
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace SettingsMenu
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace SurvivalModeTimeline
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace WorldMap
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace WorldMapItem
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace BackgroundNearDeathWarning
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace CustomLabelCharacter
    {
        public struct Component : IComponentData
        {
        }
    }
}

namespace game
{
    public struct GameState : IComponentData
    {
        public game.GameStateTypes GameStateType;
        public sbyte CurrentLevelID;
        public int CurrentScore;
        public int CurrentMoveCount;
        public float Time;
        public float SurvivalTimer;
        public int LevelCount;
        public float ShowHintDelay;
        public float EnvironmentSceneWidth;
    }
    public struct CutsceneDirector : IComponentData
    {
        public int CurrentElementIndex;
        public float Speed;
        public float PauseDelayTimer;
    }
    public struct CutsceneElement : IComponentData
    {
        public uint Index;
        public float Duration;
        public bool ClearPreviousElements;
        public float Timer;
    }
    public struct CutsceneFade : IComponentData
    {
        public float Duration;
    }
    public struct CutsceneMove : IComponentData
    {
        public float Duration;
        public Vector2 StartOffset;
        public TweenFunc Easing;
    }
    public struct CutsceneScale : IComponentData
    {
        public float Duration;
        public TweenFunc Easing;
        public Vector3 StartScale;
    }
    public struct Dinosaur : IComponentData
    {
        public float MoveSpeed;
        public float WalkTimer;
        public Entity WalkAnimation;
        public Entity TailWhipAnimation;
        public Entity StompAnimation;
        public Entity BiteAnimation;
        public Entity CrushAnimation;
        public Entity LaunchAnimation;
        public Entity JumpAnimation;
        public Entity JumpAnimationHeightCurve;
        public float DefaultPositionY;
        public float JumpHeight;
        public Entity Shadow;
        public Entity LaserAnimation;
        public Entity DeathAnimation;
        public Entity LaserBeam1;
        public Entity LaserBeam2;
    }
    public struct DinosaurAttack : IComponentData
    {
        public float Timer;
        public game.DinosaurAttackTypes AttackType;
        public bool IsDone;
    }
    public struct DinosaurLaserAttackBlackCover : IComponentData
    {
        public Entity AlphaCurve;
    }
    public struct Building : IComponentData
    {
    }
    public struct Car : IComponentData
    {
    }
    public struct Destructible : IComponentData
    {
        public int CurrentState;
        public int LastState;
        public DynamicArray<string> SpriteStates;
        public float ExplosionOffsetX;
        public float ExplosionOffsetY;
        public float ExplosionRangeX;
        public float ExplosionRangeY;
        public float ExplosionMinCount;
        public float ExplosionMaxCount;
    }
    public struct FireTruck : IComponentData
    {
    }
    public struct Helicopter : IComponentData
    {
        public float MoveSpeed;
        public float SlowDownDistance;
        public float DestinationPositionX;
        public float DestinationPositionY;
        public bool ReachedDestination;
        public float Timer;
    }
    public struct HelicopterSpawner : IComponentData
    {
    }
    public struct KidOnBike : IComponentData
    {
        public bool IsInWheelyMode;
        public Entity AnimationKidBike;
        public Entity AnimationKidWheely;
    }
    public struct KidOnBikeSpawner : IComponentData
    {
        public float Timer;
        public float SpawnDelay;
    }
    public struct PeopleSpawner : IComponentData
    {
        public sbyte MaxPeopleCount;
        public float Timer;
        public float SpawnInterval;
    }
    public struct Person : IComponentData
    {
        public float MoveSpeed;
        public float MoveSpeedMultiplier;
        public float FearSpeedMultiplier;
        public float MinimumDistanceFromDinosaur;
        public float MaximumDistanceFromDinosaur;
        public game.PersonState State;
        public float WalkPositionY;
        public Entity WalkAnimation;
        public Entity FireAnimation;
    }
    public struct Prop : IComponentData
    {
    }
    public struct ScrollingObject : IComponentData
    {
        public float Speed;
        public float AutonomousSpeed;
        public string SpawnerName;
    }
    public struct ScrollingObjectSpawner : IComponentData
    {
        public DynamicArray<ScrollingObjectSpawnerDetails> SpawnDetailsBySkin;
        public DynamicArray<string> EntitiesToSpawn;
        public int MaxRandomYOffset;
        public bool RandomizeFlipX;
        public bool RandomizeFlipY;
        public float NextObjectDistance;
    }
    public struct Cell : IComponentData
    {
        public int X;
        public int Y;
        public int Size;
    }
    public struct DestroyLaserAnimation : IComponentData
    {
        public float Timer;
        public float Duration;
        public float StartPositionX;
        public float StartPositionY;
        public float EndPositionX;
        public float EndPositionY;
    }
    public struct DestroyLineAnimation : IComponentData
    {
        public float Timer;
        public float Duration;
        public float ScaleDuration;
        public float StartPositionX;
        public float StartPositionY;
        public float EndPositionX;
        public float EndPositionY;
        public Entity ColorGradient;
    }
    public struct Gem : IComponentData
    {
        public long CellHashKey;
        public bool IsSelected;
        public bool IsFalling;
        public bool IsSwapping;
        public Entity SpriteRendererHighlightGem;
        public int GemType;
        public float HighlightAlpha;
        public bool IsPossibleMatch;
        public game.GemPowerUpTypes PowerUp;
        public game.GemPowerUpTypes CurrentPowerUpVisual;
        public Entity RowPowerUpVisual;
        public Entity ColumnPowerUpVisual;
        public Entity DiagonalPowerUpVisual;
        public Entity SquarePowerUpVisual;
        public Entity SameColorPowerUpVisual;
    }
    public struct GemFallTweenEndCallback : IComponentData
    {
        public Entity GemEntity;
    }
    public struct GemSwap : IComponentData
    {
    }
    public struct GemSwapTweenEndCallback : IComponentData
    {
        public Entity GemEntity;
    }
    public struct Matched : IComponentData
    {
        public game.GemPowerUpTypes CreatedPowerUp;
        public bool IsMatch;
    }
    public struct MatchPossibility : IComponentData
    {
        public float HintTimer;
        public int SwapGem1HashKey;
        public int SwapGem2HashKey;
        public bool NeedsSwap;
    }
    public struct Level : IComponentData
    {
        public int LevelID;
        public game.SkinTypes Skin;
        public int MaxMoveCount;
        public DynamicArray<game.GemPowerUpTypes> StartPowerUps;
        public DynamicArray<game.GemTypes> MissingGems;
    }
    public struct LevelEggObjective : IComponentData
    {
        public int EggsInGridAtStart;
        public int EggsToSpawnOnEggCollected;
        public int CollectedEggs;
    }
    public struct LevelPointObjective : IComponentData
    {
        public int ScoreObjective;
    }
    public struct LevelSurvival : IComponentData
    {
        public float MaxSurvivalTime;
        public float TimeDepleteRate;
        public float SurvivalTimer;
        public float StartTimeGainByMatch;
        public float EndTimeGainByMatch;
        public float DifficulyRampUpTime;
        public float TimeObjective;
    }
    public struct SpriteRendererSkin : IComponentData
    {
        public string SpritePath;
        public DynamicArray<SpriteRendererSkinColorInfo> SkinColorInfo;
        public sbyte CurrentSkinIndex;
    }
    public struct SpriteSequenceSkin : IComponentData
    {
        public DynamicArray<string> SpritePaths;
        public sbyte CurrentSkinIndex;
    }
    public struct TutorialEggPointer : IComponentData
    {
        public Entity ImageEgg;
    }
    public struct TutorialHighlight : IComponentData
    {
        public Entity HighlightRect;
        public Entity LabelInstructions;
        public DynamicArray<Entity> SpriteRenderers;
        public float MaxAlpha;
        public float LabelMaxAlpha;
        public bool IsClosing;
        public float Timer;
        public float FadeDuration;
        public float StartDelay;
        public float LabelDefaultPositionY;
        public float AutoCloseDelay;
    }
    public struct TutorialPointer : IComponentData
    {
        public Entity Pointer;
        public Vector2 StartPosition;
        public Vector2 EndPosition;
        public float Duration;
        public Entity AlphaCurve;
        public Entity MoveCurve;
        public float Timer;
        public bool StretchToMove;
    }
    public struct CreditsMenu : IComponentData
    {
        public Entity ButtonClose;
    }
    public struct GameOverMenu : IComponentData
    {
        public Entity ButtonQuit;
        public Entity LabelScoreValue;
        public Entity LabelTime;
        public Entity LabelTimeValue;
        public Entity LabelGameOver;
        public Entity LabelGameOverShadow;
        public Entity LabelNewBestScore;
        public Entity ImageNewBestScore;
        public Entity ImageNewBestScoreGlow;
        public DynamicArray<Entity> SuccessArms;
        public DynamicArray<Entity> FailArms;
        public float Timer;
    }
    public struct GameUI : IComponentData
    {
        public Entity ButtonPause;
        public Entity LabelScore;
        public Entity LabelRemainingMoves;
        public Entity ImageMoves;
        public Entity LabelObjective;
        public Entity ImageObjectivePoint;
        public Entity ImageObjectiveEgg;
        public Entity ImageObjectiveSurvival;
        public Entity ImageObjectivePointIncomplete;
        public Entity ImageObjectiveEggIncomplete;
        public Entity ImageObjectiveSurvivalIncomplete;
        public Entity ImageObjectiveCompleteGlow;
        public Entity LabelTime;
        public Entity ImageNoMovesWarning;
        public int LastCollectedEggCount;
        public bool LastIsObjectiveComplete;
    }
    public struct LanguagesMenu : IComponentData
    {
        public Entity ButtonCancel;
        public Entity ButtonEnglish;
        public Entity ButtonFrench;
    }
    public struct MainMenu : IComponentData
    {
        public Entity ImageLogo;
        public Entity ButtonPlay;
        public Entity TilingBackgroundEntity;
        public float TilingBackgroundSpeed;
        public Entity ButtonWatchIntro;
        public Entity ButtonSettings;
    }
    public struct PauseMenu : IComponentData
    {
        public Entity ButtonResume;
        public Entity ButtonQuit;
    }
    public struct Popup : IComponentData
    {
        public bool HasPlayedInTransition;
        public Entity PanelContent;
        public Entity ImageBackground;
        public float TargetFadeAlpha;
        public float Timer;
        public float FadeInDuration;
        public float ScaleInDuration;
        public float DelayIn;
        public bool HasFinishedDelay;
    }
    public struct ScoreDisplay : IComponentData
    {
    }
    public struct ScoreGainLabel : IComponentData
    {
        public float Timer;
        public float Duration;
        public float SpeedY;
        public Entity AlphaCurve;
    }
    public struct ScreenTransition : IComponentData
    {
        public float InDuration;
        public float OutDuration;
        public Entity BlackCurtain;
        public bool IsTransitionIn;
        public float Timer;
        public game.GameStateTypes TransitionToState;
        public Entity ScaleHole;
        public int SkipFrameCount;
        public Entity ScaleHoleCurve;
        public bool IsScaleHoleTransition;
    }
    public struct SettingsMenu : IComponentData
    {
        public Entity ButtonOK;
        public Entity ButtonCredits;
        public Entity ButtonResetProgress;
        public Entity ButtonLanguage;
        public Entity ButtonRenderMode;
        public Entity LabelRenderMode;
    }
    public struct SettingsMenuAudio : IComponentData
    {
        public Entity ButtonSound;
        public Entity ButtonMusic;
        public Entity SpriteAudioOn;
        public Entity SpriteAudioOff;
    }
    public struct SurvivalModeTimeline : IComponentData
    {
        public Entity ContainerFilling;
        public Entity DinosaurCursor;
        public float Width;
    }
    public struct WorldMap : IComponentData
    {
        public bool IsCreated;
        public int CurrentLevelIndex;
        public float ScrollSpeed;
        public float CurrentScrollIndexPosition;
        public Entity ButtonLeft;
        public Entity ButtonRight;
        public Entity Ground;
        public Entity GroundTransition;
        public Entity Sky;
        public Entity SkyTransition;
        public Entity LabelLevelTitle;
        public Entity LabelLevelInfoLine1;
        public Entity LabelLevelInfoLine2;
        public int LastLevelIndex;
        public float LastScrollIndexPosition;
        public Entity ButtonPlay;
        public Entity ButtonSettings;
        public Entity LabelBestScore;
        public Entity ImagePointObjective;
        public Entity ImageEggObjective;
        public Entity ImageSurvivalObjective;
        public DynamicArray<Entity> ImageLock;
        public int LastBeatenLevelID;
        public Entity LabelButtonPlay;
        public Color PlayButtonColor;
        public Color PlayButtonDisabledColor;
        public Entity ButtonCutscene;
        public Entity LabelButtonCutscene;
        public string LastLanguageID;
    }
    public struct WorldMapItem : IComponentData
    {
        public int Index;
        public Entity ImageLevelPreview;
        public float DistanceBetweenLevelItems;
        public float FocusedScale;
        public float UnfocusedScale;
    }
    public struct CameraResolutionFitter : IComponentData
    {
        public float DefaultHalfVerticalSize;
    }
    public struct CanvasResolutionFitter : IComponentData
    {
    }
    public struct CollectedCurrency : IComponentData
    {
        public Vector3 StartPosition;
        public Vector3 MidPosition;
        public Vector3 EndPosition;
        public float Duration;
        public float Timer;
        public Entity ProgressCurve;
        public Entity ScaleCurve;
        public float StartDelay;
    }
    public struct CurrentRenderMode : IComponentData
    {
        public RenderMode desiredMode;
        public bool apply;
    }
    public struct CustomButton : IComponentData
    {
        public bool IsPressed;
        public bool JustDown;
        public bool JustUp;
        public bool JustClicked;
        public float TimePressed;
        public bool LastDown;
        public bool LastOver;
        public Entity DefaultSprite;
        public Entity HoveredSprite;
        public Entity PressedSprite;
        public Entity DisabledSprite;
        public Entity ContentToOffsetOnPress;
        public float PressedOffsetY;
        public float ContentDefautPositionY;
        public bool ContentDefautPositionIsSet;
        public bool IsPointerOver;
        public bool IsInteractable;
        public bool LastIsInteractable;
    }
    public struct CustomLabel : IComponentData
    {
        public string LastText;
        public Color LastColor;
    }
    public struct CustomLabelCharacter : IComponentData
    {
    }
    public struct DestroyAfterDelay : IComponentData
    {
        public float Delay;
    }
    public struct LocalizedText : IComponentData
    {
        public string TextID;
        public string LastTextID;
        public bool ToUpper;
        public string LastLanguageID;
        public DynamicArray<string> TextParameters;
    }
    public struct NearDeathOpacityAnimation : IComponentData
    {
        public float Speed;
        public float MinAlpha;
        public float MaxAlpha;
        public float Timer;
    }
    public struct ShakeAnimation : IComponentData
    {
        public float DefaultX;
        public float DefaultY;
        public float DefaultZ;
        public bool IsDefaultPositionSet;
    }
    public struct ShakeAnimationPlayer : IComponentData
    {
        public float Duration;
        public float ShakeRadiusX;
        public float ShakeRadiusY;
        public float Timer;
        public float StartDelay;
    }
    public struct TilingBackground : IComponentData
    {
        public float SpeedX;
        public float SpeedY;
        public float TileSize;
    }
    public struct ScrollingObjectSpawnerDetails
    {
        public game.SkinTypes Skin;
        public float MinSpawnIntervalX;
        public float MaxSpawnIntervalX;
        public float SpawnIntervalFrequency;
    }
    public struct SpriteRendererSkinColorInfo
    {
        public game.SkinTypes Skin;
        public Color Color;
    }
    public struct LocalizationItem
    {
        public string TextID;
        public string en;
        public string fr;
    }
    public enum GameStateTypes
    {
        Boot = 0
        , Loading = 1
        , MainMenu = 2
        , Game = 3
        , GameOver = 4
        , Settings = 5
        , Credits = 6
        , Paused = 7
        , WorldMap = 8
        , Cutscene = 9
        , CutsceneEnd = 10
        , Transition = 11
        , Languages = 12
    }
    public enum DinosaurAttackTypes
    {
        TailWhip = 0
        , Crush = 1
        , Launch = 2
        , Jump = 3
        , Stomp = 4
        , Bite = 5
        , Laser = 6
    }
    public enum PersonState
    {
        Appear = 0
        , Fire = 1
        , Walk = 2
    }
    public enum GemPowerUpTypes
    {
        None = 0
        , Row = 1
        , Column = 2
        , Square = 3
        , DiagonalCross = 4
        , SameColor = 5
    }
    public enum GemTypes
    {
        Blue = 0
        , Green = 1
        , Purple = 2
        , Red = 3
        , Silver = 4
        , Yellow = 5
        , Egg = 6
        , ColorBomb = 7
    }
    public enum SkinTypes
    {
        Camp = 0
        , Farm = 1
        , City = 2
    }
    public enum CustomLabelAlignment
    {
        Left = 0
        , Center = 1
        , Right = 2
    }
    [Configuration]
    public struct GridConfiguration : IComponentData
    {
        public DynamicArray<Entity> GemEntities;
        public DynamicArray<Entity> CellEntities;
        public float FrozenGridTimer;
        public int Width;
        public int Height;
        public float CellDimension;
        public float GridDefaultPositionY;
        public float GridOffsetPositionY;
        public bool IsGridCreated;
    }
    [Configuration]
    public struct SkinConfiguration : IComponentData
    {
        public game.SkinTypes CurrentSkin;
    }
    [Configuration]
    public struct TutorialConfiguration : IComponentData
    {
        public bool IsMatchTutorialDone;
        public bool IsEggTutorialDone;
        public bool IsSurvivalTutorialDone;
    }
    [Configuration]
    public struct LocalizationConfiguration : IComponentData
    {
        public DynamicArray<LocalizationItem> Texts;
        public string LanguageID;
    }
    [Configuration]
    public struct SoundConfiguration : IComponentData
    {
        public bool IsSoundOn;
        public bool IsMusicOn;
        public string CurrentMusic;
    }
}

namespace ut.Core2D
{
    namespace layers
    {
        public struct Default : IComponentData
        {
        }
        public struct TransparentFX : IComponentData
        {
        }
        public struct IgnoreRaycast : IComponentData
        {
        }
        public struct Water : IComponentData
        {
        }
        public struct UI : IComponentData
        {
        }
        public struct PostProcessing : IComponentData
        {
        }
        public struct Cutscene : IComponentData
        {
        }
    }
}

namespace ut.Math
{
}

namespace ut
{
}

namespace ut.Shared
{
}

namespace ut.Core2D
{
}

namespace ut.HTML
{
}

namespace ut.Rendering
{
}

namespace ut.Rendering
{
}

namespace ut.HTML
{
}

namespace ut.Core2D
{
}

namespace ut.Rendering
{
}

namespace ut.Rendering
{
}

namespace ut.UILayout
{
}

namespace ut.Particles
{
}

namespace ut.Interpolation
{
}

namespace ut.Audio
{
}

namespace ut
{
}

namespace ut.Tweens
{
}

namespace ut.Core2D
{
}

namespace ut.UIControls
{
}

namespace ut.Profiler
{
}

namespace ut.EditorExtensions
{
    public struct AssetReferenceAnimationClip : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceAudioClip : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceSprite : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceSpriteAtlas : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTexture2D : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTileBase : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTMP_FontAsset : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct CameraCullingMask : IComponentData
    {
        public int mask;
    }
    public struct EntityLayer : IComponentData
    {
        public int layer;
    }
}

namespace ut.Text
{
}

namespace ut.HTML
{
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.RenderingFence))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeEnd))]
    public class AnimateCutsceneSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class PerformDinosaurAttackSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class CheckMatchSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class RestoreGemSwapSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(game.RestoreGemSwapSystemJS))]
    [UpdateAfter(typeof(game.CheckMatchSystemJS))]
    public class ActivateGemPowerUpSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateAfter(typeof(game.ActivateGemPowerUpSystemJS))]
    public class UpdateScoreSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateAfter(typeof(game.ActivateGemPowerUpSystemJS))]
    public class CollectEggSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(game.RestoreGemSwapSystemJS))]
    [UpdateAfter(typeof(game.CollectEggSystemJS))]
    public class DeleteMatchedGemSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(game.DeleteMatchedGemSystemJS))]
    [UpdateBefore(typeof(game.RestoreGemSwapSystemJS))]
    [UpdateAfter(typeof(game.UpdateScoreSystemJS))]
    public class SpawnComboPowerUpSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(game.SpawnComboPowerUpSystemJS))]
    [UpdateAfter(typeof(game.ActivateGemPowerUpSystemJS))]
    public class TriggerDinosaurAttackSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class MoveHelicopterSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class MovePeopleSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class MoveScrollingObjectSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class SpawnHelicopterSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class SpawnKidOnBikeSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class SpawnPeopleSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class SpawnScrollingObjectSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class UpdateDestructableStateSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class UpdateKidOnBikeSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class CheckGameOverSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class UpdateGameStateSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class UpdateSurvivalModeSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class CreateNewGemBoardSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateAfter(typeof(game.DeleteMatchedGemSystemJS))]
    [UpdateAfter(typeof(game.CreateNewGemBoardSystemJS))]
    public class ReplenishGemBoardSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateAfter(typeof(game.ReplenishGemBoardSystemJS))]
    public class FindPossibleMatchSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(game.CheckMatchSystemJS))]
    public class GemFallTweenEndSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(game.CheckMatchSystemJS))]
    public class GemSwapTweenEndSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.RenderingFence))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeEnd))]
    public class PositionGemSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(game.DeleteMatchedGemSystemJS))]
    [UpdateAfter(typeof(game.UpdateScoreSystemJS))]
    public class SpawnGemExplosionSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(game.CheckMatchSystemJS))]
    public class SwapGemSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.RenderingFence))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeEnd))]
    public class UpdateDestroyLineAnimationJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.RenderingFence))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeEnd))]
    public class UpdateGemVisualSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class UpdateScoreGainLabelJS : IComponentSystem
    {
    }
}
namespace game
{
    public class ChangeSkinSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class UpdateEggTutorialSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class UpdateMatchTutorialSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class UpdateSurvivalTutorialSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class UpdateTutorialHighlightSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class UpdateTutorialPointerSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.RenderingFence))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeEnd))]
    public class AnimatePopupSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class DisplayScoreSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class UpdateCurrentWorldMapItemSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.RenderingFence))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeEnd))]
    public class UpdateScreenTransitionJS : IComponentSystem
    {
    }
}
namespace game
{
    public class AnimateCollectedCurrencySystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class AnimateNearDeathOpacitySystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class AnimateShakeSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class AnimateTilingBackgroundSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class DestroyAfterDelaySystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class FitScreenLayoutSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class RenderModeSelectorJS : IComponentSystem
    {
    }
}
namespace game
{
    public class UpdateCustomButtonSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class UpdateLocalizedTextJS : IComponentSystem
    {
    }
}
