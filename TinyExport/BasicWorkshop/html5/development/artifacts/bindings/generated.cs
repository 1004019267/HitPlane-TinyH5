using UTiny;
using UTiny.Core2D;
using UTiny.Math;
using UTiny.Shared;
using UTiny.HTML;
using UTiny.Rendering;
using UTiny.Physics2D;
using UTiny.Particles;
using UTiny.Interpolation;
using ut;
using UTiny.HitBox2D;
using ut.EditorExtensions;

/*
 * !!! TEMP UNITL PROPER SCENE FORMAT !!!
 */
namespace entities.game
{
    namespace BulletGroup
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace EnemyGroup
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace ExplosionGroup
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace MainGroup
    {
        public struct Component : IComponentData
        {
        }
    }
}

namespace game
{
    public struct Boundaries : IComponentData
    {
        public float minX;
        public float maxX;
        public float minY;
        public float maxY;
    }
    public struct ChangeOverTime : IComponentData
    {
        public float changePerSecond;
    }
    public struct EnemyTag : IComponentData
    {
    }
    public struct Laser : IComponentData
    {
        public float speed;
    }
    public struct MoveSpeed : IComponentData
    {
        public float speed;
    }
    public struct MoveWithInput : IComponentData
    {
    }
    public struct PlayerTag : IComponentData
    {
    }
    public struct ScrollingBackground : IComponentData
    {
        public float speed;
        public float threshold;
        public float distance;
    }
    public struct Spawner : IComponentData
    {
        public float time;
        public float delay;
        public bool isPaused;
        public string spawnedGroup;
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

namespace ut.Physics2D
{
}

namespace ut.Particles
{
}

namespace ut.Interpolation
{
}

namespace ut
{
}

namespace ut.HitBox2D
{
}

namespace ut.Core2D
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
    public struct EnemyBehaviorFilter_State : IComponentData
    {
        public bool initialized;
        public bool enabled;
        public bool onEnableCalled;
        public bool onDisableCalled;
    }
}
namespace game
{
    [UpdateAfter(typeof(UTiny.Shared.InputFence))]
    public class InputMovementSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class LaserSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class PlayerCollisionSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class SpawnSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeStart))]
    public class TimeJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.InputFence))]
    public class EnemyBehaviorFilter_OnEntityEnableJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class EnemyBehaviorFilter_OnEntityUpdateJS : IComponentSystem
    {
    }
}
