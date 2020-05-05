window.onload = () => {
    //get html elements
    const container = document.querySelector('#container')
    const img = document.querySelector('#container>img')
    //declare a counter for fonts size
    let zoom = 1
    //add event listener wheel to container
    container.addEventListener('mousewheel' , function (e) {
        //console.log(e);
        //check the direction of wheel
        //down e.deltaY will be positive
        //up deltaY negative
        if (e.deltaY > 0) {
            //zoom in
            zoom += 0.1
        } else {
            // zoom out
            zoom -= 0.1
            
        }
        img.style.transform = `scale(${zoom})`  // 'scale('+zoom+')'
        
        

    });
}