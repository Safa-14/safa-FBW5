////ADDITION///

function add (num) {
    if (num == 0) {
        return 0
    } 
    return add (num - 1)+num
    
        
}


////FACTORIAL///

function factor (num) {
    if (num == 1) {
        return 1
    } else {
        return factor (num - 1)*num
        
    }
}

function hopla (num) {
    if (num == 0) {
        return num
    } else {
        console.log(hopla (num-1))
        return num
    }
}
hopla (5)





