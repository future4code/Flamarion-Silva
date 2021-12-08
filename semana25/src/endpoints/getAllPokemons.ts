import { Request, Response } from 'express'
import { con } from '../data/connection'



export const getAllPokemons = async(req:Request, res:Response):Promise<void>=>{
  try{

    const pokemons = await con('pokemonGo')

    res.status(200).send(pokemons)
  }catch(error:any){
    res.status(400).send(error.message || error.sqlMessage)
  }
}
