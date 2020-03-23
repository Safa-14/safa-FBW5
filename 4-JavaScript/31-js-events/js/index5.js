window.onload = () => {
    let container = document.querySelector('#container')
    let reset = document.querySelector("button")
    getJoke()
    reset.addEventListener("click",function (e) {
        getJoke()
        e.preventDefault()
    })
}

async function getJoke() {
    let response =await fetch('https://api.chucknorris.io/jokes/random')
    let data =await response.text()
    let joke =JSON.parse(data)
    //console.log(joke)
    
    let jokeImage = document.querySelector('img')
    jokeImage.setAttribute('src',joke.icon_url)
    
    

    let jokeId = document.querySelector('#container>div:nth-child(2)')
    jokeId.innerHTML="ID: <br>"+ joke.id

    let jokevalue = document.querySelector('#container>div:nth-child(3)')
    jokevalue.innerHTML="Joke: <br>"+joke.value
    
}