
namespace game {

    
    export class GameService  {
        //这个和CS不同 不是默认私有
        private static mainGroup: string = 'game.MainGroup';
        private static enemyGroup: string = 'game.EnemyGroup';
        private static explosionGroup: string = 'game.ExplosionGroup';

        static restart(world:ut.World)
        {
            setTimeout(()=>{
                this.newGame(world);
            }, 3000);
        }

        static newGame(world:ut.World)
        {
            ut.EntityGroup.destroyAll(world,this.mainGroup);
            ut.EntityGroup.destroyAll(world, this.enemyGroup);
            ut.EntityGroup.destroyAll(world, this.explosionGroup);

            ut.EntityGroup.instantiate(world, this.mainGroup);
        }
    }
}
