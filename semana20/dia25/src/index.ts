import app from './app'
import { signup } from './controllers/signup'


app.post('/signup', signup)
