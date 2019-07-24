class GameScene {

    static init(stage) {
        var i, j, k, x = 0, y = 0;
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

        GameScene.speed = 150;

        var seed = 41;
        function getRndInteger(min, max) {
            max = max || 1;
            min = min || 0;
            seed = (seed * 9301 + 49297) % 233280;
            var rnd = seed / 233280;
            return Math.round(min + rnd * (max - min));
        }

        for (i = 100; i < 10000; i += x) {
            x = getRndInteger(300, 1000);
            new Tree(GameScene.stage, i, 320);
        }

        for (j = 500; j < 10000; j += x) {
            x = getRndInteger(100, 500);
            y = getRndInteger(10, 310);
            if (getRndInteger(1, 3) == 1) {
                new FoodItem(GameScene.stage, "apple", j + x, y);
            } else if (getRndInteger(1, 3) == 2) {
                new FoodItem(GameScene.stage, "lemon", j + x, y);
            } else if (getRndInteger(1, 3) == 3) {
                new FoodItem(GameScene.stage, "banana", j + x, y);
            }
        }

        for (k = 1000; k < 17000; k += x) {
            x = getRndInteger(100, 1000);
            y = getRndInteger(10, 310);
            new RedBird(GameScene.stage, k + x, y);
            x = getRndInteger(1000, 2000);
            y = getRndInteger(20, 310);
            new RedBird(GameScene.stage, k + x, y);
            x = getRndInteger(2000, 3000);
            y = getRndInteger(20, 310);
            new RedBird(GameScene.stage, k + x, y);
        }

        GameScene.maxX = Math.max(i, j);
        GameScene.finishX = GameScene.maxX + 100;
        new FinishLine(GameScene.stage, GameScene.finishX, 0);

        GameScene.player = new PlayerBird(GameScene.stage);

        GameScene.nourishmentRect = new createjs.Shape();
        GameScene.nourishmentRect.graphics.beginFill("Lime").drawRect(3, 3, 200, 10);
        GameScene.stage.addChild(GameScene.nourishmentRect);
        GameScene.nourishmentBoundingRect = new createjs.Shape();
        GameScene.nourishmentBoundingRect.graphics.setStrokeStyle(1).beginStroke("black").drawRect(3, 3, 200, 10);
        GameScene.stage.addChild(GameScene.nourishmentBoundingRect);

        GameScene.progressBar = new ProgressBar(stage, GameScene.stage.canvas.width - 203, 3);
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
