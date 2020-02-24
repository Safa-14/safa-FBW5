let x = 0

setTimeout(() => {
    document.write('Hi <br>')
    x = 5
    blaCallBck(x) 
},5000)  //will be show after 5s

document.write(x + ' <br>')  //will be overwrite after 5s

function blaCallBck(t) {
    document.write(10 / t)
}
 