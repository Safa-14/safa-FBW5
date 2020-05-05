window.onload = function () {
    let canvas = document.querySelector ('#gameScreen')
    let context = canvas.getContext('2d')

    /////////////////////////////////////
    //          D letter      ///////////
    /////////////////////////////////////

    //el trait el loul el wa9ef
    context.fillRect(50,60,70,50)
    context.fillRect(50,110,70,50)
    context.fillRect(50,160,70,50)

    //el trait el re9ed el fou9ani
    context.fillRect(120,60,70,50)
    context.fillRect(190,60,70,50)

    //el trait el re9ed el loutani
    context.fillRect(120,160,70,50)
    context.fillRect(190,160,70,50)

    //el trait eli nos dora el fou9ani

    context.beginPath();
    context.arc(259, 110, 50, 1.5 * Math.PI, 0);
    context.moveTo(310, 110);
    context.lineTo(260.5, 110);
    context.lineTo(259, 60);
    context.closePath();
    //roundedRectangle ()

    context.fillRect(260,110,50,50)
    //el trait eli nos dorael loutani

    //context.beginPath();
    //context.beginPath();
    context.arc(259, 160, 50, 0, 0.5 * Math.PI);
    
    context.moveTo(260.5, 210);
    context.lineTo(260.5, 160);
    context.lineTo(310, 160);
    //context.closePath();
    //context.closePath();


    context.fill()
    context.stroke();




    /////////////////////////////////////
    //          C letter      ///////////
    /////////////////////////////////////
    //el trait el loul el wa9ef
    context.fillRect(400,10,70,50)
    context.fillRect(400,60,70,50)
    context.fillRect(400,110,70,50)
    context.fillRect(400,160,70,50)

    //el trait el re9ed el fou9ani
    context.fillRect(470,10,70,50)
    context.fillRect(540,10,70,50)

    //el trait el re9ed el loutani
    context.fillRect(470,160,70,50)
    context.fillRect(540,160,70,50)




    /////////////////////////////////////
    //          I letter      ///////////
    /////////////////////////////////////
    context.fillRect(700,60,70,50)
    context.fillRect(700,110,70,50)
    context.fillRect(700,160,70,50)
}

function roundedRectangle (x,y,r,sAngle,eAngle) {
    context.beginPath();
    context.arc(259, 110, 50, 1.5 * Math.PI, 0);
    context.moveTo(310, 110);
    context.lineTo(260.5, 110);
    context.lineTo(259, 60);
    context.closePath();
}
    

