import { Request, Response } from "express"
import { connection } from "../data/connection"
import { Authentication } from "../services/Authentication";


export const signup = async(req:Request, res:Response)
:Promise<void>=>{
  let statusCode = 400

  try{

    const {name, email, password} = req.body

    if(!name || !email || !password){
      statusCode = 401
      throw new Error('Preencha os campos.')
    }

    const id = new Authentication().idGenerator()
    const hash = new Authentication().hash(password)

    await connection('labook_users').insert({
      id,
      name,
      email,
      password: hash
    })

    const token = new Authentication().token(id)

    res.status(200).send({token: token})
  }catch(error:any){
    res.status(statusCode).send(error.message || error.sqlMessage)
  }
}
