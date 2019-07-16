class RedBird extends GameObject {

    constructor(stage, x, y) {
        super(stage, GameSpriteSheets.redBirdSpriteSheet, "fly", x, y);
    }

    _tick(event) {
        super._tick(event);
        this.x -= event.delta / 1000 * 200;
    }
}
