$(document).ready(function () {
    let productInput = $('#productInput').val();
    var availableTags = []

    console.log(availableTags);

    

    $('#productInput').keyup(function (e) { 
        $('#productInput').autocomplete({
            
            minLength: 3,
            // source: availableTags
            source: function(request, response) {
                var results = $.ui.autocomplete.filter(availableTags, request.term);
        
                response(results.slice(0, 5));
            }
        });
    });
    getData(productInput, availableTags)


});


function getData(keyWord, availableTags) {
    //POST DATA
    let obj = {
        "requests": [{
            "indexName": "ikea",
            "params": "query=" + keyWord + "&hitsPerPage=100&page=1"
        }]
    }

    $.ajax({
        type: "POST",
        url: "https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency",
        data: JSON.stringify(obj),
        dataType: 'json',
        success: function (response) {

            let dataArr = response.results[0].hits
            console.log(dataArr);

            dataArr.forEach(product => {
                availableTags.push(product.type)
            })
        }
    });
}


















// console.log(response.results[0].hits); //we get an array
//             let product = ''

//             response.results[0].hits.forEach(element => {
//                 product += element.name + '&nbsp &nbsp &nbsp'
//                 for (let i = 0; i < element.rating; i++) {

//                     product += '<span class="star"></span> &nbsp &nbsp'
//                 }

//                 product += element.price + 'Euro &nbsp &nbsp &nbsp'
//                 product += '<img src="' + element.image + '" width="50" height="50"> <br>'
//             });
//             $('#someDiv').html(product);