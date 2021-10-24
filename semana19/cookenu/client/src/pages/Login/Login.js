import {useState, useEffect, useContext} from 'react'
import Context from '../../global/Context'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'


const Login = ()=>{
  const {setters} = useContext(Context)
  const history = useHistory()
  const [form, setForm] = useState({
    email:'',
    pass:''
  })

  useEffect(()=>{
    const token = localStorage.getItem('token')

    if(token){
      history.push('/home')
    }
  })

  const onChange = (e)=>{
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }

  const login = (e)=>{
    e.preventDefault()

    const body = {
      email: form.email,
      password: form.pass
    }
    axios.post('http://localhost:3003/login', body).then(res=>{
      localStorage.setItem('token', res.data.access_token)
      localStorage.setItem('id', res.data.id)
      history.push('/home')
      
    }).catch(err=>{
      alert(err.response.data)
    })

  }

  return<>
          <h3>Logue com sua conta</h3>
          <form onSubmit={login}>
            <input type='email' name='email' value={form.email}
             placeholder='E-mail' onChange={onChange} required/>
            <input type='password' name='pass' value={form.pass}
             placeholder='Senha' onChange={onChange} required/>
            <button>Entrar</button>
          </form>
          <Link to='/rescuekey'>Esqueci minha senha</Link>
          Não tem cadastro? <Link to='/signup'>Faça agora</Link> o seu.
        </>
}
export default Login
