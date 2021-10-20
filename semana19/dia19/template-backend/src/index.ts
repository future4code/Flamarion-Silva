import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { login } from "./endpoints/login"
import {getProfile} from './endpoints/getProfile'


app.post('/users/signup', createUser)
app.post("/users/login", login)
app.put('/users/edit', editUser)
app.get('/users/profile', getProfile)



