### Exercício 1

a) Recebemos dois arrays, um  com todo o conteúdo da tabela Actor e outro com os detalhes de cada coluna.

b) app.get('/actors/:name', async(req, res)=>{
	const actor = await connection(`select * from Actor where name='${req.params.name}'`)
	res.send(actor)
})

c) app.get('/actors/:gender', async(req, res)=>{
	const gender = await connection.raw(`select count(*) from Actor where gender='${req.params.gender}' `)
	console.log(gender[0])
	res.send(gender[0])
})

### Exercício 2

a) app.post('/actors/:id', async(req, res)=>{
	await connection('Actor').update({salary: req.body.salary}).where({id: req.params.id})
	res.send('Updated successfully!')
})

b) app.delete('/actors/delete/:id', async(req, res)=>{
		await connection('Actor').delete().where({id: req.params.id})
		console.log('Deleted')
		res.send('Deleted')
	}
})

c) app.get('/actors/:gender', async(req, res)=>{
	const averageSalary = await connection('Actor').avg('salary as average').where({
		gender: req.params.gender
	})
	res.send(averageSalary)
})

### Exercício 3

a) app.get('/actors/:id', async(req, res)=>{
	const result = await connection('Actor').where({id: req.params.id})
	res.send(result)
})

b) 

### Exercício 4

a) app.put('/actors', async (req, res)=>{
	await connection('Actor').update({
		salary: req.body.salary
	}).where({
		id: req.body.id
	})
	res.send('Updated successfully!')
})

b) app.delete('/actors/:id', async(req, res)=>{
	await connection('Actor').delete().where({id: req.params.id})
	res.send('Deleted successfully!')
})

Obs.: Preferiri não colocar o try catch já que não se tratava de está codando numa IDE. Para uma melhor visualização.
