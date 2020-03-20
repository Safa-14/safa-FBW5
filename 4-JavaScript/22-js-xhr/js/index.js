function getProducts(keyWord,numInPage,pageNumber) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST','https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency')
    
    
    let obj = {
        "requests":[
            {"indexName":"ikea","params":"query="+keyWord+"&hitsPerPage="+numInPage+"&page="+pageNumber}
        ]
    }
    
    xhr.send(JSON.stringify(obj) ); //when we send a data we need to send a string thats why we convert the object to string
    xhr.onload = function() {
        if (xhr.status == 200) {
            let convertedObj=JSON.parse(xhr.response) //when we want to receive the data it will come to us as a string so we transfert it to object to see it as an object
            console.log(convertedObj.results[0].hits[0])
            let htmlText = '';
            convertedObj.results[0].hits.forEach(product => {
                htmlText += product.name + '     '
                htmlText += product.description + '     '
                htmlText += product.price + 'Euro     '
                htmlText +='<img src="'+ product.image + '">     <br>'
    
            });
            document.write(htmlText)
            document.close
        }else {
            console.log(xhr.status)
        }
    }
}

// let enteredText = prompt('enter a search word')
// console.log(en)
getProducts(prompt('enter a search word'),prompt('Number in Page'),prompt('enter the page number'))