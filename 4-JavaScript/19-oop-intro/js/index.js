let x = {}
document.write(typeof(x) + "<br>")

x.bla = 1212
x.blabla = 'Safa'
x.mul = function(num) {
    return this.bla * num
}

let y = {...x}   //y is a copy of x  so when we change y x will not change
y.bla = 1414

document.write(x.mul(2) + "<br>")  //2424
document.write(y.mul(2) + "<br>")  //2828



document.write("<br>/////////////////////////////////")
document.write("//////////Second Example//////////")
document.write("/////////////////////////////////<br>")

let teacher = {}
teacher.name = 'Ahmad'
teacher.lastName = 'Osman'
teacher.fullName = function(){
    return this.name + " " + this.lastName
}

let participant= {...teacher}
participant.name = 'Safa'
participant.lastName = 'Bouhlel'

document.write(teacher.fullName() + '<br>')
document.write(participant.fullName() + '<br>')