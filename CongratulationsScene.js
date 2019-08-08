class CongratulationsScene {
    
    static init(stage) {
        CongratulationsScene.stage = stage;

        CongratulationsScene.stage.removeAllChildren();
        CongratulationsScene.stage.update();

        var bg = new createjs.Shape();
        bg.graphics.beginFill("skyblue").drawRect(0, 0, CongratulationsScene.stage.canvas.width, CongratulationsScene.stage.canvas.height);
        CongratulationsScene.stage.addChild(bg);

        CongratulationsScene.stage.enableMouseOver(20);

        var text = new createjs.Text("Congratulations!", "30px Comic Sans MS", "#000000");
        text.x = (CongratulationsScene.stage.canvas.width - text.getMeasuredWidth()) / 2;
        text.y = 150;
        CongratulationsScene.stage.addChild(text);

        var xpos = (CongratulationsScene.stage.canvas.width - 180) / 2;

        var playButton = new Button(stage, "./resources/button.png", "Back to Menu", xpos, 300, function() {
            MenuScene.init(CongratulationsScene.stage);
        });
    }
}
