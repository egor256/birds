class FoodItem extends GameObject {

    constructor(stage, type, x, y) {
        switch(type) {
            case "banana":
                super(stage, GameSpriteSheets.bananaSpriteSheet, null, x, y);
                this.nourishmentPoints = 5;
                break;
            case "apple":
                super(stage, GameSpriteSheets.appleSpriteSheet, null, x, y);
                this.nourishmentPoints = 10;
                break;
            case "lemon":
                super(stage, GameSpriteSheets.lemonSpriteSheet, null, x, y);
                this.nourishmentPoints = 15;
                break;
            default:
                throw new Error("Unknown food item");
        }
    }
}