const express = require('express')
const fs = require('fs');
const adminRoute = require('./routs/adminRoute')
const fileUpload = require('express-fileupload')
const session = require('express-session')
const cookie = require('cookie-parser')

const app = express()

//create session object options
const sessionOptions = {
    secret: 'burger',
    cookie: {
        // secure:true,
        // maxAge:5*60*1000
    }
}
//use a session
app.use(session(sessionOptions))

//use cookie parser as a middleware
app.use(cookie())

//set fileupload middleware
app.use(fileUpload({
    limits: {
        fileSize: 50 * 1024 * 1024
    }
}));


const emailSender = require('./modules/emailSender')

//when we use send data with fetch, we need to use those things
app.use(express.urlencoded({
    extended: false
}))

//use express.json() to get posted json data and converted to object inside the body
app.use(express.json())

app.use(express.static('./public'));

//const config = require('./users.json');


//to write ejs we chould write this 2 lines:
//set view engin type
app.set('view engine', 'ejs');

//set the views folder
app.set('views', __dirname + '/views');



app.get('/', (req, res) => {
    res.render('main')
});



//Read the file
const jsonText = fs.readFileSync(__dirname + '/meals.json') //to write the meals.json file
/* Just send the file */
const myMeals = JSON.parse(jsonText);

app.use('/admin', adminRoute.adminBurgerRouter(myMeals));

// let meals = [] //we delete this array and replace it with a json file



app.get('/menu', (req, res) => {
    // //Read the file
    // const jsonText = fs.readFileSync(__dirname +'/meals.json')
    // /* Just send the file */
    // const myMeals = JSON.parse(jsonText);
    res.render('menu', {
        meals: myMeals
    })
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        sent: 1
    })

});

app.get('/login', (req, res) => {
    //check save cookie in req
    console.log(req.cookies);//see the cookies
    console.log(res.cookie);//set the cookie
    
    if (req.cookies.burgerUser) {
        const jsonText = fs.readFileSync(__dirname + '/users.json')
        const users = JSON.parse(jsonText)
        const foundUser = users.find(user => user.username == req.cookies.burgerUser.username && user.password == req.cookies.burgerUser.password)

        if (foundUser) {
            req.session.user = foundUser
            res.redirect('/admin')
        }else {
            res.render('login')
        }
    }else {
        res.render('login')
    }
    

});

app.get('/logout', (req, res) => {
    //destroy the session and log out
    req.session.destroy()
    res.redirect('/')

});

app.post('/login', (req, res) => {

    console.log(req.session);

    console.log(req.body);
    const jsonText = fs.readFileSync(__dirname + '/users.json')
    const users = JSON.parse(jsonText)
    console.log(users);
    // let check = false
    // for (let i = 0; i < users.length; i++) {
    //     if (req.body.usename == users[i].username && req.body.password == users[i].password) {
    //         check = true
    //         break;
    //     }

    // }

    // if (check) {
    //     res.json('exist')
    // } else {
    //     res.json('not exist')
    // }


    //using es6 array find
    const foundUser = users.find(user => user.username == req.body.username && user.password == req.body.password)
    if (foundUser) {
        req.session.user = foundUser
        res.cookie("burgerUser", foundUser, {maxAge:600000,httpOnly:true})
        res.json('exist')
    } else {
        res.json('not exist')
    }


});

app.post('/contact', (req, res) => {
    console.log(req.body);
    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message
    if (name != '' && name.length < 100) {
        emailSender.sendEmail(name, email, subject, message, (ok) => {
            if (ok) {
                res.sendStatus(200)
            } else {
                res.sendStatus(500) //server erreur
            }
        })
    }


});

app.post('/contact1', (req, res) => {
    console.log(req.body);
    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message
    if (name != '' && name.length < 100) {
        emailSender.sendEmail(name, email, subject, message, (ok) => {
            if (ok) {
                //res.sendStatus(200)
                res.render('contact', {
                    sent: 2
                })
            } else {
                //res.sendStatus(500)//server erreur
                res.render('contact', {
                    sent: 3
                })
            }
        })
    }


});

//GET MEAL USING ID
// app.get('/meal/:id', (req, res) => {
//     //res.send(req.params.id);
//     const idx = req.params.id

    
//     if (myMeals[idx]) {
//         res.render('meal',{
//             mealTitle:myMeals[idx].title ,
//             mealPrice:myMeals[idx].price ,
//             mealDescription:myMeals[idx].description ,
//             mealImg:myMeals[idx].imgUrl 
//         })
//     } else {
//         res.send('wrong wrong');
//     }
// });



//GET MEAL USING TITLE
app.get('/meal/:title', (req, res) => {
    //res.send(req.params.id);
    const mealTitle = req.params.title
    const foundMeal = myMeals.find(meal => meal.title.trim().replace(/ /g, '_')==mealTitle)

    console.log(foundMeal.details);
    
    if (foundMeal) {
        res.render('meal',{
            mealTitle:foundMeal.title ,
            mealPrice:foundMeal.price ,
            mealDescription:foundMeal.description ,
            mealImg:foundMeal.imgUrl, 
            mealDetails: foundMeal.details
        })
    } else {
        res.send('wrong wrong');
    }
});


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});