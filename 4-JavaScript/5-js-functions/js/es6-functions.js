// function blaFunction () {

// }



// let blaFunction = function (message){
//     console.log(message)
// }

// blaFunction("Hi I am a new function")


//       ES6 ARROW FUNCTION       //
let blaFunction = (message1,message2) => {
    console.log(message1+ " " +message2)
}

let blaFunction1 = message => {
    console.log(message)
}

blaFunction("I am a parameter","I am a parameter2");


//       IIFE FUNCTION (CALL ITSELF ONCE)       //
(function (){
    console.log("Hi I am IIFE function")
})()

