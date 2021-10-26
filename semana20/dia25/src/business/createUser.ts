import { USER_ROLES } from "../types/user";
import { Authenticator } from '../services/Authenticator'
import { insertUser } from "../data/insertUser";

export const createUser = async(user:any)=>{
  try{

    if(!user.name || !user.email || !user.password
    || !user.role){
      throw new Error('Preencha os campos.')
    }

    if( !(user.role in USER_ROLES) ){
      throw new Error('Defina o usuário como NORMAL OU ADMIN')
    }

    const id = new Authenticator().idGenerator()
    const hash = new Authenticator().hash(user.password)
    await insertUser(id, user.name, user.email, hash, user.role)
    const token = new Authenticator().token(id)

    return token

  }catch(e:any){
    throw new Error(e.message || 'Consulte a administração do sistema')
  }
}
