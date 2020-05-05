window.onload = function () {
    //get html elements
    let todoInput = document.querySelector('#todoInput')
    let todoListe = document.querySelector('#todoList')
    let addBtn = document.querySelector('#todoAddBtn')


    let todoArray = []

    addBtn.addEventListener('click', function () {

        let todoValue = todoInput.value
        if (todoValue.trim() != '') {
            let listItem = document.createElement('li')
            listItem.innerText = todoValue
            //clear the input after adding the list item to the list
            todoListe.append(listItem)

            //add the list to local storage
            todoArray.push(todoValue)
            let todoArrayJson = JSON.stringify(todoArray)
            localStorage.setItem('todoList', todoArrayJson)
            console.log(todoArray)


        } else {
            alert('todo value is empty, please enter a todo value')
        }
        todoInput.value = ''
    })

    //render todo list array from localStorage
    let jsonObj = localStorage.getItem('todoList')
    //check if there is data with the key todoList in the local storage
    if (jsonObj != null) {
        let convertArr = JSON.parse(jsonObj)
        convertArr.forEach(element => {
            //todoArray.push(element)
            let listItem = document.createElement('li')
            listItem.innerText = element
            todoListe.append(listItem)


        });
    }

}