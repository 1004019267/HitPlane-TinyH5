
namespace game {

    /** New System */
    @ut.executeBefore(ut.Shared.UserCodeStart)
    export class Time extends ut.ComponentSystem {
        private static deltaTime:number=0;
        private static time:number=0;

        static DeltaTime():number{
            return Time.deltaTime;
        }
        
        static Time():number{
            return Time.time;
        }

        static reset()
        {
            Time.time=0;
        }

        OnUpdate():void {
        let dt=this.scheduler.deltaTime();
        Time.deltaTime=dt;
        Time.time+=dt;
        }
    }
}
