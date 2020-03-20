window.onload = () => {
    let ball = document.querySelector('#ball')

    // let down = true
    // let i = 0 
    
    // let setInterval(() => {
    //  ball.style.top= i+'px' 
     
    //     if (down) {
    //         i++
    //     }
    //     else {
    //         i--
            
    //     }
    //     if (i == 180) {
    //         down = false
            
    //     }
    //     if (i == 0) {
    //         down = true
    //     }
        
              
        
    // }, 10);



    let down = true
    let i = 0 
    let top = 0 
    
    let a= setInterval(() => {
     ball.style.top= i+'px' 
     
        if (down) {
            i++
        }
        else {
            i--
            
        }
        if (i == 180) {
            down = false
            top+=20
        }
        if (i == top) {
            down = true
        }
        
        if (top == 180) {
            clearInterval(a)
            // down = false
            // top = 0
        }
              
        
    }, 10);





}
