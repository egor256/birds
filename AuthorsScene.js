class AuthorsScene {
    
    static init(stage) {
        AuthorsScene.stage = stage;

        AuthorsScene.stage.removeAllChildren();
        AuthorsScene.stage.update();

        var bg = new createjs.Shape();
        bg.graphics.beginFill("skyblue").drawRect(0, 0, AuthorsScene.stage.canvas.width, AuthorsScene.stage.canvas.height);
        AuthorsScene.stage.addChild(bg);

        AuthorsScene.stage.enableMouseOver(20);

        var lines = [
            "ONUR KANCA",
            "EGOR BREDIKHIN",
            "FERNANDO MARTINS",
            "ANDREA DE FATIMA CAVALHEIRO"
        ]
        
        for (var i = 0; i < lines.length; i++) {
            var text = new createjs.Text(lines[i], "22px Comic Sans MS", "#000000");
            text.x = (AuthorsScene.stage.canvas.width - text.getMeasuredWidth()) / 2;
            text.y = 150 + i * 50;
            AuthorsScene.stage.addChild(text);
        }

        var xpos = (AuthorsScene.stage.canvas.width - 180) / 2;

        var playButton = new Button(stage, "./resources/button.png", "Back to Menu", xpos, 350, function() {
            MenuScene.init(AuthorsScene.stage);
        });
    }
}
