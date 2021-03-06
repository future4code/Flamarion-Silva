import axios from 'axios'
import {useState, useEffect} from 'react'
import {url} from '../../constants/urls'
import {Container} from './styled'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {useHistory} from 'react-router-dom'



//===========================Componente===========================
const CreateAccount = ()=>{
	const history = useHistory()
	const [form, setForm] = useState({
		name:'',
		cpf:'',
		date:''
	})
	

	useEffect(()=>{
		const token = localStorage.getItem('token')

		if(token === null){
			history.push('/')
		}

	}, [history])

	const onChange = (e)=>{
		const {name, value} = e.target
		setForm({...form, [name]: value})
	}
	
	
	const createAccount = (e)=>{
		e.preventDefault()

		const body = {
			name: form.name,
			cpf: Number(form.cpf),
			dateInitial: form.date
		}

		axios.post(`${url}/create`, body).then(res=>{
			alert(`Cliente ${form.name} cadastrado com sucesso.`)
		}).catch(err=>{
			alert(err.response.data.message)
		})
	}
//=========================Render===========================
return<div>
	  <Header/>
	  <Container>
		<h3>Criar conta</h3>
		<form onSubmit={createAccount}>
			<input type='text' name='name' value={form.name} onChange={onChange}
			 placeholder='Nome e sobrenome' id='client' required /> 
			<input tpe='number' name='cpf' value={form.cpf} onChange={onChange}
			 placeholder='Somente números' required/>
			<label htmlFor='birthDate'>Data de nascimento</label>
			<input type='date' id='birthDate' name='date' value={form.date}
			 onChange={onChange} required />
			<button>Enviar</button>
		</form>
	  </Container>
	  <Footer/>
	  </div>
}
export default CreateAccount