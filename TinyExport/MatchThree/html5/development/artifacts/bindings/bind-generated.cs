using Unity.Collections.LowLevel.Unsafe;
namespace game
{
    public enum GameStateTypes
    {
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
namespace game
{
    public enum DinosaurAttackTypes
    {
        TailWhip = 0,
        Crush = 1,
        Launch = 2,
        Jump = 3,
        Stomp = 4,
        Bite = 5,
        Laser = 6,
    }
}
namespace game
{
    public enum PersonState
    {
        Appear = 0,
        Fire = 1,
        Walk = 2,
    }
}
namespace game
{
    public enum GemPowerUpTypes
    {
        None = 0,
        Row = 1,
        Column = 2,
        Square = 3,
        DiagonalCross = 4,
        SameColor = 5,
    }
}
namespace game
{
    public enum GemTypes
    {
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
namespace game
{
    public enum SkinTypes
    {
        Camp = 0,
        Farm = 1,
        City = 2,
    }
}
namespace game
{
    public enum CustomLabelAlignment
    {
        Left = 0,
        Center = 1,
        Right = 2,
    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct ScrollingObjectSpawnerDetails 
    {


        public game.SkinTypes Skin;
        public float MinSpawnIntervalX;
        public float MaxSpawnIntervalX;
        public float SpawnIntervalFrequency;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct SpriteRendererSkinColorInfo 
    {


        public game.SkinTypes Skin;
        public UTiny.Core2D.Color Color;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct LocalizationItem 
    {


        public string TextID;
        public string en;
        public string fr;



    }
}
namespace entities.game.Bootstrap
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.CutsceneCamera
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.CutscenePartA
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.CutscenePartB
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.CutscenePartC
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.EndCutscenePartA
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.EndCutscenePartB
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Dinosaur
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.DinosaurLaserAttackBlackCover
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Bird
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.BuildingMedium
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.BuildingSmall
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.BuildingSmall2
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.BuildingTall
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Car1
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Car2
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.CarSkyFall
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Cloud1
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Cloud2
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Cloud3
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Explosion1
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Explosion2
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.FireTruck
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Floor
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.GameScene
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.GroundDeco1
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.GroundDeco2
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.GroundDeco3
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.GroundDeco4
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Helicopter
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.KidOnBike
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Parallax1
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Parallax2
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Parallax3
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Parallax4
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Parallax5
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.ParticleExplosion
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Person
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Prop1
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Prop2
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Prop3
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.SewerStraight
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.SewerT
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Cell
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.CollectedEgg
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.DestroyLaserAnimation
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.DestroyLineAnimation
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.ExplodingGem1
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.ExplodingGem2
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Gem
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.ScoreGainLabel
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Level1
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Level2
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Level3
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.TutorialEggPointer
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.TutorialHighlight
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.TutorialMatchPointer
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.TutorialSurvivalPointer
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.CreditsMenu
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.GameOverMenu
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.GameUI
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.LanguagesMenu
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Loading
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.MainMenu
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.PauseMenu
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.ScreenTransition
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.SettingsMenu
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.SurvivalModeTimeline
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.WorldMap
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.WorldMapItem
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.BackgroundNearDeathWarning
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.CustomLabelCharacter
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct GameState : UTiny.IComponentData
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
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct CutsceneDirector : UTiny.IComponentData
    {


        public int CurrentElementIndex;
        public float Speed;
        public float PauseDelayTimer;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct CutsceneElement : UTiny.IComponentData
    {


        public uint Index;
        public float Duration;
        public bool ClearPreviousElements;
        public float Timer;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct CutsceneFade : UTiny.IComponentData
    {


        public float Duration;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct CutsceneMove : UTiny.IComponentData
    {


        public float Duration;
        public Unity.Mathematics.float2 StartOffset;
        public UTiny.Tweens.TweenFunc Easing;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct CutsceneScale : UTiny.IComponentData
    {


        public float Duration;
        public UTiny.Tweens.TweenFunc Easing;
        public Unity.Mathematics.float3 StartScale;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Dinosaur : UTiny.IComponentData
    {


        public float MoveSpeed;
        public float WalkTimer;
        public UTiny.Entity WalkAnimation;
        public UTiny.Entity TailWhipAnimation;
        public UTiny.Entity StompAnimation;
        public UTiny.Entity BiteAnimation;
        public UTiny.Entity CrushAnimation;
        public UTiny.Entity LaunchAnimation;
        public UTiny.Entity JumpAnimation;
        public UTiny.Entity JumpAnimationHeightCurve;
        public float DefaultPositionY;
        public float JumpHeight;
        public UTiny.Entity Shadow;
        public UTiny.Entity LaserAnimation;
        public UTiny.Entity DeathAnimation;
        public UTiny.Entity LaserBeam1;
        public UTiny.Entity LaserBeam2;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct DinosaurAttack : UTiny.IComponentData
    {


        public float Timer;
        public game.DinosaurAttackTypes AttackType;
        public bool IsDone;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct DinosaurLaserAttackBlackCover : UTiny.IComponentData
    {


        public UTiny.Entity AlphaCurve;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Building : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Car : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Destructible : UTiny.IComponentData
    {


        public int CurrentState;
        public int LastState;
        public global::System.String[] SpriteStates;
        public float ExplosionOffsetX;
        public float ExplosionOffsetY;
        public float ExplosionRangeX;
        public float ExplosionRangeY;
        public float ExplosionMinCount;
        public float ExplosionMaxCount;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct FireTruck : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Helicopter : UTiny.IComponentData
    {


        public float MoveSpeed;
        public float SlowDownDistance;
        public float DestinationPositionX;
        public float DestinationPositionY;
        public bool ReachedDestination;
        public float Timer;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct HelicopterSpawner : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct KidOnBike : UTiny.IComponentData
    {


        public bool IsInWheelyMode;
        public UTiny.Entity AnimationKidBike;
        public UTiny.Entity AnimationKidWheely;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct KidOnBikeSpawner : UTiny.IComponentData
    {


        public float Timer;
        public float SpawnDelay;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct PeopleSpawner : UTiny.IComponentData
    {


        public sbyte MaxPeopleCount;
        public float Timer;
        public float SpawnInterval;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Person : UTiny.IComponentData
    {


        public float MoveSpeed;
        public float MoveSpeedMultiplier;
        public float FearSpeedMultiplier;
        public float MinimumDistanceFromDinosaur;
        public float MaximumDistanceFromDinosaur;
        public game.PersonState State;
        public float WalkPositionY;
        public UTiny.Entity WalkAnimation;
        public UTiny.Entity FireAnimation;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Prop : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct ScrollingObject : UTiny.IComponentData
    {


        public float Speed;
        public float AutonomousSpeed;
        public string SpawnerName;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct ScrollingObjectSpawner : UTiny.IComponentData
    {


        public game.ScrollingObjectSpawnerDetails[] SpawnDetailsBySkin;
        public global::System.String[] EntitiesToSpawn;
        public int MaxRandomYOffset;
        public bool RandomizeFlipX;
        public bool RandomizeFlipY;
        public float NextObjectDistance;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Cell : UTiny.IComponentData
    {


        public int X;
        public int Y;
        public int Size;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct DestroyLaserAnimation : UTiny.IComponentData
    {


        public float Timer;
        public float Duration;
        public float StartPositionX;
        public float StartPositionY;
        public float EndPositionX;
        public float EndPositionY;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct DestroyLineAnimation : UTiny.IComponentData
    {


        public float Timer;
        public float Duration;
        public float ScaleDuration;
        public float StartPositionX;
        public float StartPositionY;
        public float EndPositionX;
        public float EndPositionY;
        public UTiny.Entity ColorGradient;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Gem : UTiny.IComponentData
    {


        public long CellHashKey;
        public bool IsSelected;
        public bool IsFalling;
        public bool IsSwapping;
        public UTiny.Entity SpriteRendererHighlightGem;
        public int GemType;
        public float HighlightAlpha;
        public bool IsPossibleMatch;
        public game.GemPowerUpTypes PowerUp;
        public game.GemPowerUpTypes CurrentPowerUpVisual;
        public UTiny.Entity RowPowerUpVisual;
        public UTiny.Entity ColumnPowerUpVisual;
        public UTiny.Entity DiagonalPowerUpVisual;
        public UTiny.Entity SquarePowerUpVisual;
        public UTiny.Entity SameColorPowerUpVisual;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct GemFallTweenEndCallback : UTiny.IComponentData
    {


        public UTiny.Entity GemEntity;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct GemSwap : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct GemSwapTweenEndCallback : UTiny.IComponentData
    {


        public UTiny.Entity GemEntity;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Matched : UTiny.IComponentData
    {


        public game.GemPowerUpTypes CreatedPowerUp;
        public bool IsMatch;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct MatchPossibility : UTiny.IComponentData
    {


        public float HintTimer;
        public int SwapGem1HashKey;
        public int SwapGem2HashKey;
        public bool NeedsSwap;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Level : UTiny.IComponentData
    {


        public int LevelID;
        public game.SkinTypes Skin;
        public int MaxMoveCount;
        public game.GemPowerUpTypes[] StartPowerUps;
        public game.GemTypes[] MissingGems;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct LevelEggObjective : UTiny.IComponentData
    {


        public int EggsInGridAtStart;
        public int EggsToSpawnOnEggCollected;
        public int CollectedEggs;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct LevelPointObjective : UTiny.IComponentData
    {


        public int ScoreObjective;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct LevelSurvival : UTiny.IComponentData
    {


        public float MaxSurvivalTime;
        public float TimeDepleteRate;
        public float SurvivalTimer;
        public float StartTimeGainByMatch;
        public float EndTimeGainByMatch;
        public float DifficulyRampUpTime;
        public float TimeObjective;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct SpriteRendererSkin : UTiny.IComponentData
    {


        public string SpritePath;
        public game.SpriteRendererSkinColorInfo[] SkinColorInfo;
        public sbyte CurrentSkinIndex;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct SpriteSequenceSkin : UTiny.IComponentData
    {


        public global::System.String[] SpritePaths;
        public sbyte CurrentSkinIndex;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct TutorialEggPointer : UTiny.IComponentData
    {


        public UTiny.Entity ImageEgg;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct TutorialHighlight : UTiny.IComponentData
    {


        public UTiny.Entity HighlightRect;
        public UTiny.Entity LabelInstructions;
        public UTiny.Entity[] SpriteRenderers;
        public float MaxAlpha;
        public float LabelMaxAlpha;
        public bool IsClosing;
        public float Timer;
        public float FadeDuration;
        public float StartDelay;
        public float LabelDefaultPositionY;
        public float AutoCloseDelay;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct TutorialPointer : UTiny.IComponentData
    {


        public UTiny.Entity Pointer;
        public Unity.Mathematics.float2 StartPosition;
        public Unity.Mathematics.float2 EndPosition;
        public float Duration;
        public UTiny.Entity AlphaCurve;
        public UTiny.Entity MoveCurve;
        public float Timer;
        public bool StretchToMove;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct CreditsMenu : UTiny.IComponentData
    {


        public UTiny.Entity ButtonClose;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct GameOverMenu : UTiny.IComponentData
    {


        public UTiny.Entity ButtonQuit;
        public UTiny.Entity LabelScoreValue;
        public UTiny.Entity LabelTime;
        public UTiny.Entity LabelTimeValue;
        public UTiny.Entity LabelGameOver;
        public UTiny.Entity LabelGameOverShadow;
        public UTiny.Entity LabelNewBestScore;
        public UTiny.Entity ImageNewBestScore;
        public UTiny.Entity ImageNewBestScoreGlow;
        public UTiny.Entity[] SuccessArms;
        public UTiny.Entity[] FailArms;
        public float Timer;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct GameUI : UTiny.IComponentData
    {


        public UTiny.Entity ButtonPause;
        public UTiny.Entity LabelScore;
        public UTiny.Entity LabelRemainingMoves;
        public UTiny.Entity ImageMoves;
        public UTiny.Entity LabelObjective;
        public UTiny.Entity ImageObjectivePoint;
        public UTiny.Entity ImageObjectiveEgg;
        public UTiny.Entity ImageObjectiveSurvival;
        public UTiny.Entity ImageObjectivePointIncomplete;
        public UTiny.Entity ImageObjectiveEggIncomplete;
        public UTiny.Entity ImageObjectiveSurvivalIncomplete;
        public UTiny.Entity ImageObjectiveCompleteGlow;
        public UTiny.Entity LabelTime;
        public UTiny.Entity ImageNoMovesWarning;
        public int LastCollectedEggCount;
        public bool LastIsObjectiveComplete;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct LanguagesMenu : UTiny.IComponentData
    {


        public UTiny.Entity ButtonCancel;
        public UTiny.Entity ButtonEnglish;
        public UTiny.Entity ButtonFrench;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct MainMenu : UTiny.IComponentData
    {


        public UTiny.Entity ImageLogo;
        public UTiny.Entity ButtonPlay;
        public UTiny.Entity TilingBackgroundEntity;
        public float TilingBackgroundSpeed;
        public UTiny.Entity ButtonWatchIntro;
        public UTiny.Entity ButtonSettings;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct PauseMenu : UTiny.IComponentData
    {


        public UTiny.Entity ButtonResume;
        public UTiny.Entity ButtonQuit;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Popup : UTiny.IComponentData
    {


        public bool HasPlayedInTransition;
        public UTiny.Entity PanelContent;
        public UTiny.Entity ImageBackground;
        public float TargetFadeAlpha;
        public float Timer;
        public float FadeInDuration;
        public float ScaleInDuration;
        public float DelayIn;
        public bool HasFinishedDelay;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct ScoreDisplay : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct ScoreGainLabel : UTiny.IComponentData
    {


        public float Timer;
        public float Duration;
        public float SpeedY;
        public UTiny.Entity AlphaCurve;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct ScreenTransition : UTiny.IComponentData
    {


        public float InDuration;
        public float OutDuration;
        public UTiny.Entity BlackCurtain;
        public bool IsTransitionIn;
        public float Timer;
        public game.GameStateTypes TransitionToState;
        public UTiny.Entity ScaleHole;
        public int SkipFrameCount;
        public UTiny.Entity ScaleHoleCurve;
        public bool IsScaleHoleTransition;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct SettingsMenu : UTiny.IComponentData
    {


        public UTiny.Entity ButtonOK;
        public UTiny.Entity ButtonCredits;
        public UTiny.Entity ButtonResetProgress;
        public UTiny.Entity ButtonLanguage;
        public UTiny.Entity ButtonRenderMode;
        public UTiny.Entity LabelRenderMode;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct SettingsMenuAudio : UTiny.IComponentData
    {


        public UTiny.Entity ButtonSound;
        public UTiny.Entity ButtonMusic;
        public UTiny.Entity SpriteAudioOn;
        public UTiny.Entity SpriteAudioOff;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct SurvivalModeTimeline : UTiny.IComponentData
    {


        public UTiny.Entity ContainerFilling;
        public UTiny.Entity DinosaurCursor;
        public float Width;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct WorldMap : UTiny.IComponentData
    {


        public bool IsCreated;
        public int CurrentLevelIndex;
        public float ScrollSpeed;
        public float CurrentScrollIndexPosition;
        public UTiny.Entity ButtonLeft;
        public UTiny.Entity ButtonRight;
        public UTiny.Entity Ground;
        public UTiny.Entity GroundTransition;
        public UTiny.Entity Sky;
        public UTiny.Entity SkyTransition;
        public UTiny.Entity LabelLevelTitle;
        public UTiny.Entity LabelLevelInfoLine1;
        public UTiny.Entity LabelLevelInfoLine2;
        public int LastLevelIndex;
        public float LastScrollIndexPosition;
        public UTiny.Entity ButtonPlay;
        public UTiny.Entity ButtonSettings;
        public UTiny.Entity LabelBestScore;
        public UTiny.Entity ImagePointObjective;
        public UTiny.Entity ImageEggObjective;
        public UTiny.Entity ImageSurvivalObjective;
        public UTiny.Entity[] ImageLock;
        public int LastBeatenLevelID;
        public UTiny.Entity LabelButtonPlay;
        public UTiny.Core2D.Color PlayButtonColor;
        public UTiny.Core2D.Color PlayButtonDisabledColor;
        public UTiny.Entity ButtonCutscene;
        public UTiny.Entity LabelButtonCutscene;
        public string LastLanguageID;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct WorldMapItem : UTiny.IComponentData
    {


        public int Index;
        public UTiny.Entity ImageLevelPreview;
        public float DistanceBetweenLevelItems;
        public float FocusedScale;
        public float UnfocusedScale;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct CameraResolutionFitter : UTiny.IComponentData
    {


        public float DefaultHalfVerticalSize;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct CanvasResolutionFitter : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct CollectedCurrency : UTiny.IComponentData
    {


        public Unity.Mathematics.float3 StartPosition;
        public Unity.Mathematics.float3 MidPosition;
        public Unity.Mathematics.float3 EndPosition;
        public float Duration;
        public float Timer;
        public UTiny.Entity ProgressCurve;
        public UTiny.Entity ScaleCurve;
        public float StartDelay;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct CurrentRenderMode : UTiny.IComponentData
    {


        public UTiny.Core2D.RenderMode desiredMode;
        public bool apply;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct CustomButton : UTiny.IComponentData
    {


        public bool IsPressed;
        public bool JustDown;
        public bool JustUp;
        public bool JustClicked;
        public float TimePressed;
        public bool LastDown;
        public bool LastOver;
        public UTiny.Entity DefaultSprite;
        public UTiny.Entity HoveredSprite;
        public UTiny.Entity PressedSprite;
        public UTiny.Entity DisabledSprite;
        public UTiny.Entity ContentToOffsetOnPress;
        public float PressedOffsetY;
        public float ContentDefautPositionY;
        public bool ContentDefautPositionIsSet;
        public bool IsPointerOver;
        public bool IsInteractable;
        public bool LastIsInteractable;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct CustomLabel : UTiny.IComponentData
    {


        public string LastText;
        public UTiny.Core2D.Color LastColor;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct CustomLabelCharacter : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct DestroyAfterDelay : UTiny.IComponentData
    {


        public float Delay;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct LocalizedText : UTiny.IComponentData
    {


        public string TextID;
        public string LastTextID;
        public bool ToUpper;
        public string LastLanguageID;
        public global::System.String[] TextParameters;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct NearDeathOpacityAnimation : UTiny.IComponentData
    {


        public float Speed;
        public float MinAlpha;
        public float MaxAlpha;
        public float Timer;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct ShakeAnimation : UTiny.IComponentData
    {


        public float DefaultX;
        public float DefaultY;
        public float DefaultZ;
        public bool IsDefaultPositionSet;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct ShakeAnimationPlayer : UTiny.IComponentData
    {


        public float Duration;
        public float ShakeRadiusX;
        public float ShakeRadiusY;
        public float Timer;
        public float StartDelay;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct TilingBackground : UTiny.IComponentData
    {


        public float SpeedX;
        public float SpeedY;
        public float TileSize;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct GridConfiguration : UTiny.IComponentData
    {


        public UTiny.Entity[] GemEntities;
        public UTiny.Entity[] CellEntities;
        public float FrozenGridTimer;
        public int Width;
        public int Height;
        public float CellDimension;
        public float GridDefaultPositionY;
        public float GridOffsetPositionY;
        public bool IsGridCreated;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct SkinConfiguration : UTiny.IComponentData
    {


        public game.SkinTypes CurrentSkin;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct TutorialConfiguration : UTiny.IComponentData
    {


        public bool IsMatchTutorialDone;
        public bool IsEggTutorialDone;
        public bool IsSurvivalTutorialDone;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct LocalizationConfiguration : UTiny.IComponentData
    {


        public game.LocalizationItem[] Texts;
        public string LanguageID;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct SoundConfiguration : UTiny.IComponentData
    {


        public bool IsSoundOn;
        public bool IsMusicOn;
        public string CurrentMusic;



    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Default : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct TransparentFX : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct IgnoreRaycast : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Water : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct UI : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct PostProcessing : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Cutscene : UTiny.IComponentData
    {





    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceAnimationClip : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceAudioClip : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceSprite : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceSpriteAtlas : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceTexture2D : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceTileBase : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceTMP_FontAsset : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct CameraCullingMask : UTiny.IComponentData
    {


        public int mask;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct EntityLayer : UTiny.IComponentData
    {


        public int layer;



    }
}



