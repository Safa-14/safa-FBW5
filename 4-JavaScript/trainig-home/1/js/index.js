function txt_add (num,ch){
    if (num==0) {
        return num+ch
    }
    else {
        ch=","+num+ch
        return txt_add (num-1,ch)
    }
    
}
console.log(txt_add (5,""))



// function essai (num) {
//     if (num==0) {
//         console.log(num) 
//     }else {
//         essai (num-1)
//         console.log(num)
//     }
// }

// essai (5)




