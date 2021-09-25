import express, {Express, Response, Request} from 'express'
import cors from 'cors'


type Transaction ={
	value: number,
	date: number,
	description: string
}


type User = {
	name: string,
	cpf: number,
	birthDate: number,
	balance: number,
	statement: Array<Transaction>			
}



let users: User[] = []



const app: Express = express()
app.use(express.json())
app.use(cors())

//===========================Show all accounts===========================
app.get('/accounts/', (req: Request, res: Response)=>{
	let statusCode = 404

	try{
		const result = users.map(user=>{
			return user
		})

		res.status(200).send(result)

	}catch(error: any){
		res.status(statusCode).send({message: error.message})
	}
})

//==========================Create an account===========================
app.post('/accounts/create', (req: Request, res: Response)=>{
	let statusCode = 404

	try{
		const {name, cpf, birthDateInitial} = req.body

		const birthDate = new Date(birthDateInitial).getTime()

		
		const sameCpf = users.find(user=> user.cpf === cpf)

		if(sameCpf){
			statusCode = 422
			throw new Error('There is already an user with this CPF, please check your field.')
		}else{
			users.push({
			name,
			cpf,
			birthDate,
			balance: 0,
			statement: []			
		})
		}

		res.status(statusCode).send(`Your account was successfully registered.`)

	}catch(error: any){
		res.status(statusCode).send({message: error.message})
	}
})


const server = app.listen(3003)

if(server){
	console.log('Server is running at http://localhost:3003')
}else{
	console.log('Failed to load server!')
}

