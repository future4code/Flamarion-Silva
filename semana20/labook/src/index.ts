import express from 'express'
import cors from 'cors'
import { signup } from "./endpoints/signup"
import { login } from "./endpoints/login"
import { createPost } from "./endpoints/createPost"
import { getPostById } from './endpoints/getPostById'
import { getAllPosts } from "./endpoints/getAllPosts";
import { beFriends } from "./endpoints/beFriends";
import { Authentication } from './services/Authentication'

const app = express()
app.use(express.json())
app.use(cors())

app.post('/signup', signup)
app.post('/login', login)
app.post('/post', createPost)
app.get('/post/:id', getPostById)
app.get('/posts', getAllPosts)
app.post('/friend/:id', beFriends)




app.listen(process.env.PORT || 3003, ()=>{
  console.log('Server running at http://localhost:3003')
})
