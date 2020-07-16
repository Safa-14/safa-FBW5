const express = require('express');
const dataModule = require('../modules/mongooseDataModule');


const adminRouter = express.Router()

adminRouter.use((req,res,next)=> {
    if (req.session.user) {
        next()
    } else {
        res.redirect('/login')
    }
})
adminRouter.get('/', (req, res) => {
    console.log(req.session.user.email);
    
    res.render('admin',{email: req.session.user.email})

});

adminRouter.get('/addbook', (req, res) => {
    res.render('addBooks');

});

adminRouter.post('/addbook', (req, res) => {
    //console.log(req.body);
    //console.log(req.files);
    //console.log(Object.keys(req.files));

    if (req.files) {
        const bookTitle = req.body.bookTitle
        const bookDescription = req.body.bookDescription
        const bookPdf = req.files.bookPdf
        if (bookTitle && bookDescription && bookPdf && Object.keys(req.files).length > 1) {
            const imgs = []
            for (const key in req.files) {
                if (req.files[key].mimetype != 'application/pdf') {
                    imgs.push(req.files[key])

                }
            }
            dataModule.addBook(bookTitle, bookDescription, bookPdf, imgs,req.session.user._id).then(() => {
                res.json(1)
            }).catch (error => {
                if (error == 3) {
                    res.json(3)
                }
            })
        } else {
            res.json(2)
        }
    } else {
        res.json(2)
    }


});

adminRouter.get('/myBooks', (req, res) => {
    
    dataModule.userBooks(req.session.user._id).then(books => {
        res.render('myBooks',{books})
        console.log(books);
        
    }).catch((error)=> {
        res.send('404, book couldnt be found')
    })
    
});

adminRouter.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/login')
});

adminRouter.get('/mybook/:id', (req, res) => {
    console.log(req.params.id);
    const bookid = req.params.id
    dataModule.getBook(bookid).then(book => {
        res.render('editbook' , {book})
    }).catch(error => {
        res.send('this book doesnt exist');
        
    })
    
});

adminRouter.post('/editbook', (req, res) => {
    // const newBookTitle = req.body.newBookTitle
    // const oldImgsUrlsJson = req.body.oldImgsUrls
    const {newBookTitle,oldImgsUrls,bookDescription,bookid} = req.body
    //console.log(newBookTitle,oldImgsUrls,bookDescription,bookid);
    console.log(req.files);
    
    //res.json(1)
    let newPdfBook = null
    let newImgs = []
    //get the uploaded files and classify them to either pdf or images
    if (req.files) {
        newPdfBook = req.files.bookPdf
        for (const key in req.files) {
            if (req.files[key].mimetype != 'application/pdf') {
                newImgs.push(req.files[key])
            }
            
        }
    } 

    let oldImgsUrlsArr = JSON.parse(oldImgsUrls)
    console.log(oldImgsUrlsArr);

    //delete the domain from the image urls

    oldImgsUrlsArr = oldImgsUrlsArr.map(element => {
        return element.substr(element.indexOf('/uploadedFiles'))
    })
    
    console.log(oldImgsUrlsArr);
    
    dataModule.updateBook(bookid,newBookTitle,oldImgsUrlsArr,bookDescription,newPdfBook,newImgs,req.session.user._id).then(() => {
        res.json(1)
    }).catch(error => {
        res.json(2)
    })
    

});

adminRouter.post('/deletebook', (req, res) => {
    console.log(req.body)
    const bookid = req.body.bookid
    dataModule.deleteBook(bookid,req.session.user._id).then(()=>{

        res.json(1)
    }).catch(error => {
        res.json(2)
    })
});
module.exports = adminRouter