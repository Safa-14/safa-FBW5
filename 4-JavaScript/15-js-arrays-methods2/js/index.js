let fruits = ['Apple', 'Banana', 'Watermelon', 'Grape', 'Orange', 'Cherry']

//find the first fruit inside the array which char 'a' 
let blaValue = fruits.find(fruit => fruit.indexOf('n')>-1)  //Banana   (if we want all we use filter)
document.write(blaValue + '<br>')  //typeof blaValue is string


//find the first fruit inside the array which char 'a' is the third character
let blaValue1 = fruits.find(fruit => fruit.indexOf('a')== 2) 
document.write(blaValue1+ '<br>')

////////////////////////////////////////////////////
//        other declarations of a function        //
////////////////////////////////////////////////////
document.write( '<br>//////////////////<br>')
//(for of) will itearte over array Items
for (let element of fruits) {
    document.write(element + '<br>')
}

document.write( '<br>//////////////////<br>')
//(for in) will itearte over array indexes
for (let idx in fruits) {
    document.write(idx + ':' + fruits[idx] + '<br>')
}