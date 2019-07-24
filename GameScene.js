class GameScene {

    static init(stage) {
        var i,j,k;
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

        for (i = 100; i < 10000; i=i+500) 
        {   
            new Tree(GameScene.stage, i, 320);          
        }

        for (j = 100; j < 10000; j=j+1000) 
        { 
            new FoodItem(GameScene.stage, "lemon",  j,     150);
            new FoodItem(GameScene.stage, "banana", j+400, 280);
            new FoodItem(GameScene.stage, "apple",  j+800, 220);  
        }

        for (k = 1000; k < 30000; k=k+2000) 
        { 
            new RedBird(GameScene.stage, k,      150);
            new RedBird(GameScene.stage, k+500,  250);
            new RedBird(GameScene.stage, k+1200, 380);
            new RedBird(GameScene.stage, k+1500, 160);
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
