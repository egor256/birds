class Explosion extends createjs.Sprite {

    constructor(stage, x, y, onAnimationFinished) {
        super(GameSpriteSheets.explosionSpriteSheet, "explode");
        this.x = x;
        this.y = y;
        this.onAnimationFinished = onAnimationFinished;
        this.frameCount = GameSpriteSheets.explosionSpriteSheet.getAnimation("explode").frames.length;
        this.width = GameSpriteSheets.yellowBirdSpriteSheet.getFrameBounds(0).width;
        this.height = GameSpriteSheets.yellowBirdSpriteSheet.getFrameBounds(0).height;
        this.prevFrame = 0;
        stage.addChild(this);
    }

    _tick(event) {
        super._tick(event);
        if (this.currentFrame == 0 && this.prevFrame == this.frameCount - 1) {
            this.onAnimationFinished();
        }
        this.prevFrame = this.currentFrame;
    }
}
