//////////////////////////////////////////////////
//               First Solution                 //
//////////////////////////////////////////////////
let xhr = new XMLHttpRequest()

xhr.open('GET','/data.json');
xhr.send();
xhr.onload = function () {
    if (xhr.status == 200) {
        let products =JSON.parse(xhr.response).arrayOfProducts
        for (let i = 0; i < products.length; i++) {
            let productHtml =(i+1) + '  <img src="'+products[i].imgUrl +'" width="50">';   
            productHtml += '    ' + products[i].name ;
            productHtml += '<sub><del>  '+(products[i].price*2)  +'Euro </del> </sub>'
            productHtml += '<b>      '+products[i].price  + 'Euro </b> <br>';
            document.write(productHtml)
            
        } 
        
        //document.close()  //to close the loading page

        // products.forEach(product => {
        //     let productHtml = '<img src="'+product.imgUrl +'" width="50">';   
        //     productHtml += '    ' + product.name ;
        //     productHtml += '<sub><del>  '+(product.price*2)  +'Euro </del> </sub>'
        //     productHtml += '<b>      '+product.price  + 'Euro </b> <br>';
        //     document.write(productHtml)
        // });{
            
        
        
    } else {
        console.log('error number is : ' + xhr.status)
    }
}




//////////////////////////////////////////////////
//               Second Solution                 //
//////////////////////////////////////////////////
// let xhr1 = new XMLHttpRequest()

// xhr1.open('GET','/data.json');
// xhr1.send();
// xhr1.onload = function () {
//     if (xhr1.status == 200) {
//         let products =JSON.parse(xhr1.response)
//         for (let i = 0; i < products.arrayOfProducts.length; i++) {
//             document.write('<img src="'+products.arrayOfProducts[i].imgUrl +'" width="200px">');   
//             document.write('<p> Name:  ' + products.arrayOfProducts[i].name + '<p> ')
//             //document.write('<p> Price : ' + obj.arrayOfProducts[i].price + '<p><br>')
//             document.write('Price: <sup><del>'+products.arrayOfProducts[i].price1  +'Euro </del> </sup>'+ products.arrayOfProducts[i].price  +'Euro <br>')
//         }
        
//     } else {
//         console.log('error number is : ' + xhr1.status)
//     }
// }