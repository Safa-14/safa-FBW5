window.onload = function () {
        //get HTML elements
        let coursesList = document.querySelector('#coursesList')
        let studentGradeInp = document.querySelector('#studentGradeInp')
        let addGradeBtn = document.querySelector('#addGradeBtn')
        let gradeListElement = document.querySelector('#gradeListElement')
        let saveStudentBtn = document.querySelector('#saveStudentBtn')
        let studentNameInp = document.querySelector('#studentNameInp')
        let body = document.querySelector('body')
        //declare empty array to save grade OBJECTS
        let gradesArr = []
        addGradeBtn.addEventListener('click', function (e) {

            //console.log(coursesList.options)
            let selectedCourse = coursesList.options[coursesList.selectedIndex].value
            let grade = studentGradeInp.value
            if (selectedCourse !== '' & grade.trim() !== '') {
                let listItem = document.createElement('li')
                listItem.innerText = selectedCourse + ': ' + grade + '%'
                gradeListElement.append(listItem)
                studentGradeInp.value = ''
                //create grade object to push it in gradesArr
                let gradeObj = {}
                // if (selectedCourse == 'Math') {
                //     gradeObj.math = grade
                // }
                // if (selectedCourse == 'English') {
                //     gradeObj.English = grade
                // }
                // if (selectedCourse == 'Computer science1') {
                //     gradeObj.Computer_science1 = grade
                // }
                // if (selectedCourse == 'Java') {
                //     gradeObj.Java = grade
                // }

                gradeObj[selectedCourse.replace(/ /g, '_')] = grade
                gradesArr.push(gradeObj)

                console.log(gradesArr)
            }

        })

        studentsArr = []
        saveStudentBtn.addEventListener('click', function () {

            if (studentNameInp.value.trim()) {
                let studentObj = {}

                studentObj.name = studentNameInp.value
                studentObj.grades = gradesArr
                studentsArr.push(studentObj)
                localStorage.setItem('students', JSON.stringify(studentsArr))
                gradeListElement.innerHTML = ''
                studentGradeInp.value = ''
                studentNameInp.value = ''
                gradesArr = []
            }


        })

        //my code is here to bring data from local storage and render
        let storageData = localStorage.getItem('students')
        console.log(storageData);

        if (storageData != null) {
            let dataObj = JSON.parse(storageData)
            console.log(dataObj)
            //create container div and add it to the body
            let containerDiv = document.createElement('div')
            body.append(containerDiv)
            dataObj.forEach(element => {
                console.log(element)
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

// Homeworks 
//first 
//add the student and its grades at the end of the page on the save student click
//second
//load the students from the local storage to studentsArr so we keep them in temp memory
// to save them again instead of loasing the data and overwrite the data in the local storage