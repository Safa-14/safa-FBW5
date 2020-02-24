let matrix = [
    [3,4,88,7,5,6,22,4,55],
    [4,22,88,27,15,6,22,4,55,11],
    [9,-33,88,17,55,96,22,34,55,11],
    [22,445,88,37,5,6,22,14,55,11],
    [-5,-66,89,47,35,16,22,84,55,11],
    [32,66,88,70,57,61,22,4,55,11],
    [3,4,88,7,5,6,22,44,55,11],
    [99,-44,67,7,51,6,22,4,55,11],
    [12,6,88,74,15,6,22,24,55,11]
]



function printNewLine (arr){
    arr.forEach (item => {
        item.forEach ( subItem => {
           // document.write(subItem+ '<br>')
        })
    })
}

//printNewLine (matrix)


////////////////////////////////////////
//            The Summe      /////// 
////////////////////////////////////////

function summe (arr) {
    let sum=0
    arr.forEach(item => {
        let subSum = 0
        item.forEach(subItem => {
            subSum += subItem
            
        })
        document.write (subSum + '<br>')
        sum+=subSum
    })
    document.write ('The total result is ' + sum + '<br>')
}

summe (matrix)


////////////////////////////////////////
//            The Greatest       /////// 
////////////////////////////////////////

/////// First solution ////////

function findMax (arr) {
    let max = arr[0][0]
    arr.forEach(item => {
           item.forEach (subItem => {
                if (subItem > max ) {
                    max = subItem
                        
                }
            })
        })
    
    return max 
}

document.write('The Greatest is ' + findMax (matrix)+ '<br>')


/////// Second solution ////////

// function greatest (mat) {
//     let greatest = mat[0][0]
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//            if (mat[i][j] > greatest ) {
//             greatest = mat[i][j]
            
//            }
           
//         }
        
//     }
//     return greatest 
// }



////////////////////////////////////////
//            The Min      /////// 
////////////////////////////////////////

function findMin (arr) {
    let min = arr[0][0]
    arr.forEach(item => {
           item.forEach (subItem => {
                if (subItem < min ) {
                    min = subItem
                        
                }
            })
        })
    
    return min 
}

document.write('The Min is ' + findMin (matrix)+ '<br>')


document.write('<br>//////////////////////<br> <br>')


// let treeArray = [
//     'Safa',
//     28,
//     ['omar',5,['Ali',
//                 1,['FBW5',
//                     20,]
//               ]
//     ]
// ]

let treeArray = ['ahmad',30,['omar', 5,['Ali',2,['fbw5',20,[]]]],['blabla',99,[]]]


function recursivePrint (arr) {
    arr.forEach(item => {
        if (typeof(item) == 'string'){
            document.write(item + ' <br>') 
        }else {
            if (typeof(item) == 'object'){
                recursivePrint(item)
               
            }
        }
})
}
recursivePrint(treeArray)






// function print1 (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof(arr[i]) === 'string'){
//             document.write(arr[i] + ' <br>') 
//         }else {
//             if (typeof(arr[i]) === 'object'){
//                  print1(subItem)
//                 
               
//             }
//         }
// }


document.write('<br>//////////////////////<br> <br>')

let word = "safa"
function strReverse(str) {
    // let arr = str.split('')
    // let arr1=arr.reverse()
    // return arr1.join('')
    return str.split('').reverse().join('')
}

document.write (strReverse(word))