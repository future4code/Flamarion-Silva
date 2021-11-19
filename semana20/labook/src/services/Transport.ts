import nodemailer from "nodemailer"
import dotenv from 'dotenv'

dotenv.config()

export class Transport {
  transporter = ()=>{
    const configSend = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
      }
    })
    return configSend
  }
}
