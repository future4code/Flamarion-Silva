import { Request, Response } from "express"
import { Authentication } from '../services/Authentication'
import { connection } from '../data/connection'


export const login = async(req:Request, res:Response)
:Promise<void>=>{
  let statusCode = 400

  try{

    const {email, password} = req.body

    if(!email || !password){
      statusCode = 401
      throw new Error('Preencha os campos')
    }

    const [user] = await connection('labook_users').where({
      email
    })

    if(!user){
      statusCode = 401
      throw new Error('Dados inválidos(email)')
    }

    const compare = new Authentication().compare(password, user.password)

    if(!compare){
      statusCode = 401
      throw new Error('Dados inválidos(senha)')
    }

    const token = new Authentication().token(user.id)

    res.status(200).send({token: token})
  }catch(error:any){
    res.status(statusCode).send(error.message || error.sqlMessage)
  }
}
