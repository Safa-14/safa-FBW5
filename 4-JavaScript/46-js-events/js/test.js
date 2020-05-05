window.onload = () => {
    let outside = document.querySelector('#test')
    outside.addEventListener('blur' , function (e) {
       
         alert('You clicked outside.');          
        
    })

}