const express = require('express')
const app =express()

//to write ejs we chould write this 2 lines:
//set view engin type
app.set('view engine', 'ejs');

//set the views folder
app.set('views', __dirname + '/views');




app.get('/', (req, res) => {
    //res.send('hello from home');
    let arr = ['banana','apple','watermelon']
    res.render('main',{title:'Main Page',fruits:arr})

});

app.get('/contact', (req, res) => {
    //res.send('hello from home');
    res.render('main',{title:'contact us',fruits:[]})
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
