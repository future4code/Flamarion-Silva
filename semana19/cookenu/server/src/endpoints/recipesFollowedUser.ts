import { Request, Response } from "express"
import { con } from "../data/connection"
import { Authentication } from "../services/Authentication"


export const recipesFollowedUser = async(req:Request, res:Response)
:Promise<void>=>{
    let statusCode = 400
    try{
        //FAZER VERIFICAÇÃO DOS TOKENS NO FRONTEND
        //VERIFICAR SE É O USUÁRIO LOGADO
        const token = req.headers.authorization
        const tokenData = new Authentication().getTokenData(token as string)

        if(!token){
            statusCode = 404
            throw new Error('Token inválido, expirado ou ausente dos headers')
        }
        
        const [recipes] = await con.raw(`
        select title, description, createdAt,
        recipes.creator from followers join recipes 
        where followers.followed_id = recipes.user_id;
        `)
        
        res.status(200).send(recipes)

    }catch(e:any){
        res.status(statusCode).send(e.message || e.sqlMessage)
    }
}