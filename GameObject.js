class GameObject extends createjs.Sprite {

    constructor(stage, spriteSheet, anim, x, y) {
        super(spriteSheet, anim);
        this.x = x;
        this.y = y;
        this.width = spriteSheet.getFrameBounds(0).width;
        this.height = spriteSheet.getFrameBounds(0).height;
        stage.addChild(this);
    }

    _tick(event) {
        super._tick(event);
        this.x -= event.delta / 1000 * GameScene.speed;
        if (this.x < -this.stage.canvas.width) {
            this.stage.removeChild(this);
        }
    }

    getBoundingRectangles() {
        return [new createjs.Rectangle(this.x, this.y, this.width, this.height)];
    }
}
