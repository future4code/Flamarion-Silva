import {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const RescueKey = ()=>{
  const [form, setForm] = useState({
    email:''
  })

  const onChange = (e)=>{
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }

  const rescue = (e)=>{
    e.preventDefault()

    const body = {
      email: form.email
    }
    axios.post('http://localhost:3003/passrescue', body).then(res=>{
      alert(res.data)
    }).catch(err=>{
      alert(err.response.data)
    })
    
  }

  return<>
          <h3>Logue com sua conta</h3>
          <form onSubmit={rescue}>
            <input type='email' name='email' value={form.email}
             placeholder='E-mail' onChange={onChange} required/>
            <button>Entrar</button>
          </form>          
          Voltar para <Link to='/'>login</Link>.
        </>
}
export default RescueKey
