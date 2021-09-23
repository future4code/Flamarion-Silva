import express, {Express} from 'express'
import {AddressInfo} from 'net'
import cors from 'cors'
import {countries} from './data'
import {country} from './types'


const app: Express = express()

app.use(cors())
app.use(express.json())


//===================show all countries===========
app.get('/countries', (req, res)=>{
	const result = countries.map(country=>{
		return ({id: country.id, name: country.name,
		continent: country.continent})
	})

	res.status(200).send(result)
})

//===============search countries by query params=============
app.get('/countries/search', (req, res) => {
  let result: country[] = countries
  try {

  		if(!req.query.name && !req.query.capital && !req.query.continent){
  			throw new Error('Parâmetro inválido!')
  			//res.send('Parâmetro inválido!')
  		}
  		if(req.query.name && req.query.capital && req.query.continent){
  			result = result.filter(country=>{
  				return country.name.includes(req.query.name as string)
  				|| country.capital.includes(req.query.capital as string)
  				|| country.capital.includes(req.query.capital as string)
  			})
  		}
	    
	    res.status(200).send(result)
  }catch(error) {
	    res.status(400).send({message: error.message})
	  }
	})

//========================Delete country======================
/*app.delete('/countries/:id', (req, res)=>{
	try{
		const token = req.headers.authorization

		if(!token){
			res.status(401)
			throw new Error('Usuário não registrado!')
		}

		if(!Number(req.params.id)){
			res.status(404)
			throw new Error('Id inválido!')
		}

		const index = countries.findIndex(country=>{
			return country.id === Number(req.params.id)
		})

	}catch(error: any){
		res.send(error.message)
	}
})
*/
//========================show country by id==================
app.get('/countries/:id', (req, res)=>{
	const result = countries.find(country=>{
		return Number(req.params.id) === country.id
	})

	if(!Number(req.params.id)){
		res.status(404).send('Id inválido')
	}else if(result){
		res.status(200).send(result)
	}
})

//===================Start server listening====================
const server = app.listen(process.env.PORT || 3003, ()=>{
	if(server){
		const address = server.address() as AddressInfo
		console.log(`Servidor rodando em http://localhost:${address.port}`)
	}else{
		console.error('Erro ao rodar servidor')
	}
})