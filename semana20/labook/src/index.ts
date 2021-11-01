import express from 'express'
import cors from 'cors'
import { signup } from "./endpoints/signup"
import { login } from "./endpoints/login"
import { createPost } from './endpoints/createPost'
import { getPostById } from './endpoints/getPostById'
import { getUserById } from './endpoints/getUserById'
import { postByAuthor } from './endpoints/postByAuthor'
import { getYoursefUser } from './endpoints/getYoursefUser'
import { getAllPosts } from './endpoints/getAllPosts'
import { getAllUsers } from './endpoints/getAllUsers'
import { beFriends } from './endpoints/beFriends'
import { undoFriendship } from './endpoints/undoFriendship'
import { getFeeds } from './endpoints/getFeeds'
import { rescuePassword } from './endpoints/rescuePassword'
import { alterKey } from './endpoints/alterKey'
import { Authentication } from './services/Authentication'
import { Transport } from './services/Transport'



const app = express()
app.use(express.json())
app.use(cors())

app.post('/signup', signup)
app.post('/login', login)
app.post('/post', createPost)
app.post('/friend/:id', beFriends)
app.post('/password', rescuePassword)
app.post('/updatekey', alterKey)
app.get('/post/:id', getPostById)
app.get('/postauthor', postByAuthor)
app.get('/user/:id', getUserById)
app.get('/yourself', getYoursefUser)
app.get('/posts', getAllPosts)
app.get('/users', getAllUsers)
app.get('/feeds', getFeeds)
app.delete('/friend/:id', undoFriendship)




app.listen(process.env.PORT || 3003, ()=>{
  console.log('Server running at http://localhost:3003')
})
