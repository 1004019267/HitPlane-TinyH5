
namespace game {

    /** New System */
    @ut.executeAfter(ut.Shared.UserCodeStart)
    @ut.executeBefore(ut.Shared.UserCodeEnd)
    @ut.requiredComponents(game.Laser)
    @ut.requiredComponents(ut.Core2D.TransformLocalPosition)
    export class LaserSystem extends ut.ComponentSystem {
       
        OnUpdate():void {
                let dt=Time.DeltaTime();

                this.world.forEach([ut.Entity,game.Laser,ut.Core2D.TransformLocalPosition],
                    (entity,laser,TransformLocalPosition)=>{
                      let direction=new Vector3(0,1,0);

                      direction.normalize();
                      direction.multiplyScalar(laser.speed*dt);

                      TransformLocalPosition.position=TransformLocalPosition.position.add(direction);
                    });
        }
    }
}
