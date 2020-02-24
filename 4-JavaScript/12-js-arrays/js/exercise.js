// function sort (blaArr) {
//     let x = []
   
//     for(let i=0 ; i< blaArr.length;i++){
    
//         if ( blaArr [i+1]<blaArr [i]) {
//             x=blaArr [i+1]
//             blaArr [i+1]=blaArr[i]
//             blaArr [i]=x
//             i=-1 
//         }         
//     } 
//     return blaArr 
// }


function sort (blaArr) {
    let x = []
    for(let i=0 ; i< blaArr.length;i++){
        for(let j=i+1 ; j< blaArr.length;j++){
    
            if (blaArr [j]< blaArr[i]) {
                x=blaArr [j]
                blaArr [j]=blaArr[i]
                blaArr[i]=x   
            }
        } 
    }
    return blaArr
}


document.write (sort ([9,2,10,7,5,1,10,-4]))
