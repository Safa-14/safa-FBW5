//////////////////////////////////////////////
//////////  ADD THE REQUIRE         ///////////
///////////////////////////////////////////////
const express = require('express')
const session = require('express-session')
const fileupload = require('express-fileupload')
const cookie = require('cookie-parser')
const fs = require('fs')

//include data module
const dataModule = require('./modules/mongodbDataModule')

const adminRouter = require('./routes/adminRoute')



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
    secret: 'bookstore',
    resave: false,
    saveUninitialized: false,
    cookie: {} //secure when we have https in the path
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

//app.use(bla=>{}) function in use is a middleware
//we need to add the usage of any router after all others middleware so tey will effect on router requests
app.use('/admin', adminRouter);



//Read the file
const jsonText = fs.readFileSync(__dirname + '/users.json') //to write the meals.json file
/* Just send the file */
const users = JSON.parse(jsonText).users;
//console.log(users.users);
//////////////////////////////////////////////
//////////  RENDER FOLDERS         ///////////
///////////////////////////////////////////////

app.get('/', (req, res) => {
    res.render('main')
});

// app.get('/admin/addBooks', (req, res) => {
//     res.render('addBooks')
// });

app.get('/register', (req, res) => {
    res.render('register')
});

app.get('/login', (req, res) => {
    
    if (req.session.user) {
        res.redirect('/admin')
    } else {
        res.render('login')
    }
});

app.post('/login', (req, res) => {
    console.log(req.body);
    if (req.body.email && req.body.password) {
        dataModule.checkUser(req.body.email.trim(),req.body.password).then(user => {
            req.session.user = user
            res.json(1)
        }).catch(error => {
            if (error == 3) {
                res.json(4)
            }else{
                res.json(3)
            }
        })
    }else {
        res.json()
    }
    
});

//shop route
app.get('/shop', (req, res) => {
    dataModule.getAllBooks().then(books => {
        res.render('shop', {books})
    })
    
});

app.get('/book/:booktitle/:id', (req, res) => {
    //res.send(req.params.id); //to show on the browser
    
    dataModule.getBook(req.params.id).then(book => {
        let checkLogin = false
        if (req.session.user) {
            checkLogin = true
        }
        res.render('book',{book, checkLogin})
    }).catch((error)=> {
        res.send('404, book couldnt be found')
    })
});
                                                                               

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
                res.json(3)
            } else {
                res.json(4)
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