import app from './app'
import { login } from './endpoints/login'
import { recipe } from './endpoints/createRecipe'
import { signup } from './endpoints/signup'
import { Authentication } from './services/Authentication'
import { getProfile } from './endpoints/getProfile'
import { getProfileUser } from "./endpoints/getProfileUser"
import { getRecipe } from "./endpoints/getRecipe"
import { followUser } from './endpoints/followUser'
import { unfollowUser } from './endpoints/unfollowUser'
import { recipesFollowedUser } from "./endpoints/recipesFollowedUser";
import { editRecipe } from './endpoints/editRecipe'
import { deleteRecipe } from './endpoints/deleteRecipe'
import { passRescue } from './endpoints/passRescue'
import { deleteUser } from './endpoints/deleteUser'
import { getAllUsers } from './endpoints/getAllUsers'
import { getAllRecipes } from './endpoints/getAllRecipes'
import { getAllFollowers } from './endpoints/getAllFollowers'
import { passwordResucue } from './endpoints/passwordResucue'



app.post('/signup', signup)
app.post('/login', login)
app.post('/recipe', recipe)
app.post('/follow/:id', followUser)
app.post('/passrescue', passRescue)
app.post('/rescue', passwordResucue)
app.put('/editrecipe/:id', editRecipe)
app.delete('/unfollow/:id', unfollowUser)
app.delete('/deleterecipe/:id', deleteRecipe)
app.delete('/user/:id', deleteUser)
app.get('/myprofile', getProfile)
app.get('/user/:id', getProfileUser)
app.get('/recipe/:id', getRecipe)
app.get('/feed', recipesFollowedUser)
app.get('/allusers', getAllUsers)
app.get('/allrecipes', getAllRecipes)
app.get('/allfollowers', getAllFollowers)



/*const auth = new Authentication()
const id = auth.generateId()
const token = auth.generateToken(id)
const tokenData = auth.getTokenData(token)

console.log('id:', id)
console.log('token:', token)
console.log('tokenData', tokenData)
*/
