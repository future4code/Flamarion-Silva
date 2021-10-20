import dotenv from "dotenv"
import { JwtPayload, sign, verify } from "jsonwebtoken"
import { authenticationData } from "../types"
import bcrypt from 'bcrypt'
import { v4 } from "uuid"

dotenv.config()

export class Authenticator {
  
  generateId = ()=>{
    return v4()
  }

  generateToken = (
    payload: authenticationData
  ): string => {

    const token = sign(
      payload,
      process.env.JWT_KEY
    )

    return token
  }

  getTokenData = (
    token: string
  ): authenticationData | null => {
    try {

      const tokenData = verify(
        token,
        process.env.JWT_KEY
      ) as JwtPayload

      return {
        id: tokenData.id
      }

    } catch (error) {
      console.log(error)
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
