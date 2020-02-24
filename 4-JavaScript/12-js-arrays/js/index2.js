let arr = [2,4,1,9,5,7,6,3,2,7,1]
function show (){
    for(let i=0 ; i< arr.length;i++){

        document.write(arr[i] + '<br>')
    }
}
show()

// document.write( '<br><br>///////findLimits////////<br><br>')

function findLimits (blaArr) {
    let theSmallest = blaArr[0]
    let theGreatest = blaArr [0]
    for(let i=1 ; i< blaArr.length;i++){
    
        if (arr [i]< theSmallest) {
            theSmallest = blaArr[i]
                
        }
        if (arr [i] > theGreatest) {
            theGreatest = blaArr[i]
                
        }
            
    } 
    document.write ('the smallest : ' + theSmallest  + '<br>')
    document.write ('the Greatest : ' + theGreatest + '<br>')
}

findLimits (arr) 



// document.write( '<br><br>///////Average////////<br><br>')

function avr (blaArr) {
    let sum = 0
    for(let i=0 ; i< blaArr.length;i++){
        sum+=blaArr[i]
        
    }
    return 'the Average is : ' +sum/blaArr.length
}

document.write(avr ([2,5,3,4])+'<br>')













// function ess (arr1,arr2){
//     arr =[]
//     for(let i=0 ; i< 4;i++){
//         if (i % 2 == 0) {
//             arr[i] =arr1[i]
            
//         }else{
//             if (i % 2 != 0) {
//                 arr[i] =arr2[i]
//                 return arr[i]
//         }
        
//     }
// }
// }


// document.write (ess ([1,2,4,6],[4,8,12,16]))  

































