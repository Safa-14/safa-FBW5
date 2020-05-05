window.onload = function () {
    let myCanvas = document.querySelector('#myCanvas')
    //create context instance from canv
    const context = myCanvas.getContext('2d')

    

    // context.beginPath();
    // context.moveTo(50, 0);
    // context.quadraticCurveTo(50, 10, 80, 0);
    // context.stroke();
    //plotSine(context)
    let step =0
setInterval(() => {
    context.clearRect(0, 0, myCanvas.width, myCanvas.height);
    //create html image
    let img = document.createElement('img')
    //set src to the image
    img.src = './imgs/fish.png'

    //create onload events for img to add it inside convas after loading
    img.addEventListener('load', function () {
        context.drawImage(img, 0, 205, 50, 55)
 plotSine(context,step) 
        step += 2;
    })
   
}, 10);
    //draw(context)

}

function plotSine(ctx,step) {

    // var y=180;
    //   //draw axis
    //   ctx.beginPath();
    //   //ctx.strokeStyle = "red";
    //   //ctx.moveTo(0,  y/2);
    //   //ctx.lineTo(y,  y/2);
    //   //ctx.stroke();
    //   // draw sin wave
    //   ctx.beginPath();
    //   ctx.moveTo(10,y);
    //   ctx.strokeStyle = "black";
    //   for(var x=0; x<=180; x+=1){
    //       ctx.lineTo(x,((y/2)  + y/2  * Math.sin( ((x+-y/2)/90) * Math.PI)));
    //       ctx.stroke();
    //       }
    var width = ctx.canvas.width/7;
    var height = ctx.canvas.height;
    var scale = 20;

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(66,44,255)";
    
    var x = 10;
    var y = 0;
    var amplitude = 5;
    var frequency = 70;
    ctx.moveTo(0, 250);
    while (x < width) {
        y = height/2 + amplitude * Math.sin(x+step/frequency);
        ctx.lineTo(x, y);
        x = x + 1;
    }
    ctx.stroke();
}

// function draw(context) {

//     //context.clearRect(0, 0, 500, 500);
//    // context.save();            
    
//     plotSine(context)
//     //plotSine(context, step, 50);
//     //context.restore();
    
//    // step += 4;
//     window.requestAnimationFrame(draw);
// }
