class GameOverScene {
    
    static init(stage) {
        GameOverScene.stage = stage;

        GameOverScene.stage.removeAllChildren();
        GameOverScene.stage.update();

        var bg = new createjs.Shape();
        bg.graphics.beginFill("Red").drawRect(0, 0, GameOverScene.stage.canvas.width, GameOverScene.stage.canvas.height);
        GameOverScene.stage.addChild(bg);

        GameOverScene.stage.enableMouseOver(20);

        var text = new createjs.Text("Game Over!", "30px Comic Sans MS", "#000000");
        text.x = (GameOverScene.stage.canvas.width - text.getMeasuredWidth()) / 2;
        text.y = 150;
        GameOverScene.stage.addChild(text);

        var xpos = (GameOverScene.stage.canvas.width - 150) / 2;

        var playButton = new Button(stage, "./resources/button.png", "Back to Menu", xpos, 300, function() {
            MenuScene.init(GameOverScene.stage);
        });
    }
}
