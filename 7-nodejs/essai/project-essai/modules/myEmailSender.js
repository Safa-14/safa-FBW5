const nodemailer = require('nodemailer')

//send email
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { //the user email
        user:'safa.bouhlel91@gmail.com',
        pass:'tiktaktou1991'
    }
})

function sendEmail(name,email,subject,message) {
    const mailOption = {
        from: 'safa.bouhlel91@gmail.com',
        to: 'safa.bouhlel91@gmail.com',
        subject: subject, //q.query.subject,
        text:email+ '\n' + name+ '\n' + message

    }

    transporter.sendMail(mailOption, function (error, info) {
        if (error) {
            console.log(error);
            
        } else {
            console.log(info.response);
            
        }
        
    })
}

module.exports = {sendEmail}