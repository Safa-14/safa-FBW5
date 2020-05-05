


window.onload = function () {
    setElem('container') 
}

function setElem(containerId) {
    //FIRST TASK
    //write js function that will receive div container as a parameter and create inside thid div an text input
    let container = document.querySelector('#'+containerId)
    if (container) {
        // 2 task
        // change your previuos function to add the input inside a div and this div
        //  suppose to be in the container
        let div1 = document.createElement('div')
        let input1 = document.createElement('input')
        input1.setAttribute('type','text')
        div1.append(input1)
        container.append(div1)

        // 3 task
        // add a button after the previous input
        // let btn = document.createElement('button')
        // btn.innerHTML = 'Click Me'
        // div1.append(btn)

        // 4 task 
        // add a div comes after the last div which contains input and button
        let div2 = document.createElement('div')
        container.append(div2)
        // let input2 = document.createElement('input')
        // div2.append(input2)
        let btn = document.createElement('button')
        btn.innerHTML = 'Search'
        div1.append(btn)



        let paggingDiv = document.createElement('div')
        div1.append(paggingDiv)

        //5 task
        // set class 'container' to the main div
        // set class 'controls-container' for the first child div
        container.classList.add('container')
        div1.classList.add('controls-container')
        div2.classList.add('images-container')

        // 6 task 
        // the 20 images should be shown only after click the search button
        btn.addEventListener('click',function (e) {
            
            e.preventDefault()
            getData (input1.value,div2,'1',paggingDiv)
            
            
        })

        // 7 task
        // delete old html content from div2 before adding the new 20 images


    } else {
        console.log('erreur')
    }
    
}


// 8 task
// https://pixabay.com/api/?key=12000491-41fc68d8c365df909e022ceb6&q=lion
// log the data that will be returned from the Api using fetch

async function getData (keyword,div2,pageNum,paggingDiv) {
    let url = 'https://pixabay.com/api/?key=12000491-41fc68d8c365df909e022ceb6&q='+keyword + '&page=' + pageNum
    let response=await  fetch(url)
    console.log (typeof(response))

    // 9 task 
    // use the the value from the input as keyword to search through the Api
    // so you need to pass the value as a parameter to the getData() function
    div2.innerHTML = ''
    
    if (response.status == 200) {
        let data = await response.json()
        console.log(data.hits)

        //11task
        let num = data.totalHits / 20
        let btnNumbers = Math.ceil(num)
        //make many pages
        paggingDiv.innerHTML = ''
        for (let i = 0; i < btnNumbers; i++) {
            let btn = document.createElement('button')
            btn.innerText = i+1
            paggingDiv.append(btn)
            if (pageNum == i+1) {
                btn.disabled = true
            }

            btn.addEventListener('click',function (e) {
                getData (keyword,div2,i+1,paggingDiv)
            })
        }
        // 10 task 
        // make the photos clickable so when user clicks on the photo , 
        // new tab will open and the larg photo will be shown there
        
        data.hits.forEach(element => {
            let link = document.createElement('a')
            link.setAttribute('href',element.previewURL)
            link.setAttribute('target','_blank')
            let img = document.createElement('img')
            img.setAttribute('src',element.userImageURL)
            link.append(img)
            div2.append(link)
        });
        
        
    }

}
