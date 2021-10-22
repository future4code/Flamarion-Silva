import {Request, Response} from 'express'
import { con } from '../data/connection'
import { user } from '../entities/UserDatabase'
import { Authentication } from '../services/Authentication'

export const getProfile = async(req:Request, res:Response):Promise<void>=>{
    try{

        const token = req.headers.authorization
        const tokenData = new Authentication().getTokenData(token as string)

        if(!token){
          throw new Error('Token inválido, expirado ou ausendo dos headers')
        }

        const [user] = await con.raw(`select id, name, email from users
          where id = '${tokenData}'`)

        res.status(200).send(user)
    }catch(e:any){
        res.status(400).send(e.message || e.sqlMessage)
    }
}
