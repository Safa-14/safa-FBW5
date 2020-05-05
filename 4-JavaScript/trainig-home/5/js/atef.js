window.onload = function () {
    //get HTML elements
    let coursesList = document.querySelector('#coursesList')
    let studentGradeInp = document.querySelector('#studentGradeInp')
    let addGradeBtn = document.querySelector('#addGradeBtn')
    let gradeListElement = document.querySelector('#gradeListElement')

    let gradesArr = []
    addGradeBtn.addEventListener('click',function (e) {
        let selectedCourse = coursesList.options[coursesList.selectedIndex].value
        let grade = studentGradeInp.value
        if (selectedCourse !== '' & grade.trim() !== '') {
            let gradeObj = {}
            if (gradesArr.length == 0) {
                console.log('ok')
                let listItem = document.createElement('li')
                listItem.innerHTML = selectedCourse + ': ' + grade + '%'
                gradeListElement.append(listItem)
                gradeObj[selectedCourse] = grade
                gradesArr.push(gradeObj)
            }else{
                console.log('go')
                let grades = JSON.stringify(gradesArr)
                console.log(grades)
                console.log(grades.indexOf(selectedCourse))
                if (grades.indexOf(selectedCourse) == -1) {
                    let listItem = document.createElement('li')
                    listItem.innerHTML = selectedCourse + ': ' + grade + '%'
                    gradeListElement.append(listItem)
                    gradeObj[selectedCourse] = grade
                    gradesArr.push(gradeObj)
                } else {
                    alert('error')
                }
                console.log(gradesArr)


            }
            studentGradeInp.value = ''
        }
    })

    studentsArr = []
    saveStudentBtn.addEventListener('click', function () {

        if (studentNameInp.value.trim()) {
            let studentObj = {}

            studentObj.name = studentNameInp.value
            studentObj.grades = gradesArr

            //let containerDiv = document.querySelector('#containerDiv')
            //body.append(containerDiv)
            let nameH3 = document.createElement('h3')
            nameH3.innerText = studentObj.name
            containerDiv.append(nameH3)

            studentObj.grades.forEach(grade => {
                console.log(Object.keys(grade))
                //create ul for the grades and append it to container
                let gradeUl = document.createElement('ul')
                containerDiv.append(gradeUl)
                Object.keys(grade).forEach(key => {
                    //console.log(key)
                    //console.log(grade[key])
                    let gradeLi = document.createElement('li')
                    gradeLi.innerText= key+ ': ' + grade[key] + '%'
                    gradeUl.append(gradeLi)
                    //console.log(gradeLi.innerText);
                })
            })

            //add the list to local storage
            studentsArr.push(studentObj)
            localStorage.setItem('students', JSON.stringify(studentsArr))
            
        }

        gradeListElement.innerHTML = ''
        studentGradeInp.value = ''
        studentNameInp.value = ''
        gradesArr = []
    })

    //my code is here to bring data from local storage and render
    let storageData = localStorage.getItem('students')
    console.log(storageData);

    if (storageData != null) {
        let dataObj = JSON.parse(storageData)
        console.log(dataObj)
        //create container div and add it to the body
        
        //body.append(containerDiv)
        dataObj.forEach(element => {
            console.log(element)

            studentsArr.push(element)

            let nameH3 = document.createElement('h3')
            nameH3.innerText = element.name
            containerDiv.append(nameH3)
            element.grades.forEach(grade => {
                console.log(Object.keys(grade))
                //create ul for the grades and append it to container
                let gradeUl = document.createElement('ul')
                containerDiv.append(gradeUl)
                Object.keys(grade).forEach(key => {
                    console.log(key)
                    console.log(grade[key])
                    let gradeLi = document.createElement('li')
                    gradeLi.innerText= key+ ': ' + grade[key] + '%'
                    gradeUl.append(gradeLi)
                    console.log(gradeLi.innerText);
                })
            })


        });
    }
}
