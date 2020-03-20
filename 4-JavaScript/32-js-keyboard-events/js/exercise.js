window.onload = () => {
    let priceInput = document.querySelector('.product div:nth-child(2) input')
    let quantityInput = document.querySelector('.product div:nth-child(3) input')
    let resultSpan = document.querySelector('.product div:nth-child(4) span')
    let productName = document.querySelector('input[type=text]')



    productName.addEventListener('keypress', function (e) {
        
        if(e.which == 13){
            priceInput.focus()
        }
        
    })
    priceInput.addEventListener('keypress', function (e) {
        
        if(e.which == 13){
            quantityInput.focus()
        }
        
    })

    
        
        // if(e.which == 13){
        //     //let newProduct =document.querySelector('#newProduct')
        //     //quantityInput.addEventListener('keypress', function (e) {
                
        //         e.preventDefault()
        //         let productDiv = document.createElement('div')
        //         productDiv.classList.add('product')
        
        //         let firstDiv = document.createElement('div')
        //         let productInput = document.createElement('input')
        //         productInput.type = 'text'
        //         firstDiv.append(productInput)
        //         productDiv.append(firstDiv)
        
        //         let secondDiv = document.createElement('div')
        //         let newPriceInput = document.createElement('input')
        //         newPriceInput.type = 'number'
        //         newPriceInput.setAttribute('min','0')
        //         newPriceInput.value = '0'
        //         secondDiv.append(newPriceInput)
        //         productDiv.append(secondDiv)//
        
        //         let thirdDiv = document.createElement('div')
        //         let newQuantityInput = document.createElement('input')
        //         newQuantityInput.type = 'number'
        //         newQuantityInput.setAttribute('min','0')
        //         newQuantityInput.value = '0'
        //         thirdDiv.append(newQuantityInput)
        //         productDiv.append(thirdDiv)//
        
        //         let firthDiv = document.createElement('div')
        //         let newResultSpan = document.createElement('span')
        //         newResultSpan.innerText = '0'
        //         firthDiv.append(newResultSpan)
        //         productDiv.append(firthDiv)
        
        //         let productsDiv = document.querySelector('.products')
        //         productsDiv.append(productDiv)
        
        //         setEvent('keyup', newPriceInput, newPriceInput, newQuantityInput,newResultSpan)
        //         setEvent('change', newPriceInput, newPriceInput, newQuantityInput,newResultSpan)
        //         setEvent('keyup', newQuantityInput, newPriceInput, newQuantityInput,newResultSpan)
        //         setEvent('change', newQuantityInput, newPriceInput, newQuantityInput,newResultSpan)
                
        //         productInput.focus()

        //         productInput.addEventListener('keypress', function (e) {
        
        //             if(e.which == 13){
        //                 newPriceInput.focus()
        //             }
                    
        //         })
        //         newPriceInput.addEventListener('keypress', function (e) {
        
        //             if(e.which == 13){
        //                 newQuantityInput.focus()
        //             }
                    
        //         })
              
        // }
        
        
        space (quantityInput)

    setEvent('keyup', priceInput, priceInput, quantityInput,resultSpan)
    // priceInput.addEventListener('keyup', function (e) { //with keyboard
    //     let price = parseFloat(priceInput.value)
    //     let quantity = parseFloat(quantityInput.value)
    //     calculator(resultSpan, price, quantity)
        

    // })
    setEvent('change', priceInput, priceInput, quantityInput,resultSpan)
    // priceInput.addEventListener('change', function (e) { //will change only when we click outside
    //     let price = parseFloat(priceInput.value)
    //     let quantity = parseFloat(quantityInput.value)
    //     calculator(resultSpan, price, quantity)
    // })

    setEvent('keyup', quantityInput, priceInput, quantityInput,resultSpan)
    // quantityInput.addEventListener('keyup', function (e) {
    //     let price = parseFloat(priceInput.value)
    //     let quantity = parseFloat(quantityInput.value)
    //     calculator(resultSpan, price, quantity)
    // })
    setEvent('change', quantityInput, priceInput, quantityInput,resultSpan)
    // quantityInput.addEventListener('change', function (e) {
    //     let price = parseFloat(priceInput.value)
    //     let quantity = parseFloat(quantityInput.value)
    //     calculator(resultSpan, price, quantity)
        
    // })
    
    // let newProduct =document.querySelector('#newProduct')
    // newProduct.addEventListener('click', function (e) {
        
    //     e.preventDefault()
    //     let productDiv = document.createElement('div')
    //     productDiv.classList.add('product')

    //     let firstDiv = document.createElement('div')
    //     let productInput = document.createElement('input')
    //     productInput.type = 'text'
    //     firstDiv.append(productInput)
    //     productDiv.append(firstDiv)

    //     let secondDiv = document.createElement('div')
    //     let newPriceInput = document.createElement('input')
    //     newPriceInput.type = 'number'
    //     newPriceInput.setAttribute('min','0')
    //     newPriceInput.value = '0'
    //     secondDiv.append(newPriceInput)
    //     productDiv.append(secondDiv)//

    //     let thirdDiv = document.createElement('div')
    //     let newQuantityInput = document.createElement('input')
    //     newQuantityInput.type = 'number'
    //     newQuantityInput.setAttribute('min','0')
    //     newQuantityInput.value = '0'
    //     thirdDiv.append(newQuantityInput)
    //     productDiv.append(thirdDiv)//

    //     let firthDiv = document.createElement('div')
    //     let newResultSpan = document.createElement('span')
    //     newResultSpan.innerText = '0'
    //     firthDiv.append(newResultSpan)
    //     productDiv.append(firthDiv)

    //     let productsDiv = document.querySelector('.products')
    //     productsDiv.append(productDiv)

    //     setEvent('keyup', newPriceInput, newPriceInput, newQuantityInput,newResultSpan)
    //     setEvent('change', newPriceInput, newPriceInput, newQuantityInput,newResultSpan)
    //     setEvent('keyup', newQuantityInput, newPriceInput, newQuantityInput,newResultSpan)
    //     setEvent('change', newQuantityInput, newPriceInput, newQuantityInput,newResultSpan)
        
    
    // })
    


}
//querySelect return only the firsy founded element
//querySelectorAll return all elements match the selector


