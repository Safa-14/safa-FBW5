window.onload = function () {
    //TASK1
    //write a code on btn1 click
    const btn1 = document.querySelector('#btn1')
    btn1.onclick = function (e) {
        alert('Hello')
    }
    ///////////////////////////////////
    ///////////////////////////////////
    //TASK2
    //create a red square div inside container div on btn2 click
    //get btn2
    const btn2 = document.querySelector('#btn2')
    //get container div
    const container = document.querySelector('#container')
    btn2.onclick = function (e) {
        //create a div
        let newDiv = document.createElement('div')
        //set height of the new div
        newDiv.style.height='100px'
        newDiv.style.width='100px'
        //set div background color
        newDiv.style.backgroundColor = 'red'
        //add the new div inside container element
        container.append(newDiv) 
       
    }
    ///////////////////////////////////
    ///////////////////////////////////

}