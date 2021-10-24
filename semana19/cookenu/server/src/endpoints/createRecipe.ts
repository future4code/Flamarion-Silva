import { Request, Response } from "express";
import { con } from "../data/connection";
import { Authentication } from "../services/Authentication";

export const recipe = async(req:Request, res:Response):Promise<void>=>{
    let statusCode = 400
    try{

        const {title, description} = req.body
        const token = req.headers.authorization
        const tokenData = new Authentication().getTokenData(token as string)

        if(!token){
            statusCode = 403
            throw new Error('Token inválido, expirado ou ausendo dos headers')
        }

        if(!title || !description){
            statusCode = 403
            throw new Error('Preencha os campos.')
        }

        const [user] = await con('users').where({
          id: tokenData
        })

        if(!user){
            statusCode = 404
            throw new Error('Usuário não encontrado')
        }

        const id = new Authentication().generateId()

        await con('recipes').insert({
            id,
            title,
            description,
            createdAt: new Date(),
            user_id: tokenData,
            creator: user.name
        })

        res.status(200).send('Receita adicionada')

    }catch(e:any){
        res.status(statusCode).send(e.message || e.sqlMessage)
    }
}
