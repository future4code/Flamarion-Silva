import {useState} from 'react'
import {Link} from 'react-router-dom'


const Login = ()=>{
  const [form, setForm] = useState({
    email:'',
    pass:''
  })

  const onChange = (e)=>{
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }
  console.log(form)

  return<>
          <h3>Logue com sua conta</h3>
          <form>
            <input type='email' name='email' value={form.email}
             placeholder='E-mail' onChange={onChange} required/>
            <input type='password' name='pass' value={form.pass}
             placeholder='Senha' onChange={onChange} required/>
            <button>Entrar</button>
          </form>
          Não tem cadastro? <Link to='/signup'>Faça agora</Link> o seu.
        </>
}
export default Login
