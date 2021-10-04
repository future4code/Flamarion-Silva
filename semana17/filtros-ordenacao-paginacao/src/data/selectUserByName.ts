import { connection } from "./connection";
export default async function selectUserByName(name: string):Promise<any> {
   const result = await connection.raw(` SELECT * FROM aula49_exercicio
   where name like '%name%'; `)

   return result[0]
}
