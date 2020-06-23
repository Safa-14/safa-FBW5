const express = require('express')
const app = express()
const fs = require('fs');
const adminRoute = require('./routs/adminRoute')
const fileUpload = require('express-fileupload')

//set fileupload middleware
app.use(fileUpload({limits: { fileSize: 50 * 1024 * 1024 }}));

const emailSender = require('./modules/emailSender')

app.use(express.urlencoded({extended: false }))

app.use(express.static('./public'));




//to write ejs we chould write this 2 lines:
//set view engin type
app.set('view engine', 'ejs');

//set the views folder
app.set('views', __dirname + '/views');



app.get('/', (req, res) => {
    res.render('main')
});



//Read the file
const jsonText = fs.readFileSync(__dirname +'/meals.json')//to write the meals.json file
/* Just send the file */
const myMeals = JSON.parse(jsonText);

app.use('/admin', adminRoute.adminBurgerRouter(myMeals));

// let meals = [] //we delete this array and replace it with a json file



app.get('/menu', (req, res) => {
    // //Read the file
    // const jsonText = fs.readFileSync(__dirname +'/meals.json')
    // /* Just send the file */
    // const myMeals = JSON.parse(jsonText);
    res.render('menu',{meals:myMeals})
});

app.get('/contact', (req, res) => {
    res.render('contact',{sent:1})

});

app.post('/contact', (req, res) => {
    console.log(req.body);
    const name = req.body.name
    const email = req.body.email
    const subject =req.body.subject
    const message = req.body.message
    if (name != '' && name.length <100) {
        emailSender.sendEmail(name,email,subject,message,(ok)=>{
        if (ok) {
            res.sendStatus(200)
        }else {
            res.sendStatus(500)//server erreur
        }
    })
    }
    
    
});

app.post('/contact1', (req, res) => {
    console.log(req.body);
    const name = req.body.name
    const email = req.body.email
    const subject =req.body.subject
    const message = req.body.message
    if (name != '' && name.length <100) {
        emailSender.sendEmail(name,email,subject,message,(ok)=>{
        if (ok) {
            //res.sendStatus(200)
            res.render('contact',{sent:2})
        }else {
            //res.sendStatus(500)//server erreur
            res.render('contact',{sent:3})
        }
    })
    }
    
    
});



app.listen(3000, () => {
    console.log('App listening on port 3000!');
});