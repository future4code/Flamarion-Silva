import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { login } from "./endpoints/login"
import { getUserById } from "./endpoints/getUserById"


app.post('/users/signup', createUser)
app.post('/users/login', login)
app.put('/users/', editUser)
app.get('/users/:id', getUserById)

