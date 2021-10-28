import { config } from "dotenv"
import jwt from "jsonwebtoken"
import { authenticatorData } from "../types"

config()

export class Authenticator{
    generateToken = (payload:authenticatorData):string=>{
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY,
            {expiresIn: '10h'}
        )

        return token
    }

    getTokenData = (token:string):authenticatorData | null=>{
        try{

            const tokenData = jwt.verify(
                token,
                process.env.JWT_KEY
            ) as authenticatorData

            return {id: tokenData.id}

        }catch(e:any){
            console.log(e)
            return null
        }     
    }
}