function setEvent(eventName, triggerElement, priceElement, quantityElement,resultElement) {
    triggerElement.addEventListener(eventName, function (e) { //with keyboard
        let price = parseFloat(priceElement.value)
        let quantity = parseFloat(quantityElement.value)
        resultElement.innerText = (price * quantity) + ' EUR'
        /////////////////////////////////////
        //        FIRST SOLUTION           //
        ////////////////////////////////////
        let spansArr =document.querySelectorAll('.product>div>span')//selector all give us an array
        let storage = 0
        spansArr.forEach(element => {
            let innerValue = element.innerText.replace(' EUR', '')//delete the euro
            console.log(typeof(innerValue))  //string so we need to convert it to a float
            let price = parseFloat(innerValue)
            storage += price
        });
        let someTotalElement = document.querySelector('.sumTotal')
        someTotalElement.innerText = storage + 'Euro'

        /////////////////////////////////////
        //        SECOND SOLUTION         //
        ////////////////////////////////////
        // let list = document.getElementsByClassName('product')
        // let sum = 0
        // console.log(typeof(list)) //object
        // console.log(list)
        //summeSpan = document.querySelector('.sumTotal')
        // for (let item of list) {
	    
        //     sum += parseFloat(item.querySelector('div:nth-child(4) span').innerText)
        // }
    
        // summeSpan.innerText = sum + 'Euro'
    })
}

function space (quantityInput){
    quantityInput.addEventListener('keypress', function (e) {
    if(e.which == 13){
        //let newProduct =document.querySelector('#newProduct')
        //quantityInput.addEventListener('keypress', function (e) {
            
            e.preventDefault()
            let productDiv = document.createElement('div')
            productDiv.classList.add('product')
    
            let firstDiv = document.createElement('div')
            let productInput = document.createElement('input')
            productInput.type = 'text'
            firstDiv.append(productInput)
            productDiv.append(firstDiv)
    
            let secondDiv = document.createElement('div')
            let newPriceInput = document.createElement('input')
            newPriceInput.type = 'number'
            newPriceInput.setAttribute('min','0')
            newPriceInput.value = '0'
            secondDiv.append(newPriceInput)
            productDiv.append(secondDiv)//
    
            let thirdDiv = document.createElement('div')
            let newQuantityInput = document.createElement('input')
            newQuantityInput.type = 'number'
            newQuantityInput.setAttribute('min','0')
            newQuantityInput.value = '0'
            thirdDiv.append(newQuantityInput)
            productDiv.append(thirdDiv)//
    
            let firthDiv = document.createElement('div')
            let newResultSpan = document.createElement('span')
            newResultSpan.innerText = '0'
            firthDiv.append(newResultSpan)
            productDiv.append(firthDiv)
    
            let productsDiv = document.querySelector('.products')
            productsDiv.append(productDiv)
    
            setEvent('keyup', newPriceInput, newPriceInput, newQuantityInput,newResultSpan)
            setEvent('change', newPriceInput, newPriceInput, newQuantityInput,newResultSpan)
            setEvent('keyup', newQuantityInput, newPriceInput, newQuantityInput,newResultSpan)
            setEvent('change', newQuantityInput, newPriceInput, newQuantityInput,newResultSpan)
            
            productInput.focus()

            productInput.addEventListener('keypress', function (e) {
    
                if(e.which == 13){
                    newPriceInput.focus()
                }
                
            })
            newPriceInput.addEventListener('keypress', function (e) {
    
                if(e.which == 13){
                    newQuantityInput.focus()
                    space (newQuantityInput)
                }
                
            })

          
    }
})
}


// if (newproductInput != null) {
//     newproductInput.focus()
//     //typeof(newProduct) != 'undefined' && newProduct != null
// } else {
//     newProductCreator()
// }