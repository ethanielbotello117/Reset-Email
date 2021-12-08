const nodeMailer = require("nodemailer")
require("dotenv").config()

const sendEmail = async (req, res) => {
    const transporter = nodeMailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'ayla.wolf51@ethereal.email',
            pass: 'UU6TxarnvhMnmG4DzA'
        }
    });

    let info = await transporter.sendMail({
        to: 'ethanielbotello117@gmail.com',
        from: 'wacmondalds@gmail.com',
        replyTo: 'something@else.idk',
        subject: 'NodeMailer Test',
        html: '<h1>HELLO</h1><p>testing <em> nodemailer </em> here </p>'
    });

    res.json(info)
}

const resetEmail = async (req, res) => {
    const transporter = nodeMailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'ayla.wolf51@ethereal.email',
            pass: 'UU6TxarnvhMnmG4DzA'
        }
    });

    let info = await transporter.sendMail({
        to: 'ethanielbotello117@gmail.com',
        from: 'wacmondalds@gmai.com',
        replyTo: 'something@else.idk',
        subject: 'NodeMailer Reset',
        html: '<h1>HELLO</h1><a href="*">Reset here</a>'
    });

    res.json(info)
}

module.exports = {sendEmail, resetEmail}