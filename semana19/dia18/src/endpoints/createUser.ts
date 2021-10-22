import { Request, Response } from "express";
import {connection} from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { generateId } from "../services/generateId";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password } = req.body

      if (!name || !nickname || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha todos os campos")
      }

      if(email.indexOf('@') === -1){
         res.statusCode = 401
         throw new Error('Email inválido')
      }

      if(password.length < 6){
         res.statusCode = 401
         throw new Error('Senha deve ter no mínimo 6 caracteres.')
      }

      const [user] = await connection('to_do_list_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = new generateId().idGenerator()

      const newUser: user = { id, name, nickname, email, password }

      await connection('to_do_list_users')
         .insert(newUser)

      const token = new Authenticator().generateToken({ id })

      res.status(201).send({ newUser, token })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.sqlMessage || error.message })
      }
   }
}
