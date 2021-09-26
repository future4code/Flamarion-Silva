import express, {Express, Response, Request} from 'express'
import cors from 'cors'


type Transaction ={
	value: number,
	date: Date,
	description: string
}


type User = {
	name: string,
	cpf: number,
	birthDate: Date,
	balance: number,
	statement: Array<Transaction>			
}



let users: User[] = [
	{
		name:'Paty',
		cpf: 123,
		birthDate: new Date('1990/03/25'),
		balance: 50.000,
		statement: [
			{
				value: 250,
				date: new Date('2021/11/03'),
				description: 'lorem ipsum'
			}
		]
	},
	{
		name:'Kal',
		cpf: 456,
		birthDate: new Date('1980/03/25'),
		balance: 100.000,
		statement: [
			{
				value: 50,
				date: new Date('2021/11/03'),
				description: 'lorem ipsum'
			}
		]
	}
]



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

		if(!users.length){
			throw new Error('There is no accounts registered.')
		}

		res.status(200).send(result)

	}catch(error: any){
		res.status(statusCode).send({message: error.message})
	}
})

//==========================Create an account===========================
app.post('/accounts/create', (req: Request, res: Response)=>{
	let statusCode = 404

	try{
		const {name, cpf, dateInitial} = req.body

		if(!name || !cpf || !dateInitial){
			statusCode = 401
			throw new Error('Please, check your fields and try again.')
		}

		const [day, month, year] = dateInitial.split('/')
		const birthDate: Date = new Date(`${year}-${month}-${day}`)
		const milisecondsAge: number = Date.now() - birthDate.getTime()
		const age: number = milisecondsAge / 1000 / 60 / 60 / 24 / 365

		if(age < 18){
			statusCode = 401
			throw new Error('Necessário ser maior de 18 anos.')
		}else{
			const sameCpf = users.find(user=> user.cpf === cpf)

			if(sameCpf){
				statusCode = 401
				throw new Error('Já existe uma conta com esse CPF.')
			}else{
				users.push({
					name,
					cpf,
					birthDate,
					balance: 0,
					statement: []
				})
			}
		}		

		res.status(200).send('Your account was successfully registered.')		

	}catch(error: any){
		res.status(statusCode).send({message: error.message})
	}
})

//=========================Consult balance==============================
app.post('/accounts/balance', (req: Request, res: Response)=>{
	let statusCode = 404

	try{
		if(!req.body.name || !req.body.cpf){
			statusCode = 401
			throw new Error('Please, check your fields and try again.')
		}

		const sameUser = users.find(user=> user.cpf === req.body.cpf && user.name === req.body.name)

		
		if(sameUser){
			const balance = sameUser.balance
			res.send(`${balance}`)
		}else{
			statusCode = 401
			throw new Error('Cliente não encontrado!\n Verifique os campos e tente novamente.')
		}

	}catch(error: any){
		res.status(statusCode).send({message: error.message})
	}
})

//=============================Add cash=================================
app.post('/accounts/deposit', (req: Request, res: Response)=>{
	let statusCode = 404

	try{
		if(!req.body.name || !req.body.cpf || !req.body.value){
			statusCode = 401
			throw new Error('Please, check your fields and try again.')
		}

		const sameUser = users.find(user=> user.cpf === req.body.cpf && user.name === req.body.name)

		
		if(sameUser){			
			sameUser.statement.push({
				value: req.body.value,
				date: new Date(),
				description: 'Cash added'
			})

			res.status(200).send(`Value successfully added.`)
		}else{
			throw new Error('Dados inválidos. Cheque os campos e tente novamente.')
		}

	}catch(error: any){
		res.status(statusCode).send({message: error.message})
	}
})

//============================Payments============================
app.post('/accounts/payments', (req: Request, res: Response)=>{
	let statusCode = 404

	try{
		const {value, description, initialDate} = req.body

		const [day, month, year] = initialDate.split('/')
		const date: Date = new Date(`${year}-${month}-${day}`)
		const currentMoment = Date.now()
		const millisecondsDate = date.getTime()


		if(!value || !description){
			statusCode = 401
			throw new Error('Please check the fields and try again.')
		}

		const sameUser = users.find(user=> user.cpf === req.body.cpf && user.name === req.body.name)

		if(!sameUser){
			throw new Error('Sua conta não foi encontrada.\nPor favor verique os campos e tente novamente.')
		}else{			

			if(sameUser.balance < value){
				statusCode = 401
				throw new Error('Saldo insuficiente')
			}else if(millisecondsDate < currentMoment){
				statusCode = 401
				throw new Error('Pagamentos não podem ser agendados para antes de hoje.')
			}
			sameUser.statement.push({
				value,
				description,
				date: new Date()
			})
			res.status(200).send('Your payment was registered successfully.')
		}

	}catch(error: any){
		res.status(statusCode).send({message: error.message})
	}
})

//==============================Transfers=============================
app.post('/accounts/transfers', (req: Request, res: Response)=>{
	let statusCode = 404

	try{

		const {name, cpf, recipientName, recipientCpf, value} = req.body

		if(!name || !cpf || !recipientName || !recipientCpf || !value){
			statusCode = 401
			throw new Error('Please verify the fields and try again.')
		}

		if(isNaN(cpf) || isNaN(recipientCpf)){
			statusCode = 401
			throw new Error('CPF must be only numbers.')
		}

		const client = users.find(user=> name === user.name && cpf === user.cpf)
		const recipient = users.find(user=> recipientName === user.name && recipientCpf === user.cpf)		


		if(!client || !recipient){
			statusCode = 401
			throw new Error('Dados inválidos. Cheque os campos e tente novamente.')		
		}else if(client.balance < value){
			statusCode = 401
			throw new Error('Saldo insuficiente.')
		}else{
			recipient.statement.push({
				value,
				date: new Date(),
				description: 'Transfer'
			})

			client.statement.push({
				value,
				date: new Date,
				description: 'Transfer'
			})

			res.send('Transfer completed successfully.')
		}		

	}catch(error: any){
		res.status(statusCode).send({message: error.message})
	}
})

//=========================Start server=================================
const server = app.listen(3003)

if(server){
	console.log('Server is running at http://localhost:3003')
}else{
	console.log('Failed to load server!')
}

