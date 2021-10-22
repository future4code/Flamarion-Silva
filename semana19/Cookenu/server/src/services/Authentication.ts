import { v4 } from "uuid"
import jwt, { JwtPayload } from 'jsonwebtoken'
import { config } from "dotenv"
import bcrypt from 'bcryptjs'

config()

export class Authentication{
    generateId = ()=>{
        return v4()
    }

    generateToken = (payload:string)=>{
        const token = jwt.sign(
            {payload},
            process.env.JWT_KEY as string,
            {expiresIn: '10h'}
        )

        return token
    }

    getTokenData = (token:string)=>{
        try{
            
            const tokenData = jwt.verify(
                token,
                process.env.JWT_KEY as string 
            ) as JwtPayload
    
            return tokenData.payload

        }catch(e:any){
            console.log(e)
            return null
        }
    }

    hash = (text:string)=>{
        const rounds = 12
        const salt = bcrypt.genSaltSync(rounds)
        const cypher = bcrypt.hashSync(text, salt)

        return cypher
    }

    compare = (text:string, hash:string)=>{
        return bcrypt.compareSync(text, hash)
    }
}