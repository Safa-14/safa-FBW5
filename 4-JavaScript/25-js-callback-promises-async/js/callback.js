function sayHello(cb) {
    setTimeout(() => {
        console.log('Hello')
        cb()
    }, 1000);
}

sayHello(() => {
    console.log('world')
}) 

////////////////////////////////

function someFun (word,cb) {
    cb()
    console.log(word)
    
}


someFun ('Hi',() => {
    console.log('I am a callback function')
})