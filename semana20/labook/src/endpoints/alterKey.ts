import { Request, Response } from 'express'
import { Authentication } from '../services/Authentication'
import { connection } from '../data/connection'


export const alterKey = async(req:Request, res:Response)
:Promise<void>=>{
  let statusCode = 400

  try{

    const { email, password, passConfirm } = req.body


    if(!email || !password || !passConfirm){
      statusCode = 401
      throw new Error('Preencha os campos')
    }

    if(password !== passConfirm){
      statusCode = 401
      throw new Error('As senhas não são as mesmas')
    }

    const [userEmail] = await connection('labook_users').where({
      email
    })

    if(!userEmail){
      statusCode = 404
      throw new Error('Email não encontrado')
    }

    const hash = new Authentication().hash(password)

    await connection('labook_users').update({
      password: hash
    }).where({
      email
    })

    res.status(200).send('Senha atualizada')
  }catch(error:any){
    res.status(statusCode).send(error.message || error.sqlMessage)
  }
}
