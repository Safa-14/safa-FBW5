async function getJoke() {
    let response =await fetch('https://api.chucknorris.io/jokes/random')
    let data =await response.text()
    
    console.log(data)
}

getJoke()