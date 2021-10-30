import { Request, Response} from "express"
import { connection } from '../data/connection'
import { Authentication } from '../services/Authentication'


export const getAllPosts = async(req:Request, res:Response)
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
      statusCode = 401
      throw new Error('Usuário não encontrado.')
    }

    const posts = await connection('labook_posts')

    res.status(200).send(posts)
  }catch(error:any){
    res.status(200).send(error.message || error.sqlMessage)
  }
}
