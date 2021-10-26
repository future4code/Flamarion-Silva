import { createUser } from "../business/createUser"
import { Request, Response} from "express"

export const signup = async(req:Request, res:Response)
:Promise<void>=>{
  try{

    const input = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    }

    const response = await createUser(input)

    res.status(200).send(response)
  }catch(e:any){
    res.status(400).send(e.message)
  }
}
