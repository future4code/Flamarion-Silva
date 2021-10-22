import app from './app'
import { login } from './endpoints/login'
import { recipe } from './endpoints/createRecipe'
import { signup } from './endpoints/signup'
import { Authentication } from './services/Authentication'
import { getProfile } from './endpoints/getProfile'
import { getProfileUser } from "./endpoints/getProfileUser"
import { getRecipe } from "./endpoints/getRecipe";



app.post('/signup', signup)
app.post('/login', login)
app.post('/recipe', recipe)
app.get('/user/profile', getProfile)
app.get('/user/:id', getProfileUser)
app.get('/recipe/:id', getRecipe)


/*const auth = new Authentication()
const id = auth.generateId()
const token = auth.generateToken(id)
const tokenData = auth.getTokenData(token)

console.log('id:', id)
console.log('token:', token)
console.log('tokenData', tokenData)
*/
