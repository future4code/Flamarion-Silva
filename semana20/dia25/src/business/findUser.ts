import { selectUser } from '../data/selectUser'
import { Authenticator } from '../services/Authenticator'


export const findUser = async(user:any)=>{

    const userFound = await selectUser(user.email)
    const verifyPass = new Authenticator().compare(user.password, userFound.password)
    const token = new Authenticator().token(userFound.id)

    if(!verifyPass){
      throw new Error('Dados inválidos')
    }

    return token
}
