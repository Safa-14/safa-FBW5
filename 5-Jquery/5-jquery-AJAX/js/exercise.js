$(document).ready(function () {
    
    //POST DATA
    let obj = {
        "requests": [{
            "indexName": "ikea",
            "params": "query=chair&hitsPerPage=100&page=1"
        }]
    }

    $.ajax({
        type: "POST",
        url: "https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency",
        data: JSON.stringify(obj),
        dataType: 'json',
        success: function (response) {
            console.log(response.results[0].hits); //we get an array
            let dataArr = response.results[0].hits
            let container = $('.container')

            dataArr.forEach(product => {
                let htmlString =`<div class="product">
                <div>${product.name}</div>
                <div>
                    <span class="gray"></span>
                    <span class="gray"></span>
                    <span class="gray"></span>
                    <span class="gray"></span>
                    <span class="gray"></span>
                </div>
    
                <div>${product.price} Euro</div>
                <div>
                    <img src="${product.image}" alt="" width="100">
                </div>
            </div>`

                //IMPORTANT CONVERT STRING TO JQUERY DOM element
                let htmlProduct = $(htmlString)

                //create Rate stars
                htmlProduct.find('div>span.gray').each(function (idx, star) { 
                    if (idx  < product.rating ){
                        $(star).addClass('gold');
                        $(star).removeClass('gray');
                    }
                });
                container.append(htmlProduct);
            });
            
        }
    });
});



