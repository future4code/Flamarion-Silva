import {Request, Response} from "express"
import { con } from "../data/connection"


export const getUsers = async(req:Request, res:Response):Promise<any>=>{
    try{

        const result = await con('user')

        res.status(200).send(result)

    }catch(e:any){
        res.status(400).send({message: e.message || e.sqlMessage})
    }
}