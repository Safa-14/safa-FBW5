let x = "Hello World"
let len = x.length           //length return the number of the caracters of this string  //
console.log(len)             //length is a property

let idx = x.indexOf("Wo")    //indexOf is a method that mean a function
console.log(idx)

let idx1 = x.indexOf("l",4)    //indexOf is a method that search the caracter from the 4th position
console.log(idx1)

let lidx =  x.lastIndexOf("l")  //lastIndexOf  give you the index of last l on the sentence
console.log(lidx)



console.log("//////////////////////")

//to show the position of tha on the sentence txt//

indexesFinder("Hakona Matata", "t", 0)
function indexesFinder (txt, chr, start)  {
    
    if (start < txt.length) {
        let idxx = txt.indexOf(chr,start)
        if (idxx != -1) {
        console.log(idxx)
        indexesFinder (txt, chr, idxx+1) 
        }
    }
}


console.log("//////////////////////")

function textAdd (num) {
    if (num == 0){
        return num
    }
        return textAdd (num-1) + "," +num
    
}
console.log(textAdd (5))





console.log("//////////////////////")
let arrowTextAdd = num => {
    if (num == 0) {
        return num
    }else {
        return arrowTextAdd (num-1) + "," + num
    }
}
console.log (arrowTextAdd(3))

