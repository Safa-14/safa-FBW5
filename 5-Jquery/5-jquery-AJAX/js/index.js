$(document).ready(function () {
    // $.ajax({
    //     type: "method",          //get ,post , update
    //     url: "url",              //the url ./data.json
    //     data: "data",            //data to send 
    //     dataType: "dataType",    //data type json,text
    //     success: function (responGETse) {

    //     }
    // });



    //GET DATA
    $.ajax({
        type: "GET",
        url: "./data.json",
        success: function (response) {
            console.log(response.arrayOfProducts);
        },
        error: function (error) {
            console.log(error);

        }
    });


    getData(prompt('enter a search word'), prompt('Number in Page'), prompt('enter the page number'))

});

function getData(keyWord, numInPage, pageNumber) {
    //POST DATA
    let obj = {
        "requests": [{
            "indexName": "ikea",
            "params": "query=" + keyWord + "&hitsPerPage=" + numInPage + "&page=" + pageNumber
        }]
    }

    $.ajax({
        type: "POST",
        url: "https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency",
        data: JSON.stringify(obj),
        dataType: 'json',
        success: function (response) {
            console.log(response.results[0].hits); //we get an array
            let product = ''

            response.results[0].hits.forEach(element => {
                product += element.name + '&nbsp &nbsp &nbsp'
                for (let i = 0; i < element.rating; i++) {
                    
                    product += '<span class="star"></span> &nbsp &nbsp'
                }
                
                product += element.price + 'Euro &nbsp &nbsp &nbsp'
                product += '<img src="' + element.image + '" width="50" height="50"> <br>'
            });
            $('#someDiv').html(product);
        }
    });
}