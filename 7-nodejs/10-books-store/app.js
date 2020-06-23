//////////////////////////////////////////////
//////////  ADD THE REQUIRE         ///////////
///////////////////////////////////////////////
const express = require('express')
const session = require('express-session')
const fileupload = require('express-fileupload')
const cookie = require('cookie-parser')
const fs = require('fs')

//include data module
const dataModule = require('./modules/dataModule')




//////////////////////////////////////////////
//////////  ADD THE MIDDLEWARE         ///////////
///////////////////////////////////////////////
const app = express()
app.use(express.static('./public'));
//to write ejs we chould write this 2 lines:
//set view engin type
app.set('view engine', 'ejs');
//set the views folder
app.set('views', __dirname + '/views');
app.use(express.urlencoded({
    extended: false
})); //we dont need to get the data fron the url(we need to post data and file with post)
app.use(express.json())
//create session object options
const sessionOptions = {
    secret: 'bookStore',
    cookie: {}
}
//use a session
app.use(session(sessionOptions))

//use cookie parser as a middleware
app.use(cookie())

//set fileupload middleware
app.use(fileupload({
    limits: {
        fileSize: 50 * 1024 * 1024
    }
}));





//////////////////////////////////////////////
//////////  RENDER FOLDERS         ///////////
///////////////////////////////////////////////

app.get('/', (req, res) => {
    res.render('main')
});

app.get('/register', (req, res) => {
    res.render('register')
});

//Read the file
const jsonText = fs.readFileSync(__dirname + '/users.json') //to write the meals.json file
/* Just send the file */
const users = JSON.parse(jsonText).users;
//console.log(users.users);                                                                               

app.post('/register', (req, res) => {
     console.log(req.body);
     //2 data error
     //1 user registered successfully
     //3 user exist
     //4 server error
    const email = req.body.email.trim()
    const password = req.body.password.trim()
    const repassword = req.body.repassword.trim()

    if (email && password && password == repassword) {
       // let ressult = dataModule.registerUser
        dataModule.registerUser(email,password).then(() => {
            res.json(1)
        }).catch(error => {
            console.log(error);
            if (error == "exist") {
                res.json(4)
            } else {
                res.json(3)
            }
            
        })
    }else {
        res.json(2)
    }
    // let obj = {
        
    //     email,
    //     password
    // }
    // users.push(obj)
    // console.log(users);
    
    //fs.writeFileSync('./users.json', JSON.stringify(users)) //to write the new meal inside the meals.json
    //res.redirect('/register')
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});