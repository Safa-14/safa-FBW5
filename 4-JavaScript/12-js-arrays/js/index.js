let arr = [2,8,3,10,-6]
document.write(typeof(arr) + '<br>')
document.write(arr.length + '<br>')
document.write(arr.indexOf(9) + '<br>')   //-1 because it can not found it
document.write(arr[1] + '<br>')           //8
document.write(arr[6] + '<br>')           //undefined

let arr1 = arr
arr[3] = 9
document.write(arr[3] + '<br>')          //9

let arr3 = [2,1]
arr3[2] = 5
document.write(arr3[2] + '<br>')          //5



