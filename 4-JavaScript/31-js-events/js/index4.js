window.onload = () => {
    let container = document.querySelector('#container')
    container.addEventListener('click',function (e) {
        let ballDiv = document.createElement('div')
        ballDiv.classList.add('ball')
        //ballDiv.setAttribute('class','ball')
        //console.log(e.clientX + ' ' + e.clientY)
        ballDiv.style.left = e.clientX -5 + 'px' 
        ballDiv.style.top = e.clientY-5 + 'px' 
        container.append(ballDiv)
        realthrowTheBall(ballDiv, e.clientY -5 , e.clientX -5, 500, 10)
    })
    
    
}


function throwTheBall(ball, y , x, parentHight, ballHeight) {
    ball.style.left = x
    let down = true
    let counter = y 
    let interv = setInterval(() => {
        ball.style.top= counter+'px' 
 
        if (down) {
            counter++
        }
        else {
            counter-- 
        }
        if (counter == parentHight - ballHeight) {
            down = false
        }
        if (counter == 0) {
            down = true
        }
    
    }, 10);
}

function realthrowTheBall(ball, y , x, parentHight, ballHeight) {
    ball.style.left = x
    let down = true
    let counter = y 
    let maxHeight = y
    let interv = setInterval(() => {
        ball.style.top= counter+'px' 
 
        if (down) {
            counter++
        }
        else {
            counter-- 
        }
        if (counter == parentHight - ballHeight) {
            down = false
            maxHeight += 20
        }
        if (counter == maxHeight) {
            down = true
        }
        if (counter < maxHeight || maxHeight >= parentHight - ballHeight) {
            clearInterval(interv)
        }
    
    }, 10);
}