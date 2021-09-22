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
		return ({id: country.id, name: country.name})
	})

	res.status(200).send(result)
})

//===============search countries by query params=============
app.get('/countries/search', (req, res)=>{
	const result = countries.filter(country=>{
		return country.name.includes(req.query.name as string)
		|| country.name.includes(req.query.name as string)
		|| country.capital.includes(req.query.capital as string)
		|| country.continent.includes(req.query.continent as string)
	})
	
	
		res.status(200).send(result)
	
})

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