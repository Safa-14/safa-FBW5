const express = require('express')

//require mongoose
const mongoose = require('mongoose')
const app = express()

const connectionString = 'mongodb+srv://bla_user:123456abc@cluster0.bsy7q.mongodb.net/mongoose?retryWrites=true&w=majority'
app.get('/', (req, res) => {
    res.send('welcome to mongoose');
});

app.get('/connect', (req, res) => {
    //check if mongoose is already connected to database
    if(mongoose.connection.readyState === 1){
        res.send('Already connected');
    }else {
        mongoose.connect(connectionString,{
            useCreateIndex : true,
            useNewUrlParser: true
        }).then(() => {
            res.send('it is connected now');
        }).catch(error => {
            res.send(error);
        })
    }
});
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});