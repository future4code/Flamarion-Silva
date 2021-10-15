import express, {Express} from 'express'
import cors from 'cors'
import { createUser } from './endpoints.ts/createUser'
import { createProdutct } from './endpoints.ts/createProduct'
import { getUsers } from './endpoints.ts/getUsers'
import {getProducts} from "./endpoints.ts/getProducts";
import { createPurchase } from './endpoints.ts/createPurchase'

const app:Express = express()

app.use(express.json())
app.use(cors())


app.post('/user', createUser)
app.post('/product', createProdutct)
app.post('/purchase', createPurchase)
app.get('/user', getUsers)
app.get('/product', getProducts)



app.listen(3003, ()=>{
    console.log('Server running at http://localhost:3003')
})