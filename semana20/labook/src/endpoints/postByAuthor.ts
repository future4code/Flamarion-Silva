import { Request, Response} from "express"
import { connection } from '../data/connection'
import { Authentication } from '../services/Authentication'


export const postByAuthor = async(req:Request, res:Response)
:Promise<void>=>{
  let statusCode = 400

  try{

    const token =  req.headers.authorization
    const tokenData = new Authentication().tokenData(token as string)


    if(!token){
        statusCode = 401
        throw new Error('Token inválido, expirado ou ausente dos headers')
    }


    const [user] = await connection('labook_users').where({
        id: tokenData.payload
    })


    const posts = await connection('labook_posts').where({
      author_id: tokenData.payload
    })

    if(!posts){
      statusCode = 403
      throw new Error('Post não encontrado')
    }


    res.status(200).send(posts)
  }catch(error:any){
    res.status(statusCode).send(error.message || error.sqlMessage)
  }
}
