import {v4} from 'uuid'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()


export class Authenticator {
  idGenerator = ()=>{
    return v4()
  }

  hash = (txt:string)=>{
    const rounds = 12
    const salt = bcrypt.genSaltSync(rounds)
    const cypher = bcrypt.hashSync(txt, salt)

    return cypher

  }

  compare = (txt:string, hash:string)=>{
    return bcrypt.compareSync(txt, hash)
  }

  token = (payload:string)=>{
    return jwt.sign(
      { payload },
      process.env.JWT_KEY as string,
      { expiresIn: '24h' }
    )
  }

  tokenData = (token:string)=>{
    return jwt.verify(
      token,
      process.env.JWT_KEY as string
    )
  }
}
