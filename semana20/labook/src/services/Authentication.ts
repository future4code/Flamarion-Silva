import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { v4 } from "uuid"
import {config} from 'dotenv'

config()


export class Authentication {
  idGenerator = ()=>{
    return v4()
  }

  token = (payload:string)=>{
    const generateToken = jwt.sign(
      {payload},
      process.env.JWT_KEY,
      {expiresIn: '10h'}
    )

    return generateToken
  }

  tokenData = (token:string)=>{
    try{
      const verifyToken = jwt.verify(
        token,
        process.env.JWT_KEY
      )

      return verifyToken.payload
    }catch(e:any){
      console.log(e)
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
