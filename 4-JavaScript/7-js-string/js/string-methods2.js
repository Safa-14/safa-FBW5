let str = "Hello World"
//search is like indexOf
//console.log(str.search("World"))  


console.log(str.slice(6,8))  //to cut from 6 to 8 and schow the new word


function findIndexSecond (txt){
    
    return txt.indexOf(" ")+1
    
}
console.log(findIndexSecond ("Hello World"))



function findIndexThird (txt){
    
    // let firstSpaceIdx=txt.indexOf(" ")
    // let secondSpaceIdx=txt.indexOf(" ",firstSpaceIdx+1)
    // return secondSpaceIdx +1

    return txt.indexOf(" ",txt.indexOf(" ")+1)+1
    // return txt.indexOf(" ",findIndexSecond (txt))+1
    
}
console.log(findIndexThird  ("Hello World how"))




function getSecondWord (txt){
    let start=findIndexSecond (txt)
    let end=findIndexThird (txt)-1
    return txt.slice(start,end)

    // return txt.slice(findIndexSecond (txt),findIndexThird (txt)-1)
    
}
console.log(getSecondWord ("Hi my name is Safa"))

