import {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Rescue = ()=>{
  const [form, setForm] = useState({
    pass:'',
    confirm:''
  })

  const onChange = (e)=>{
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }

  const rescue = (e)=>{
    e.preventDefault()

    const body = {
      password: form.pass
    }
    axios.post('http://localhost:3003/rescue', body).then(res=>{
      alert(res.data)
    }).catch(err=>{
      alert(err.response.data)
    })

  }

  return<>
          <h3>Redefina sua senha</h3>
          <form onSubmit={rescue}>
            <input type='password' name='pass' value={form.pass}
             placeholder='Senha' onChange={onChange} required/>
            <input type='password' name='confirm' value={form.confirm}
             placeholder='Confirme sua senha' onChange={onChange} required/>
            <button>Entrar</button>
          </form>
          Voltar para <Link to='/'>login</Link>.
        </>
}
export default Rescue
