var summeSpan = null
window.onload = () => {
    let priceInput = document.querySelector('.product div:nth-child(2) input')
    let quantityInput = document.querySelector('.product div:nth-child(3) input')
    let resultSpan = document.querySelector('.product div:nth-child(4) span')
    summeSpan = document.querySelector('#summe')
    
    
    
    priceInput.addEventListener('keyup', function (e) { //with keyboard
        let price = parseFloat(priceInput.value)
        let quantity = parseFloat(quantityInput.value)
        calculator(resultSpan, price, quantity)

    })
    priceInput.addEventListener('change', function (e) { //will change only when we click outside
        let price = parseFloat(priceInput.value)
        let quantity = parseFloat(quantityInput.value)
        calculator(resultSpan, price, quantity)
    })


    quantityInput.addEventListener('keyup', function (e) {
        let price = parseFloat(priceInput.value)
        let quantity = parseFloat(quantityInput.value)
        calculator(resultSpan, price, quantity)
        // summeSpan.innerText = resultSpan.innerText
        // console.log(resultSpan.innerText)
    })
    quantityInput.addEventListener('change', function (e) {
        let price = parseFloat(priceInput.value)
        let quantity = parseFloat(quantityInput.value)
        calculator(resultSpan, price, quantity)
        
    })
    
    // num=parseFloat(summeSpan.innerText)
    // console.log(typeof(num))
    // num+=newResultSpan.innerText



    let newProduct =document.querySelector('#newProduct')
    newProduct.addEventListener('click', function (e) {
        
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


        newPriceInput.addEventListener('keyup', function (e) { //with keyboard
            let price = parseFloat(newPriceInput.value)
            let quantity = parseFloat(quantityInput.value)
            calculator(newResultSpan, price, quantity)
    
        })
        newPriceInput.addEventListener('change', function (e) { //will change only when we click outside
            let price = parseFloat(newPriceInput.value)
            let quantity = parseFloat(newQuantityInput.value)
            calculator(newResultSpan, price, quantity)
        })
    
    
        newQuantityInput.addEventListener('keyup', function (e) {
            let price = parseFloat(newPriceInput.value)
            let quantity = parseFloat(newQuantityInput.value)
            calculator(newResultSpan, price, quantity)
    
        })
        newQuantityInput.addEventListener('change', function (e) {
            let price = parseFloat(newPriceInput.value)
            let quantity = parseFloat(newQuantityInput.value)
            calculator(newResultSpan, price, quantity)
            
        })
        


    })


}

function calculator(resultElement1, price, quantity) {
    let sum = 0
    resultElement1.innerText = price * quantity
	var list = document.getElementsByClassName("product");
for (let item of list) {
	sum += parseFloat(item.querySelector('div:nth-child(4) span').innerText)
    
}
	summeSpan.innerText = sum
    
}
