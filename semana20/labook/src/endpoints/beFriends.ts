import { Request, Response } from 'express'
import { connection } from '../data/connection'
import { Authentication } from '../services/Authentication'


export const beFriends = async(req:Request, res:Response)
:Promise<void>=>{
  let statusCode = 400

  try{

    const token = req.headers.authorization
    const tokenData = new Authentication().tokenData(token as string)

    if(!token){
      statusCode = 401
      throw new Error('Token inválido, expirado ou ausente dos headers')
    }

    const [user] = await connection('labook_users').where({
      id: tokenData.payload
    })

    const [friend] = await connection('labook_users').where({
      id: req.params.id
    })


    if(!friend){
      statusCode = 404
      throw new Error('Usuário não encontrado.')
    }

    if(user.id === friend.id){
      statusCode = 403
      throw new Error('Você não pode ser amigo de si mesmo, rs.')
    }

    const id = new Authentication().idGenerator()

    await connection(user.table_friends).insert({
      id,
      friend: friend.name,
      friend_id: friend.id,
      beginning: new Date()
    })



    res.status(200).send(`Vocẽ e ${friend.name} agora são amigos`)
  }catch(error:any){
    res.status(statusCode).send(error.message || error.sqlMessage)
  }
}
