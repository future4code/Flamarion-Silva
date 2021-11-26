import { Request, Response } from 'express'
import { con } from '../data/connection'



export const productByTag = async(req:Request, res:Response):Promise<void>=>{
  let statusCode = 400
  try{

    const { tags } = req.body

    if(!tags){
      statusCode = 401
      throw new Error('Fill the tag field!')
    }

    const [product] = await con.raw(`select * from amaro_products
    where tags like '%${tags}%'`)

    
    if(!product){
      statusCode = 404
      throw new Error('Product not found.')
    }

    res.status(200).send(product)
  }catch(error:any){
    res.status(statusCode).send(error.message || error.sqlMessage)
  }
}
