let arr = [6, 9, 3, [10, 50, [6, 3, 9, 4], 60], 'str', 5, 4]
//let storage = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == 'object') {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (typeof arr[i][j] == 'object') {
//                 for (let k = 0; k < arr[i][j].length; k++) {
//                     storage += arr[i][j][k]
//                 }
//             }else{
//                 storage += arr[i][j]
//             }

//         }
//     } else {
//         storage += arr[i]
//     }

// }

let counter = 0

function calculate(array) {
    counter++
    let storage = 0
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == 'number') {
            storage += array[i]
        } else {
            if (typeof array[i] == 'object') {
                storage += calculate(array[i])

            }

        }
    }



    // the sum of all numbers in this arrayf
    return storage
}
console.log(calculate(arr))



function calc(n) {

    if (n < 0) {
        return n + calc(n + 1)
    } else if (n === 0) {
        return n
    } else {
        return n + calc(n - 1)
    }
}

console.log(calc(-10))

























// function factor (num){
//     let fact = 1

//         fact*=factor(num-1)





//     return fact
// }
// console.log(factor (3))