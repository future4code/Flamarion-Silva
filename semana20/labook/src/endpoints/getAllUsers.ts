import { Request, Response} from "express"
import { connection } from '../data/connection'
import { Authentication } from '../services/Authentication'


export const getAllUsers = async(req:Request, res:Response)
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

    const users = await connection('labook_users')

    res.status(200).send(users)
  }catch(error:any){
    res.status(200).send(error.message || error.sqlMessage)
  }
}
