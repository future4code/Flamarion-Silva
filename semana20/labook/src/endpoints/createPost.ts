import { Request, Response } from 'express'
import { connection } from '../data/connection'
import { Authentication } from "../services/Authentication";


export const createPost = async(req:Request, res:Response)
:Promise<void>=>{
  let statusCode = 400

  try{

    const token = req.headers.authorization
    const tokenData = new Authentication().tokenData(token)

    if(!token){
      statusCode = 401
      throw new Error('Token inválido, expirado, ou ausente do headers')
    }

    const [user] = await connection('labook_users').where({
      id: tokenData
    })

    if(!user){
      statusCode = 403
      throw new Error('Usuário inexistente')
    }

    const {photo, description, type} = req.body

    if(!photo || !description || !type){
      statusCode = 401
      throw new Error('Preencha os campos')
    }

    // if(type !== 'normal' || type !== 'event'){
    //   statusCode = 403
    //   throw new Error(`Defina o tipo do post como: "normal", ou "event"`)
    // } Verificação retorna erro mesmo com os tipos correspondentes

    const id = new Authentication().idGenerator()

    await connection('labook_posts').insert({
      id,
      photo,
      description,
      type,
      created_at: new Date(),
      author_id: tokenData
    })


    res.status(200).send('Post criado com sucesso!')
  }catch(error:any){
    res.status(statusCode).send(error.message || error.sqlMessage)
  }

}
