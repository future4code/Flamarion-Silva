import { Request, Response } from "express";
import { selectUserById } from "../data/selectUserById";
import { Authenticator } from "../services/Authenticator";


export const getUserById = async(req:Request, res:Response):Promise<any>=>{
    let statusCode = 400
    try {

        const token = req.headers.authorization

        const tokenData = new Authenticator().getTokenData(token)

        if(!tokenData){
            statusCode = 401
            throw new Error('Token inválido, expirado ou ausente no headers')
        }

        const result = await selectUserById(req.params.id)

        res.status(200).send(result)
        
    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
}