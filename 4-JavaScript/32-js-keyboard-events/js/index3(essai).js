window.onload = () => {
   //////////////////////////////////////////////////////////////////////
   //__________________Declaration of elements from HTML________________
   ////////////////////////////////////////////////////////////////////// 
   let productDiv = document.querySelector('.products>div:nth-child(2)') 
   let productInput = document.querySelector('.product div:nth-child(1) input')
    let priceInput = document.querySelector('.product div:nth-child(2) input')
    let quantityInput = document.querySelector('.product div:nth-child(3) input')
    let resultSpan = document.querySelector('.product div:nth-child(4) span')
    console.log(productInput.value)
    productInput.addEventListener('keyup', function (e) {
        if(e.which == 13){
            priceInput.focus() 
            
            
        }
    })

    
    
    //////////////////////////////////////////////////////////////////////
   //__________________CALL OF SUMME FUNCTION   ________________
   //////////////////////////////////////////////////////////////////////
    setEvent('keyup',priceInput,priceInput,quantityInput,resultSpan, 'price',productInput)
    setEvent('change',priceInput,priceInput,quantityInput,resultSpan, 'price',productInput)
    setEvent('keyup',quantityInput,priceInput,quantityInput,resultSpan, 'quantity',productInput,productDiv)
    setEvent('change',quantityInput,priceInput,quantityInput,resultSpan, 'quantity',productInput,productDiv)
    
    
    let newProduct = document.querySelector('#newProduct')
    newProduct.addEventListener('click', function (e) { 
        e.preventDefault()
        let productInputsArr = document.querySelectorAll('.product div:nth-child(1) input')
        let check = true
        productInputsArr.forEach(element => {
            if (element.value.trim() == '') {
                check = false
                element.focus()
            } 
        });
        if (check){
            newProductCreator()
        }
        
    })

    
    let generate = document.querySelector('#invoiceGenerate')
    generate.addEventListener('click',function (e)  {
        
        e.preventDefault()
        let productsArr = document.querySelectorAll('.products .product')
        console.log(productsArr[0].children)
        let printTable = document.querySelector('#printTable tbody')
    //remove all old rows from the table   
        
        
    //finish removing from the table
    printTable.innerHTML = ''
document.querySelector('#printSection .sumTotal').innertext = ''
    for (let i = 1; i < productsArr.length; i++) {
        
        if (productsArr[i].children[0].children[0].value.trim() == '') {
            productsArr[i].children[0].children[0].focus()
            return
        } 
    }



        for (let i = 1; i < productsArr.length; i++) {
            let newRow = document.createElement('tr')

            let productTd =document.createElement('td')
            productTd.innerText = productsArr[i].children[0].children[0].value
            newRow.append(productTd)

            let priceTd = document.createElement('td')
            priceTd.innerText = productsArr[i].children[1].children[0].value + ' EUR'
            newRow.append(priceTd)

            let quantityTd = document.createElement('td')
            quantityTd.innerText = productsArr[i].children[2].children[0].value
            newRow.append(quantityTd)

            let totalTd = document.createElement('td')
            totalTd.innerText = productsArr[i].children[3].children[0].innerText
            newRow.append(totalTd)

            printTable.append(newRow)
        }

        let sumTotal = document.querySelector('.sumTotal')
        document.querySelector('#printSection .sumTotal').innerText = sumTotal.innerText

    })

}







   //////////////////////////////////////////////////////////////////////
   //________first function: CALCULATE THE SUM AND TOTAL SUM____________
   //////////////////////////////////////////////////////////////////////
