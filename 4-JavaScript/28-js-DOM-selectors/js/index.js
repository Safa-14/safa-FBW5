window.onload = () => {

    //document.getElementsBy
    let elements = document.getElementsByClassName('card-head')   //by classname return an arry of elements
    console.log(elements.length)
    let h3 = document.getElementsByTagName('h3')
    console.log(h3)
    
    //document.querySelector
    //querySelector get the first element in the document
    let elm = document.querySelector(".card-content")
    console.log(elm)  //return an object

    let elms =  document.querySelectorAll(".contact-container li ")
    console.log(elms)  //return an array



    console.log($ (".social a"))
}



//by classname return an array of elements
//only by id return an object
//ByTagName return an array of elements

function $ (selectorText) {
    return document.querySelectorAll(selectorText)
}