import express, {Request, Response} from "express"
import cors from 'cors'
import { con } from './data/connection'
import { v4 } from 'uuid'
import { getPokemons } from './endpoints/getPokemons'
import { getPokemonByName } from './endpoints/getPokemonByName'
import { getAllPokemons } from './endpoints/getAllPokemons'


const app = express()
app.use(express.json())
app.use(cors())


app.get('/pokemons', getPokemons)
app.post('/pokebyname', getPokemonByName)
app.get('/allpokes', getAllPokemons)

app.post('/pokes', async(req:Request, res:Response)=>{
  try{

    const {
      Name,
      Pokedex_Number,
      Img_name,
      Generation,
      Evolution_Stage,
      Evolved,
      FamilyID,
      Cross_Gen,
      Type1,
      Type2,
      Weather1,
      Weather2,
      STAT_TOTAL,
      ATK,
      DEF,
      STA,
      Legendary,
      Aquireable,
      Spawns,
      Regional,
      Raidable,
      Hatchable,
      Shiny,
      Nest,
      New,
      NotGettable,
      Future_Evolve,
      CP40,
      CP39
    } = req.body

    const id = v4()

    await con('pokemonGo').insert({
      id,
      Name,
      Pokedex_Number,
      Img_name,
      Generation,
      Evolution_Stage,
      Evolved,
      FamilyID,
      Cross_Gen,
      Type1,
      Type2,
      Weather1,
      Weather2,
      STAT_TOTAL,
      ATK,
      DEF,
      STA,
      Legendary,
      Aquireable,
      Spawns,
      Regional,
      Raidable,
      Hatchable,
      Shiny,
      Nest,
      New,
      NotGettable,
      Future_Evolve,
      CP40,
      CP39
    })

    res.status(200).send('Data insert')
  }catch(error:any){
    res.status(400).send(error.message || error.sqlMessage)
  }
})



app.listen(process.env.PORT || 3003, ()=>{
  console.log('Server running at 3003')
})
