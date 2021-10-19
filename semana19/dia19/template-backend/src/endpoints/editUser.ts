import { Request, Response } from "express";
import {connection} from "../data/connection";
import { Authenticator } from "../services/Authenticator";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname } = req.body
      const token = req.headers.authorization

      const tokenData = new Authenticator().getTokenData(token)

      if(!tokenData){
        res.statusCode = 401
        res.statusMessage = "Token inválido, expirado ou ausente da chave 'Authorization' do cabeçalho"
        throw new Error()
      }

      if (!name && !nickname) {
         res.statusCode = 422
         res.statusMessage = "Informe o(s) novo(s) 'name' ou 'nickname'"
         throw new Error()
      }

      await connection('to_do_list_users')
         .update({ name, nickname })
         .where({ id: tokenData.id })

      res.end()

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).end()
      }

      res.end()
   }
}