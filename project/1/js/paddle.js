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
    movePaddle(context,paddle) 
    console.log(paddle.x);
    test(paddle)

}



//DRAW PADDLE
function drawPaddle(context, paddle) {
    context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height)
    context.stroke();
}



//move the paddle
function movePaddle(context,paddle) {
    
    let leftMove = false
    let rightMove = false
    
    //console.log(rightMove);
    
    document.onkeydown = (e) => {
        context.clearRect(0,0,800,500)
        
        //console.log(e);
        if (e.key == 'ArrowRight') {
            

            context.stroke();
            // paddle.style.left -= paddle.x
            // console.log(paddle.x);
        }
            paddle.x += paddle.step
            // context.clearRect(paddle.x, paddle.y, paddle.width, paddle.height);
            // context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height)
        
            
            
        } else if (e.key == 'ArrowLeft') {
            leftMove = true
            paddle.x -= paddle.step

            
            
        }
        context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
        context.stroke()
    }
    console.log(rightMove);
    
    // context.stroke();

    // document.onkeyup = (e) => {
    //     //console.log(e);

    //     if (e.key == 'ArrowRight') {
    //         right = false
    //     } else if (e.key == 'ArrowLeft') {
    //             left = false
            
    //     }

    // }
    
    // if (rightMove) {
    //     // paddle.x += paddle.step
    //     context.fillRect(paddle.x +100, paddle.y, paddle.width, paddle.height)
    //     context.stroke();
    //     // paddle.style.left += paddle.x
    //     // paddle.translate(450, 150)
    //     console.log(paddle.x);
        
    // } else {
    //     if (leftMove) {
    //         // paddle.x -= paddle.step

    //         context.stroke();
    //         // paddle.style.left -= paddle.x
    //         // console.log(paddle.x);
    //     }

    // }
console.log()
}



