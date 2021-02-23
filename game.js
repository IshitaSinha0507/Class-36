class Game{
    constructor(){

    }
    getState(){
        var gamestateref = database.ref('gameState');
        gamestateref.on("value",function(data){
            gameState = data.val();
        
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })

    }
    start(){
        if(gameState === 0){
            Player = new player();
            Player.getCount();
            form = new Form();
            form.display();
        }
    }
}