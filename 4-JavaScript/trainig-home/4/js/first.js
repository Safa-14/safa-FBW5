window.onload = () => {
    
   // getting the static inputs which in the second row in products
   let productInput = document.querySelector('.product div:nth-child(1) input')
   let priceInput = document.querySelector('.product div:nth-child(2) input')
   let quantityInput = document.querySelector('.product div:nth-child(3) input')
   let resultSpan = document.querySelector('.product div:nth-child(4) span')
    
// call setEvent function to set keyup event for static priceInput
    setEvent('keyup',priceInput,priceInput,quantityInput,resultSpan, 'price')
    
// call setEvent function to set change event for static priceInput
    setEvent('change',priceInput,priceInput,quantityInput,resultSpan, 'price')

// call setEvent function to set keyup event for static quantityinput
    setEvent('keyup',quantityInput,priceInput,quantityInput,resultSpan, 'quantity')
    
// call setEvent function to set change event for static quantityinput
    setEvent('change',quantityInput,priceInput,quantityInput,resultSpan, 'quantity')
    


    // get the new entery link
    let newProduct = document.querySelector('#newProduct')
    // set click event for new entery link
    newProduct.addEventListener('click', function (e) {
    // prevent link click to jump to top of the page
        e.preventDefault()
        creator() 
    })

}


function setEvent(eventName,triggerElement, priceElement, quantityElement, resultElement, elementType) {
    triggerElement.addEventListener(eventName, function (e) {
        // change price to decimal number
            let price = parseFloat(priceElement.value)
        // change quantity to decimal number
            let quantity = parseFloat(quantityElement.value)
        // calculate the total and add the word EUR after
            resultElement.innerText = (price * quantity) + ' EUR'
    })
}

function creator() {
    // create product div
    let productDiv = document.createElement('div')
    // set class product to the div
        productDiv.classList.add('product')
  
    // create first div which will contain the product name input
        let firstDiv = document.createElement('div')
        let newproductInput = document.createElement('input')
        newproductInput.type = 'text'
        firstDiv.append(newproductInput)
        productDiv.append(firstDiv)
  
    // create second div which will contain the product price input
        let secondDiv = document.createElement('div')
        let newPriceInput = document.createElement('input')
        newPriceInput.type = 'number'
        newPriceInput.setAttribute('min', '0')
        newPriceInput.value = '0'
        secondDiv.append(newPriceInput)
        productDiv.append(secondDiv)
  
    // create third div which will contain the product quantity input
        let thirdDiv = document.createElement('div')
        let newquantityInput = document.createElement('input')
        newquantityInput.type = 'number'
        newquantityInput.setAttribute('min', '0')
        newquantityInput.value = '0'
        thirdDiv.append(newquantityInput)
        productDiv.append(thirdDiv)
  
    // create fourth div which will contain the product total span
        let fourthDiv = document.createElement('div')
        let newResultSpan = document.createElement('span')
        newResultSpan.innerText = '0 EUR'
        fourthDiv.append(newResultSpan)
        productDiv.append(fourthDiv)
  
    // get the div products whish contains all products
        let productsDiv = document.querySelector('.products')
    // add the created div product inside it
        productsDiv.append(productDiv)
  
    // set events for all new input price and quantity
        setEvent('keyup',newPriceInput, newPriceInput, newquantityInput, newResultSpan,'price')
        setEvent('change',newPriceInput, newPriceInput, newquantityInput, newResultSpan,'price')
        setEvent('keyup',newquantityInput, newPriceInput, newquantityInput, newResultSpan, 'quantity')
        setEvent('change',newquantityInput, newPriceInput, newquantityInput, newResultSpan,'quantity')
    // here you need to write your events handler
  
}









































// window.onload = () => {
//     let input1 = document.querySelector('#inpt1')
//     //let input2 = document.querySelector('#inpt2')
//     cab(input1)
// }



// function cab(input1) {
//     input1.addEventListener('keypress', function (e) {
//         let container = document.querySelector('#container')
//         if (e.which == 13) {
//             let input2 = document.createElement('input')
//             input2.setAttribute('type','text')
//             container.append(input2)
//             input2.focus()
//             cab(input2)
//         }
        
//         e.preventDefault()
        
//     })
// }