let paddleWidth = 10
let paddleHeight = 100

class Paddle {
    constructor(x, y, dx, dy, name) {
        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        this.name = name
        this.width = paddleWidth
        this.height = paddleHeight
    }
    show() {
        rectMode(CENTER)
        fill(255)
        rect(this.x, this.y, this.width, this.height)
        noFill()
    }
    move() {
        if(keyIsDown(38) && this.name =='paddle2') {
            this.y -= this.dy
        }
        if(keyIsDown(40) && this.name == 'paddle2') {
            this.y += this.dy
        }
        if(keyIsDown(87) && this.name =='paddle1') {
            this.y -= this.dy
        }
        if(keyIsDown(83) && this.name == 'paddle1') {
            this.y += this.dy
        }
        if(this.y - (this.height / 2) <= 0) {
            this.y = (this.height / 2)
        }
        if(this.y + (this.height / 2) >= canvasHeight) {
            this.y = canvasHeight - (this.height / 2)
        }
    }
};

let paddle1 = new Paddle(30, canvasHeight / 2, 2, 5, 'paddle1');
let paddle2 = new Paddle(canvasWidth - 30, canvasHeight / 2, 2, 5, 'paddle2');