import { config } from "dotenv"
import { Request, Response, text } from "express"
import { Transporter } from "../services/Transporter"

config()

export const passRescue = async(req:Request, res:Response)
:Promise<void>=>{
    let statusCode = 400
    try{
        
        const transporter = new Transporter()
        transporter.sendConfig.sendMail({
            from: process.env.NODEMAIL_USER,
            to: req.body.email,
            subject: 'Redefinição de senha',
            text: `Redirecione seu navegador para o link:
            http://localhost:3000/rescue`,
            html: `<p>Clique no link abaixo:</p>
            <a href='http://localhost:3000/rescue'>Aqui</a>`
        })

        res.status(200).send('Verique sua caixa de entrada')

    }catch(e:any){
        res.status(statusCode).send(e.message || e.sqlMessage)
    }
}