import { Request, Response } from "express"
import { con } from "../data/connection"
import { Authentication } from "../services/Authentication"


export const followUser = async(req:Request, res:Response):Promise<void>=>{
    let statusCode = 400
    try{
        //FAZER VERIFICAÇÃO DOS TOKENS NO FRONTEND
        //VERIFICAR SE É O USUÁRIO LOGADO
        const token = req.headers.authorization
        const tokenData = new Authentication().getTokenData(token as string)

console.log(token)
        if(!token){
            statusCode = 401
            throw new Error('Token inválido, expirado ou ausente dos headers')
        }

        const [userToFollow] = await con('users').where({
            id: req.params.id
        })

        if(!userToFollow){
            statusCode = 404
            throw new Error('Usuário não encontrado.')
        }

        const [currentUser] = await con('users').where({
            id: tokenData
        })

        if(!currentUser){
            statusCode = 404
            throw new Error('Usuário não encontrado.')
        }

        if(tokenData === req.params.id){
            statusCode = 403
            throw new Error(`Você não pode seguir você mesmo.`)
        }

        const [followersTable] = await con('followers')




        const id = new Authentication().generateId()

        await con('followers').insert({
            id,
            follower: currentUser.name,
            followed_id: req.params.id,
            following: userToFollow.name,
            follower_id: tokenData
        })

        res.status(200).send({message: `Seguindo ${userToFollow.name}` })

    }catch(e:any){
        res.status(statusCode).send(e.message || e.sqlMessage)
    }
}
