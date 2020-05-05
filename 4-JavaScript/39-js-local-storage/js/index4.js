window.onload = function () {
    //get HTML elements
    let nameInput = document.querySelector('#nameInput')
    let birthInput = document.querySelector('#birthInput')
    let aboutText = document.querySelector('#aboutText')

    

    let btn = document.querySelector('#saveFormBtn')


    btn.addEventListener('click', function () {
        let me = {
            name: nameInput.value,
            birthDate : birthInput.value,
            aboutMe : aboutText.value
        }
        console.log(me)
        localStorage.setItem('user', JSON.stringify(me)) //on the data we need to serve as string



        //localStorage.setItem('name',name.value)
        // let x = localStorage.getItem('name')
        // let y = localStorage.getItem('birthdate')
        // let z = localStorage.getItem('text')

        // if (x != null & y != null & z != null) {
        //     localStorage.setItem('name', name.value)
        //     name.value = x
        //     localStorage.setItem('birthdate', birthdate.value)
        //     birthdate.value = y
        //     localStorage.setItem('text', text.value)
        //     text.value = z



        // } else {
        //     localStorage.setItem('name', 'khj')
        //     name.value = 0
        //     localStorage.setItem('birthdate', 'hjkk')
        //     birthdate.value = 0
        //     localStorage.setItem('text', 'gkjk')
        //     text.value = 0
        // }


    })
    //get data from local storage
    let meJson = localStorage.getItem('user')
    //check data is not empty
    if (meJson != null) {
        let meObj = JSON.parse(meJson)
        nameInput.value = meObj.name
        birthInput.value = meObj.birthDate
        aboutText.value = meObj.aboutMe

    } 

}