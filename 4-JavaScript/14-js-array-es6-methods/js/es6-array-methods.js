let arr = [2, -2, 6, 3, 4] 
// let arr1=[]
// for (i=0; i< arr.length;i++){
//     arr1[i] = arr [i] *2
// }


document.write('<br>////arr////////<br>')

let newArr = []
arr.forEach(num => {
    newArr.push(num*2)
})

document.write(arr + '<br>')


document.write('<br>////newArr1////////<br>')
document.write(newArr + '<br>')

// map will return a NEW  array with the changes of original array items
document.write('<br>////newArr2////////<br>')
let newArr2 = arr.map(item => {return item * 3})
document.write(newArr2+ '<br>')



document.write('<br>////FILTER MS6////////<br>')
let blaArr = arr.filter(item => {return item > 0 && item < 4})
document.write(blaArr+ '<br>')