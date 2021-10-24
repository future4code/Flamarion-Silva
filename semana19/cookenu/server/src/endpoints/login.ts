import { Request, Response } from "express";
import { con } from "../data/connection";
import { Authentication } from "../services/Authentication";

export const login = async(req:Request, res:Response):Promise<void>=>{
    let statusCode = 400
    try{

        const {email, password} = req.body

        if(!email || !password){
            statusCode = 401
            throw new Error('Preencha os campos.')
        }

        const [user] = await con('users').where({ email })
        const auth = new Authentication()

        if(!user){
            statusCode = 401
            throw new Error('Dados inválidos. Cheque os campos e tente novamente.')
        }

        if(!auth.compare(password, user.password)){
            statusCode = 401
            throw new Error('Dados inválidos. Cheque os campos e tente novamente.')
        }

        const token = auth.generateToken(user.id)

        res.status(200).send({id: user.id, access_token: token})

    }catch(e:any){
        res.status(statusCode).send(e.message || e.sqlMessage)
    }
}
