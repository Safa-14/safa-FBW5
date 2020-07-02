const express = require('express')
//const MongoClient = require('mongodb').MongoClient
//const ObjectID = require('mongodb').ObjectID
//if variable name same as propriety we can write the line before like this
const {MongoClient,ObjectID} = require('mongodb')

const fs = require('fs')
const app = express()
const passwordHash =require('password-hash')
//to write ejs we chould write this 2 lines:
//set view engin type
app.set('view engine', 'ejs');
//set the views folder
app.set('views', __dirname + '/views');

app.use(express.urlencoded({
    extended: false
})); //we dont need to get the data fron the url(we need to post data and file with post)
app.use(express.json())



//connect to the mango data base
const connectionString = 'mongodb+srv://fbw5:123456abc@cluster0.bsy7q.mongodb.net/test1?retryWrites=true&w=majority'

app.get('/', (req, res) => {
    res.send('welcome to mongodb');
});
//let mongoClient 
app.get('/connect', (req, res) => {
    //open connection to mongodb
    MongoClient.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(client => {
        //mongoClient = client
        console.log(client);
        res.send('connected');
    }).catch(error => {
        console.log(error);

        res.send('couldnt connect');

    })
});

// app.get('/close', (req, res) => {
//     //close connection to mongodb
//     mongoClient.close()
//     res.send('closed');
// });

app.get('/adduser', (req, res) => {
    //connect nodejs to mongodb server or cluster
    MongoClient.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(client => {
        //get the database
        const db = client.db('test1')
        //insert data to a collection
        db.collection('users').insertOne({
            email: 'safa@gmail.com',
            password: '123456'
        }).then(response => {
            console.log(response);
            res.send(response);
            client.close()
        }).catch(error => {
            console.log(error);
            res.send(error);
            client.close()
        })

    }).catch(error => {
        console.log(error);
        res.send('couldnt connect');

    })

});

app.get('/adduserasync', (req, res) => {
    //iffie (async()=>{})()
    (async () => {
        try {
            let client = await MongoClient.connect(connectionString, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            const db = client.db('test1')
            const response = await db.collection('users').insertOne({
                email: 'bla@bla.bla',
                password: '123456'
            })
            client.close()
            res.send(response)
        } catch (error) {
            res.send(error);
        }

    })()
});

app.get('/insertmany', (req, res) => {
    (async () => {
        try {
            let client = await MongoClient.connect(connectionString, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            const db = client.db('test1')
            const response = await db.collection('users').insertMany([
                {
                email: 'bla1@bla.bla',
                password: '123456'
            },
            {
                email: 'bla2@bla.bla',
                password: '123456'
            },
            {
                email: 'bla3@bla.bla',
                password: '123456'
            }

        ])
            client.close()
            res.send(response)
        } catch (error) {
            res.send(error);
        }

    })()
});

app.get('/getusers', (req, res) => {
    (async () => {
        try {
            let client = await MongoClient.connect(connectionString, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            const db = client.db('test1')
            const response = await db.collection('users').find().toArray()
            console.log(response);
            
            client.close()
            res.send(response)
        } catch (error) {
            res.send(error);
        }

    })()
});

app.get('/findone', (req, res) => {
    (async()=>{
        try {
            const client = await MongoClient.connect(connectionString, {useNewUrlParser: true,useUnifiedTopology: true})
            const db = client.db('test1') 
            // const response = await db.collection('users').findOne({email:'bla@bla.bla'})
            const response = await db.collection('users').findOne({_id:new ObjectID('5efc64992cbdc531cbb31468')})
            client.close()
            res.send(response)
        } catch (error) {
            res.send(error);
        }
     
    })()
});

app.get('/updatemany', (req, res) => {
    (async()=>{
        try {
            const client = await MongoClient.connect(connectionString,{useNewUrlParser:true,useUnifiedTopology:true})
            const db = client.db("test1")
            const response = await db.collection('users').updateMany({password : '123456'},{
                $set: {email :'asd@asd.asd'}
            })
            client.close()
            res.send(response)
        } catch (error) {
            res.send(error)
        }
    })()
});

app.get('/updateone', (req, res) => {
    (async()=>{
        try {
            const client = await MongoClient.connect(connectionString,{useNewUrlParser:true,useUnifiedTopology:true})
            const db = client.db('test1')
            const response = await db.collection('users').updateOne({_id: new ObjectID('5efc64992cbdc531cbb31467')},{
                $set : {email:'newemail@email.email'}
            })
            client.close()
            res.send(response);
        } catch (error) {
            res.send(error);
        }
    })()
});

app.get('/deletemany', (req, res) => {
    (async()=>{
        try {
            const client = await MongoClient.connect(connectionString,{useNewUrlParser:true,useUnifiedTopology:true})
            const db = client.db('test1')
            const response = await db.collection('users').deleteMany({password:'123456'})
            client.close()
            res.send(response);
        } catch (error) {
            res.send(error);
        }
    })()
});

app.get('/deleteone', (req, res) => {
    (async()=>{
        try {
            const client = await MongoClient.connect(connectionString,{useUnifiedTopology:true,useNewUrlParser:true})
            const db = client.db('test1')
            const response = await db.collection('users').deleteOne({_id: new ObjectID('5efc839dfa45ae3d59e48511')})
            client.close()
            res.send(response);
        } catch (error) {
            res.send(error)
        }
    })()
});

app.get('/register', (req, res) => {
    res.render('register')
});

app.post('/register', (req, res) => {
    console.log(req.body);
    const email = req.body.username
    const password =passwordHash.generate(req.body.password) 
if (email && password) {
    (async () => {
        try {
            const client = await MongoClient.connect(connectionString, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            const db = client.db('test1')
            const response = await db.collection('users').insertOne({
                email: email,
                password: password 
            })
            client.close()
            res.send(response)
        } catch (error) {
            res.send(error);
        }

    })()
}
    
})
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});