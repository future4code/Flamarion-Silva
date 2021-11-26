import { Request, Response } from 'express'
import { con } from '../data/connection'



export const productByName = async(req:Request, res:Response):Promise<void>=>{
  let statusCode = 400
  try{

    if(!req.body.name){
      statusCode = 401
      throw new Error('Fill the name field!')
    }

    const [product] = await con('amaro_products').where({
      name: req.body.name
    })

    if(!product){
      statusCode = 404
      throw new Error('Product not found!')
    }

    res.status(200).send(product)
  }catch(error:any){
    res.status(statusCode).send(error.message || error.sqlMessage)
  }
}
