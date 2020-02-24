let x = new Date()
document.write(typeof(x) + "<br>")
document.write(x + '<br>')

let y = new Date(1991,6,14)
document.write(y + '<br>')

document.write(y.getFullYear() + '<br>')  //return year
document.write(y.getMonth() + '<br>')     //return month 0 - 11
document.write(y.getDate() + '<br>')      //return day 1 - 30
document.write(y.getDay() + '<br>')       //return the order of weekday 0 - 6
document.write(Date.now() + '<br>')       //retuen the number of milliseconds since 1970  


let date1 = new Date('07.14.1991 00:15:30')
document.write(date1 + '<br>') 

let date2 = Date.now()
document.write(date2 + '<br>') 

document.write((date2 - date1)/1000/60/60/24/365 + '<br>')  //en year
document.write((date2 - date1)/1000/60 + '<br>')            //en minutes




