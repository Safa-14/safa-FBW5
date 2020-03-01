
// function pairs_number (arr){
    
//     for (let i = 1; i < arr.length ; i++) {
//         stor=stor + i
        
//     }
//     return stor
// }


let stor = 0
function pairs(arr){
    let b=test(arr) 
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            x='('+ arr[i]+','+arr[j]+') '
            document.write(x+ ' ')
            
        }
        stor=stor + i
    }
    document.write (b)
    return stor
}

document.write('<br>The number of sorted pairs formed : '+ pairs([5,6,3,1,1])+ '<br>')


function test(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i+1; j < arr.length; j++) {
                if(arr[j]==arr[i]){
                     b='('+ arr[i]+','+arr[i]+') '
                    arr.splice(j,1)
                    stor=stor +1
                    
                } else {
                    b=''
                }
                
            }
            
        }
    return b
}

// document.write(test([1,3,3]) )
// function test(arr) {
//     let x =''
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if(arr[j]!=arr[i]){
                
//                 x =x+'('+ arr[i]+','+arr[j]+')' 
//             }else {
//                 arr.splice(j,1)
//                 x =x+'('+ arr[i]+','+arr[i]+')' 
                
//             }
             
            
//         }
        
//     }
//     return x
// }


// document.write(test([1,3,6,3])+ '<br>')

// function pairs(arr){
    
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
            
//             let x ='('+ arr[i]+','+arr[j]+')'
            
//             document.write(x+ '<br>')
//         }
        
//     }
// }

// pairs([1,3,6,3])


// function test(arr) {
    //     for (let i = 0; i < arr.length; i++) {
    //         for (let j = i+1; j < arr.length; j++) {
    //             if(arr[j]==arr[i]){
    //                 b=arr.splice(j,1)
    //             }
                
    //         }
            
    //     }
    //     return arr
    // }