function setEvent(eventName,triggerElement, priceElement, quantityElement, resultElement, elementType,productInput,productDiv) {
    triggerElement.addEventListener(eventName, function (e) {
    let price = parseFloat(priceElement.value)
    let quantity = parseFloat(quantityElement.value)
    resultElement.innerText = (price * quantity) + ' EUR'

    // querySelect return only the first founded element
    // querySelectAll return all elements match the selector
    let spansArr = document.querySelectorAll('.product>div>span')
    let storage = 0
    console.log(typeof(spansArr))
    spansArr.forEach(element => {
        let innerValue = element.innerText.replace(' EUR', '')
        let price = parseFloat(innerValue)

      storage += price
    });
    let sumTotlaElement = document.querySelector('.sumTotal')
    sumTotlaElement.innerText = storage + ' Euro'

    if(elementType == 'price' && eventName == 'keyup' ){
        if(e.which == 13){
            quantityElement.focus()
        }
    }
    if(elementType == 'quantity' && eventName == 'keyup' ){
        if(e.which == 13){
            ///// FIRST METHOD  ///
            let productInput = priceElement.parentElement.parentElement.children[0].children[0]
            // //console.log(productInput)
            let currentProduct = priceElement.parentElement.parentElement
            let products = priceElement.parentElement.parentElement.parentElement
            let childrenArr = Array.from(products.children) //convert collection to Array so we can use indexof
            //childrenArr=secondArr(priceElement)
            console.log(childrenArr.indexOf(currentProduct))
            console.log(childrenArr.length)
            let productsLength = childrenArr.length
            let currentProductIndex = childrenArr.indexOf(currentProduct)
            if (productInput.value.trim() != '') {
                if (productsLength-1 == currentProductIndex ) {
                    newProductCreator()
                }else{
                    childrenArr[currentProductIndex +1].children[0].children[0].focus()
                }
                
            } 
            //tdCreator(childrenArr) 
            ///// SECOND METHOD  ///
            // if (productInput.value.length != 0){
            //     if(productDiv.nextElementSibling == null){ 
            //         newProductCreator()
            //     }else{
            //         productDiv.nextElementSibling.querySelector('div:nth-child(1) input').focus()
            //     }
                
            // }else {
            //     alert('NO product Name : you should fill it first');
            // }
              
        }
    }
    

  })
}

   //////////////////////////////////////////////////////////////////////
   //________SECOND function: make the other inputs____________
   //////////////////////////////////////////////////////////////////////

function newProductCreator() {
    let productDiv = document.createElement('div')
    productDiv.classList.add('product')

    let firstDiv = document.createElement('div')
    let newproductInput = document.createElement('input')
    newproductInput.type = 'text'
    firstDiv.append(newproductInput)
    productDiv.append(firstDiv)

    let secondDiv = document.createElement('div')
    let newPriceInput = document.createElement('input')
    newPriceInput.type = 'number'
    newPriceInput.setAttribute('min', '0')
    newPriceInput.value = '0'
    secondDiv.append(newPriceInput)
    productDiv.append(secondDiv)

    let thirdDiv = document.createElement('div')
    let newquantityInput = document.createElement('input')
    newquantityInput.type = 'number'
    newquantityInput.setAttribute('min', '0')
    newquantityInput.value = '0'
    thirdDiv.append(newquantityInput)
    productDiv.append(thirdDiv)

    let fourthDiv = document.createElement('div')
    let newResultSpan = document.createElement('span')
    newResultSpan.innerText = '0 EUR'
    fourthDiv.append(newResultSpan)
    productDiv.append(fourthDiv)

    let productsDiv = document.querySelector('.products')
    productsDiv.append(productDiv)

    setEvent('keyup',newPriceInput, newPriceInput, newquantityInput, newResultSpan,'price',newproductInput)
    setEvent('change',newPriceInput, newPriceInput, newquantityInput, newResultSpan,'price',newproductInput)
    setEvent('keyup',newquantityInput, newPriceInput, newquantityInput, newResultSpan, 'quantity',newproductInput,productDiv)
    setEvent('change',newquantityInput, newPriceInput, newquantityInput, newResultSpan,'quantity',newproductInput,productDiv)
    // here you need to write your events handler

    newproductInput.addEventListener('keyup', function (e) {
        if(e.which == 13){
            newPriceInput.focus()
        }
    })
    newproductInput.focus()

}




// function tdCreator (priceElement) {
//     newProductCreator()
    
//     let table = document.querySelector('#printTable')
//     let tr = document.createElement('tr')
//     let td =document.createElement('td')
    
//     table.append(tr)
//     tr.append(td)
//     console.log(typeof(tr))
//     //let trArray = Array.from(tr)
    
//     // for (let i = 0; i < trArray.length; i++) {
//     //     let childArr=childrenArr.innerText
//     //     trArray[i].push(childArr[i])
//     //     table.innerText = childArr[i]
        
//     // }

//     let result = []
//   let rows = table.rows;
//   let cells, t;

//   // Iterate over rows
//   for (var i=0, iLen=rows.length; i<iLen; i++) {
//     cells = rows[i].cells;
//     t = [];

//     // Iterate over cells
//     for (var j=0, jLen=cells.length; j<jLen; j++) {
//       t.push(cells[j].textContent);
//     }
//     result.push(t);
//   }
//   x= result
//   arr2 =secondArr(priceElement) 
//   arr2.forEach(element => {
//     result.push(element)
//   });
//   return result

// }

// function secondArr(priceElement){
//     //let productInput = priceElement.parentElement.parentElement.children[0].children[0]
//     //console.log(productInput)
//     //let currentProduct = priceElement.parentElement.parentElement
//     let products = priceElement.parentElement.parentElement.parentElement
//     let childrenArr = Array.from(products.children) //convert collection to Array so we can use indexof
//     return childrenArr
// }