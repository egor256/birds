class GameScene {

    static init(stage) {
        var i,j,k,x=0,y=0;
        GameScene.stage = stage;
        GameScene.stage.removeAllChildren();
        GameScene.stage.update();

        document.onkeydown = GameScene.onKeyDown;
        document.onkeyup = GameScene.onKeyUp;

        var bg = new createjs.Shape();
        bg.graphics.beginFill("skyblue").drawRect(0, 0, GameScene.stage.canvas.width, GameScene.stage.canvas.height);
        GameScene.stage.addChild(bg);
        var ground = new createjs.Shape();
        ground.graphics.beginFill("burlywood").drawRect(0, GameScene.stage.canvas.height - 24, GameScene.stage.canvas.width, 24);
        GameScene.stage.addChild(ground);
    
        GameScene.player = new PlayerBird(GameScene.stage);
        GameScene.speed = 100;
        
        GameScene.nourishmentRect = new createjs.Shape();
        GameScene.nourishmentRect.graphics.beginFill("Lime").drawRect(3, 3, 200, 10);
        GameScene.stage.addChild(GameScene.nourishmentRect);
        GameScene.nourishmentBoundingRect = new createjs.Shape();
        GameScene.nourishmentBoundingRect.graphics.setStrokeStyle(1).beginStroke("black").drawRect(3, 3, 200, 10);
        GameScene.stage.addChild(GameScene.nourishmentBoundingRect);

        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
          }
        
        // TODO: add more elements for the level here...
        //new Tree(GameScene.stage,  850, 320);
        //new Tree(GameScene.stage, 1400, 320);
        //new Tree(GameScene.stage, 1600, 320);
        //new Tree(GameScene.stage, 2000, 320);
        //new Tree(GameScene.stage, 2500, 320);
        //new FoodItem(GameScene.stage, "lemon", 800, 100);
        //new FoodItem(GameScene.stage, "banana", 200, 250);
        //new FoodItem(GameScene.stage, "apple", 1600, 100);        
        //new RedBird(GameScene.stage, 1000, 330);
        //new RedBird(GameScene.stage, 1400, 320);
        //new RedBird(GameScene.stage, 1700, 380);
        //new FoodItem(GameScene.stage, "lemon", 1800, 100);
        //new FoodItem(GameScene.stage, "banana", 2000, 250);
        //new FoodItem(GameScene.stage, "apple", 2500, 300);
        //new RedBird(GameScene.stage, 1800, 130);
        //new RedBird(GameScene.stage, 2300, 150);
        //new RedBird(GameScene.stage, 2600, 140);


       for (i = 100; i < 50000; i=i+x) 
        {  
            x = getRndInteger(300,1000);   
            new Tree(GameScene.stage, i, 320);  
  
        }

        for (j = 500; j < 50000; j=j+x) 
        { 
            x = getRndInteger(100,500); 
            y = getRndInteger(20,310);  
            if (getRndInteger(1,3) == 1){
                new FoodItem(GameScene.stage, "apple",  j+x, y);  
            }else if (getRndInteger(1,3) == 2){
                new FoodItem(GameScene.stage, "lemon",  j+x, y);
            }else if (getRndInteger(1,3) == 3){
                new FoodItem(GameScene.stage, "banana", j+x, y);
            }          
        }

        for (k = 1000; k < 50000; k=k+x) 
        { 
            x = getRndInteger(100,1000); 
            y = getRndInteger(20,310);  
            new RedBird(GameScene.stage, k+x, y);
            x = getRndInteger(1000,2000); 
            y = getRndInteger(20,310);  
            new RedBird(GameScene.stage, k+x, y);
            x = getRndInteger(2000,3000); 
            y = getRndInteger(20,310);  
            new RedBird(GameScene.stage, k+x, y);
        }
    }
    
    // val - [0..100], bar size - 200
    static setNourishmentValue(val) {
        GameScene.nourishmentRect.graphics.clear().beginFill("Lime").drawRect(3, 3, val * 2, 10);
    }

    static onKeyDown(event) {
        if (event.key == "ArrowUp") {
            GameScene.player.onMoveKeyDown();
        }    
    }

    static onKeyUp(event) {
        if (event.key == "ArrowUp") {
            GameScene.player.onMoveKeyUp();
        }
    }
    
}
