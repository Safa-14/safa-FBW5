//regex is embeld class on js
//is a way to definie a text button

// let someText = 'we are web developers in FBW5'
// let regex = new RegExp('FBW5') //test if fbw5 is on the text and will return true
//^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$
let someText = '43s@fff.ff'
let regex = new RegExp(/^\d\s[a-z]/)
let testResult = regex.test(someText)
console.log(testResult); // true
    
//    /^\d/ text contain the first elemt is one digit
//you need to write your regex patern inside/^HERE/
// \d a digit(number)
// [a-z] check char is between a and z


//1RST TASK
//write a regex to check that 
//first char is number
//second is small character
//third is capital character
// fourth is number
let text1 = '4sA5@fff.ff'
let regex1 = new RegExp(/^\d[a-z][A-Z]\d/)
let testResult1 = regex1.test(text1)
console.log(testResult1);



//2ND TASK
//write a regex to check that 
//first char is number
//second is white space
//third is capital character
// fourth is number
let text2 = '4 A5@fff.ff'
let regex2 = new RegExp(/^\d\s[A-Z]\d/)
let testResult2 = regex2.test(text2)
console.log(testResult2);


//3ND TASK
//write a regex to check that 
//first char is number
//second is white space
//third is capital character
// fourth is number
let text3 = '444fdjfhA5@fff.ff'
let regex3 = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z_]{2,3}$/)
let testResult3 = regex3.test(text3)
console.log(testResult3);

let text4 = '+49 152 9018200'
let regex4 = new RegExp(/\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/)
let testResult4 = regex4.test(text4)
console.log(testResult4);
//((\+49)|(0049))(\s|)\d{11}

window.onload = function () {
    let btn1 = document.querySelector('#btn1')
    let inp1 = document.querySelector('#inp1')
    let inp2 = document.querySelector('#inp2')
    let inp3 = this.document.querySelector('#inp3')
    btn1.addEventListener('click',function (e) {
        
        let regex = new RegExp(/^((\+49)|(0049))(\s|)((\d{11})|(\d{10}))$/)
        if (regex.test(inp1.value)) {
            inp1.classList.add('valid')
            inp1.classList.remove('invalid')
            //inp1.style.borderColor = "green"
            //console.log('true')
        } else {
            inp1.classList.remove('valid')
            inp1.classList.add('invalid')
            //inp1.style.borderColor = "red"
            //console.log('false')
        } 

        //(http(s?):\/\/)?(www\.)+[a-zA-Z0-9\.\-\_]+(\.[a-zA-Z]{2,3})+(\/[a-zA-Z0-9\_\-\s\.\/\?\%\#\&\=]*)?$
        //let regex5 = new RegExp(/^www\.\w{2,}\.\w{2,}$/)
        let regex5 = new RegExp(/^www.[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?$/)
        if (regex5.test(inp2.value)) {
            inp2.classList.add('valid')
            inp2.classList.remove('invalid')
            //inp1.style.borderColor = "green"
            //console.log('true')
        } else {
            inp2.classList.remove('valid')
            inp2.classList.add('invalid')
            //inp1.style.borderColor = "red"
            //console.log('false')
        } 

        let regex6 = new RegExp(/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/)
        if (regex6.test(inp3.value)) {
            inp3.classList.add('valid')
            inp3.classList.remove('invalid')
            //inp1.style.borderColor = "green"
            //console.log('true')
        } else {
            inp3.classList.remove('valid')
            inp3.classList.add('invalid')
            //inp1.style.borderColor = "red"
            //console.log('false')
        } 

    })
}


//homeworks
//regex to check ip address
//127.123.0.1
//500.555.44.1 not valid //shouldnt contain any caracters
// ip address contains 4 numbers separated by . and each number should be in [0-255]
//(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$
// let text6 = '500.555.44.1'
// let regex6 = new RegExp(/^[0-255]+\.+[0-255]+\.+0+\.+1$/)
// let testResult6 = regex6.test(text6)
// console.log(testResult6);
