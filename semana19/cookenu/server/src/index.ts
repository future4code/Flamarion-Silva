import app from './app'
import { login } from './endpoints/login'
import { recipe } from './endpoints/createRecipe'
import { signup } from './endpoints/signup'
import { Authentication } from './services/Authentication'
import { getProfileUser } from "./endpoints/getProfileUser"
import { getRecipe } from "./endpoints/getRecipe"
import { followUser } from './endpoints/followUser'
import { unfollowUser } from './endpoints/unfollowUser'
import { recipesFollowedUser } from "./endpoints/recipesFollowedUser";
import { editRecipe } from './endpoints/editRecipe'



app.post('/signup', signup)
app.post('/login', login)
app.post('/recipe', recipe)
app.post('/follow/:id', followUser)
app.put('/editrecipe/:id', editRecipe)
app.delete('/unfollow/:id', unfollowUser)
app.get('/user/:id', getProfileUser)
app.get('/recipe/:id', getRecipe)
app.get('/feed', recipesFollowedUser)


/*const auth = new Authentication()
const id = auth.generateId()
const token = auth.generateToken(id)
const tokenData = auth.getTokenData(token)

console.log('id:', id)
console.log('token:', token)
console.log('tokenData', tokenData)
*/
