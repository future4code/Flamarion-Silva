import { Request, Response } from "express"
import {connection} from "../data/connection"
import { Authenticator } from "../services/Authenticator"


export  const login = async(
   req: Request,
   res: Response
): Promise<void> =>{
   try {

      const { email, password } = req.body

      if (!email || !password) {
         res.statusCode = 422
         throw new Error("Preencha todos os campos")
      }

      if(email.indexOf('@') === -1){
         res.statusCode = 401
         throw new Error('Email inválido')
      }

      const [user] = await connection('to_do_list_users')
         .where({ email })

      if(!user || user.password !== password){
          res.statusCode = 401
          throw new Error('Dados inválidos!')
      }      

      const token = new Authenticator().generateToken({ id: user.id })

      res.status(200).send({ token })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.sqlMessage || error.message })
      }
   }
}
