// get data using promise call

// let getData = fetch ('/data.json')
// getData.then(response=> {
//     if (response.status == 200) {
//         let dataPromise = response.json()
//         dataPromise.then(data=> {
//             console.log(data)
//         }).catch(error => {
//             console.log(error)
//         })
        
//     } else {
//         console.log('there were errors in getting data')
//     }
    
// }).catch (error => {
//     console.log(error)
// })

/////////////////////////////////////////////////////
// get data using async away
////////////////////////////////////////////////////////
async function getData() {
    let response =await fetch('/data.json')  //with await it will return the value that it come from the promise
    let data =await response.json()    //convert it to an object
    console.log(data)
}

getData()













// let getPromise = fetch('/data.json')
// getPromise.then(response => {
//     //console.log(response.json())         //this is a promise so thats why we will call another promise
//     if (response.status == 200) {
//         let jsonPromise = response.json()
//         jsonPromise.then(data => {
//         console.log(data)
//     }).catch(error => {
//         console.log(error)
//     })
//     }else {
//         console.log('there is a problem with link ')
//     }
// }).catch(error => {
//     console.log(error)
// })