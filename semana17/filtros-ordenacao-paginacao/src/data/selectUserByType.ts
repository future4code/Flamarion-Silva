import { connection } from "./connection";
export default async function selectUserByName(type: string):Promise<any> {
   const result = await connection.raw(` SELECT * FROM aula49_exercicio
   where type like '%type%'; `)

   return result[0]
}
