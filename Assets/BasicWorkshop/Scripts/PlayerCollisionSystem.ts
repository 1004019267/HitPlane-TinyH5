
namespace game {

    /** New System */
    export class PlayerCollisionSystem extends ut.ComponentSystem {
        //爆炸特效
        static explosionGroupName : string ='game.ExplosionGroup'
        OnUpdate():void {
        let isGameOver=false;
        //搜索包含transform和碰撞器的物体
        this.world.forEach([ut.Entity,ut.Core2D.TransformLocalPosition,ut.HitBox2D.HitBoxOverlapResults],(entity,position,contacts)=>{
            let explosion=ut.EntityGroup.instantiate(this.world,game.PlayerCollisionSystem.explosionGroupName)[0];
            //等到整个foreach执行后才执行 安全
            this.world.usingComponentData(explosion,[ut.Core2D.TransformLocalPosition],(explosionPos)=>{

                explosionPos.position=position.position;
            });

            this.world.destroyEntity(entity);
           
            isGameOver=true;
        });
        }
        
        if (isGameOver) {
           game.GameService.restart(this.world);
        }
    }
}
