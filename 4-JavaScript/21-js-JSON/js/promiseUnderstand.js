let somePromise = new Promise((resolve, reject) => {
    if (true) {
        resolve('I am done')
    } else {
        reject('there is an error')
    }
});


somePromise.then((value) =>{
    console.log(value)
}).catch((value) => {
    console.log(value)
})




////////////////////////////////////
////////////////////////////////////

function essai (){
    let somePromise = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open('GET','/data.json');
        xhr.send();
        xhr.onload = function(){
            if (xhr.status == 200) {
                resolve(JSON.parse(xhr.response))
            }else {
                reject('connection Problem')
            }
        }

    })
    return somePromise
}

essai().then(theResponse => {
    console.log(theResponse)
}).catch(error =>{
    console.log(error)
})
