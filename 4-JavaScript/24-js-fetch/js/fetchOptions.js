async function getProducts(keyWord, numInPage, pageNum) {
    let url ='https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency'
    let obj = {
        "requests":[
            {"indexName":"ikea",
            "params":"query="+keyWord+"&hitsPerPage="+numInPage+"&page="+pageNum}
        ]
    };

    let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(obj)
    })
    let resultData = await response.json()
    console.log(resultData)

}

getProducts('chee', 10, 1)


//get use the link to sent the data  :not secure
//post send the data will be header inside the body : to send data that you want niemand to see it