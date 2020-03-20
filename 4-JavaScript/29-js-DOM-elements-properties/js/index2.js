window.onload = () => {
    let input = document.querySelector('#someInput')
    // console.log(input.getAttribute('placeholder'))

    //input.setAttribute('placeholder','new placeholder value')
    //input.setAttribute('class','someclass')

//first solution
    // let str = 'enter your name'
    // let arr = str.split('')
    // let i = 0
    // stor = ''
    // setInterval(() => {
    //     if (i < arr.length) {
    //         stor +=arr[i]
    //         input.setAttribute('placeholder',stor)
    //         i++
    //     }else{
    //         i=0
    //         stor = ''
    //     }
    // }, 200);

//second solution
    let placeholder = input.getAttribute('placeholder')
    let counter = 0

    setInterval(() => {
        counter++
        let txt = placeholder.substr(0, counter)
        input.setAttribute('placeholder',txt)
        if (counter == placeholder.length) {
            counter = 0
        }      
    }, 200);
    
    

}