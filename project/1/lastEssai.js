window.onload = function () {
    let canvas = document.querySelector('#canvas')
    let context = canvas.getContext('2d')

    //Create the paddle
    //First write the constant values like the width and height of the paddle
    const paddleWidth = 100
    const paddleHeight = 30
    const marginBottom = 30

    //Second set the properties of the paddle
    let paddle = {
        x: canvas.width / 2 - paddleWidth / 2,
        y: canvas.height - paddleHeight - marginBottom,
        width: paddleWidth,
        height: paddleHeight,
        step: 5
    }
    
    drawPaddle(context, paddle)
    setInterval(function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        //drawBall();
        drawPaddle();
        if (right) {
            paddle.x += paddle.step
            
            console.log(paddle.x);
            
        } else {
            if (left) {
                paddle.x -= paddle.step
                
                console.log(paddle.x);
            }
    
        }
    }, 10);
    movePaddle(paddle) 
    //movePaddle() 
    //movePaddle(paddle,paddleWidth)
    console.log(paddle.x);
    

}



//DRAW PADDLE
function drawPaddle(context, paddle) {
    //context.beginPath();
    context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height)
    context.fill();
    //context.closePath();
}



//move the paddle
function movePaddle() {
    console.log('hi');
    
    let left = false
    let right = false
    
    console.log(right);
    
    document.onkeydown = (e) => {
        //console.log(e);
        if (e.key == 'ArrowRight') {
            right = true
            console.log(right);
            
        } else if (e.key == 'ArrowLeft') {
                left = true
        }
        
    }
    console.log(right);
    

    // document.onkeyup = (e) => {
    //     //console.log(e);

    //     if (e.key == 'ArrowRight') {
    //         right = false
    //     } else if (e.key == 'ArrowLeft') {
    //             left = false
            
    //     }

    // }

   

}


// function keyDownHandler(e) {
//     let rightPressed = false;
//     let leftPressed = false;
//     if(e.key == "Right" || e.key == "ArrowRight") {
//         rightPressed = true;
//     }
//     else if(e.key == "Left" || e.key == "ArrowLeft") {
//         leftPressed = true;
//     }
// }

// function keyUpHandler(e) {
//     let rightPressed = false;
//     let leftPressed = false;
//     if(e.key == "Right" || e.key == "ArrowRight") {
//         rightPressed = false;
//     }
//     else if(e.key == "Left" || e.key == "ArrowLeft") {
//         leftPressed = false;
//     }
// }


