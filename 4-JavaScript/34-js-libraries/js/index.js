window.onload = function () {
    //MY DATA THAT SHOULD BE SHOW IN THE TABLE
    //TUTORIAL LINK IS https://www.cssscript.com/dynamic-data-table-vanilla-javascript/
    let myData = {
        "headings": ['product name', 'product price', 'quantity', 'total'],
        "data": [
            ["keyboard", '5', '10', '50 Eur'],
            ["mouse", '5', '10', '50 Eur'],
            ["screen", '50', '10', '500 Eur']
        ]
    }


    let myTable = document.querySelector('#myTable')
    let myDataTable = new DataTable(myTable, {
        data: myData,
        nextPrev: false,
        searchable: false
    })

    let productNameInput = document.querySelector('#productNameInput')
    let productPriceInput = document.querySelector('#productPriceInput')
    let quantityInput = document.querySelector('#quantityInput')

    document.querySelector('#addRowBtn').addEventListener('click', function (e) {
        
        let x = calc(productPriceInput,quantityInput) + ' Eur'
        
        myDataTable.rows().add([productNameInput.value, productPriceInput.value, quantityInput.value, x]);
        // myDataTable.rows().add([productNameInput, productPriceInput, quantityInput, x]);
        // console.log(productNameInput)

        productNameInput.value = ''
        productPriceInput.value = ''
        quantityInput.value = ''
    })
}

function calc(productPriceInput,quantityInput) {
    price = parseFloat(productPriceInput.value)
    quantity = parseFloat(quantityInput.value)

    return (price * quantity)
}
