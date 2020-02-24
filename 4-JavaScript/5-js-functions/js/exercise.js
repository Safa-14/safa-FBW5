
// function calc (op, num1, num2) {
//     let result
//     switch (op){
//         case "+":
//             result = num1 + num2          //return num1 + num2 
//             break;
//         case "-":
//             result = num1 - num2
//             break;
//         case "*":
//             result = num1 * num2
//             break;
//         case "/":
//             result = num1 / num2
//             break;
//         default:
//             console.log("Wrong op")
//             break;
//     }
//     return result
// }


//----------------------------//
//   --------Second TRY----------//


function calc (op, num1, num2) {
    switch (op){
        case "+":
            return num1 + num2         
            break;
        case "-":
            return num1 - num2 
            break;
        case "*":
            return num1 * num2 
            break;
        case "/":
            return num1 / num2 
            break;
        default:
            console.log("Wrong op")
            break;
    }
}

console.log(calc ("*", 2, 1))