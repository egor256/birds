class Button extends createjs.Bitmap {

    constructor(stage, image, text, x, y, action) {
        super(image);
        this.x = x;
        this.y = y;
        this.text = text;
        this.on("mouseover", this.mouseOver);
        this.on("mouseout", this.mouseOut);
        this.on("click", action);

        stage.addChild(this);

        var t = new createjs.Text(text, "22px Comic Sans MS", "#000000");
        t.x = this.x + (180 - t.getMeasuredWidth()) / 2;
        t.y = this.y + (50 - t.getMeasuredHeight()) / 2;
        stage.addChild(t);
    }

    mouseOver() {
        this.alpha = 0.75;
    }

    mouseOut() {
        this.alpha = 1.0;
    }
}
