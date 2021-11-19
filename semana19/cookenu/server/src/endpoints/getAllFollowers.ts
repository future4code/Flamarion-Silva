import { Request, Response } from "express";
import { con } from "../data/connection";


export const getAllFollowers = async(req:Request, res:Response)
:Promise<void>=>{
    let statusCode = 400
    try{

        const result = await con('followers')

        res.status(200).send(result)

    }catch(e:any){
        res.status(statusCode).send(e.message || e.sqlMessage)
    }
}