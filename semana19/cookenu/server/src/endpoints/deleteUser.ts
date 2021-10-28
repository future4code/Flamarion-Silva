import { Request, Response } from "express"
import { con } from '../data/connection'
import { Authentication } from "../services/Authentication"


export const deleteUser = async(req:Request, res:Response)
:Promise<void>=>{
    let statusCode = 400
    try{

        const token = req.headers.authorization
        const tokenData = new Authentication().getTokenData(token as string)

        if(!token){
            statusCode = 401
            throw new Error('Token inválido, expirado ou ausente dos headers.')
        }

        const [userRole] = await con('users').where({
            id: tokenData
        })

        if(!userRole){
            statusCode = 404
            throw new Error('Usuário não encontrado')
        }

                
        const [userToDel] = await con('users').where({
            id: req.params.id
        })
       
        if(!userToDel){
            statusCode = 404
            throw new Error('Usuário não encontrado.')
        }

        console.log(req.params.id)
        console.log(tokenData)

        if(req.params.id === tokenData){

            await con.raw(`delete from followers
            where follower_id = '${req.params.id}'`)
            
            await con.raw(`delete from recipes
            where user_id = '${req.params.id}'`)           
            
            await con.raw(`delete from users 
            where id = '${req.params.id}'`)

            statusCode = 200
            throw new Error('Usuário deletado')
            //me superei nessa gambiarra. FAZER O QUE KKKKKK
        }

        if(userRole.role !== 'ADMIN'){
            statusCode = 403
            throw new Error('Você não tem permissão para realizar essa operação.')
        }else{
            await con.raw(`delete from followers
            where follower_id = '${req.params.id}'`)
            
            await con.raw(`delete from recipes
            where user_id = '${req.params.id}'`)           
            
            await con.raw(`delete from users 
            where id = '${req.params.id}'`)
        }        

        
        res.status(200).send(`Usuário deletado.`)
    }catch(e:any){
        res.status(statusCode).send(e.message || e.sqlMessage)
    }
}