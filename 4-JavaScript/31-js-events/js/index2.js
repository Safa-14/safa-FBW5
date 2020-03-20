window.onload = () => {


    let btn = document.querySelector('#someBtn')
//////////////////////////////////////
// First way to add an Event dynamicly
//////////////////////////////////////
    // btn.addEventListener('click', function (event) {     //we dont need to add other parameters inside the arrow function and the event parameters isn t a must
    //     //all commands here will run when you click the button
    //     //alert('Hello World')
    //     //console.log('Hello')
    //     console.log(event)
    // })

//////////////////////////////////////
// Second way to add an Event dynamicly
//////////////////////////////////////
    btn.onclick = function (e) {
        //alert('Hello')
        if (e.clientY>15) {
            console.log('down')
        } else {
            console.log('up')
        }
    }




    let container = document.querySelector('#container')
    let someInput = document.createElement('input')
    //someInput.type = 'text'
    someInput.setAttribute('type', 'text')
    container.append(someInput)
    someInput.addEventListener('keypress', function (e) {
        console.log(e)
    })



}
