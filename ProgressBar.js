class ProgressBar extends createjs.DisplayObject {

    constructor(stage, x, y) {
        super();
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 10;
        this.pos = 0;
        this.progressRect = new createjs.Shape();
        stage.addChild(this.progressRect);
        this.boundingRect = new createjs.Shape();
        this.boundingRect.graphics.setStrokeStyle(1).beginStroke("black").drawRect(this.x, this.y, this.width, this.height);
        stage.addChild(this.boundingRect);
        stage.addChild(this);
    }
    
    _tick(event) {
        super._tick(event);
        this.pos += event.delta / 1000 * GameScene.speed;
        var xpos = this.pos / (GameScene.finishX / (this.width - 10));
        if (xpos < this.width - 12) {
            this.progressRect.graphics.clear().beginFill("Yellow").drawRect(this.x + xpos + 2, this.y + 1, 8, 8);
        }
    }
}
