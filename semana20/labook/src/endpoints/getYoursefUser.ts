import { Request, Response} from "express"
import { connection } from '../data/connection'
import { Authentication } from '../services/Authentication'


export const getYoursefUser = async(req:Request, res:Response)
:Promise<void>=>{
  let statusCode = 400

  try{

    const token =  req.headers.authorization
    const tokenData = new Authentication().tokenData(token as string)


    if(!token){
      statusCode = 401
      throw new Error('Token inválido, expirado ou ausente dos headers')
    }

    const [yourself] = await connection('labook_users').where({
      id: tokenData.payload
    })

    if(!yourself){
      statusCode = 404
      throw new Error('Usuário não encontrado')
    }


    res.status(200).send(yourself)
  }catch(error:any){
    res.status(statusCode).send(error.message || error.sqlMessage)
  }
}
