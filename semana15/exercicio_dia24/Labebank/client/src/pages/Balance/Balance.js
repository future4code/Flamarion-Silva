import {useState, useContext} from 'react'
import Context from '../../global/Context'
import axios from 'axios'
import {url} from '../../constants/urls'
import {Container} from './styled'
import Header from '../../components/Header'



//==========================Component=======================
const Home = ()=>{
	const [form, setForm] = useState({
		name:'',
		cpf:''
	})

	
	const onChange = (e)=>{
		const {name, value} = e.target
		setForm({...form, [name]: value})
	}


	const getBalance = (e)=>{
		e.preventDefault()
		
		const body = {
			name: form.name,
			cpf: Number(form.cpf)
		}

		axios.post(`${url}/balance`, body).then(res=>{
			console.log(res.data)
			document.getElementById('result').innerHTML = `Seu saldo é ${res.data}`
		}).catch(err=>{
			alert(err.response.data.message)
		})
	}

//===============================Renderizaão===========================
	return<div>
		  <Header/> 
		  <Container>
				<h3>Consulta de saldo</h3>
			<form onSubmit={getBalance}>
				<input name='name' value={form.name} onChange={onChange}
				 type='text' placeholder='Nome e sobrenome' autoFocus required />
				<input name='cpf' value={form.cpf} onChange={onChange}
				 type='number' min='0' placeholder='CPF(somente números)'required/>
				<button>Ver saldo</button>
				<p id='result'></p>
			</form>
		   </Container>
		  </div>
}
export default Home