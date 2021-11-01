import { Request, Response } from 'express'
import { Transport } from '../services/Transport'
import { connection } from '../data/connection'
import { config } from "dotenv"

config()


export const rescuePassword = async(req:Request, res:Response)
:Promise<void>=>{
  let statusCode = 400

  try{

    const toSend = new Transport().transporter()
    

    toSend.sendMail({
      from: process.env.NODEMAILER_USER,
      to: req.body.email,
      subject: 'Redefinição de senha',
      text: `Redirecione seu navegador para o link:
      http://localhost:3003/updatekey`,
      html: `<p>Para redefinir sua senha clique no link abaixo.</p>
      Clique <a href='http://localhost:3003/updatekey' >aqui</a>`
    })

    res.status(200).send('Verifique seu email.')
  }catch(error:any){
    res.status(statusCode).send(error.message || error.sqlMessage)
  }
}
