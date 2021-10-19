import { connection } from "./connection"

export const selectUserById = async(id:string):Promise<any>=>{
    const result = await connection('to_do_list_users').select('*')
    .where({id})

    return result
}