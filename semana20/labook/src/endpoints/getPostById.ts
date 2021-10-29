import { Request, Response} from "express"
import { connection } from '../data/connection'
import { Authentication } from '../services/Authentication'


export const getPostById = async(req:Request, res:Response)
:Promise<void>=>{
  let statusCode = 400

  try{

    const token =  req.headers.authorization
    const tokenData = new Authentication().tokenData(token)

    const [post] = await connection('labook_posts').where({
      id: req.params.id
    })

    if(!post || !req.params.id){
      statusCode = 403
      throw new Error('Post não encontrado')
    }

    if(!token){
      statusCode = 401
      throw new Error('Token inválido, expirado ou ausente dos headers')
    }

    const [user] = await connection('labook_users').where({
      id: tokenData
    })

    if(!user){
      statusCode = 401
      throw new Error('Token inválido, expirado ou ausente dos headers')
    }

    const [author] = await connection('labook_users').select('name')
    .where({
      id: post.author_id
    })

    res.status(200).send({
      'Post': post,
      'Criador': author.name
    })
  }catch(error:any){
    res.status(statusCode).send(error.message || error.sqlMessage)
  }
}
