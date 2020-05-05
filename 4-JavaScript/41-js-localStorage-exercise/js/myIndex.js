window.onload = function () {
    //get HTML elements
    let coursesList =document.querySelector('#coursesList')
    let studentGradeInp =document.querySelector('#studentGradeInp')
    let addGradeBtn =document.querySelector('#addGradeBtn')

    let studentArr = []
    addGradeBtn.addEventListener('click',function () {
        let gradeListElement =document.querySelector('#gradeListElement')
        if (coursesList.value.trim() != '') {
            let li = document.createElement('li')
            li.innerHTML = coursesList.value + ': ' + studentGradeInp.value + '%'
            gradeListElement.append(li)
            studentArr.push(li.innerHTML)
        }
        
    })

    
    let saveStudentBtn = document.querySelector('#saveStudentBtn')
    saveStudentBtn.addEventListener('click',function () {
       
        let studentArrJson = JSON.stringify(studentArr)
        localStorage.setItem('student', studentArrJson)
        
    })

    let student = localStorage.getItem('student')
    if (student != null) {
        let convertArr = JSON.parse(student)
        convertArr.forEach(element => {
            studentArr.push(element)
            let listItem = document.createElement('li')
            listItem.innerText = element
            gradeListElement.append(listItem)


        });
    }
}