window.onload = () => {
    
    let container = document.querySelector('#container')
    let jokeImage = document.createElement("img")
    jokeImage.setAttribute('src',joke.icon_url)
    container.append(jokeImage)
    container.append(jokeId)
    container.append(jokeValue)

    let jokeId = document.createElement("p")

    let jokeValue = document.createElement("p")
    getJoke(jokeImage,jokeId,jokeValue)


    let reset = document.querySelector("button")
    reset.addEventListener("click",function (e) {
        getJoke(jokeImage,jokeId,jokeValue)
        e.preventDefault()
    })
}

async function getJoke(jokeImage,jokeId,jokeValue) {
    let response =await fetch('https://api.chucknorris.io/jokes/random')
    let data =await response.text()
    let joke =JSON.parse(data)
    //console.log(joke)
    
   
    jokeImage.setAttribute('src',joke.icon_url)
    


    jokeId.innerHTML = "ID: "+ joke.id
    

    jokeValue.innerHTML = "Joke: "+joke.value
    




    // let jokeImage = document.querySelector('img')
    // jokeImage.setAttribute('src',joke.icon_url)

    // let jokeId = document.querySelector('#container>div:nth-child(2)')
    // jokeId.innerHTML="ID: "+ joke.id

    // let jokevalue = document.querySelector('#container>div:nth-child(3)')
    // jokevalue.innerHTML="Joke: "+joke.value
    
}