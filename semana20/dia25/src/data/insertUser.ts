import { USER_ROLES } from "../types/user"
import { con } from "../data/connection"

export const insertUser = async(
  id:string,
  name:string,
  email:string,
  password:string,
  role:USER_ROLES
):Promise<void>=>{
  try{

    await con('User_arq').insert({
      id,
      name,
      email,
      password,
      role
    })

  }catch(e:any){
    throw new Error(e.message || e.sqlMessage)
  }
}
