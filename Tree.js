class Tree extends GameObject {

    constructor(stage, x, y) {
        super(stage, GameSpriteSheets.treeSpriteSheet, null, x, y);
    }

    getBoundingRectangles() {
        return [new createjs.Rectangle(this.x + 111, this.y + 3, 45, 40),
                new createjs.Rectangle(this.x + 58, this.y + 41, 143, 26),
                new createjs.Rectangle(this.x + 37, this.y + 67, 203, 53),
                new createjs.Rectangle(this.x + 19, this.y + 120, 231, 75),
                new createjs.Rectangle(this.x + 115, this.y + 195, 24, 81)];
    }
}