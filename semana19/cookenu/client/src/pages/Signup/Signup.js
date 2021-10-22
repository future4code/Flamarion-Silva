import {useState} from 'react'
import {Link} from 'react-router-dom'


const Signup = ()=>{
  const [form, setForm] = useState({
    name:'',
    email:'',
    pass:''
  })

  const onChange = (e)=>{
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }
  console.log(form)

  return<>
          <h3>Complete com seus dados</h3>
          <form>
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
