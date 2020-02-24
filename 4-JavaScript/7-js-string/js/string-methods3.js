let str = "Hello World"
console.log(str.slice(-11,-6))    //will print hello counting from right to left

console.log(str.substring(0,5))   //will print hello

console.log(str.substr(6,3))  //substr(from: number, length?: number)

console.log(str.replace("o","x"))    //replace only the first "o" with an "x"

let str2="I love life, I love programming, I love my house"
console.log(str2.replace(/love/g,"hate"))   //g     : replace all th small "o" with an "x" 
                                            //gi/ig : replace all the "o" (small and capital) with an "x"
                                            //i     : replace only the first 


console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.concat(" ","Hello FBW5"," ",str2))

let str3 = " safa.bouhlel91@gmail.com "
console.log(str3.trim())   //trimp remove white spaces from beginnen and at the end (both sides)

console.log(str3.charAt(2))       //return the letter which have the index 2
console.log(str3.charCodeAt(2))  //return the ASCII CODE