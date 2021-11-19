import express from 'express'
import cors from 'cors'
import { signup } from "./endpoints/signup"
import { login } from "./endpoints/login"


const app = express()
app.use(express.json())
app.use(cors())

app.post('/signup', signup)
app.post('/login', login)
app.post('/post', createPost)





app.listen(process.env.PORT || 3003, ()=>{
  console.log('Server running at http://localhost:3003')
})
