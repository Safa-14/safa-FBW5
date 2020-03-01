class Participant {
    constructor(lastname, firstname){
        this.firstName = firstname
        this.lastName = lastname
    }
    fullName(){
        return this.firstName + ' ' + this.lastName
    }
}

let safa = new Participant('Bouhlel', 'Safa')
document.write(safa.fullName() + '<br>')

let tim = new Participant('Breuel', 'Tim')
tim.tattoos =true
document.write(tim.fullName() + '<br>')

let shirin = new Participant('Valizadeh', 'Shirin')
document.write(shirin.fullName() + '<br>')

let parArr = [tim,safa,shirin]
// for (let i = 0; i < parArr.length; i++) {
//     document.write(parArr[i].firstName+ '<br>')
    
// }





//FUNCTION TO PRINT FIRST NAME OF EACH ELEMENT INSIDE parARR
//////////////////////////////////////////////////////////////////////////
//////////           FIRST SOLUTION 'direct print'         ///////////////
//////////////////////////////////////////////////////////////////////////
document.write('<br> ////////  FIRST SOLUTION :direct print  ///////<br>')
function firstNamePrint1 (arr) {
    arr.forEach(item => {
        document.write(item.firstName+ ' '+ item.tattoos +'<br>')
    })
}

firstNamePrint1 (parArr)



/////////////////////////////////////////////////////////////////////////
//////////     SECOND SOLUTION 'return a storage'        ///////////////
////////////////////////////////////////////////////////////////////////
document.write('<br> ////////  SECOND SOLUTION :return a storage  ///////<br>')
function firstNamePrint2 (arr) {
    let storage = ''
    arr.forEach(item => {
        storage+=item.firstName + '<br>'
        
    })
    return storage
}

document.write(firstNamePrint2 (parArr))






// function charFinder (arr,chr) {
//     let resultArr =[]
//     arr.forEach (item =>{
//     x=item.lastName
//     for (let i = 0; i < x.length; i++) {
//           if(x[i] == chr){
//             resultArr +=item.lastName
//           }
          
//     }
   
// })
// return resultArr
// }

// console.log(charFinder (parArr ,'a'))

//WRITE A FUNCTION RETURN AN ARRAY WHICH CONTAINS 
//WHERE THOSE ITEMS LASTNAMES CONTAIN

/////////////////////////////////////////////////
//               SOLUTION HARD WAY       ////////
/////////////////////////////////////////////////

function hardFunction(arr,chr){
    let resultArr = []
    arr.forEach(item => {
        if (item.lastName.indexOf(chr) > -1) {
            resultArr.push(item)
        }
    })
    return resultArr
}
console.log(hardFunction(parArr,'B'))

/////////////////////////////////////////////////
//               SOLUTION EASY WAY       ////////
/////////////////////////////////////////////////
function easyWay(arr,chr) {
    return arr.filter(item => item.lastName.indexOf(chr) > -1)
}

console.log(easyWay(parArr,'a') )
document.write('<br>///////////////////////////////////<br>')
easyWay(parArr,'a').forEach(item => {
    document.write(item.firstName + '<br>')
})