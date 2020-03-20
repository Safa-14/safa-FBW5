let grade = 60
let stop1Year = true

let safaPromise = new Promise ((resolve,reject) => {
    if (grade >= 60) {
        resolve('You will be a software engineer')
    } else {
        reject('You will be a software engineer assistant ')
    }
})



let safaPromise1 = new Promise ((resolve,reject) => {
    if (stop1Year) {
        resolve(true)
    } else {
        reject(false)
    }


})

///////////////////////////////////////////////////////
//        promise inside a promise using promise    //
///////////////////////////////////////////////////////


safaPromise.then (message => {
    safaPromise1.then(() => {
        console.log('you stopped one year so you are an assistant now')
    }).catch(() => {
        console.log(message)
    })
    
}).catch (errorMessage => {
    safaPromise1.then(()=> {
        console.log('you stopped one year so you need to stydy again')
    }).catch (() => {
        console.log(errorMessage)
    })
    
})




///////////////////////////////////////////////////////
//        promise inside a promise using asunc-away    //
///////////////////////////////////////////////////////

async function checkWorker() {
    let message = await safaPromise
    let isStop = await safaPromise1
    console.log(message)
    console.log(isStop)
}

checkWorker()