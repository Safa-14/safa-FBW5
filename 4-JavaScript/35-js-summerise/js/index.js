window.onload = function () {
    
    appInit('container')
}
//FIRST TASK
//write js function that will receive div container as a parameter and create inside thid div an text input


//SECOND TASK
//change your previous code to add the input inside a div and this div suppose to be in the container

//THIRD TASK
//add a button after the previous input

//FOURTH TASK
//add a div comes after the last div which 


//6TH TASK
//the 20  images should be show after a click on the button

//8 TASK
//let url = 'https://pixabay.com/api/?key=12000491-41fc68d8c365df909e022ceb6&q=lion'
//log the data that will be returned from the api using fetch

//CALL THE FUNCTION

function appInit(containerId) {
    //GET ELEMENT BY ID CONTAINERID THE PARAMETER
    let appContainer = document.getElementById(containerId)
    
    //check if this element exist
    if (appContainer) {

        let div1 = document.createElement('div')
        
        //CREATE INPUT
        let inp1 = document.createElement('input')
        inp1.setAttribute('type','text')
        //ADD INPUT INSIDE DIV
        div1.append(inp1)



        //CREATE COLORS LIST
        let colorList = document.createElement('select')
        
        //CREATE LIST OPTION
        let colorOpt1 = document.createElement('option')
        //SET A VALUE FOR THIS OPTION
        colorOpt1.value = ''  //value used by js
        //SET INNERTEXT FOR THE OPTION
        colorOpt1.innerText = 'Choose color'  //innertext show to the user
        //ADD THE OPTIONS INSIDE THE LIST ELEMENT
        colorList.append(colorOpt1)

        //CREATE COLORS OPTIONS ARRAY
        let colorsArr =["grayscale", "transparent", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", "black", "brown"]
        colorsArr.forEach(element => {
            let colorOpt = document.createElement('option')
            colorOpt.value = element  //value used by js
            colorOpt.innerText = element  //innertext show to the user
            colorList.append(colorOpt)
        });
        
        
        //ADD COLORLIST INSIDE DIV1
        div1.append(colorList)





        //CREATE ORIENTATION
        let orientationList = document.createElement('select')
        let orientationOpt1 = document.createElement('option')
        //SET A VALUE FOR THIS OPTION
        orientationOpt1.value = ''  //value used by js
        //SET INNERTEXT FOR THE OPTION
        orientationOpt1.innerText = 'Select the orientation'  //innertext show to the user
        //ADD THE OPTIONS INSIDE THE LIST ELEMENT
        orientationList.append(orientationOpt1)

        //CREATE COLORS OPTIONS ARRAY
        let orientationsArr =["all", "horizontal", "vertical"]
        orientationsArr.forEach(element => {
            let orientationOpt = document.createElement('option')
            orientationOpt.value = element  //value used by js
            orientationOpt.innerText = element  //innertext show to the user
            orientationList.append(orientationOpt)
        });
        div1.append(orientationList)






        //CREATE KATEGORIES
        let categoryList = document.createElement('select')
        let categoryOpt1 = document.createElement('option')
        //SET A VALUE FOR THIS OPTION
        categoryOpt1.value = ''  //value used by js
        //SET INNERTEXT FOR THE OPTION
        categoryOpt1.innerText = 'Select the category'  //innertext show to the user
        //ADD THE OPTIONS INSIDE THE LIST ELEMENT
        categoryList.append(categoryOpt1)

        //CREATE COLORS OPTIONS ARRAY
        let categoryArr =['backgrounds', 'fashion', 'nature', 'science', 'education', 'feelings', 'health', 'people', 'religion', 'places', 'animals', 'industry', 'computer', 'food', 'sports', 'transportation', 'travel', 'buildings', 'business', 'music']
        categoryArr.forEach(element => {
            let categoryOpt = document.createElement('option')
            categoryOpt.value = element  //value used by js
            categoryOpt.innerText = element  //innertext show to the user
            categoryList.append(categoryOpt)
        });
        div1.append(categoryList)


        //create min-width input
        let minWidthInput = document.createElement('input')
        minWidthInput.setAttribute('type','number')
        minWidthInput.min = '0'
        minWidthInput.placeholder = 'min width'
        //inputWidth.setAttribute('min',min_width)
        div1.append(minWidthInput)


        //create min-width input
        let minHeightInput = document.createElement('input')
        minHeightInput.setAttribute('type','number')
        minHeightInput.min = '0'
        minHeightInput.placeholder = 'min height'
        //inputWidth.setAttribute('min',min_width)
        div1.append(minHeightInput)




        //ADD CLASS TO DIV1
        div1.classList.add('controls-container')
        
        //CREATE A BUTTON AND ADD IT TO DIV1
        let btn1 = document.createElement('button')
        btn1.innerText = 'Search'
        div1.append(btn1)

        //create pagging buttons container
        let paggingDiv = document.createElement('div')
        div1.append(paggingDiv)

        //ADD DIV INSIDE THE CONTAINER
        appContainer.append(div1)

        //CREATE AND ADD ANOTHER DIV TO CONTAINER
        let div2 = document.createElement('div')
        //ADD CLASS TO DIV2
        div2.classList.add('images-container')
        appContainer.append(div2)

        

         //ADD CLICK EVENTLISTENER TO BUTTON1
        btn1.addEventListener('click',function (e) {
            

            //clear div2 all content
            //div2.innerHTML = ''

            //GETTING DATA FROM API FETCH from call function
            getData(inp1.value,div2,paggingDiv,1,colorList,orientationList,categoryList,minWidthInput,minHeightInput)
            

            //INNERTEXT WILL DELETE ONLY THE TEXT BUT HTML DELETE ALL HTML
            //ADD 20 IMAGES TO THE SECOND DIV
            // for (let i = 0; i < 20; i++) {
            //     //CREATE IMAGE
            //     let img = document.createElement('img')
            //     //SET SRC ATTRIBUTE TO THE IMAGE
            //     img.setAttribute('src','./imgs/dummy.png')
            //     //ADD THE IMAGE INSIDE DIV2
            //     div2.append(img) 
            // }
            

        })
        
        //ADD CLASS TO appContainer
        appContainer.classList.add('container')
    }else{
        //CONTAINER NOT EXIST
        console.log("Element with Id ' "+ containerId + "'couldnt be found")
    }

}

async function getData(keyWord,imagesContainer,paggingContainer,pageNumber,colorListElement,
    orientationListElement,categoryListElement,minWidthElement,minHeightElement) {
    
    console.log(colorListElement.options)
    //get the selected value from the list
    let selectedColor = colorListElement.options[colorListElement.selectedIndex].value
    //declare url colors parameter
    let colorParameter = ''
    //check is there is color selected
    if (selectedColor) {
        colorParameter = '&colors=' + selectedColor
    }
    //console.log(colorListElement.options)
    



    console.log(orientationListElement.option)
    //get the selected value from the list
    let selectedOrientation = orientationListElement.options[orientationListElement.selectedIndex].value
    //declare url colors parameter
    let orientationParameter = ''
    //check is there is color selected
    if (selectedOrientation) {
        orientationParameter = '&orientation=' + selectedOrientation
    }


    



    //console.log(categoriesListElement.option)
    //get the selected value from the list
    let selectedCategory = categoryListElement.options[categoryListElement.selectedIndex].value
    //declare url colors parameter
    let categoryParameter = ''
    //check is there is color selected
    if (selectedCategory) {
        categoryParameter = '&category=' + selectedCategory
    }




    
    //get the selected value from the list
    //declare minWidth url parameter
    let minWidthParameter = ''
    if (minWidthElement.value.trim()) {
        minWidthParameter = '&min_width=' + minWidthElement.value.trim()
    } 



    let minHeighthParameter = ''
    if (minHeightElement.value.trim()) {
        minHeighthParameter = '&min_height=' + minHeightElement.value.trim()
    } 





    //CLEAR IMAGES CONTAINER
    imagesContainer.innerHTML = ''
    let url = 'https://pixabay.com/api/?key=12000491-41fc68d8c365df909e022ceb6&q='+keyWord + '&page=' +pageNumber+ colorParameter + orientationParameter + categoryParameter +minWidthParameter + minHeighthParameter
    let response =await fetch(url)
    if (response.status == 200) {
        let data = await response.json()
        console.log(data.hits)
        //GET HOW MANY PAGGING BUTTONS
        //WE NEED TO DIVIDE TOTAL HITS TO 20 IN EAC PAGE
        let num = data.totalHits / 20
        let btnNumbers = Math.ceil(num)
        //console.log(Math.ceil(num))
        
        //CLEAR paggingContainer CONTENT BEFORE ADD BUTTONS TO IT 
        paggingContainer.innerHTML = ''
        //for loop gere
        for (let i = 0; i < btnNumbers; i++) {
            let paggingBtn = document.createElement('button')
            paggingBtn.innerText = i+1 
            paggingContainer.append(paggingBtn)

            //disable the button if its page is shown
            if (pageNumber == i+1) {
                paggingBtn.disabled = true
            }
            //ADD EVENT CLICK FOR PAGING BUTTON
            paggingBtn.addEventListener('click', function () {
                getData(keyWord,imagesContainer,paggingContainer,i+1,colorListElement,orientationListElement,categoryListElement,minWidthElement,minHeightElement)
            })
            
            
        }
        data.hits.forEach(element => {
            //<a href="http://"></a>
            let imageLink = document.createElement('a')
            //set the href for the link
            imageLink.setAttribute('href',element.largeImageURL)
            //make link open in new tab
            imageLink.setAttribute('target','_blank')

            //CREATE IMAGE element
            let img = document.createElement('img')
            //SET the url from the element previewURL property
            img.setAttribute('src',element.previewURL)
            //addd the image inside the link
            imageLink.append(img)
            //ADD THE IMAGE INSIDE imagesContainer
            imagesContainer.append(imageLink) 
            
        });
        //console.log(data.hits[i].largeImageURL)
        
        
        
        
    }
}


