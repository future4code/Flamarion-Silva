import { Request, Response } from "express";
import { con } from "../data/connection";
import { user, USER_ROLES } from "../entities/UserDatabase";
import { Authentication } from "../services/Authentication";

export const signup = async(req:Request, res:Response):Promise<void>=>{
    let statusCode = 400
    try{

        const {name, email, password, role} = req.body


        if(!name || !email || !password){
            statusCode = 401
            throw new Error('Preencha todos os campos.')
        }

        if( !(role in USER_ROLES) ){
            statusCode = 401
            throw new Error('Cadastro somente para usuários NORMAL ou ADMIN')
        }

        const [user] = await con('users').where({
            email
        })

        if(user){
            statusCode = 403
            throw new Error('Email já cadastrado.')
        }


        const auth = new Authentication()
        const id = auth.generateId()
        const cypher = auth.hash(password)
        const newUser:user = {id, name, email, password:cypher, role}


        await con('users').insert(newUser)

        const token = auth.generateToken(id)


        res.status(200).send({id, email, role, access_token: token} )

    }catch(e:any){
        res.status(400).send(e.message || e.sqlMessage)
    }
}
