function foo1() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('foo1 is done')
        },1000)
    })
}

function foo2() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('foo2 is done')
        },2000)
    })
}

function foo3() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('foo3 is done')
        },3000)
    })
}

// (async ()=>{
//     const result1 = await foo1()
//     console.log(result1);

//     const result2 = await foo2()  //will run after 2s after foo1
//     console.log(result2);

//     const result3 = await foo3() //will run after 3s after foo2
//     console.log(result3);
    
// })()
/////// will give like this 
// foo1 is done
// foo2 is done
// foo3 is done


//when we want to run foo1 and foo2 together we need to use promise.all);

const promis1 = foo1()
const promis2 = foo2()

Promise.all([promis1,promis2]).then(results => {
    console.log(results);
    foo3().then(result3 => {
        console.log(result3);
        
    })
    
})