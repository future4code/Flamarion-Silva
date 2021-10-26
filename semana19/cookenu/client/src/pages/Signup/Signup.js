import {useEffect, useState, useContext} from 'react'
import Context from '../../global/Context'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'


const Signup = ()=>{
  const {setters} = useContext(Context)
  const history = useHistory()
  const [form, setForm] = useState({
    name:'',
    email:'',
    pass:''
  })

  useEffect(()=>{
    const token = localStorage.getItem('token')

    if(token){
      history.push('/home')
    }
  }, [])

  const onChange = (e)=>{
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }

  const registUser = (e)=>{
    e.preventDefault()

    const body = {
      name: form.name,
      email: form.email,
      password: form.pass,
      role: 'NORMAL'
    }

    axios.post('http://localhost:3003/signup', body).then(res=>{
      localStorage.setItem('token', res.data.access_token)
      history.push('/home')

    }).catch(err=>{
      alert(err.response)
      console.log(err.response)
    })

  }

  return<>
          <h3>Complete com seus dados</h3>
          <form onSubmit={registUser}>
            <input type='text' name='name' value={form.name}
             placeholder='Nome e sobrenome' onChange={onChange} required/>
            <input type='email' name='email' value={form.email}
             placeholder='E-mail' onChange={onChange} required/>
            <input type='password' name='pass' value={form.pass}
             placeholder='Senha' onChange={onChange} required/>
            <button>Entrar</button>
          </form>
          <Link to='/'>Voltar para login</Link>
        </>
}
export default Signup
