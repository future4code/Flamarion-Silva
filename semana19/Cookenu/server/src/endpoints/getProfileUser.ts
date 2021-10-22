import { Request, Response } from 'express'
import { Authentication } from "../services/Authentication"
import { con } from "../data/connection";

export const getProfileUser = async(req:Request, res:Response):Promise<void>=>{
  let statusCode = 400
  try {

      const token = req.headers.authorization
      const auth = new Authentication()
      const tokenData = auth.getTokenData(token)


      if(!token){
        throw new Error('Token inválido, expirado ou ausendo dos headers')
      }

      const [user] = await con.raw(`select id, name, email from users
        where id = '${req.params.id}'`)


      if(tokenData !== user[0].id){
        statusCode = 404
        throw new Error('Usúario não encontrado.')
      }

      res.status(200).send(user)

  }catch(e:any){
    res.status(statusCode).send(e.message || e.sqlMessage)
  }
}
