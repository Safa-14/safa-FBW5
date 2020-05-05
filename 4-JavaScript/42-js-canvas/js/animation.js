window.onload = function () {
    //get canvas elements
    let animationCanvas = document.querySelector('#animationCanvas')
    let context = animationCanvas.getContext('2d')
    let status = 'running'

    //create Image
    let img = document.createElement('img')
    img.src = './imgs/player_big.png'

    img.addEventListener('load', function () { //load because we create the image so it will take time to be onload

        let imgCounter = 0
        let boxCounter = 460
        setInterval(() => {

            //clear drawing area (x,  y, width, height)
            context.clearRect(0, 0, 48, 60)
            // context.clearRect(imgCounter-48,0,48,60) 

            if (status == 'running') {

                context.drawImage(img, imgCounter, 0, 48, 60, 0, 0, 48, 60)
                //context.drawImage(img,imgCounter ,0,48,60,imgCounter,0,50,60) 
                imgCounter += 48

                if (imgCounter == 384) {
                    imgCounter = 0
                }
                // if (imgCounter == 0) {
                //     context.clearRect(384-48,0,48,60)  
                // }

            }

            if (status == 'jumpping') {
                context.drawImage(img, 432, 0, 48, 60, 0, -30, 48, 60)
            }


            //draw a box
            if (boxCounter + 40 > 48) {
                context.clearRect(boxCounter + 20 ,30 ,20 ,20)
            }else{
                if (status == 'jumpping') {
                    console.log('win')
                } else {
                    console.log('crash')
                }
            }
            
            context.fillRect(boxCounter, 30, 20, 20)
            boxCounter -= 20
            if (boxCounter == -20) {
                boxCounter = 460
            }
        }, 175);

    })

    animationCanvas.addEventListener('click', function (e) {
        status = 'jumpping'
        setTimeout(() => {
            status = 'running'
        }, 300);

    })

}