import {findUser} from '../business/findUser'
import {Request, Response} from 'express'

export const login = async(req:Request, res:Response)=>{
  try{

    const loginData = {
      email: req.body.email,
      password: req.body.password
    }

    if(!loginData.email || loginData.password){
      throw new Error('Preencha os campos.')
    }

    const result = await findUser(loginData)

    res.status(200).send({result})
  }catch(e:any){
    res.status(400).send(e.message)
  }
}
