let num1 = 2.6
let rounded = Math.round(num1)
console.log(rounded)
console.log(typeof(rounded))

console.log(Math.PI)     //3.14
let num2 = Math.sqrt(9)  //3
console.log(num2)

console.log(Math.random())
console.log(Math.round(Math.random()*2))  //number between 0 and 2


function test () {
    let x =Math.round(Math.random()*4)

    switch (x){
        case 0:
            return 'You are very sad'
        case 1:
            return 'You are sad'
        case 2:
            return 'You are not happy'
        case 3:
            return 'You are happy'
        case 4:
            return 'You are very happy'
        
        default:
            return "we don't have this option"
    }   
}

console.log(test ())
