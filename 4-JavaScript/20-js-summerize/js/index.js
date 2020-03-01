let arr = [-5, 6, 0, 6,12,3,3]

function removeDupel(array){
    let result=[]
    array.forEach(element => {
        if (result.indexOf(element) == -1){
            result.push(element)
        }
    });
    return result
}

document.write(removeDupel(arr))



let arr1 = [1,2,3,4]
let arr2 = [1,2,3,4]

if (arr1 == arr2){
    console.log('equal')
}else{
    console.log('not equal')
}


function checkequal(arr1,arr2){
    if (arr1.length == arr2.length) {
         for (let i = 0; i < arr1.length; i++) {
             if (arr1[i] != arr2[i]) {
                 return false
             }
             
         }
         return true
    }
    return false
}

console.log (checkequal(arr1,arr2))


///////////////////////////////////////////////////
//////////   First Way    ////////////////////////
///////////////////////////////////////////////////
function findshared(array1,array2) {
    let storage = []
    for (let i = 0; i < array1.length; i++) {
        for (let x = 0; x < array2.length; x++) {
            if(array1[i] == array2[x]){
                if (storage.indexOf(array1[i]) == -1){
                    storage.push(array1[i])
                }
            }
        }
    }
    return storage
}
document.write(findshared([-5,1,0,10,1,1],[1,6,7,0,0]))


///////////////////////////////////////////////////
//////////   Second Way    ////////////////////////
///////////////////////////////////////////////////

function findShared2(ar1,ar2){
    let result = []
    ar1.forEach(item => {
        if(ar2.indexOf(item) > -1) {
            if(result.indexOf(item) == -1){
                result.push(item)
            }
        }
    })
    return result
}

console.log(findShared2([1,2,3,4,5,1],[1,2,2]))  // [1, 2]


function findShared3(ar1,ar2){
    let result = []
    for (let i = 0; i < array.length; i++) {
        
        if(ar2.indexOf(item) > -1 && result.indexOf(item) == -1) {
            
                result.push(item)
            
        }
    
    }
        
    return result
}


///////////////////////////////////////////////////
//////////   Third Way    ////////////////////////
///////////////////////////////////////////////////