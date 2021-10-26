import { Request, Response } from 'express'
import { Authentication } from "../services/Authentication"
import { con } from "../data/connection";

export const getProfileUser = async(req:Request, res:Response):Promise<void>=>{
  let statusCode = 400
  try {

      const token = req.headers.authorization
      const auth = new Authentication()
      const tokenData = auth.getTokenData(token as string)

      if(!token){
        throw new Error('Token inválido, expirado ou ausendo dos headers')
      }

      const [user] = await con.raw(`select id, name, email, role from users
        where id = '${req.params.id}'`)

      if(user.length === 0){
        statusCode = 404
        throw new Error('Usúario não encontrado.')
      }

      res.status(200).send(user)

  }catch(e:any){
    res.status(statusCode).send(e.message || e.sqlMessage)
  }
}
