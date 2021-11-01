import app from './app'
import {Authenticator} from './services/Authenticator'
import { signup } from "./controllers/signup";
import { login } from "./controllers/login";


app.post('/signup', signup)
app.post('/login', login)
