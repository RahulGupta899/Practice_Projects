require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const database = require('./database');
const nodemailer = require('nodemailer');
const User = require('./UserSchema')

const PORT = process.env.PORT

// MIDDLEWARE
app.use(bodyParser.json())

// CONNECT DB
database();


app.get('/api/',async(req,res)=>{
    res.status(200).json({
        message: "Application is running"
    })
})


app.post('/api/register',async(req,res)=>{
    const {email,password,name,age} = req.body;

    // Generate OTP
    const otp = 4039;

    // OTP EXPIRY
    const OTPExpiers = new Date();
    OTPExpiers.setMinutes(OTPExpiers.getMinutes() + 30);



    // Transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'rahulgupta8jan2015@gmail.com',
            pass: "RahulPRO@2015"
        }
    })

    // Send the OTP via email
    const mailOptions = {
        from: 'rahulgupta8jan2015@gmail.com',
        to: 'rguptajan@gmail.com',
        subject: 'Your OTP for Regisration', 
        text: `Your OTP: ${otp}`
    }

    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //       console.log(error);
    //       res.status(500).send('Email could not be sent.');
    //     } else {
    //       console.log('Email sent: ' + info.response);
    //       res.status(200).send('OTP sent to your email.');
    //     }
    //   });

    transporter.sendMail(mailOptions, async(error, info) => {
        if(error){
            console.log(error)
            res.status(500).send('Email Could not be sent')
        }
        else{
            console.log('Email sent: ' + info.response );
            await User.create({
                name,
                age,
                email,
                password,
                otp,
                OTPExpiers,
                isVerified: false
            })
            res.status(200).json({
                success: true,
                message: 'Otp sent to email'
            })
        }
    })

    
})






// START SERVER
app.listen(PORT,()=>{
    console.log(`Server is running at Port ${PORT}...`)
})