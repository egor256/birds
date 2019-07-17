class MenuScene {
    
    static init(stage) {
        MenuScene.stage = stage;

        MenuScene.stage.removeAllChildren();
        MenuScene.stage.update();

        var bg = new createjs.Shape();
        bg.graphics.beginFill("skyblue").drawRect(0, 0, MenuScene.stage.canvas.width, 600);
        MenuScene.stage.addChild(bg);

        MenuScene.stage.enableMouseOver(20);

        var xpos = (MenuScene.stage.canvas.width - 150) / 2;

        var playButton = new Button(stage, "./resources/button.png", "Play", xpos, 200, function() {
            GameScene.init(MenuScene.stage);
        });

        var helpButton = new Button(stage, "./resources/button.png", "Help", xpos, 300, function() {
            alert("Show help...");
        });

        var authorsButton = new Button(stage, "./resources/button.png", "Authors", xpos, 400, function() {
            alert("Show authors...");
        });
    }
}
