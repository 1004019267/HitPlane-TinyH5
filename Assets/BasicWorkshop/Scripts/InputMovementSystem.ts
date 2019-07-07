
namespace game {

    /** New System */
    @ut.executeAfter(ut.Shared.InputFence)
    export class InputMovementSystem extends ut.ComponentSystem {
        
        static bulletGroupName:string ='game.BulletGroup';
        OnUpdate():void {
           let dt =Time.DeltaTime();
           
           this.world.forEach([game.MoveSpeed,game.PlayerTag,game.Boundaries,ut.Core2D.TransformLocalPosition],
            (speed,tag,bounds,position)=>{
                let localPos=position.position;
                //控制移动
                if(ut.Runtime.Input.getKey(ut.Core2D.KeyCode.W))
                localPos.y+=speed.speed*dt;
                if(ut.Runtime.Input.getKey(ut.Core2D.KeyCode.S))
                localPos.y-=speed.speed*dt;
                if(ut.Runtime.Input.getKey(ut.Core2D.KeyCode.A))
                localPos.x-=speed.speed*dt;
                if(ut.Runtime.Input.getKey(ut.Core2D.KeyCode.D))
                localPos.x+=speed.speed*dt;
                 //触屏控制移动
                 this.ProcessTouchInput(localPos,speed.speed*dt);

                 localPos.x=Math.max(bounds.minX,Math.min(bounds.maxX,localPos.x));
                 localPos.y=Math.max(bounds.minY,Math.min(bounds.maxY,localPos.y));
                 //创建子弹
                 if(ut.Runtime.Input.getKeyUp(ut.Core2D.KeyCode.Space))
                 {
                  let bullet=ut.EntityGroup.instantiate(this.world,game.InputMovementSystem.bulletGroupName)[0];

                  this.world.usingComponentData(bullet,[ut.Core2D.TransformLocalPosition],(bulletPos)=>{                                       
                    bulletPos.position=position.position;
                    //防止子弹打死自己
                    bulletPos.position.y+=0.75;
                  });
                 }

                 position.position=localPos;
            });

           
        }
       //这个是class内方法 之前的func是写在class外 不用this就能点出来
       ProcessTouchInput(position : Vector3,speed):void
       {
         if(ut.Core2D.Input.isTouchSupported())
         {
             if(ut.Core2D.Input.touchCount()>0)
             {
             //类似于强转为Touch类
             let touch:ut.Core2D.Touch=ut.Core2D.Input.getTouch(0);
             //GameObject.Find 全局遍历很慢 
             let player=this.world.getEntityByName("Player");
             //转换为世界坐标 消耗大量性能 
             let playerworldpos=ut.Core2D.TransformService.computeWorldPosition(this.world,player);
             //世界转屏幕坐标
             let transpos =ut.Core2D.TransformService.worldToWindow(this.world,this.world.getEntityByName('Camera'),playerworldpos,new Vector2(600,800));
           
             if (touch.x >= transpos.x){
                position.x += speed;
            }
            else if (touch.x < transpos.x){
                position.x -= speed;
            }
            if (touch.y >= transpos.y){
                position.y += speed;
            }
            else if (touch.y < transpos.y){
                position.y -= speed;
            }
             }
         }
         
       }
    }
}
