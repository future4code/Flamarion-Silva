import { con } from "../data/connection"


export const selectUser = async(email:string):Promise<any>=>{
  try{

    const result = await con.raw(`select * from User_arq
      where email = '${email}'`)

    if(!result){
      throw new Error('Usuário não encontrado')
    }

    return result[0]
  }catch(e:any){
    throw new Error(e.message || e.sqlMessage)
  }
}
