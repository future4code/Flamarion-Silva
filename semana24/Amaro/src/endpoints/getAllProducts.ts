import { Request, Response } from 'express'
import { con } from '../data/connection'



export const getAllProducts = async(req:Request, res:Response):Promise<void>=>{
  let statusCode = 400
  try{

    const products = await con('amaro_products')
    

    res.status(200).send(products)
  }catch(error:any){
    res.status(statusCode).send(error.message || error.sqlMessage)
  }
}
