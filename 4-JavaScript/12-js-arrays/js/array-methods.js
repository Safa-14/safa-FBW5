let arr = [1,3,8,2,4,6,7]
document.write(arr.toString() + '<br>')
document.write(arr.join('*') + '<br>')     //1*3*8*2*4*6*7

arr[arr.length] = 55
document.write(arr.toString() + '<br>')    //1,3,8,2,4,6,7,55

arr[arr.length] = 33  //add item to the end of the array
document.write(arr.toString() + '<br>')    //1,3,8,2,4,6,7,55,33

arr.push(66) //add item to the end of the array
document.write(arr.toString() + '<br>')    //1,3,8,2,4,6,7,55,33,66

arr.pop()  //remove the last item of the array
document.write(arr.toString() + '<br>')    //1,3,8,2,4,6,7,55,33

arr.shift()  //remove the first item of the array
document.write(arr.toString() + '<br>')    //3,8,2,4,6,7,55,33

arr.unshift(100)  //add new item to the beginning of the array
document.write(arr.toString() + '<br>')    //100,3,8,2,4,6,7,55,33

//delete arr[3]    //clear the item with index 3 but not delete it from the array
//document.write(arr.toString() + '<br>')    //100,3,8,,4,6,7,55,33

arr.splice(4,2,5,3,9)   // 4:index of the changes 
                    // 2:number of item that gonna be deleted after this index
                    // 5:the item that gonna be added after the index
document.write(arr.toString() + '<br>')      //100,3,8,2,5,7,55,33

arr.splice(1,2)     // 1 :index of the start of deleted items
                    // 2 :how many items should be deleted
document.write(arr.toString() + '<br>')

document.write('<br>////////////////////////////<br><br>')
let arr1 = [3,3,3,3,3,3,3,3,3,3,5]
let arr2 = arr1.concat(arr)  //will not effect th arr1 it make another array
document.write(arr.toString() + '<br>')
document.write(arr1.toString() + '<br>')
document.write(arr2.toString() + '<br>')

document.write(arr.toString() + '<br>')
let arr4 = arr.slice(1,3)
document.write(arr4.toString() + '<br>')
document.write(arr.toString() + '<br>')

let arr5 = ['ahmad','tim', 'safa' , 'hamoud','abdou']
document.write(arr5.sort() + '<br>')

arr.sort((a,b) => {return a- b})   //sort ASC   ordre ascendent
document.write(arr.toString() + '<br>')

arr.sort((a,b) => {return b- a})   //sort DSC    ordre descendent
document.write(arr.toString() + '<br>')

let arr6 = [2,9,3,-5,7,100,20]
document.write(arr6.sort() + '<br>')
document.write(arr6.reverse() + '<br>')


 