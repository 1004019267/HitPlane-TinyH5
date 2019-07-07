
namespace game {

    /** New System */
    
    export class SpawnSystem extends ut.ComponentSystem {
        
        OnUpdate():void {
            //遍历含有Spawner组件的物体
            this.world.forEach([game.Spawner],(spawner) => {
                //如果是暂停状态返回
               if(spawner.isPaused)
                  return;
            let time=spawner.time;
            let delay=spawner.delay;
            //一个计时器 过多少时间重生某个群组
            time-=Time.DeltaTime();
        
            if(time<=0)
            {
                time+=delay;

                ut.EntityGroup.instantiate(this.world,spawner.spawnedGroup);
            }
            
             spawner.time=time;
            });
        }
    }
}
