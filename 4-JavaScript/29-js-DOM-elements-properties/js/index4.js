window.onload = ()=> {
    
    let div = document.querySelector('#someDiv')
    // div.style.height = '50px'
    // div.style.backgroundColor = 'red'
    // div.style.borderRadius = '10px 0 10px 0'
    div.classList.add('mystyle')
    div.classList.add('mystyle1') // add a class to the div from css
    div.classList.remove('mystyle1')

///////////////////////////////////
///       to kling the div       //
//////////////////////////////////

    //let show =true
    setInterval(() => {
        div.classList.toggle('mystyle')   ///if class exist remove it , if it doesnt exist add it
        // if (show) {
        //     div.classList.add('mystyle')
        //     show = false
        // } else {
        //     div.classList.remove('mystyle')
        //     show = true
        // }
        
        
    }, 1000);

//   access to the parent
    let father = div.parentElement
    father.style.border = '1px solid black'
    
    
        
   
}