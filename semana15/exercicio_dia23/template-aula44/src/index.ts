import express, { Request, Response } from 'express'
import cors from 'cors'


type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

//======================Get all users=====================
app.get('/users', (req: Request, res: Response)=>{
  let statusCode = 404

  try{
    const result = users.map(user=>{
      return user
    })

    res.status(200).send(result)

  }catch(error){
    res.status(statusCode).send({message: error.message})
  }

})

//======================Search user by type===============
app.get('/users/search', (req: Request, res: Response)=>{
  let statusCode = 404
  
  try{
    const type: string = req.query.type as string
    const user: User[] | undefined = users.filter(user=> user.type.includes(type))

    if(!type){
      throw new Error('Type is required!')
    }
    if(user.length === 0){
      statusCode = 422
      throw new Error('Ivalid type')
    }

    res.send(user)

  }catch(error){
    res.status(statusCode).send({message: error.message})
  }

})

//=====================Search user by name==================
app.get('/users/searchname', (req: Request, res: Response)=>{
  let statusCode = 404
  
  try{
    const name: string = req.query.name as string
    const user: User[] | undefined = users.filter(user=> user.name.includes(name))

    if(user.length === 0){
      throw new Error('Invalid user!')
    }
    if(!name){
      throw new Error('Username is required!')
    }

    res.send(user)

  }catch(error){
    res.status(statusCode).send({message: error.message})
  }

})

//====================Search by Id==================
app.get('/users/:id', (req: Request, res: Response)=>{
  let statusCode = 404
  
  try{
    const id = Number(req.params.id)

    if(isNaN(id)){
      statusCode = 422
      throw new Error('Invalid id')
    }

    const user = users.find(user=>{
      return user.id === id
    })

    if(!user){
      statusCode = 404
      throw new Error('User not found!')
    }

    res.status(200).send(user)

  }catch(error){
    res.status(statusCode).send({message: error.message})
  }

})

//=====================Create User==============================
app.post('/users', (req: Request, res: Response)=>{
  let statusCode = 404

  try{
    const {id, name, email, type, age} = req.body

    if(!id || !name || !email || !type || !age){
      statusCode = 422
      throw new Error('Verify your params')
    }
    if(isNaN(id) || isNaN(age)){
      statusCode = 422
      throw new Error('Verify your id and age either. They both must numbers!')
    }

    const newUser: User = {
      id,
      name,
      email,
      type,
      age
    }

    users.push(newUser)
    res.status(201).send({message: 'User was created successfully'})

  }catch(error){
    res.status(404).send({message: error.message})
  }

})

//=========================Server listening=======================
app.listen(3003, () => {
  console.log('Server is running at http://localhost:3003')
})
