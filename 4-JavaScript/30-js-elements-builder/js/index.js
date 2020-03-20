window.onload = () => {
    let container = document.querySelector('#container')

    let titleElm = document.createElement('h3') //create the element
    titleElm.id = 'header1' //add an id
    titleElm.innerText = 'FBW5' //to add the content that i want to be showed to the element i created
    container.append(titleElm) //to add something on the div with class container on the html 

    let articleElm = document.createElement('p')
    articleElm.innerText = "Dont worry , be happy, Corona"//add a content
    articleElm.classList.add('par1') //add a class
    container.append(articleElm)  

    let span1 = document.createElement('span')
    span1.innerHTML = ', <br>I am span 1'
    articleElm.append(span1)

    let htmlText = ' <section>'+
                        '<h2>title</h2>'+
                        '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, et iure nemo exercitationem esse officia, nam fuga harum qui quidem quisquam ex. Et, animi officia consectetur exercitationem aliquid unde doloremque.</p>'+
                    '</section>'
    let container2 = document.querySelector('#container2')
    for (let i = 0; i < 100; i++) {
        container2.innerHTML += htmlText 
    }
    

    
}