import { Request, Response } from 'express'
import { con } from '../data/connection'


export const productById = async(req:Request, res:Response):Promise<void>=>{
  let statusCode = 400
  try{

    const [product] = await con('amaro_products').where({
      id: req.params.id
    })

    res.status(200).send(product)
  }catch(error:any){
    res.status(statusCode).send(error.message || error.sqlMessage)
  }
}
