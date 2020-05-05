

function plotSine(ctx, x, xOffset, yOffset, width) {
    //var width = ctx.canvas.width;//toul el wa7da lel win lezem you9ef
    var height = ctx.canvas.height;
    var scale = 10;

    ctx.beginPath();

    //var x = 100; // mnin yabda yorsom
    var y = 0;
    var amplitude = 5;
    var frequency = 10;
    
    while (x < width) { //height 3ala 2 hiia min win torsom 7asb el y
        y = yOffset + amplitude * Math.sin((x + xOffset) / frequency);
        ctx.lineTo(x, y);
        x++;
        
    }
    ctx.stroke();

}

function draw() {
    var canvas1 = document.getElementById("myCanvas1");
    var context1 = canvas1.getContext("2d");

    context1.clearRect(0, 0, 500, 500);
  
    plotSine(context1, 100, step, 150, 200);
     

    step += 1; //sor3a
   // window.requestAnimationFrame(draw);
}
// function init() {
//     window.requestAnimationFrame(draw);
//     //spirograph();
// }
var step = 0;



window.onload = () => {
    setInterval(() => {
        draw()
    }, 10);
}