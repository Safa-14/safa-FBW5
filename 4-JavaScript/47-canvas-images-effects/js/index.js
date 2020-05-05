window.onload = () => {

    //TASK1
    //draw the dices image inside the canvas

    //get html elements
    const canv = document.querySelector('#canv')
    const grayscale = document.querySelector('#grayscale')
    const originalBtn = document.querySelector('#originalBtn')
    const invertBtn = document.querySelector('#invertBtn')
    const removeRedBtn = document.querySelector('#removeRedBtn')
    const greenToGrayBtn = document.querySelector('#greenToGrayBtn')
    const effectBtn1 = document.querySelector('#effectBtn1')
    const effectBtn2 = document.querySelector('#effectBtn2')

    //create context instance from canv
    const context = canv.getContext('2d')

    //create html image
    let img = document.createElement('img')
    //set src to the image
    img.src = './imgs/dices.png'

    //create onload events for img to add it inside convas after loading
    img.addEventListener('load', function () {
        context.drawImage(img, 0, 0, 500, 500)


    })
    //add event click to grayscale btn
    grayscale.onclick = () => {
        //TASK2
        //draw the image to grayscale

        //getting image data(pixels)
        const imgData = context.getImageData(0, 0, 500, 500)
        // console.log(imgData.data[0]); //red
        // console.log(imgData.data[1]); //green
        // console.log(imgData.data[2]); //blue
        // console.log(imgData.data[3]); //transparence


        //play with the image and change value
        for (let i = 0; i < imgData.data.length; i += 4) {
            let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3;
            //gray color is that red and green and blue have the same value thats why we make an average
            imgData.data[i] = avg; // red
            imgData.data[i + 1] = avg; // green
            imgData.data[i + 2] = avg; // blue 

        }
        //clear drawing area
        context.clearRect(0, 0, 500, 500)
        //draw again the image after change
        context.putImageData(imgData, 0, 0);
    }

    // add event click to original button
    originalBtn.onclick = () => {
        //clear photo first
        context.clearRect(0, 0, 500, 500)
        context.drawImage(img, 0, 0, 500, 500)
    }

    invertBtn.onclick = () => {
        //get Image data
        const imageData = context.getImageData(0, 0, 500, 500)
        //loop through image data array
        for (var i = 0; i < imageData.data.length; i += 4) {
            imageData.data[i] = 255 - imageData.data[i]; // red
            imageData.data[i + 1] = 255 - imageData.data[i + 1]; // green
            imageData.data[i + 2] = 255 - imageData.data[i + 2]; // blue
        }
        //clear photo first
        context.clearRect(0, 0, 500, 500)
        //draw the new image
        context.putImageData(imageData, 0, 0);
    }

    removeRedBtn.onclick = () => {
        //get Image data
        const imageData = context.getImageData(0, 0, 500, 500)
        //loop through image data array
        for (let i = 0; i < imageData.data.length; i += 4) {
            if ((imageData.data[i] > (imageData.data[i + 1])) && (imageData.data[i] > (imageData.data[i + 2]))) {
                imageData.data[i + 3] = 1
            }

        }
        //clear old image first
        context.clearRect(0, 0, 500, 500)
        //draw the new image
        context.putImageData(imageData, 0, 0);
    }

    greenToGrayBtn.onclick = () => {
        //get Image data
        const imageData = context.getImageData(0, 0, 500, 500)
        //loop through image data array
        for (let i = 0; i < imageData.data.length; i += 4) {
            if ((imageData.data[i + 1] - 5 > (imageData.data[i])) && (imageData.data[i + 1] > (imageData.data[i + 2]))) {
                let avg = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
                //gray color is that red and green and blue have the same value thats why we make an average
                imageData.data[i] = avg; // red
                imageData.data[i + 1] = avg; // green
                imageData.data[i + 2] = avg; // blue 
            }

        }
        //clear old image first
        context.clearRect(0, 0, 500, 500)
        //draw the new image
        context.putImageData(imageData, 0, 0);
    }
    /////////////////////////////////////
    // FOR THE first IMAGE EFFECT BUTTON
    /////////////////////////////////////
    //create html image
    const effectImg1 = document.createElement('img')
    //set src to the image
    effectImg1.src = './imgs/red-smoke.png'

    //create onload events for img to add it inside convas after loading


    effectBtn1.onclick = () => {
        //clear photo first
        context.clearRect(0, 0, 500, 500)
        context.drawImage(img, 0, 0, 500, 500)
        context.drawImage(effectImg1, 0, 0, 500, 500)
    }



    //////////////////////////////////
    // FOR THE second IMAGE EFFECT BUTTON
    ///////////////////////////////
    effectBtn2.onclick = () => {
        //create html image
        const effectImg2 = document.createElement('img')
        //set src to the image
        effectImg2.src = './imgs/11.png'
        //add event load to the created image
        effectImg2.onload = () => {
            context.drawImage(effectImg2, 0, 0, 500, 500)
        }

    }




    let brightnessSlider = document.querySelector('#brightnessSlider')
    brightnessSlider.addEventListener('change', function () {
        const brightnessValue = brightnessSlider.value
        console.log(brightnessValue);
        //get image data
        const imageData = context.getImageData(0, 0, 500, 500)
        //loop through image data
        for (let i = 0; i < imageData.data.length; i += 4) {
            if (imageData.data[i] + parseInt(brightnessValue > 255)) {
                imageData.data[i] = 255
            } else {
                imageData.data[i] += parseInt(brightnessValue)
            }
            if (imageData.data[i + 1] + parseInt(brightnessValue > 255)) {
                imageData.data[i + 1] = 255
            } else {
                imageData.data[i + 1] += parseInt(brightnessValue)
            }
            if (imageData.data[i + 2] + parseInt(brightnessValue > 255)) {
                imageData.data[i + 2] = 255
            } else {
                imageData.data[i + 2] += parseInt(brightnessValue)
            }
            //console.log(saturationSlider.value);
        }
        
        //clear old image first
        context.clearRect(0, 0, 500, 500)
        context.putImageData(imageData, 0, 0);
        brightnessSlider.value = 0

    });





    // const imageData = context.getImageData(0, 0, 500, 500)
    // for (let i = 0; i < 255; i+=4) {
    //     if
    //     //console.log(saturationSlider.value);
    //     //gray color is that red and green and blue have the same value thats why we make an average
    //     imageData.data[i+3] = saturationSlider.value


    // }
    // context.putImageData(imageData, 0, 0);

}