import { config } from 'dotenv'
import nodemailer from 'nodemailer'

config()

export class Transporter {
    transporter = (email:string)=>{
        const config = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.NODEMAILER_USER,
                pass: process.env.NODEMAILER_PASS
            }
        })

        config.sendMail({
            from: process.env.NODEMAILER_USER,
            to: email,
            subject: 'Título da mensagem',
            text: `Clique no link para confirmar seu cadastro:
            http://localhost:3003/finalizar`,
            html: `Clique no link para confirmar seu cadastro:
            <a href='http://localhost:3003/finalizar'>Clique aqui</a>`        
        })

    }
}