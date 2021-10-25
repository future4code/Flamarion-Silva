import {Request, Response} from "express"
import { User } from "../classes/User"
import { con } from "../data/connection"


export const createUser = async(req:Request, res:Response):Promise<any>=>{
    try{
        
        const {name, email, age} = req.body
        if(!name || !email || !age){
            throw new Error('Preencha todos os campos!')
        }

        const id = Math.random().toString(36).substr(2)
        const user = new User(id, name, email, age)

        await con('user').insert(user)

        res.status(200).send('Usuário criado')

    }catch(e:any){
        res.status(400).send({message: e.message || e.sqlMessage})
    }
}