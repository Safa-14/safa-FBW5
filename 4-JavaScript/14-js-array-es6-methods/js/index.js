let fruits = ['Banana' , 'Apple' , 'watermelon']

// for (let i=0 ; i < fruits.length ; i++) {
//     document.write(fruits[i] + '<br>')
// }

fruits.forEach(function(blaFruit){     //display each item from the array
    document.write(blaFruit + '<br>')
})

document.write('<br>/////////////////////////<br>')

fruits.reverse().forEach(function(blaFruit){  //display each item from fruits array  fom right to left
    document.write(blaFruit + '<br>')
})

// fruits.forEach( blaFruit => document.write(blaFruit + '<br>'))


document.write('<br>/////////////////////////<br>')

check = false
fruits.forEach( blaFruit => {
    if (blaFruit.indexOf('water') != -1){   //indexOf hni bech ta3tina 0 5tr tlawaj 3al index tebe3 el string mouch el array
        check = true
    }
}) 

document.write(check + '<br>')

document.write('<br>/////////////////////////<br>')

function counter (arr , num) {
    let stor = 0
    arr.forEach(item=> {
        if (item == num) {
            stor++
        }
    })
    return stor
}

let ourArray=[1,5,5,6,1,1,5,7,8,-1]
document.write(counter ( ourArray, 1)  + '<br>')

document.write('<br>/////////First Method/////////<br>')


let arr1 = ['Ahmad','tim','safa','shirin','wael','Alen','Abdu','hamoud','felix','neda','manish','Chumky','Bashar','Rebecca', 'Belal', 'Farooq', 'Haroon','Ingo']

function searchLetter(arr,letter){
    let stor = 0

    arr.forEach(item=> {
        if (item.search(letter)!= -1) {
            stor++
        }
    } )
    return stor

}
document.write(searchLetter(arr1,/a/gi)  + '<br>')

document.write('<br>/////////Second Method/////////<br>')
function characterFinder(arr,letter){
    let stor = 0

    arr.forEach(item=> {
        if ((item.search(letter.toUpperCase())!= -1) || (item.search(letter.toLowerCase())!= -1)){
            stor++
        }
    } )
    return stor

}
document.write(characterFinder(arr1,'a')  + '<br>')
