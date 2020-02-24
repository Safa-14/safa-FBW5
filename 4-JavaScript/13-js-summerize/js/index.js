function print (num,text) {
    for (let i=1 ; i <= num ; i++){
        document.write(text + '<br>')
    }
}

print (3,'Hello')


// let print = (num,text) => {
// }


document.write('<br>//////////////////////////////// <br>')

function factor (num) {
    if (num < 0 ) {
        return 'not valid'
    }

    for (let i=(num-1) ; i>=1 ; i--) {
        num*=i
        
    }
        
    return num
}


// function factor (num) {
//     if (num < 0 ) {
//         return 'not valid'
//     }
//     let fact = 1
//     for (let i=1 ; i<=num ; i++) {
//         fact*=i
        
//     }
        
//     return fact
// }
document.write(factor (4))

document.write('<br> //////////////////////////////// <br>')

function factors (num1,num2) {
    if ( num1 < num2) {
        
        for (let i=num1 ; i<=num2 ; i++) {
            
            document.write(i+'! ='+factor (i)+ '<br>')
            
        } 
    }else {
        for (let i=num1 ; i>=num2 ; i--) {
            
            document.write(i+'! ='+factor (i)+ '<br>')
            
        } 
    }
}
factors (5,10)





