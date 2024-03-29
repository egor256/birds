class GameSpriteSheets
{
    static load() {
        GameSpriteSheets.yellowBirdSpriteSheet = new createjs.SpriteSheet({
            images: ["resources/bird_a_small/frame-1.png",
                    "resources/bird_a_small/frame-2.png",
                    "resources/bird_a_small/frame-3.png",
                    "resources/bird_a_small/frame-4.png"],
            frames: {width:63, height:44, count:4},
            animations: {
                idle: [0, 3, "idle", 0.15],
                fly: [0, 3, "fly", 0.5]
            }
        });

        GameSpriteSheets.explosionSpriteSheet = new createjs.SpriteSheet({
            images: ["resources/explosion1.png",
                    "resources/explosion2.png",
                    "resources/explosion3.png",
                    "resources/explosion4.png",
                    "resources/explosion5.png"],
            frames: {width:126, height:126, count:5},
            animations: {
                explode: [0, 4, "explode", 0.3],
            }
        });

        GameSpriteSheets.redBirdSpriteSheet = new createjs.SpriteSheet({
            images: ["resources/redBird/frame-1.png",
                    "resources/redBird/frame-2.png",
                    "resources/redBird/frame-3.png",
                    "resources/redBird/frame-4.png"],
            frames: {width:63, height:44, count:4},
            animations: {
                idle: [0, 3, "idle", 0.15],
                fly: [0, 3, "fly", 0.5]
            }
        });

        GameSpriteSheets.lemonSpriteSheet = new createjs.SpriteSheet({
            images: ["resources/lemon.png"],
            frames: {width:30, height:29, count:1},
        });
    
        GameSpriteSheets.bananaSpriteSheet = new createjs.SpriteSheet({
            images: ["resources/banana.png"],
            frames: {width:30, height:29, count:1},
        });
    
        GameSpriteSheets.appleSpriteSheet = new createjs.SpriteSheet({
            images: ["resources/apple.png"],
            frames: {width:30, height:30, count:1},
        });

        GameSpriteSheets.treeSpriteSheet = new createjs.SpriteSheet({
            images: ["resources/tree.png"],
            frames: {width:256, height:278, count:1},
        });

        GameSpriteSheets.finishSpriteSheet = new createjs.SpriteSheet({
            images: ["resources/finish.png"],
            frames: {width:14, height:600, count:1},
        });
    }
}
