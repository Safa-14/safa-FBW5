const http = require('http')
const fs = require('fs')
const url = require('url')

//import our nodemailer
const nodemailer = require('nodemailer')

// import our module
const saver = require('./modules/saver')


http.createServer(function (req, res) {
    let q = url.parse(req.url,true) //convert url to an object
    
    switch (q.pathname) {
        
        case '/':
            let indexHtml = fs.readFileSync('views/26-HTML-CSS-Summerize/index.html')
            res.writeHead(200, {'content-type': 'text/html'})
            res.end(indexHtml)
            break;

        case '/contact':
            console.log(q.query);
            
            //to sent the data that i tape on contact to the content.txt file
            if (q.query.name) {
                 message =  q.query.name + '\n' +q.query.subject+ '\n' +q.query.message + '\n\n'
                saver.saveContent(message,'content.txt')
                
                //send email
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: { //the user email
                        user:'safa.bouhlel91@gmail.com',
                        pass:'tiktaktou1991'
                    }
                })
            
                const mailOption = {
                    from: 'blabla@gmail.com',
                    to: 'safa.bouhlel91@gmail.com',
                    subject: 'email from your website', //q.query.subject,
                    text: 'This is a text'//q.query.name + '\n' + q.query.message
            
                }

                transporter.sendMail(mailOption, function (error, info) {
                    if (error) {
                        console.log(error);
                        
                    } else {
                        console.log(info.response);
                        
                    }
                    
                })
            }
            
            
            //saver.saveContent('Hello i am a content','content.txt') //wrote this to have a file with this content //we create a module
            let contactHtml = fs.readFileSync('views/26-HTML-CSS-Summerize/contact.html')
            res.writeHead(200, {'content-type': 'text/html'})
            res.end(contactHtml)
            break;

        case '/css/index.css':
            let indexCss = fs.readFileSync('views/26-HTML-CSS-Summerize/css/index.css')
            res.writeHead(200, {'content-type': 'text/css'})
            res.end(indexCss)
            break;

        case '/img/hero.jpg':
            
            let indexBanner = fs.readFileSync('views/26-HTML-CSS-Summerize/img/hero.jpg')
            res.writeHead(200, {'content-type': 'image/jpeg'})
            res.end(indexBanner)
            break;
        
        case '/img/Logo.png':
            let indexLogo = fs.readFileSync('views/26-HTML-CSS-Summerize/img/Logo.png')
            res.writeHead(200, {'content-type': 'image/png'})
            res.end(indexLogo)
            break;
        default:
            res.writeHead(404, {'content-type': 'text/html'})
            res.end('<h2>404 page is not found</h2>')
            break;
    }

}).listen(4700)