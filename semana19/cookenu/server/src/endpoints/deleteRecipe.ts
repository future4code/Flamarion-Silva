import { Request, Response } from "express"
import { con } from "../data/connection"
import { Authentication } from "../services/Authentication"


export const deleteRecipe = async(req:Request, res:Response)
:Promise<void>=>{
    let statusCode = 400
    try{

        const token = req.headers.authorization
        const tokenData = new Authentication().getTokenData(token as string)

        if(!token){
            statusCode = 403
            throw new Error('Token inválido, expirado ou ausente nos headers')            
        }

        const [recipes] = await con('recipes').where({
            id: req.params.id
        })

        if(!recipes){
            statusCode = 404
            throw new Error('Receita não encontrada.')
        }

        await con.raw(`delete from recipes where id = '${req.params.id}'`)

        res.status(200).send('Receita excluida.')
    }catch(e:any){
        res.status(statusCode).send(e.message || e.sqlMessage)
    }
}