import {Request, Response} from "express"
import { Product } from "../classes/Product"
import { Ticket } from "../classes/Ticket"
import { con } from "../data/connection"

export const createTicket = async(req:Request, res:Response):Promise<any>=>{
    try{

        const {name, description, price, origin, destiny} = req.body

        if(!name || !description || !price || !origin || !destiny){
            throw new Error('Preencha os campos')
        }

        const id = Math.random().toString(36).substr(2)
        const ticketId = Math.random().toString(36).substr(2)

        const product = new Product(id, name, description, price)
        const ticket = new Ticket(id, name, description, price, origin, destiny)

        await con('product').insert(product)
        await con('ticket').insert({
            id: ticketId,
            name,
            description,
            price,
            origin,
            destiny,
            product_id: id
        })

        res.status(200).send('A compra da sua viagem foi efetuada com sucesso.')

    }catch(e:any){
        res.status(400).send({message: e.message || e.sqlMessage})
    }
} 