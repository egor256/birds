class GameScene {

    static init(stage) {
        GameScene.stage = stage;
        GameScene.stage.removeAllChildren();
        GameScene.stage.update();

        document.onkeydown = GameScene.onKeyDown;
        document.onkeyup = GameScene.onKeyUp;

        var bg = new createjs.Shape();
        bg.graphics.beginFill("DeepSkyBlue").drawRect(0, 0, GameScene.stage.canvas.width, GameScene.stage.canvas.height);
        GameScene.stage.addChild(bg);
    
        GameScene.player = new PlayerBird(GameScene.stage);
        GameScene.speed = 100;
        
        GameScene.nourishmentRect = new createjs.Shape();
        GameScene.nourishmentRect.graphics.beginFill("Lime").drawRect(3, 3, 200, 10);
        GameScene.stage.addChild(GameScene.nourishmentRect);
        GameScene.nourishmentBoundingRect = new createjs.Shape();
        GameScene.nourishmentBoundingRect.graphics.setStrokeStyle(1).beginStroke("black").drawRect(3, 3, 200, 10);
        GameScene.stage.addChild(GameScene.nourishmentBoundingRect);
        
        // TODO: add more elements for the level here...
        new Tree(GameScene.stage, 850, 320);
        new Tree(GameScene.stage, 1400, 320);
        new FoodItem(GameScene.stage, "lemon", 800, 100);
        new FoodItem(GameScene.stage, "banana", 200, 250);
        new FoodItem(GameScene.stage, "apple", 1600, 100);
        new RedBird(GameScene.stage, 1000, 330);
        new RedBird(GameScene.stage, 1400, 320);
        new RedBird(GameScene.stage, 1700, 380);
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
