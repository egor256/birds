class HelpScene {
    
    static init(stage) {
        HelpScene.stage = stage;

        HelpScene.stage.removeAllChildren();
        HelpScene.stage.update();

        var bg = new createjs.Shape();
        bg.graphics.beginFill("skyblue").drawRect(0, 0, HelpScene.stage.canvas.width, HelpScene.stage.canvas.height);
        HelpScene.stage.addChild(bg);

        HelpScene.stage.enableMouseOver(20);

        var lines = [
            "1. Press [UP] to make the bird fly upwards (decreases nourishment).",
            "2. Collect food to restore nourishment.",
            "3. Dodge other birds and trees.",
            "4. Try to complete the level."
        ]
        
        for (var i = 0; i < lines.length; i++) {
            var text = new createjs.Text(lines[i], "22px Arial", "#000000");
            text.x = (HelpScene.stage.canvas.width - text.getMeasuredWidth()) / 2;
            text.y = 150 + i * 50;
            HelpScene.stage.addChild(text);
        }

        var xpos = (HelpScene.stage.canvas.width - 150) / 2;

        var playButton = new Button(stage, "./resources/button.png", "Back to Menu", xpos, 350, function() {
            MenuScene.init(HelpScene.stage);
        });
    }
}
