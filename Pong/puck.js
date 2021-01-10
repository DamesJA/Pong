let puckRadius = 20

let defaultSpeed = 6

let puckXBegSpeed = defaultSpeed
let puckYBegSpeed = 0

class Puck {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.dx = puckXBegSpeed
        this.dy = puckYBegSpeed
        this.radius = puckRadius
    }
    show() {
        fill(255)
        ellipse(this.x, this.y, this.radius)
        noFill()
    }
    move() {
        this.x += this.dx
        this.y += this.dy
        if(this.x - (this.radius / 2) <= (paddle1.x + paddle1.width / 2) && this.y >= paddle1.y - (paddle1.height / 2) && this.y < paddle1.y - (paddle1.height / 4)) { // top quarter of paddle1
            paddleSound.play()
            this.dx = defaultSpeed
            this.dy = -(defaultSpeed / 1.5)
        }
        if(this.x - (this.radius / 2) <= (paddle1.x + paddle1.width / 2) && this.y >= paddle1.y - (paddle1.height / 4) && this.y < paddle1.y) { // second quarter from the top of paddle1
            paddleSound.play()
            this.dx = defaultSpeed
            this.dy = -defaultSpeed
        }
        if(this.x - (this.radius / 2) <= (paddle1.x + paddle1.width / 2) && this.y >= paddle1.y && this.y < paddle1.y + (paddle1.height / 4)) { // third quarter from top of paddle1
            paddleSound.play()
            this.dx = defaultSpeed
            this.dy = defaultSpeed
        }
        if(this.x - (this.radius / 2) <= (paddle1.x + paddle1.width / 2) && this.y >= paddle1.y + (paddle1.height / 4) && this.y < paddle1.y + (paddle1.height / 2)) { // last quarter from top of paddle1
            paddleSound.play()
            this.dx = defaultSpeed
            this.dy = defaultSpeed / 1.5
        }
        
        if(this.x + (this.radius / 2) >= (paddle2.x - (paddle2.width / 2)) && this.y >= paddle2.y - (paddle2.height / 2) && this.y < paddle2.y - (paddle2.height / 4)) { // top quarter of paddle2
            paddleSound.play()
            this.dx = -defaultSpeed
            this.dy = defaultSpeed / 1.5
        }
        if(this.x + (this.radius / 2) >= (paddle2.x - (paddle2.width / 2)) && this.y >= paddle2.y - (paddle2.height / 4) && this.y < paddle2.y) { // second quarter from the top of paddle2
            paddleSound.play()
            this.dx = -defaultSpeed
            this.dy = defaultSpeed
        }
        if(this.x + (this.radius / 2) >= (paddle2.x - (paddle2.width / 2)) && this.y >= paddle2.y && this.y < paddle2.y + (paddle2.height / 4)) { // third quarter from top of paddle2
            paddleSound.play()
            this.dx = -defaultSpeed
            this.dy =  defaultSpeed
        }
        if(this.x + (this.radius / 2) >= (paddle2.x - (paddle2.width / 2)) && this.y >= paddle2.y + (paddle2.height / 4) && this.y < paddle2.y + (paddle2.height / 2)) { // last quarter from top of paddle2
            paddleSound.play()
            this.dx = -defaultSpeed
            this.dy = defaultSpeed / 1.5
        }

        if(this.y - (this.radius / 2) <= 0) { // Top
            edgeSound.play()
            this.dy *= -1
        }
        if(this.y + (this.radius / 2) >= canvasHeight) { // bottom
            edgeSound.play()
            this.dy *= -1
        }
        
        if(this.x - (this.radius / 2) <= 0) { // left
            losingSound.play()
            score1++
            reset()
        }
        if(this.x + (this.radius / 2) >= canvasWidth) { // right
            losingSound.play()
            score2++
            reset()
        }
    }
}

let puck = new Puck(canvasWidth / 2, canvasHeight / 2);