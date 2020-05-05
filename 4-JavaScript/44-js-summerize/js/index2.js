window.onload =  () => {
    //Task1
    //on save button click username and email values should 
    //be save inside the local storage as one key
    const username=document.querySelector('#username')
    const email=document.querySelector('#email')
    const btn1=document.querySelector('#btn1')

    //add click event to the btn
    btn1.onclick = function (e) {
        if (username.value.trim() && email.value.trim()) {
            //create an object with properties from inputs values
            const personObj = {
                usernameObj : username.value,
                emailObj : email.value
            }
            //save the object inside the local storage as json string
            localStorage.setItem('person',JSON.stringify(personObj))  
        }
               

    }
    let getData = localStorage.getItem('person')
        if (getData != null) {
            let obj = JSON.parse(getData)
            username.value = obj.usernameObj
            email.value = obj.emailObj
        }

}