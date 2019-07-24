class ProgressBar extends createjs.Sprite {

    constructor(stage, x, y) {
        super(GameSpriteSheets.progressBarSpriteSheet, null);
        this.x = x;
        this.y = y;
        this.width = GameSpriteSheets.progressBarSpriteSheet.getFrameBounds(0).width;
        this.height = GameSpriteSheets.progressBarSpriteSheet.getFrameBounds(0).height;
        this.progressRect = new createjs.Shape();
        this.pos = 0;
        stage.addChild(this);
        stage.addChild(this.progressRect);
    }
    
    _tick(event) {
        super._tick(event);
        this.pos += event.delta / 1000 * GameScene.speed;
        var xpos = this.pos / (GameScene.finishX / this.width);
        if (xpos < this.width - 12) {
            this.progressRect.graphics.clear().beginFill("Yellow").drawRect(this.x + xpos + 2, this.y + 2, 8, 8);
        }
    }
}
