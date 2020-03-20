window.onload = () => {
    
    let input = document.querySelector('#input1')
    
    create(input)
    
}

function create(newInput) {
    newInput.addEventListener('keypress', function (e) {
        if(e.which == 13){
            let container = document.querySelector('#container')
            let inputCreate = document.createElement('input')
            inputCreate.setAttribute('type', 'text')
            create(inputCreate)  //Important
            container.append(inputCreate)
            inputCreate.focus()
            
        }
       
        
    })
}