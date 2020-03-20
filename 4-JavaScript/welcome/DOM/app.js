let htmlObj = document.getElementsByTagName('h1'); //the first h1 tag
// for (let i = 0; i < htmlObj.length; i++) {
//     console.log(htmlObj[i])
    
// }
console.log(htmlObj)   // =>a special type of objects(you can use indexing)
                       // indexing is array[number], you can use foreach()
                       // for objects : obj[String] or obj.prop

Array.from(htmlObj).forEach(element => {
    console.log(element)
})

let obj = {
    t:'t',
    b:'b',
    ob:{
        ddd:5,
        st:[5,20,60,'someString',{
            pr:true
        }]
    }
}
console.log(obj[0])  //=>not working
console.log(obj.ob.ddd)   //5
console.log(obj.ob.st[3]) //'someString'
//what is the type of obj.ob.st[2]   => number
console.log(obj.ob.st[4].pr)  //=> true

let firstH1 = document.getElementsByTagName('h1')[0]
console.log(firstH1)
firstH1.innerHTML
console.log(firstH1.innerHTML)      //the previous value
firstH1.innerHTML = '<input type="text">'  //changing the content
console.log(firstH1.innerHTML)     //new value


let secondH1 = document.getElementsByTagName('h1')[1]
secondH1.innerHTML = 'Safa'
console.log(secondH1.innerHTML )

document.getElementsByTagName('h1')[2].innerHTML = 'only Text' //not rendering
