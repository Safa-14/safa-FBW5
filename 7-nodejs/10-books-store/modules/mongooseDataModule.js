const passwordHash = require('password-hash')
const {
    MongoClient,
    ObjectID
} = require('mongodb')
const mongoose = require('mongoose')
const fs = require('fs')
const connectionString = 'mongodb+srv://fbw5:123456abc@cluster0.bsy7q.mongodb.net/test1?retryWrites=true&w=majority'
const {Schema} = mongoose

const usersSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

//create books schema
const bookSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    pdfUrl: {
        type: String,
        required: true
    },
    imgs: {
        type: [String],
        required: true,
        min:1
    },
    userid: {
        type: String,
        required: true
    }

})

//connect this schema to that collection
//create users modal
const Users = mongoose.model('users', usersSchema)
//create books model
const Books = mongoose.model('books', bookSchema)

function connect() { //to connect mongodbdata module wih data base
    return new Promise((resolve, reject) => {
        if (mongoose.connection.readyState === 1) {
            resolve()
        } else {
            mongoose.connect(connectionString, {
                useUnifiedTopology: true,
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

function registerUser(email, password) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            //creta new user
            const newUser = new Users({
                email: email,
                password: passwordHash.generate(password)
            })
            //save the newUser in the database
            newUser.save().then(result => {
                //console.log(result);
                resolve()

            }).catch(error => {
                //console.log(error.code);
                if (error.code === 11000) {
                    reject('exist')
                } else {
                    reject(error)
                }
                
            })

        }).catch(error => {
            reject(error)
        })
    })
}

function checkUser(email, password) {
    // your code
    return new Promise((resolve, reject) => {
        connect().then(() => {
            
            Users.findOne({email: email}).then(user => {
                
                if (user) {
                    if (passwordHash.verify(password, user.password)) {
                        resolve(user)
                    } else {
                        reject(3)
                    }
                } else {
                    reject(3)
                }
            }).catch(error => {
                
                reject(error)
            })
        }).catch(error => {
            reject(error)
        })
    })
}

function addBook(bookTitle, bookDescription, bookPdf, bookImgs, userid) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            //delete client.close()
            Books.findOne({
                title: bookTitle,
                userid: userid
            }).then(findBook => {
                if (findBook) {
                    //delete client.close()
                    reject(3)
                } else {
                    // create images array to be saved in database
                    const imgsArr = []
                    bookImgs.forEach((img, idx) => {
                        // get file extension
                        let ext = img.name.substr(img.name.lastIndexOf('.'))
                        // set the new image name
                        let newName = bookTitle.trim().replace(/ /g, '_') + '_' + userid + '_' + idx + ext
                        img.mv('./public/uploadedFiles/' + newName)
                        imgsArr.push('/uploadedFiles/' + newName)
                    });
                    // set a new pdf file name
                    let pdfName = bookTitle.trim().replace(/ /g, '_') + '_' + userid + '.pdf'
                    // move the pdf file with the new name to uploadedfiles folder
                    bookPdf.mv('./public/uploadedFiles/' + pdfName)
                    // set the pdf url that gonna be saved in the json file
                    let pdfNewUrl = '/uploadedFiles/' + pdfName

                    const newBook = new Books({
                        title: bookTitle,
                        description: bookDescription,
                        pdfUrl: pdfNewUrl,
                        imgs: imgsArr,
                        userid: userid
                    })
                    newBook.save().then(() => {
                        //if (response.result.ok) {
                            resolve()
                        //} else {
                            //reject(new Error('can not insert a book'))
                        //}
                    }).catch(error => {
                        reject(error)
                    })
                }
            }).catch(error => {
                
                reject(error)
            })
        }).catch(error => {
            reject(error)
        })
    })
}

function getAllBooks() {
    return new Promise((resolve, reject) => {
        connect().then(()=> {
            //find will return an array
            //find one will return an object
            Books.find().then(books => {
                //add id property to each book instead of _id
                //because this how it used in ejs
                books.forEach(book => {
                    //book.id=book._id
                    book['id'] = book['_id']
                })
                //client.close()

                //export the object using resolve to be used on then hand
                resolve(books)
            }).catch(error => {
                //client.close()
                reject(error);
            })

        }).catch(error => {
            reject(error);

        })

    })
}

