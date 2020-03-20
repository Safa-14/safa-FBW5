let study2Hours = true

let ahmadPromise = new Promise((resolve,reject) => {
    if (study2Hours) {
        resolve('you will be developer')
    }else {
        reject ('I don"t know, maybe you will or maybe you will not')
    }
})

ahmadPromise.then(message => {
    console.log(message)
}).catch(error => {
    console.log(error)
})