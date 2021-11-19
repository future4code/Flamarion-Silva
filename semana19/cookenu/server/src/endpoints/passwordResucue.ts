import { Request, Response } from 'express'
import { con } from "../data/connection"
import { Authentication } from "../services/Authentication";


export const passwordResucue = async(req:Request, res:Response):Promise<void>=>{
  let statusCode = 400
  try{

    const token = req.headers.authorization
    const tokenData = new Authentication().getTokenData(token as string)
    const {password} = req.body

    if(!token){
      statusCode = 401
      throw new Error('Token inválido, expirado ou ausente dos headers.')
    }

    if(!password){
      throw new Error('Preencha os campos.')
    }

    const [user] = await con('users').where({
      id: tokenData
    })

    if(!user){
      statusCode = 404
      throw new Error('Usuário não encontrado.')
    }

    await con('users').update({
      password
    }).where({
      id: tokenData
    })

    res.status(200).send('Senah atualizada.')

  }catch(e:any){
    res.status(statusCode).send(e.message || e.sqlMessage)
  }
}
