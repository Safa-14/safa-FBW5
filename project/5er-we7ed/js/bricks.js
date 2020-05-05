window.onload = function () {
    //get canvas elements
    let animationCanvas = document.querySelector('#bricksCanvas')
    let context = animationCanvas.getContext('2d')


    let delpinBrick = {
        row: 1,
        column: 8,
        width: 55,
        height: 20,
        offSetLeft: 30,
        offSetTop: 160,
        marginTop: 30
    }


    let boxBrick = {
        row: 1,
        column: 10,
        width: 55,
        height: 20,
        offSetLeft: 20,
        offSetTop: 230,
        marginTop: 30
    }

    let fishBrick = {
        row: 1,
        column: 8,
        width: 55,
        height: 20,
        offSetLeft: 18,
        offSetTop: 30,
        marginTop: 50,
        //marginLeft:100
    }

    let sharkBrick = {
        row: 3,
        column: 10,
        width: 55,
        height: 20,
        offSetLeft: 20,
        offSetTop: 30,
        marginTop: 10,
        //marginLeft:100
    }


    let bricks = []
    let boxBricks = []


    //CALL FUNCTIONS
    drawBricks(context, delpinBrick, bricks, boxBrick, boxBricks ,sharkBrick, bricks ,fishBrick, bricks )
    createNet(context, 100, 30)
    createNet(context, 400, 30)

    
}

//DRAW THE MOVING DELPHIN
function drawDelphin(ctx, xImg, yImage) {
    //create Image
    let img = document.createElement('img')
    img.src = './imgs/delphin.png'

    img.addEventListener('load', function () { //load because we create the image so it will take time to be onload

        let imgCounter = 9
        setInterval(() => {

            //clear drawing area (x,  y, width, height)
            ctx.clearRect(xImg, yImage, 84, 68)
            ctx.drawImage(img, imgCounter, 547.8, 84, 68, xImg, yImage, 84, 68)
            imgCounter += 84

            if (imgCounter == 345) {
                imgCounter = 343.2
            }
            if (imgCounter == 427.2) {
                imgCounter = 9
            }

        }, 175);


    })
}


//CREATE A LIGNE OF MOVING DELPHINS
function createDelphinBricks(ctx, brick, bricks) {

    for (let r = 0; r < brick.row; r++) { //to create the rows
        bricks[r] = [];
        for (let c = 0; c < brick.column; c++) { //to create the columns
            bricks[r][c] = {
                x: c * (brick.offSetLeft + brick.width) + brick.offSetLeft,
                y: r * (brick.offSetTop + brick.height) + brick.offSetTop + brick.marginTop,
                status: true //that mean that the brick is not destroyed
            }

            if (bricks[r][c].status) {
                drawDelphin(ctx, bricks[r][c].x, bricks[r][c].y)
            }

        }


    }
}

//DRAW BOXES
function createBoxesBricks(ctx, brick, bricks) {


    for (let r = 0; r < brick.row; r++) { //to create the rows
        bricks[r] = [];
        for (let c = 0; c < brick.column; c++) { //to create the columns
            bricks[r][c] = {
                x: c * (brick.offSetLeft + brick.width) + brick.offSetLeft,
                y: r * (brick.offSetTop + brick.height) + brick.offSetTop + brick.marginTop,
                status: true //that mean that the brick is not destroyed
            }

            if (bricks[r][c].status) {
                let imgBox = document.createElement('img')
                imgBox.src = './imgs/box.png'

                imgBox.addEventListener('load', function () { //load because we create the image so it will take time to be onload


                    ctx.drawImage(imgBox, bricks[r][c].x, bricks[r][c].y, 50, 50)

                    //ctx.drawImage(imgBox, 30, 270, 50, 50)


                })
            }

        }


    }
}

//Draw an Octopus
function createOctopusBricks(ctx, Ximg, Yimg) {
    let imgOctopus = document.createElement('img')
    imgOctopus.src = './imgs/oct.png'

    imgOctopus.addEventListener('load', function () { //load because we create the image so it will take time to be onload


        ctx.drawImage(imgOctopus, 300, 80, 100, 100)

        //ctx.drawImage(imgBox, 30, 270, 50, 50)


    })
}

