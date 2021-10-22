import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";


export  const getProfile = async(req:Request, res:Response)=>{
    try{
        
        const token = req.headers.authorization
        const tokenData = new Authenticator().getTokenData(token)

        if(!tokenData){
            res.statusMessage = 'Token inválido, expirado ou ausente do headers'
            throw new Error()
        }

        const result = await connection.raw(`select id, email from to_do_list_users
        where id = '${tokenData.id}'`)

        res.status(200).send(result[0])

    }catch(e:any){
        res.status(400).send({message: e.message || e.sqlMessage})
    }
}