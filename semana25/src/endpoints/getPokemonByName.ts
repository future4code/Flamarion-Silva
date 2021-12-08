import { Request, Response } from 'express'
import { con } from '../data/connection'


export const getPokemonByName = async(req:Request, res:Response)
:Promise<void>=>{
  let statusCode = 400
  try{

    const { name } = req.body

    if(!name){
      statusCode = 401
      throw new Error('Complete the fields!')
    }

    const [pokemon] = await con.raw(`select * from pokemonGo
      where name = '${name}'
    `)

    if(!pokemon){
      statusCode = 404
      throw new Error('Pokemon not found!')
    }

    res.status(200).send(pokemon)
  }catch(error:any){
    res.status(statusCode).send(error.message || error.sqlMessage)
  }
}
