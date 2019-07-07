using UTiny;
using UTiny.Core2D;
using UTiny.Math;
using UTiny.Shared;
using UTiny.HTML;
using UTiny.Rendering;
using UTiny.HitBox2D;
using ut;
using UTiny.Text;
using UTiny.UILayout;
using ut.EditorExtensions;

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
    namespace Explosion
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace GameMenu
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace GameOver
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
    namespace GameWin
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace RaiderLaser
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace SpaceshipLaser
    {
        public struct Component : IComponentData
        {
        }
    }
}

namespace game
{
    public struct Boundary : IComponentData
    {
    }
    public struct DefensePoint : IComponentData
    {
    }
    public struct Explosion : IComponentData
    {
        public int duration;
    }
    public struct GameOverLine : IComponentData
    {
    }
    public struct Hit : IComponentData
    {
    }
    public struct Laser : IComponentData
    {
        public int speed;
        public game.LaserTag tag;
        public Entity reference;
    }
    public struct LifeManager : IComponentData
    {
        public DynamicArray<Entity> LifeSprites;
        public Entity LifeCount;
    }
    public struct Move : IComponentData
    {
        public int speed;
        public int threshold;
        public Vector2 touchSwipe;
    }
    public struct Raider : IComponentData
    {
        public int points;
    }
    public struct Raiders : IComponentData
    {
        public float speed;
        public bool isMovingRight;
        public int threshold;
    }
    public struct Score : IComponentData
    {
    }
    public struct Spaceship : IComponentData
    {
    }
    public enum GameState
    {
        Initialize = 0
        , Menu = 1
        , Play = 2
        , GameOver = 3
    }
    public enum LaserTag
    {
        Raider = 0
        , Spaceship = 1
    }
    [Configuration]
    public struct GameContext : IComponentData
    {
        public bool RaidersCanShoot;
        public bool PlayerCanShoot;
        public ushort Score;
        public sbyte Life;
        public game.GameState State;
        public float FlickeringInterval;
        public float FlickeringTime;
        public byte RaiderIndex;
        public float StartShootingDelay;
        public float TimeElapsedSinceStart;
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

namespace ut.HitBox2D
{
}

namespace ut
{
}

namespace ut.Core2D
{
}

namespace ut.Text
{
}

namespace ut.HTML
{
}

namespace ut.UILayout
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
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    [UpdateAfter(typeof(UTiny.HitBox2D.HitBox2DSystem))]
    public class DamageSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    [UpdateAfter(typeof(game.DamageSystemJS))]
    public class ExplosionSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    [UpdateAfter(typeof(game.DamageSystemJS))]
    public class GameManagerSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    [UpdateAfter(typeof(game.DamageSystemJS))]
    public class HitSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    [UpdateAfter(typeof(game.DamageSystemJS))]
    public class LaserSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    [UpdateAfter(typeof(game.DamageSystemJS))]
    public class LifeManagerSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    [UpdateAfter(typeof(UTiny.HTML.InputHandler))]
    [UpdateAfter(typeof(game.DamageSystemJS))]
    public class MoveSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    [UpdateAfter(typeof(game.DamageSystemJS))]
    public class RaiderSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(game.RaiderSystemJS))]
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    [UpdateAfter(typeof(game.DamageSystemJS))]
    public class RaidersSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    [UpdateAfter(typeof(game.DamageSystemJS))]
    public class ScoreSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    [UpdateAfter(typeof(UTiny.HTML.InputHandler))]
    [UpdateAfter(typeof(game.DamageSystemJS))]
    public class SpaceshipSystemJS : IComponentSystem
    {
    }
}
