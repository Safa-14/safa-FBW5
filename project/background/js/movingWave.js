
        function plotSine(ctx, xOffset, yOffset) {
            var width = ctx.canvas.width/4;
            var height = ctx.canvas.height;
            var scale = 10;

            ctx.beginPath();
            
            var x = 50;
            var y = 0;
            var amplitude = 5;
            var frequency = 10;
            ctx.moveTo(x, 50);
            while (x < width) {
                y = height/2 + amplitude * Math.sin((x+xOffset)/frequency);
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
            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");

            context.clearRect(0, 0, 500, 500);
            //showAxes(context);
            //context.save();            
            
            plotSine(context, step, 50);
            //context.restore();
            
            step += 1;
            window.requestAnimationFrame(draw);
        }
        function init() {
            window.requestAnimationFrame(draw);
            //spirograph();
        }
        var step = -4;