//CREATE FISH NET
function createNet(ctx, Ximg, Yimg) {
    let imgFishNet = document.createElement('img')
    imgFishNet.src = './imgs/fishnet.png'

    imgFishNet.addEventListener('load', function () { //load because we create the image so it will take time to be onload


        ctx.drawImage(imgFishNet, Ximg, Yimg, 200, 150)

        //ctx.drawImage(imgBox, 30, 270, 50, 50)


    })
}

//CREATE FISH NET
function drawShark(ctx, xImg, yImage) {
    let imgShark = document.createElement('img')
    imgShark.src = './imgs/shark.png'

    imgShark.addEventListener('load', function () { //load because we create the image so it will take time to be onload

        let imgCounter = 0
        setInterval(() => {

            //clear drawing area (x,  y, width, height)
            ctx.clearRect(xImg, yImage, 50, 50)
            //ctx.drawImage(img, imgCounter, 557, 84, 68, xImg, yImage, 84, 68)
            ctx.drawImage(imgShark, imgCounter, 562, 156, 130, xImg, yImage, 50, 50)
            imgCounter += 156

            if (imgCounter == 1226) {
                imgCounter = 0
            }
            if (imgCounter == 624) {
                imgCounter = 620
            }
            if (imgCounter == 776) {
                imgCounter = 758
            }



        }, 500);


    })
}

//CREATE OF MOVING SHARK
function createSharkBricks1(ctx, brick, bricks) {

    for (let r = 0; r < brick.row; r++) { //to create the rows
        bricks[r] = [];
        for (let c = 0; c < r; c++) { //to create the columns
            bricks[r][c] = {
                x: c * (brick.offSetLeft + brick.width) + brick.offSetLeft,
                y: r * (brick.offSetTop + brick.height) + brick.offSetTop + brick.marginTop,
                status: true //that mean that the brick is not destroyed
            }

            if (bricks[r][c].status) {

                drawShark(ctx, bricks[r][c].x, bricks[r][c].y)
            }

        }


    }
}

//CREATE OF MOVING SHARK
function createSharkBricks2(ctx, brick, bricks) {

    for (let r = 1; r < brick.row; r++) { //to create the rows
        bricks[r] = [];
        for (let c = 8; c < brick.column; c++) { //to create the columns
            bricks[r][c] = {
                x: c * (brick.offSetLeft + brick.width) + brick.offSetLeft,
                y: r * (brick.offSetTop + brick.height) + brick.offSetTop + brick.marginTop,
                status: true //that mean that the brick is not destroyed
            }

            if (bricks[r][c].status) {
                if (r * c != 8) {
                    drawShark(ctx, bricks[r][c].x, bricks[r][c].y)
                }



            }

        }
    }
}

//CREATE THE FISH INSIDE THE NET
function createFishBricks(ctx, brick, bricks) {
    for (let r = 0; r < brick.row; r++) { //to create the rows
        bricks[r] = [];
        for (let c = 2; c < brick.column; c++) { //to create the columns
            bricks[r][c] = {
                x: c * (brick.offSetLeft + brick.width) + brick.offSetLeft,
                y: r * (brick.offSetTop + brick.height) + brick.offSetTop + brick.marginTop,
                status: true //that mean that the brick is not destroyed
            }

            if (bricks[r][c].status) {
                let imgFish = document.createElement('img')
                imgFish.src = './imgs/7outa.png'

                imgFish.addEventListener('load', function () { //load because we create the image so it will take time to be onload


                    if (c != 4 && c != 5) {
                        ctx.drawImage(imgFish, bricks[r][c].x, bricks[r][c].y, 50, 50)
                    }

                    ctx.drawImage(imgFish, 190, 120, 50, 50)
                    ctx.drawImage(imgFish, 490, 120, 50, 50)
                })
            }

        }


    }
}








//COLLECT ALL THE FUCTIONS THAT DRAW THE DIFFERENTS TYPES OF BRICKS
function drawBricks(context, delpinBrick, delpinBricks, boxBrick, boxBricks,sharkBrick, sharkBricks,fishBrick, fishBricks) {
    createDelphinBricks(context, delpinBrick, delpinBricks)
    createBoxesBricks(context, boxBrick, boxBricks)
    createOctopusBricks(context)
    createSharkBricks1(context, sharkBrick, sharkBricks)
    createSharkBricks2(context, sharkBrick, sharkBricks)
    createFishBricks(context, fishBrick, fishBricks)
}
