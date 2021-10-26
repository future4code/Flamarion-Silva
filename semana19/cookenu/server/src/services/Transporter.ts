import { config } from 'dotenv'
import nodemailer from 'nodemailer'

config()

export class Transporter {
    //transport = ()=>{
        sendConfig = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.NODEMAILER_USER,
                pass: process.env.NODEMAILER_PASS
            }
        })

      //  return sendConfig
    //}
    
}