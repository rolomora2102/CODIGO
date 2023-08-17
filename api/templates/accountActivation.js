 const nodemailer = require('nodemailer');
 require('dotenv').config();
 

 const sendEmail = (pName, pPassword, pMail, code) => {
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.MAILUSER,
            pass: process.env.MAILPSSWD
        },
        connectionTimeout: 5 * 60 * 1000, // 5 min
        tls: {
            ciphers: 'SSLv3'
        },
        logger: true,
        debug: true
    });

    let mailOptions = {
        from: 'MiTrabajo',
        to: pMail,
        subject: 'Hola',
        html: `Hola ${code}`
    }
}