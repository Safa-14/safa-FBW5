//import our nodemailer
const nodemailer = require('nodemailer')

//send email
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { //the user email
        user: 'safa.bouhlel91@gmail.com',
        pass: 'tiktaktou1991'
    }
})


function sendEmail(name, email, subject, message,callback) {
    const mailOption = {
        from: 'safa.bouhlel91@gmail.com',//from the owner website
        to: 'safa.bouhlel91@gmail.com',//email you will sent to
        subject: subject,
        text:email+'\n'+ name + '\n' + message

    }
    transporter.sendMail(mailOption, function (error, info) {
        if (error) {
            console.log(error);
            callback(false)
        } else {
            console.log(info.response);
            callback(true)
        }

    })
}

module.exports = {sendEmail}

