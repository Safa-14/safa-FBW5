window.onload = () => {
    //SELECT CANVAS elements
    const canvas = document.querySelector('#canvas')
    const context = canvas.getContext('2d')

    let paddleHeight = 10;
    let paddleWidth = 75;
    let paddleX = (canvas.width - paddleWidth) / 2;

    let rightPressed = false;
let leftPressed = false;

    //First write the constant values like the width and height of the ball
    let ballRadius = 8

    let ball = {
        x: canvas.width / 2,
        y: canvas.height - 100 - ballRadius,
        radius: ballRadius,
        dx: 3 * (Math.random() * 2 - 1),
        dy: -3,
        speed: 3

    }

    drawPaddle(context,paddleX, canvas.height,paddleHeight, paddleWidth)

    //drawBall(context,ball)
    //setInterval(moveBall, ball.speed);
    //setInterval(() => {
        //context.clearRect(0, 0, canvas.width, canvas.height);

    //     drawBall(context, ball)
    //     drawPaddle(context,paddleX, canvas.height,paddleHeight, paddleWidth)
    //     // if (ball.x+ball.dx+ball.radius > canvas.width || ball.x+ball.dx-ball.radius <0) {
    //     //     ball.dx = -ball.dx
    //     //     console.log(ball.dx);
    //     //     //alert('stop')

    //     // }
    //     //console.log(ball.x);

    //     ballWallCollision(ball, canvas)
    //     //ballPaddleCollision(ball,paddle) 

    //     if(rightPressed) {
    //         paddleX += 7;
    //         if (paddleX + paddleWidth > canvas.width){
    //             paddleX = canvas.width - paddleWidth;
    //         }
    //     }
    //     else if(leftPressed) {
    //         paddleX -= 7;
    //         if (paddleX < 0){
    //             paddleX = 0;
    //         }
    //     }
    //     ball.x += ball.dx
    //     ball.y += ball.dy
    // }, 10);

    //document.addEventListener("keydown", keyDownHandler, false);
    //document.addEventListener("keyup", keyUpHandler, false);
    //ballWallCollision(ball,canvas)
    //ballWallCollision(ball,canvas)


}
//DRAW BALL
function drawBall(context, ball) {
    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    context.fillStyle = "#ffcdo5"
    context.fill()
    context.closePath();

}

//BALL AND WALL DETECTION
function ballWallCollision(ball, canvas) {

    if (ball.x + ball.dx + ball.radius > canvas.width || ball.x + ball.dx - ball.radius < 0) {
        ball.dx = -ball.dx
        console.log(ball.dx);

    }
    if (ball.y + ball.dy - ball.radius < 0) {
        ball.dy = -ball.dy
    }
    if (ball.y + ball.radius > canvas.height) {
        resetBall(ball, canvas)
    }
}


function resetBall(ball, canvas) {
    ball.x = canvas.width / 2
    ball.y = canvas.height - 100 - 8
    ball.dx = 3 * (Math.random() * 2 - 1)
    ball.dy = -3
}

function drawPaddle(context,paddleX, canvas,paddleHeight, paddleWidth) {
    context.beginPath();
    context.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
}

// function keyDownHandler(e) {
//     if(e.key == "Right" || e.key == "ArrowRight") {
//         rightPressed = true;
//     }
//     else if(e.key == "Left" || e.key == "ArrowLeft") {
//         leftPressed = true;
//     }
// }

// function keyUpHandler(e) {
//     if(e.key == "Right" || e.key == "ArrowRight") {
//         rightPressed = false;
//     }
//     else if(e.key == "Left" || e.key == "ArrowLeft") {
//         leftPressed = false;
//     }
// }