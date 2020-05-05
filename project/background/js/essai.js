let myCanvas = document.querySelector('#myCanvas')
//create context instance from canv
const context = myCanvas.getContext('2d')


//var myCanvas1 = document.querySelector('#myCanvas1')
//create context instance from canv
//var context1 = myCanvas1.getContext('2d')
//set the properties of the Bricks
let brick = {
    row: 4,
    column: 5,
    width: 55,
    height: 20,
    offSetLeft: 20,
    offSetTop: 20,
    marginTop: 30
}


//drawPaddle(context1, paddle)
//movePaddle(context1, paddle, paddleCanvas)

let bricks = []
//create html image
// let img = document.createElement('img')
// //set src to the image
// img.src = './imgs/fish.png'

// //create onload events for img to add it inside convas after loading
// img.addEventListener('load', function () {
//     context.drawImage(img, 0, 0, 50, 55)


// })

createBricks(context, brick, bricks)
//init()
//var step = -4;
// let step = 0
// setInterval(() => {
//     context1.clearRect(0, 0, myCanvas1.width, myCanvas1.height);

//     plotSine(context1, step)
//     step += 2;


// }, 10);



function createBricks(context, brick, bricks) {

    for (let r = 0; r < brick.row; r++) { //to create the rows
        bricks[r] = [];
        for (let c = 0; c < brick.column; c++) { //to create the columns
            bricks[r][c] = {
                x: c * (brick.offSetLeft + brick.width) + brick.offSetLeft,
                y: r * (brick.offSetTop + brick.height) + brick.offSetTop + brick.marginTop,
                status: true //that mean that the brick is not destroyed
            }

            if (bricks[r][c].status) {
                //create html image
                let img1 = document.createElement('img')
                img1.src = './imgs/fish.png'

                //create onload events for img to add it inside convas after loading
                img1.addEventListener('load', function () {
                    context.drawImage(img1, bricks[r][c].x, bricks[r][c].y, brick.width, brick.height)
                })
                //draw()
                //drawLine(bricks[r][c].x+ brick.width,bricks[r][c].y+ brick.height) 
                //drawLine(bricks[r][c].x,bricks[r][c].y+ brick.height,brick.width)

            }

        }


    }

}


// function drawLine(x,Yline,xLine) {
//     var xLine = myCanvas.width /5;
//     //var height = myCanvas.height;
//     //var scale = 5;

//     context.beginPath();
//     context.lineWidth = 2;
//     context.strokeStyle = "rgb(66,44,255)";

//     //var x = 20; //min win nabda norsom
//     var y = 50;
//     var amplitude = 2;
//     var frequency = 5;
//     //context.moveTo(0, 250);
//     while (x < xLine ) {
//         y = Yline + amplitude * Math.sin(x / frequency);
//         context.lineTo(x, y);
//         x = x + 1;
//     }
//     context.stroke();
// }
// drawLine()

function plotSine(ctx, x, xOffset, yOffset, width) {
    //var width = ctx.canvas.width;//toul el wa7da lel win lezem you9ef
    var height = ctx.canvas.height;
    var scale = 10;

    ctx.beginPath();

    //var x = 100; // mnin yabda yorsom
    var y = 0;
    var amplitude = 5;
    var frequency = 10;
    //ctx.moveTo(x, 50);
    while (x < width) { //height 3ala 2 hiia min win torsom 7asb el y
        y = yOffset + amplitude * Math.sin((x + xOffset) / frequency);
        ctx.lineTo(x, y);
        x++;
        // console.log("x="+x+" y="+y);
    }
    ctx.stroke();
    //ctx.save();

    //console.log("Drawing point at y=" + y);
    //drawPoint(ctx, y);
    //ctx.stroke();
    //ctx.restore();
}

function draw() {
    var canvas1 = document.getElementById("myCanvas1");
    var context1 = canvas1.getContext("2d");

    context1.clearRect(0, 0, 500, 500);
    //showAxes(context);
    //context.save();            
    for (let r = 0; r < brick.row; r++) { //to create the rows
        bricks[r] = [];
        for (let c = 0; c < brick.column; c++) { //to create the columns
            bricks[r][c] = {
                x: c * (brick.offSetLeft + brick.width) + brick.offSetLeft,
                y: r * (brick.offSetTop + brick.height) + brick.offSetTop + brick.marginTop,
                status: true //that mean that the brick is not destroyed
            }

            if (bricks[r][c].status) {
                plotSine(context1, bricks[r][c].x, step, bricks[r][c].y+brick.height, bricks[r][c].x + brick.width);
                //context.restore();
                //context.drawImage(img1, bricks[r][c].x, bricks[r][c].y, brick.width, brick.height)

            }
        }
    }

    step += 1; //sor3a
    window.requestAnimationFrame(draw);
}
function init() {
    window.requestAnimationFrame(draw);
    //spirograph();
}
var step = 0;
draw()