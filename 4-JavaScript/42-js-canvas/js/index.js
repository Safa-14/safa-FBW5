window.onload = function () {
    // get canvas element
    let canvas1 = document.querySelector('#canvas1')
    let context = canvas1.getContext('2d')
    context.fillStyle = 'red'
    //draw rectangle
    context.fillRect(50,50,50,100) //(positionx, positiony, width, height)

    //set canvas lines color
    context.strokeStyle = 'blue'
    //draw empty rectangle
    context.strokeRect(150,50,50,100)


    //draw line
    //set start point
    context.moveTo(0,0)  //(x,y) the first point
    //draw a ligne
    context.lineTo(20,20)  //(x,y)  the second point
    context.lineTo(50,20)  //(x,y)
    context.lineTo(50,100)  //(x,y)

    //set new start for the line
    context.moveTo(50,10)
    context.lineTo(100,20)

    //draw curve
    //if we did not set the new start point the start point will gonna be the last point that the context arrive to
    context.quadraticCurveTo(500,100,20,30) // (x curve, y curve, x the last point,yfor the last pointof the line)
    //x curve y curve for the direction of the curve
    //x, y end point of the line

    //draw text
    context.font = '30px Georgia'
    context.fillText('Hello World', 200,100)

    //make all line visible
    context.stroke()
    
}