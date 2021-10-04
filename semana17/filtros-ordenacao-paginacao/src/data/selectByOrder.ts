import { connection } from "./connection";

export default async function selectByOrder(order: string) {

    const result = await connection.raw(`select * from aula49_exercicio order by ${order} limit 5;`)

    return result[0]
}
