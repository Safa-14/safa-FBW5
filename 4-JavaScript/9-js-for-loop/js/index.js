// for (var i = 0; i < 10 ; i++) {
//     console.log (i)
// }

var storage=""
for (var i = 0; i <= 10 ; i++) {
    if(i<=9) {
        storage+=i+","
    }
    else {
        storage+=i
    }

    // storage+=i
    // if(i != 10) {
    //     storage+=","
    // }
    
}





console.log (storage)

console.log('//////1rst Method////////')

for (let i = 10; i<=50; i++) {
    if((i % 2 )!= 0) {
        console.log(i)
    } 
}

console.log('/////2nd method/////')

for (let i = 11; i<50; i+=2) {

        console.log(i)

}


console.log('/////Reverse Loop/////')
for (var i = 10; i >= 0 ; i--) {
    // for (var i = 10; i >= 0 ; i-=2)
    console.log (i)
}


console.log('/////Summe/////')
var sum=0
for (var i = 10; i <= 50 ; i++) {
    
    sum+=i
    
}
console.log (sum)


document.write('hello World <br> and FBW5 <br>')


for (var i = 0; i <= 10 ; i++) {
   
    document.write(i+ "<br>")
    
}



for (let i=1;i<=10;i++) {
    for (let x=1;x<=10;x++) {
        document.write(x+'<br>')
    }
    document.write('Again<br>')
}

