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
            let listItem = document.createElement('li')
            listItem.innerText = selectedCourse + ': ' + grade + '%'
            listItem.innerText = selectedCourse + ': ' + grade + '%'
            gradeListElement.append(listItem)
            studentGradeInp.value = ''

            let gradeObj = {}

            gradeObj[selectedCourse.replace(/ /g, '_')] = grade
            gradesArr.push(gradeObj)
                //}   
                    
            // console.log(gradeListElement);
            // for (let i = 0; i < 10; i++) {
            //     console.log(gradeListElement.childNodes[i]);
                
                 
            // }  


            
            
            
                //if (y != 2) {
                    //gradeListElement.removeChild(gradeListElement.lastElementChild);
                //}
                //console.log(x);
                //console.log(y);
                
                
            //});
            
             
            let word = gradeListElement.lastElementChild.innerHTML
            console.log(word.indexOf(':'));
            
        let char = word.slice(0,word.indexOf(':'))
        console.log(char);
        
            console.log(gradeListElement.innerText);
            console.log(word);
            //console.log(gradesArr.indexOf(char));
            
            
            // if (gradesArr.indexOf(word)) {
                
            // }
                    
            gradesArr.forEach(element => {
                console.log(element);
                let x = JSON.stringify(element)
                console.log(x.indexOf(char));
                if (x.indexOf(char) > -1) {
                    console.log('success');
                    gradeListElement.removeChild(word);
                } else {
                    console.log('failed');
                    
                }
            });
           
            //gradeListElement.removeChild(gradeListElement.lastElementChild);
            

            // gradesArr.forEach(element => {
            //     let x = JSON.stringify(element)
            //     let y = x.indexOf(selectedCourse)
            //     if (y != -1) {
            //         //gradeListElement.removeChild(gradeListElement.lastElementChild);
            //     }
            //     //console.log(x);
            //     //console.log(y);
                
                
            // });

        }
            
         
            //console.log(e);
            //console.log(this);
            //console.log(gradeListElement.childNodes[3]);
            //console.log(gradeObj);
            

            //
            // gradesArr.forEach(element => {
            //     let x = JSON.stringify(element)
            //     let y = x.indexOf(Object.keys(gradeObj))
            //     //if (y != 2) {
            //         //gradeListElement.removeChild(gradeListElement.lastElementChild);
            //     //}
            //     console.log(x);
            //     console.log(y);
                
                
            // });
            
    })

}
              

// function deleteLI(){
//     let index = tab.indexOf(this.innerHTML);
//     console.log(this.innerHTML + " INDEX = " + index);
//     // set the selected li value into input text
//     inputText.value = this.innerHTML;

//     // clear array
//    tab.length = 0;
//    items = document.querySelectorAll("#list li");
//    // fill array
//    for(var i = 0; i < items.length; i++){
//     tab.push(items[i].innerHTML);
//   }

//     if(items.length > 0){
//         items[index].parentNode.removeChild(items[index]);
//         inputText.value = "";
//     }
// }


            // console.log(gradesArr);
            // gradesArr.forEach(element => {
            //     let x = JSON.stringify(element)
            //     let y = x.indexOf(selectedCourse)
            //     if (y > -1) {
            //         console.log(listItem);
            //         //listItem.innerText = ''
            //         //gradeListElement.append(listItem)
            //         //gradeListElement.removeChild(gradeListElement.lastElementChild);
                    
            //         //gradeListElement.childNodes
            //         //listItem[y].removeChild(gradeListElement.element);
            //         //gradeListElement.parentNode.removeChild(gradeListElement.element);
            //         gradeListElement.removeChild(gradeListElement.childNodes[3]);
            //     }
            //     console.log(x);
            //     console.log(y);
                
                
            // });
            
            
            









            //hatha eli 7abit na3mlou haka 3alech commentitou


            // let gradeObj = {}
            // if (gradesArr.length == 0) {
            //     let listItem = document.createElement('li')
            //     listItem.innerHTML = selectedCourse + ': ' + grade + '%'
            //     gradeListElement.append(listItem)
            //     gradeObj[selectedCourse.replace(/ /g, '_')] = grade
            //     gradesArr.push(gradeObj)
            // }else{
            //     gradesArr.forEach(element => {
            //         let x = JSON.stringify(element)
            //         if (x.indexOf(selectedCourse) == -1) {
            //             console.log(false);
            //             let listItem = document.createElement('li')
            //             listItem.innerHTML = selectedCourse + ': ' + grade + '%'
            //             gradeListElement.append(listItem)
            //             gradeObj[selectedCourse.replace(/ /g, '_')] = grade
            //             gradesArr.push(gradeObj)
            //             console.log();
                    
            //         }else{
            //             alert("Wrong")
            //             let listItem = document.createElement('li')
            //             listItem.innerHTML = ''
            //         }
                
                
            //     });
                
            // }
            // studentGradeInp.value = ''
        
    //})


//}



