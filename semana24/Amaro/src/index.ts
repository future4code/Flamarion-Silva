import express from 'express'
import cors from 'cors'
import { getAllProducts } from './endpoints/getAllProducts'
import { productById } from './endpoints/productById'
import { productByName } from './endpoints/productByName'
import { productByTag } from './endpoints/productByTag'




const app = express()
app.use(express.json())
app.use(cors())



app.get('/products', getAllProducts)
app.get('/products/:id', productById)
app.post('/products', productByName)
app.post('/products/tag', productByTag)




app.listen(process.env.PORT || 3003, ()=>{
  console.log('Server running at 3003')
})
