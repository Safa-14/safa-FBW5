let person = {
    //property string
    firstName :'Safa',
    lastName :'Bouhlel',
    //property number
    birthYear : 1991,
    job: "enginner",
    //property boolean
    married : true,
    //method
    name : function(){
        return this.firstName + ' ' +this.lastName
    },
    //property array
    kids : ['Eya', 'youssef'],
    //property object
    husband : {
        firstName :'wassim',
        lastName :'Dhokar',
        birthYear : 1987,
        job : 'engineer',
        name : function(){
            return this.firstName + ' ' +this.lastName
        }
        

    },
    age : function (){
        let currentYear = new Date().getFullYear()
        return currentYear - this.birthYear
    },
    //property array of objects
    brothers :[{
        firstName :'Bilel',
        lastName :'Bouhlel1',
    },{
        firstName :'Atef',
        lastName :'Bouhlel2',
    }]
    

}
document.write(person.name() + '<br>')  //Safa Bouhlel
document.write(person.kids[0] + '<br>') //Eya

document.write(person.husband.name() + '<br>')  //wassim Dhokar
document.write(person.age() + '<br>')   //33
document.write(person.brothers[1].lastName + '<br>')