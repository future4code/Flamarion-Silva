import dotenv from "dotenv"
import { JwtPayload, sign, verify } from "jsonwebtoken"
import { authenticationData } from "../types"
import bcrypt from 'bcrypt'

dotenv.config()

export class Authenticator {

  public generateToken = (
    payload: authenticationData
  ): string => {

    const token = sign(
      payload,
      process.env.JWT_KEY,
      { expiresIn: "10h" }
    )

    return token
  }

  public getTokenData = (
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

}