function getBook(id) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            //const db = client.db('test1')
            Books.findOne({_id: id}).then(foundBook => {
                console.log(foundBook);
                //client.close()

                if (foundBook) {
                    foundBook.id = foundBook._id
                    resolve(foundBook)
                } else {
                    reject(new Error('can not find a book with this id: ' + id))
                }
            }).catch(error => {
                //client.close()
                reject(error);
            })

        }).catch(error => {
            reject(error);

        })

    })
}

function userBooks(userid) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
           //const db = client.db('test1')
            Books.find({userid: userid}).then(books => {
                //add id property to each book instead of _id
                //because this how it used in ejs
                books.forEach(book => {
                    //book.id=book._id
                    book['id'] = book['_id']
                })
                //client.close()

                //export the object using resolve to be used on then hand
                resolve(books)
            }).catch(error => {
                //client.close()
                reject(error);
            })

        }).catch(error => {
            reject(error);

        })

    })
}

function updateBook(bookid, newBookTitle, oldImgsUrls, bookDescription, newPdfBook, newImgs, userid) {
    return new Promise((resolve, reject) => {
        try {
            (async () => {
                let oldBookData = await getBook(bookid)
                const deletedImgs = []
                const keepImgs = []
                //get the old images length to be used in new images names
                //let newIdx = oldBookData.imgs.length

                // //get update version number
                // let updateNum = 1
                // //this if will be run from the second upload
                // if (oldBookData.update) {
                //     updateNum = oldBookData.update + 1
                // }

                //check which images user wants to keep and which to delete
                // so we get the book and then compare the image that users keep to the images that are in the data base if the image is the same we will put it in keepimage and if we delete it we will put it in delete image
                oldBookData.imgs.forEach(img => {
                    if (oldImgsUrls.indexOf(img) >= 0) {
                        keepImgs.push(img)
                    } else {
                        deletedImgs.push(img)
                    }
                })

                //save new images to file system and to array to be saved to db
                const newImgsUrlsArr = []
                newImgs.forEach((img, idx) => {
                    const imgExt = img.name.substr(img.name.lastIndexOf('.'))
                    const newImgName = newBookTitle.trim().replace(/ /g, '_') + '_' + userid + '_' + idx + '_' + (oldBookData.__v +1) + imgExt
                    newImgsUrlsArr.push('/uploadedFiles/' + newImgName)
                    img.mv('./public/uploadedFiles/' + newImgName)
                })
                //delete the deleted images files from the system
                deletedImgs.forEach(file => {
                    //first check fie is exist
                    if (fs.existsSync('./public' + file)) {
                        fs.unlinkSync('./public' + file)
                    }
                })

                //check if user upload a new pdf file and move it to the same place of the old one so it will OVERWRITE it
                if (newPdfBook) {
                    newPdfBook.mv('./public' + oldBookData.pdfUrl)
                }
                 await connect()
                //const db = client.db('test1')
                const result = await Books.updateOne({_id: bookid}, {
                    $set: {
                        title: newBookTitle,
                        description: bookDescription,
                        imgs: [...keepImgs, ...newImgsUrlsArr],
                        $inc: {__v:1}
                    }
                })
                //client.close()
                resolve()
            })()
        } catch (error) {
            reject(error)
        }


    })
}


function deleteBook(bookid, userid) {
    return new Promise((resolve, reject) => {
        getBook(bookid).then(book => {
            //check if book belong to the current login user
            if (book.userid === userid) {
                //delete book images
                book.imgs.forEach(img => {
                    if (fs.existsSync('./public' + img)) {
                        fs.unlinkSync('./public' + img)
                    }
                })

                //delete pdf file
                //check if pdf file is exist then delete it
                if (fs.existsSync('./public' + book.pdfUrl)) {
                    fs.unlinkSync('./public' + book.pdfUrl)
                }

                //connect().then(() => {
                    //const db = client.db('test1')
                    Books.deleteOne({_id: bookid}).then(() => {
                        //client.close()
                        resolve()
                    }).catch(error => {
                        //client.close()
                        reject(error)
                    })


                //}).catch(error => {
                    //reject(error)
                //})
            } else {
                reject(new Error('hacking try..not this time'))
            }
        }).catch(error => {
            reject(error)
        })


    })
}
module.exports = {
    registerUser,
    checkUser,
    addBook,
    getAllBooks,
    getBook,
    userBooks,
    updateBook,
    deleteBook
}