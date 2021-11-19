import { Request, Response } from 'express'
import { connection } from '../data/connection'
import { Authentication } from '../services/Authentication'


export const getFeeds = async(req:Request, res:Response)
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

    const friends = await connection(user.table_friends)
    let post = []
    for(let i = 0; i < friends.length; i++){
      let postIncrease = await connection('labook_posts').where({
        author_id: friends[i].friend_id
      }).orderBy('created_at', 'desc')
      post.push(postIncrease)
    }

    res.status(200).send(post)
  }catch(error:any){
    res.status(statusCode).send(error.message || error.sqlMessage)
  }
}
