window.onload = () => {
    let input =document.querySelector('#someInput')
    // keypress, keydown, keyup
    input.addEventListener('keypress', function (e) {
        console.log(e)
        //ONLY CAPITAL LETTERS ARE ALLOWED IN THE INPUT
        let checkValidate = false

        if (e.which >= 65 && e.which <= 90) {  //which is better than keyword because  it supports many browsers
            checkValidate = true
        }
        if (e.which == 196 || e.which == 220) { //the codeKey for Alaut german
            checkValidate = true
        }

        // if((e.which >= 65 && e.which <= 90) ||
        // (e.which == 196 || e.which == 220)) {
        //     checkValidate = true
        // }

        if(!checkValidate){
            e.preventDefault()
        }
        
        
    })
}