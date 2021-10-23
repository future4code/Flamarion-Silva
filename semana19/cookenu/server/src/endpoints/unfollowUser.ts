import { Request, Response } from "express"
import { con } from "../data/connection"
import { Authentication } from "../services/Authentication"


export const unfollowUser = async(req:Request, res:Response):Promise<void>=>{
    let statusCode = 400
    try{
        //FAZER VERIFICAÇÃO DOS TOKENS NO FRONTEND
        //VERIFICAR SE É O USUÁRIO LOGADO 
        const token = req.headers.authorization
        const tokenData = new Authentication().getTokenData(token as string)


        if(!token){
            statusCode = 401
            throw new Error('Token inválido, expirado ou ausente dos headers')
        }

        const [currentUser] = await con('users').where({
            id: tokenData
        })

        if(!currentUser){
            statusCode = 404
            throw new Error('Usuário não encontrado')
        }

        
        const [followedUser] = await con('users').where({
            id: req.params.id
        })

        if(!followedUser){
            statusCode = 404
            throw new Error('Usuário não encontrado.')
        }

        console.log(req.params.id)
        console.log(tokenData)

        await con.raw(`delete from followers 
        where followed_id = '${req.params.id}'`)

        res.status(200).send({message: `Deixou de seguir ${followedUser.name}` })

    }catch(e:any){
        res.status(statusCode).send(e.message || e.sqlMessage)
    }
}