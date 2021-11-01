import { Request, Response } from 'express'
import { connection } from '../data/connection'
import { Authentication } from '../services/Authentication'


export const undoFriendship = async(req:Request, res:Response)
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

    if(!user){
      statusCode = 404
      throw new Error('Usuário não encontrado')
    }

    const [friend] = await connection('labook_users').where({
      id: req.params.id
    })

    if(!friend){
      statusCode = 404
      throw new Error('Usuário não encontrado')
    }

    if(user.id === friend.id){
      statusCode = 403
      throw new Error('Você não pode desfazer a amizade consigo mesmo, rs')
    }

    await connection.raw(`delete from ${user.table_friends}
      where friend_id = '${req.params.id}'
    `)

    await connection.raw(`delete from ${friend.table_friends}
      where friend_id = '${tokenData.payload}'
    `)

    res.status(200).send(`Vocẽ desfez a amizade com ${friend.name}`)
  }catch(error:any){
    res.status(statusCode).send(error.message || error.sqlMessage)
  }
}
