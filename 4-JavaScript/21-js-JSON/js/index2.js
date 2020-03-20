
// setTimeout(() => {
    

// let xhr = new XMLHttpRequest();

// xhr.open('GET','/data.json');
// xhr.send();
// let d = new Date()
//     console.log(d.getMilliseconds())
// xhr.onload = function () {   //when the data come
//     let d = new Date()
//     console.log(d.getMilliseconds())
//     // console.log(xhr.response)

//     //xhr.status response number 200 is ok,
//     //                           404 is page not found,
//     //                           500 server
//     if(xhr.status == 200){
//         console.log('All good')
//         //console.log(xhr.statusText)
//         //xhr.response data coming back from the server
//         console.log(xhr.response )
//     }else{
//         console.log(xhr.statusText)
//         console.log('Error number : ' + xhr.status)
//     }
// } 
// }, 1000);





////////////////////////////////////////
//          Second exemple            //
////////////////////////////////////////

let xhr = new XMLHttpRequest();

xhr.open('GET','https://api.chucknorris.io/jokes/random');
xhr.send();
xhr.onload = function(){
    if (xhr.status == 200) {
        //console.log(xhr.response)
        let joke =JSON.parse(xhr.response)
        console.log(joke.value)     //to see the joke
        document.write('<img src="'+joke.icon_url +'" >')
        document.write('<p> ID : ' + joke.id + '<p>')
        document.write('<p> Joke : ' + joke.value + '<p>')
    } else {
        console.log('error number is : ' + xhr.status)
    }
}

////////////////////////////////////////
//        Second exemple  DATA        //
////////////////////////////////////////
// let xhr = new XMLHttpRequest()

// xhr.open('GET','/data.json');
// xhr.send();
// xhr.onload = function () {
//     if (xhr.status == 200) {
//         let obj =JSON.parse(xhr.response)
//         for (let i = 0; i < obj.arrayOfProducts.length; i++) {
//             document.write('<img src="'+obj.arrayOfProducts[i].imgUrl +'" width="200px">');   
//             document.write('<p> Name:  ' + obj.arrayOfProducts[i].name + '<p> ')
//             //document.write('<p> Price : ' + obj.arrayOfProducts[i].price + '<p><br>')
//             document.write('Price: <sup><del>'+obj.arrayOfProducts[i].price1  +'Euro </del> </sup>'+ obj.arrayOfProducts[i].price  +'Euro <br>')
//         }
        
//     } else {
//         console.log('error number is : ' + xhr.status)
//     }
// }