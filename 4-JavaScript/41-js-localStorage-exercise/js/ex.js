window.onload = function () {
    //get HTML elements
    let coursesList = document.querySelector('#coursesList')
    let studentGradeInp = document.querySelector('#studentGradeInp')
    let addGradeBtn = document.querySelector('#addGradeBtn')
    let gradeListElement = document.querySelector('#gradeListElement')
    let saveStudentBtn = document.querySelector('#saveStudentBtn')
    let studentNameInp = document.querySelector('#studentNameInp')
    let body = document.querySelector('body')
    let containerDiv = document.querySelector('#containerDiv')
    //declare empty array to save grade OBJECTS
    let gradesArr = []
    addGradeBtn.addEventListener('click', function (e) {

        //console.log(coursesList.options)
        let selectedCourse = coursesList.options[coursesList.selectedIndex].value
        let grade = studentGradeInp.value
        if (selectedCourse !== '' && grade.trim() !== '') {
            let listItem = document.createElement('li')
            listItem.innerText = selectedCourse + ': ' + grade + '%'
            gradeListElement.append(listItem)
            studentGradeInp.value = ''
            //create grade object to push it in gradesArr
            let gradeObj = {}

            gradeObj[selectedCourse.replace(/ /g, '_')] = grade
            
        
            // let x = Object.keys(gradeObj)
            //     console.log(x);
                //console.log(gradesArr.indexOf(gradeObj) );
                
                
                gradesArr.push(gradeObj)
            
            //console.log(Object.keys(gradeObj))
            //console.log(gradesArr[0].object.keys(gradeObj))
            // console.log(selectedCourse)
            // console.log(gradesArr);
            // gradesArr.forEach(element => {
            //     console.log(Object.keys(element));
                
            // });
            
        }
//gradesArr.indexOf(math) == -1
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

// Homeworks 
//first 
//add the student and its grades at the end of the page on the save student click
//second
//load the students from the local storage to studentsArr so we keep them in temp memory
// to save them again instead of loasing the data and overwrite the data in the local storage

// function getData() {
    
// }




// var items = [{
//     name: 'blah',
//     country: 'Foos'
// },
// {
//     name: 'foo',
//     country: 'Foos'
// },
// {
//     name: 'bar',
//     country: 'Foos'
// },
// {
//     name: 'baz',
//     country: 'Foos'
// }
// ];

//let z = '3'



// let  compareCountries = function(items) {
//     for (var i = 1; i < items.length; i++) {
//         if (items[i].country !== items[0].country) {
//             return false;
//         }
//     }
//     return true;
    
// }
// console.log(compareCountries(items));


// let isSameAnswer = function (x ) {

//     if (x[0].English == z) {
//         return true;
//     }
//     return false
    
//   }
// console.log(x.every(isSameAnswer));



























            // console.log(JSON.stringify(gradeListElement));

            // let x = JSON.stringify(listItem.innerText)
            // console.log(x.indexOf(selectedCourse));
             

            //console.log(gradeListElement);




            //let x = JSON.stringify(gradeObj)
            //console.log(x);
            
            // gradesArr.forEach(element => {
            //     if (Object.keys(element)[0].indexOf(selectedCourse) == -1) {
            //         gradesArr.push(gradeObj)
            //         console.log(Object.keys(gradeObj)[0]);
            //     }else{
            //         console.log(Object.keys(element)[0]);
            //     }
                
            // });



            // console.log(gradeObj);
            // //gradeobj ta3tik e5er we7ed
            // console.log(gradesArr);
            // //gradesArr ta3tik el kol
            
            
            // gradesArr.forEach(element => {
            //     let y = JSON.stringify(element)
            //     console.log(y);
            //     if (y.indexOf(selectedCourse) == -1) {
            //         gradeListElement.append(listItem)
            //          gradesArr.push(gradeObj)
            //     }else {
            //         console.log(false);
                    
            //     }
            // })
    



        


            //let y = JSON.stringify(items[0])
            // let z = 'M'
            // 
            // console.log(y.indexOf(selectedCourse))




//let x = gradesArr.find(item => Object.keys(item)[0].indexOf(selectedCourse) == -1)
            //console.log(x);

    // var items = [{
    //     Math:"2"

    // },
    // {
    //     English: "2"

    // }
// ];

// let y = JSON.stringify(items[0])
// let z = 'M'
// console.log(y);
// console.log(y.indexOf(z));




    // let  compareCountries = function(items,z) {
    //     for (var i = 1; i < items.length; i++) {
    //         if (items[i].Math.indexOf('2') !== -1) {
    //             return false;
    //         }
    //     }
    //     return true;
        
    // }
    // console.log(compareCountries(items,z));


    // let isSameAnswer = function (x ) {
    
    //     if (x[0].English == z) {
    //         return true;
    //     }
    //     return false
        
    //   }
    // console.log(x.every(isSameAnswer));