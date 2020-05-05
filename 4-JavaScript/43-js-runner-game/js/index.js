window.onload = function () {
    //get html elements
    let gameCanvas = document.querySelector('#gameCanvas')
    let spanScore = document.querySelector('#score')


    //draw a horizontal line
    let context = gameCanvas.getContext('2d')
    //start a ligne
    context.moveTo(0, 100)
    //draw a ligne
    context.lineTo(600, 100)


    //draw a box on the right side of the line 20 20  
    context.fillRect(580, 79, 20, 20)
    //draw a box on the right side of the line 20 20 
    context.clearRect(580, 79, 20, 20)
    context.fillRect(560, 79, 20, 20)



    //create Image
    let img = document.createElement('img')
    img.src = './imgs/player_big.png'

    img.onload = function (e) {
        //TO SHOW FULL IMAGE
        //context.drawImage(img, 0, 39, 480, 60) //context.drawImage(img, x, y, image width, image heiight)

        //10CHARACTER AND THE FULL WIDTH IS 480 SO EACH ONE WIDTH 
        //SHOW THE FIRST MARIO
        context.drawImage(img, 0, 0, 48, 60, 0, 39, 48, 60) //context.drawImage(img, x from where you will cut, y from where you will cut,the width you want cut, the height you want to cut, WHERE TO PUT THE IMAGE , WHERE TO PUT THE IMAGE, width of showed image,  heiight of showed image)

        //CLEAR THE DRAWING IMAGE
        context.clearRect(0, 39, 48, 60)
        //SHOW THE SECOND MARIO
        context.drawImage(img, 48, 0, 48, 60, 0, 39, 48, 60)

        //SHOW THE THIRD CHARACTER
        context.clearRect(0, 39, 48, 60)
        context.drawImage(img, 96, 0, 48, 60, 0, 39, 48, 60)

        //SHOW THE FOURTH CHARACTER
        context.clearRect(0, 39, 48, 60)
        context.drawImage(img, 144, 0, 48, 60, 0, 39, 48, 60)

        
        let boxCounter = 580
        let boxSpeed =  100
        
        
        
        // let boxInterval = setInterval(function () { //the errow function make problem with jquery and internet explorer
        //     context.clearRect(boxCounter + 20, 79, 20, 20) //should reduce the last one
        //     context.fillRect(boxCounter, 79, 20, 20)
        //     if (boxCounter == 0) {
        //         boxCounter = 580
        //     } else {
        //         boxCounter -= 20
        //     }

        // }, boxSpeed);

        let boxMoveCheck = true
        let boxMoveTime = 100

        function boxCheck() { //the errow function make problem with jquery and internet explorer
            context.clearRect(boxCounter + 20, 79, 20, 20) //should reduce the last one
            context.fillRect(boxCounter, 79, 20, 20)
            if (boxCounter == 0) {
                boxCounter = 580
            } else {
                boxCounter -= 20
            }
            setTimeout(() => {
               
                    boxCheck()
                
            }, timeout);
        };

        boxCheck()
        //let framCounter = 1
        //POSITION OF EACH CHARACTER  IS (CHARACTER INDEX - 1)*48
        //FIRST SOLUTION
        // setInterval(() => {
        //     context.clearRect(0, 39, 48, 60)
        //     let x = (framCounter - 1)*48
        //     context.drawImage(img,x,0,48,60, 0, 39, 48, 60)


        //     if (framCounter == 9) {
        //         framCounter = 1
        //     }else {
        //         framCounter++
        //     }
        // }, 200);

        

        //SECOND SOLUTION
        let framCounter = 0
        let scoreCounter = 0
        let characterInterval = setInterval(function () { //the errow function make problem with jquery and internet explorer
            
            context.clearRect(0, 0, 48, 99)
            //context.clearRect(0, 39, 48, 60)
            if (status == 'running') {
                context.drawImage(img, framCounter, 0, 48, 60, 0, 39, 48, 60)
            }else {
                context.drawImage(img, framCounter, 0, 48, 60, 0, 0, 48, 60)
            }

            if (framCounter == 336) {
                framCounter = 0
            } else {
                framCounter += 48
            }

            if (boxCounter <= 39 && status == 'running') {
                console.log('crash');
                clearInterval(boxInterval)
                clearInterval(characterInterval)
                //draw text crash in canvas
                context.fillStyle = 'red'
                context.font = "40px Arial";
                context.fillText("Crash", 250, 50);
            }


            //add 1 for score
            if (boxCounter <= 39 && status == 'jumpping') {
                //code
                scoreCounter++
                spanScore.innerText = scoreCounter 
                //reduce box movement time
                boxMoveTime  -= 10
                console.log(boxSpeed)
            }

        }, 150);


        


    }

    //make all line visible
    context.stroke()

    //declare the status of the image character
    let status = 'running'
    window.onkeypress = function (e) {
        if (e.key == ' ') {
            status = 'jumpping'
            //console.log('jump')
            setTimeout(() => {
                status = 'running'
            }, 500);
        }
    }

}