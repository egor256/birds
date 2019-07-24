class PlayerBird extends createjs.Sprite {

    constructor(stage) {
        super(GameSpriteSheets.yellowBirdSpriteSheet, "idle");
        this.x = 20;
        this.y = 150;
        this.width = GameSpriteSheets.yellowBirdSpriteSheet.getFrameBounds(0).width;
        this.height = GameSpriteSheets.yellowBirdSpriteSheet.getFrameBounds(0).height;
        this.moveUp = false;
        this.nourishment = 100;
        stage.addChild(this);
    }

    onMoveKeyDown() {
        if (!this.moveUp) {
            this.moveUp = true;
            this.gotoAndPlay("fly");
        }
    }

    onMoveKeyUp() {
        if (this.moveUp) {
            this.moveUp = false;
            this.gotoAndPlay("idle");
        }
    }

    static checkIntersection(rect1, rect2) {
       return rect1.x <= rect2.x + rect2.width && rect2.x <= rect1.x + rect1.width &&
              rect1.y <= rect2.y + rect2.height && rect2.y <= rect1.y + rect1.height;
    }

    static checkIntersections(rects1, rects2) {
        for (var i = 0; i < rects1.length; i++) {
            for (var j = 0; j < rects2.length; j++) {
                if (PlayerBird.checkIntersection(rects1[i], rects2[j])) {
                    return true;
                }
            }
        }
        return false;
    }

    getBoundingRectangles() {
        return [new createjs.Rectangle(this.x + 12, this.y + 6, 42, 26)];
    }

    _tick(event) {
        super._tick(event);

        if (this.y > GameScene.stage.canvas.height - 60) {
            GameOverScene.init(GameScene.stage);
        }

        if (this.moveUp && this.nourishment > 0) {
            if (this.y > 8) {
                this.y -= event.delta / 1000 * 150; // feel free to play around with these numbers
            }
            this.nourishment -= event.delta / 1000 * 15;
            GameScene.setNourishmentValue(this.nourishment);
        } else {
            this.y += event.delta / 1000 * 50; // gravity
        }

        var playerRects = this.getBoundingRectangles();
        for (var i = 0; i < GameScene.stage.children.length; i++) {
            var child = GameScene.stage.children[i];
            if (!("getBoundingRectangles" in child)) {
                continue;
            }
            var childRects = child.getBoundingRectangles();
            if (child instanceof RedBird || child instanceof Tree) {
                if (PlayerBird.checkIntersections(playerRects, childRects)) {
                    GameOverScene.init(GameScene.stage);
                }
            } else if (child instanceof FoodItem) {
                if (PlayerBird.checkIntersections(playerRects, childRects)) {
                    this.nourishment = Math.min(100, this.nourishment + child.nourishmentPoints);
                    GameScene.setNourishmentValue(this.nourishment);
                    GameScene.stage.removeChild(child);
                }
            } else if (child instanceof FinishLine) {
                if (PlayerBird.checkIntersections(playerRects, childRects)) {
                    CongratulationsScene.init(GameScene.stage);
                }
            }
        }
    }
}
