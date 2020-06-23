window.onload =  () => {
    //Task1
    //on save button click username and email values should 
    //be save inside the local storage as one key
    const usernameInput=document.querySelector('#username')
    const emailInput=document.querySelector('#email')
    const btn1=document.querySelector('#btn1')

    //add click event to the btn
    btn1.onclick = function (e) {
        if (usernameInput.value.trim() && emailInput.value.trim()) {
            //create an object with properties from inputs values
            const personObj = {
                usernameObj : usernameInput.value,
                emailObj : emailInput.value
            }
            //save the object inside the local storage as json string
            localStorage.setItem('person',JSON.stringify(personObj))  
        }
               

    }

    //fill the input with data inside the local storage if exists
    //get string data from local storage using the key 'person
    const jsonData = localStorage.getItem('person')
    //check if data is not empty or exist
        if (getData != null) {
            //convert the json text to object
            let obj = JSON.parse(jsonData)
            //fill inputs with data from the object
            usernameInput.value = obj.usernameObj
            emailInput.value = obj.emailObj
        }

}