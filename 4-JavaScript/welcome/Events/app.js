//First Even is onload window  : if we write the link of script before the body, we need 

window.onload =  function (){
    //anything you put it here it will executed after the all document is loaded
    printBody();
}


function printBody(){
    console.log(document.body)
}



// The second important Event Click :)
function clickEventHandler() {
    alert("done");
    console.log("done again")
}


// The forth important Event double Click :)
function doubleClick() {
    alert("done");
    //console.log("double clicked!")
}


//the 5. important Event mouse ever
function mouseOver(){
    alert('mouse over')
}


//the 6. important Event onchange
function change (){          //each change will be calculated
    console.log('changed')
}


//the 7. important Event key pressed
function keypress(arg) {    //each word will be calculated
    console.log(arg)
}