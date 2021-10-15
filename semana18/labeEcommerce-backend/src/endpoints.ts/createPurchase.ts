import {Request, Response} from "express"
import { Purchase } from "../classes/Purchase"
import { User } from "../classes/User"
import { con } from "../data/connection"


export const createPurchase = async(req:Request, res:Response):Promise<any>=>{
    try{

        const {productName, userName, email, age,
             description, price, quantityOfItems} = req.body

        if(!productName || !userName || !email
            || !age || !description || !price || !quantityOfItems){
            throw new Error('Transação não realizada, verifique os campos e tente novamente.')
        }

        const userId = Math.random().toString(36).substr(2)
        const productId = Math.random().toString(36).substr(2)
        
        const user = new User(userId, userName, email, age)
        const purchase = new Purchase(userId, productId, productId, productName,
             description, price, quantityOfItems)

        await con('user').insert({
            id: userId,
            name: userName,
            email,
            age
        })

        await con('product').insert({
            id: productId,
            name: productName,
            description,
            price
        })

        await con('purchase').insert({
            productId,
            userId: userId,
            quantityOfItems,
            totalPrice: purchase.totalPrice()
        })

        res.status(200).send('Compra realizada com sucesso!')

    }catch(e:any){
        res.status(400).send({message: e.message || e.sqlMessage})
    }
}