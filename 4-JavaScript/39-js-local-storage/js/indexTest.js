window.onload = function () {
    // let browserDateElement = document.querySelector('#browserDateElement')

    // localStorage.setItem('Date',new Date())
    // let x= localStorage.getItem('Date')
    // if (x) {
    //   browserDateElement.innerText = x  
    // }
    

    let count = document.querySelector('#count')

    // localStorage.setItem('account',1)
    let x= localStorage.getItem('account')
    
    if (x) {
        
        
        count.innerText = x
        localStorage.setItem('account',parseInt(x)+1)
    }else {
        localStorage.setItem('account',1)
        count.innerText = 0
    }

}