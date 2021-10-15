import {Request, Response} from "express"
import { Product } from "../classes/Product"
import { con } from "../data/connection"

export const createProdutct = async(req:Request, res:Response):Promise<any>=>{
    try{
        
        const {name, description, price} = req.body

        if(!name || !description || !price){
            throw new Error('Preencha os campos!')
        }

        const id = Math.random().toString(36).substr(2)

        const product = new Product(id, name, description, price)

        await con('product').insert({
            id: product.getId(),
            name: product.getName(),
            description: product.getDescription(),
            price: product.getPrice()
        })

        res.status(200).send('Produto enviado com sucesso!')

    }catch(e:any){
        res.status(400).send({message: e.message || e.sqlMessage})
    }
}