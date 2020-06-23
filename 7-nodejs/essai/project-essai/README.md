# STEPS to follow
1* create a folder with name:views
2* create inside it the ejs files with have the content of the pages like main, contact etc...
3* render those ejs on the app.js like this:
    const express = require('express')
    const app =express()

    app.use(express.static('./public'));

    //to write ejs we chould write this 2 lines:
    //set view engin type
    app.set('view engine', 'ejs');

    //set the views folder
    app.set('views', __dirname + '/views');
    app.get('/', (req, res) => {
        res.render('main')
    });

    app.listen(3000, () => {
        console.log('App listening on port 3000!');
    });


4* Make a new folder titule: partials inside views folder inside it we will create the content that repeat on the main and contact and menu etc..
5* then replace the shared content on main.ejs and contact.ejs and menu.ejs with this : <%- include ('partials/htmlHead') %> 


# now we will make the send of the message
1* when he is using ajax, then go and see the url on the js folder from public and change it to this : url: '/contact'
2* add the app.post() on the app.js
3* use the express urlencoded to get posted data  :app.use(express.urlencoded({extended:true}));
4* install nodmailer : npm i nodemailer
5* now we create how to send the data so we can create a module to put the part of sending mail there and there import this file to app.js using const emailSender = require('./modules/myEmailSender') (show mySendEmail.js file)