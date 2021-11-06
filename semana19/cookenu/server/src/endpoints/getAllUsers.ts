import { Request, Response } from "express";
import { con } from "../data/connection";


export const getAllUsers = async(req:Request, res:Response)
:Promise<void>=>{
    let statusCode = 400
    try{


        const result = await con.raw(`select name, email, role
        from users`)

        res.status(200).send(result[0])
    }catch(e:any){
        res.status(statusCode).send(e.message || e.sqlMessage)
    }
}