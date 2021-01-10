
let canvas;
let canvasWidth = 800;
let canvasHeight = 700;
function setup() {
    canvas = createCanvas(canvasWidth, canvasHeight)
    canvas.position(10, 10)
    canvas.style('z-index', '-1')
    

}
let edgeSound;
let losingSound;
let paddleSound;
function preload() {
    edgeSound = loadSound('sound/edgeSound.wav')
    losingSound = loadSound('sound/losingSound.wav')
    paddleSound = loadSound('sound/paddleSound.wav')
}

function reset() {
    paddle1 = new Paddle(30, canvasHeight / 2, 2, 5, 'paddle1');
    paddle2 = new Paddle(canvasWidth - 30, canvasHeight / 2, 2, 5, 'paddle2');
    puck = new Puck(canvasWidth / 2, canvasHeight / 2)
}
let score1 = 0
let score2 = 0
let score1Text;
let score2Text;

function draw() {
    background(0)

    fill(255)
    rectMode(CENTER)
    textSize(50)
    score1Text = text(`${score1}`, (canvasWidth / 2) + 25 + 50 + 10, 50, 50, 50) // length of 100
    score2Text = text(`${score2}`, (canvasWidth / 2) - 25 - 50 - 10, 50, 50, 50) // length of 100
    noFill()

    paddle1.show()
    paddle1.move()

    paddle2.show()
    paddle2.move()

    puck.show()
    puck.move()
}



// // STOP BUTTON 
// let stopButton = document.getElementById('stopButton')
// stopButton.addEventListener('click', () => {
//     noLoop()
// })