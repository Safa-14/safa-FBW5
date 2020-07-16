const express = require('express')

//require mongoose
const mongoose = require('mongoose')
const app = express()
const connectionString = 'mongodb+srv://bla_user:123456abc@cluster0.bsy7q.mongodb.net/mongoose?retryWrites=true&w=majority'



//get schema object from mongoose
//const Schema = mongoose.Schema
const {Schema} = mongoose

//create users schema : the object that i want to save how i want it to be like
const userSchema = new Schema({
    fname: {
        type: String,
        required:true
    },
    lname: {
        type: String,
        required:true
    },
    email: {
        type:String,
        required: true,
        unique:true
    },
    age: {
        type:Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    }
})

//connect this schema to that collection
const Users = mongoose.model('users', userSchema)

app.get('/', (req, res) => {
    res.send('welcome to mongoose');
});

app.get('/connect', (req, res) => {
    //check if mongoose is already connected to database
    if(mongoose.connection.readyState === 1){
        res.send('Already connected');
    }else {
        mongoose.connect(connectionString,{
            useUnifiedTopology:true,
            useCreateIndex : true,
            useNewUrlParser: true
        }).then(() => {
            res.send('it is connected now');
        }).catch(error => {
            res.send(error);
        })
    }
});


function connect() {
    return new Promise((resolve, reject) => {
        if (mongoose.connection.readyState === 1) {
            resolve()
        }else {
            mongoose.connect(connectionString, {
                useUnifiedTopology:true,
                useCreateIndex: true,
                useNewUrlParser: true
            }).then(() => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        }
    })
    
}

// connect().then(()=> {

// }).catch(() => {

// })

app.get('/adduser', (req, res) => {
    connect().then(() => {
        //create new user
        const newUser = new Users({
            fname: 'Safa',
            lname: 'Bouhlel',
            email: 'safa.bouhlel91@gmail.com',
            age: 29,
            active: true
        })
        newUser.save().then(result =>{
            res.json(result)
        }).catch(error => {
            res.send(error.message)
        })
    }).catch(error => {
        res.send(error.message)
    })
});


app.get('/updateuser', (req, res) => {
    connect().then(() => {
        Users.updateOne({_id : '5f0c495c56281303fc9c0596'}, {
            age:25,
            //increase the version number in the database with one
            //to show how many times this document has been updated
            $inc: {__v :1}
        }).then(result => {
            res.json(result)
        }).catch(error => {
            res.send(error.message);
        })

    }).catch(error => {
        res.send(error.message);
    })
});


app.get('/updateusers', (req, res) => {
    connect().then(() => {
        Users.updateMany({lname: ' Bouhlel'}, {
            fname:'MRS Safa',
            //increase the version number in the database with one
            //to show how many times this document has been updated
            $inc: {__v :1}
        }).then(result => {
            res.json(result)
        }).catch(error => {
            res.send(error.message);
        })

    }).catch(error => {
        res.send(error.message);
    })
});

app.get('/getuser', (req, res) => {
    connect().then(() => {
        Users.findOne({email: 'safa.bouhlel91@gmail.com'}).then(result => {
            res.json(result)
        }).catch(error => {
            res.send(error.message);
        })
    }).catch(error => {
        res.send(error.message);
    })
});

app.get('/getusers', (req, res) => {
    connect().then(() => {
        Users.find().then(result => {
            //return an array
            res.json(result)
        }).catch(error => {
            res.send(error.message);
        })
    }).catch(error => {
        res.send(error.message);
    })
});

app.get('/deleteuser', (req, res) => {
    connect().then(() => {
        Users.deleteOne({email:'safa1.bouhlel91@gmail.com'}).then(result => {
            //delete the first one with that condition
            res.json(result)
        }).catch(error => {
            res.send(error.message);
        })
    }).catch(error => {
        res.send(error.message);
    })
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});