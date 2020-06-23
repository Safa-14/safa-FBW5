const express = require('express')
const app =express()




app.use(express.static('./public'));

//to write ejs we should write this 2 lines:
//set view engin type
app.set('view engine', 'ejs');
//set the views folder
app.set('views', __dirname + '/views');


app.get('/', (req, res) => {
    res.render('main')
});
app.get('/menu', (req, res) => {
    res.render('menu')
});
app.get('/contact', (req, res) => {
    res.render('contact')
});

//get an email when somebody click on the button

//use express urlencoded to get posted data
app.use(express.urlencoded({extended:true}));
const emailSender = require('./modules/myEmailSender')
app.post('/contact', (req, res) => {
    console.log(req.body.contact_name);
    emailSender.sendEmail(req.body.contact_name,req.body.email_address,req.body.phone_number,req.body.post_message,(ok)=>{
        if (ok) {
            res.sendStatus(200)
        }else {
            res.sendStatus(500)//server erreur
        }
    })
    
});






app.listen(3000, () => {
    console.log('App listening on port 3000!');
});