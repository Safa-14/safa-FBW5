function funWithDelay(num,cb) {
    setTimeout(() => {
        cb(num * 2)
    }, 2000);
}

funWithDelay(5, callBackFun)

function callBackFun(toPrint) {
    console.log(toPrint)
}