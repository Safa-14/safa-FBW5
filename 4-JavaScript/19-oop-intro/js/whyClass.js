let tim = {
    firstName : 'Tim',
    lastName : 'Breuel',
    fullName: function() {
        return this.firstName + ' ' + this.lastName
    },
    tattoos:true
}

let safa = {
    firstName : 'Safa',
    lastName : 'Bouhlel',
    fullName: function() {
        return this.firstName + ' ' + this.lastName
    },
    hijab :true
}

let shirin = {
    firstName : 'Shirin',
    lastName : 'Valizadeh',
    fullName: function() {
        return this.firstName + ' ' + this.lastName
    },
    nice_hair :true
}

let belal = {
    firstName : 'Belal',
    lastName : 'Valizadeh',
    fullName: function() {
        return this.firstName + ' ' + this.lastName
    },
    hair :false
}

document.write(tim.fullName() + '<br>')
document.write(safa.fullName() + '<br>')
document.write(shirin.fullName() + '<br>')
document.write(belal.fullName() + '<br>')

let parArr = [tim,safa,shirin,belal]
function firstNamePrint2 (arr) {
    let storage = ''
    arr.forEach(item => {
        storage+=item.firstName +' ' + item.tattoos+ '<br>'
        
    })
    return storage
}

document.write(firstNamePrint2 (parArr))