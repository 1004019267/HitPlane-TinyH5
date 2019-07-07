
namespace game {

    //抓取含有这些组件信息的物体
    export class EnemyBehaviorFilterFilter extends ut.EntityFilter {
        entity: ut.Entity;
        position?: ut.Core2D.TransformLocalPosition;
		tag:game.EnemyTag;
        speed:game.MoveSpeed;
		speedChange:game.ChangeOverTime;
		bounds:game.Boundaries;
    }
  
    export class EnemyBehaviorFilter extends ut.ComponentBehaviour {
        //抓出来的会塞到data阵列里
        data: EnemyBehaviorFilterFilter;

        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        
        // this method is called for each entity matching the EnemyBehaviorFilterFilter signature, once when enabled
        //就类似于Start函数
        OnEntityEnable():void {
            //let 让这个参数=别的参数 赋值 不分类型
            //我们让飞机每次就是初始化的速度都会根据时间变快
            let totalTime=Time.DeltaTime();
 
            
            let newSpeed=this.data.speed.speed+(this.data.speedChange.changePerSecond*totalTime);

            this.data.speed.speed=newSpeed;
            //就是初始坐标在最上方随机一个位置出现
            let randomX=GetRandom(this.data.bounds.minX,this.data.bounds.maxX);
            let firstPos=new Vector3(randomX,this.data.bounds.maxY,0);
            this.data.position.position = firstPos;
            console.log("enemy initialized,Speed:"+newSpeed);
            
         }
        
        // this method is called for each entity matching the EnemyBehaviorFilterFilter signature, every frame it's enabled
        OnEntityUpdate():void {
            //持续下落
            let localPosition=this.data.position.position;
            localPosition.y-=this.data.speed.speed*Time.DeltaTime();

            this.data.position.position=localPosition;

            //过界（就是超出下方屏幕）就销毁
            if(localPosition.y<=this.data.bounds.minY)
            this.world.destroyEntity(this.data.entity);
         }

        // this method is called for each entity matching the EnemyBehaviorFilterFilter signature, once when disabled
        //OnEntityDisable():void { }

    }

    function GetRandom(min,max)
    {
      //这个random只会返回0-1之间
      //比如min 2 max 6
      //0-1随机出来的这个数 * 5（长度）+2
      //相当于是随机了个长度 让最小值加上
      return Math.random()*(max-min+1)+min;
    }
}
