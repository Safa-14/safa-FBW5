window.onload = () => {
    let jokBtn = document.querySelector("#jokBtn")
    //getJoke()
    getJokesSync()

    jokBtn.addEventListener("click",function (e) {
        //getJoke()
        getJokesSync()
        e.preventDefault()
    })
}

//THIS FUNCTION GONNA BE CALLED IN FIRST PAGE LOAD AND IN THE CLICK EVENT FOR THE BUTTON
function getJoke() {
    //GETTING THE ELEMENTS FROM HTML TO BE FILLES WITH DATA
    let jokImg = document.querySelector('#jokImg')
    let jokId = document.querySelector('#jokId')
    let jokPar = document.querySelector('#jokPar')

    //GETTING THE JOK FROM API USING FETCH AND PROMISE
    let url = 'https://api.chucknorris.io/jokes/random'
    fetch(url).then(data => {
        if (data.status == 200) {
            data.json().then(jokObj => {
                jokImg.src = jokObj.icon_url
                jokId.innerText =jokObj.id
                jokPar.innerText=jokObj.value
            }).catch(error => {
                console.log(error)
            })
        }
    }).catch(error => {
        console.log(error)
    })
    
}

//THIS FUNCTION GONNA BE CALLED IN FIRST PAGE LOAD AND IN THE CLICK EVENT FOR THE BUTTON AND IT USE ASYNC AWAY
async function getJokesSync() {
    //GETTING THE ELEMENTS FROM HTML TO BE FILLES WITH DATA
    let jokImg = document.querySelector('#jokImg')
    let jokId = document.querySelector('#jokId')
    let jokPar = document.querySelector('#jokPar')

    let url = 'https://api.chucknorris.io/jokes/random'
    let data = await fetch(url)
    if (data.status == 200) {
        let jokObj = await data.json()
        //console.log(jokObj)

        jokImg.src = jokObj.icon_url
        jokId.innerText =jokObj.id
        jokPar.innerText=jokObj.value


    }else {
        jokPar.innerText = 'error with getting data'
    }
}