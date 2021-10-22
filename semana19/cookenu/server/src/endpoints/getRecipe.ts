import { Request, Response } from 'express'
import { con } from '../data/connection'
import { Authentication } from "../services/Authentication"


export const getRecipe = async(req:Request, res:Response):Promise<void>=>{
  let statusCode = 400
  try{

    const token = req.headers.authorization
    const tokenData = new Authentication().getTokenData(token as string)


    if(!token){
      throw new Error('Token inválido, expirado ou ausendo dos headers')
    }


    const [recipe] = await con.raw(`select *
      from recipes where id = '${req.params.id}'`)


    if(tokenData !== recipe[0].user_id){
      statusCode = 404
      throw new Error('Usúario não encontrado.')
    }


    res.status(200).send(recipe)

  }catch(e:any){
    res.status(statusCode).send(e.message || e.sqlMessage)
  }
}
