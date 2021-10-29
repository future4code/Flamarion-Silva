import express from 'express'
import cors from 'cors'
import { signup } from "./endpoints/signup"
import { login } from "./endpoints/login"
import { createPost } from "./endpoints/createPost"
import { getPostById } from './endpoints/getPostById'
import { Authentication } from './services/Authentication'

const app = express()
app.use(express.json())
app.use(cors())

app.post('/signup', signup)
app.post('/login', login)
app.post('/post', createPost)
app.get('/post/:id', getPostById)

// const id = new Authentication().idGenerator()
// console.log('id:', id)
// const token = new Authentication().token(id)
// console.log('token:', token)
// const tokenData = new Authentication().tokenData(token)
// console.log('Token data:', tokenData)
// const hash = new Authentication().hash('senha')
// console.log('hash:', hash)
// const compare = new Authentication().compare('seha', hash)
// console.log('Senha:', compare)


app.listen(process.env.PORT || 3003, ()=>{
  console.log('Server running at http://localhost:3003')
})
