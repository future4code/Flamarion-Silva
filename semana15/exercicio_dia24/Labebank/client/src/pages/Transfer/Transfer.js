import axios from 'axios'
import {useState, useContext} from 'react'
import {url} from '../../constants/urls'
import Context from '../../global/Context'
import {Container} from './styled'
import Header from '../../components/Header'


//===========================Inicio do compoente funcional=========
const Transfer = ()=>{
	const {states} = useContext(Context)
	const [form, setForm] = useState({
		name:'',
		cpf:'',
		recipientName:'',
		recipientCpf:'',
		value:''
	})

	const onChange = (e)=>{
		const {name, value} = e.target
		setForm({...form, [name]: value})
	}

	
	const transfer = (e)=>{
		e.preventDefault()

		
		const body = {
			name: form.name,
			cpf: Number(form.cpf),
			recipientName: form.recipientName,
			recipientCpf: Number(form.recipientCpf),
			value: Number(form.value)
		}

		axios.post(`${url}/transfers`, body).then(res=>{
			console.log(res.data)
		}).catch(err=>{
			alert(err.response.data.message)
		})
	}


//=============================Render============================
	return<div>
			<Header/>
			 <Container>
				<h3>Transferências</h3>
				<form onSubmit={transfer}>
					<input type='text' name='name' value={form.name} onChange={onChange}
					 placeholder='Nome e sobrenome' required/>
					<input type='number' name='cpf' value={form.cpf}
					 onChange={onChange} placeholder='CPF(somente números)' required/>
					<input type='text' name='recipientName' value={form.recipientName}
					 onChange={onChange} placeholder='Nome do destinatário' required/>
					<input type='number' name='recipientCpf' value={form.recipientCpf}
					 onChange={onChange} placeholder='CPF do destinatário' required/>
					<input type='number' name='value' value={form.value} onChange={onChange}
					 placeholder='Valor R$ 0,00'required/>
					<button>Transferir</button>
				</form>
			  </Container>
		   </div>
}
export default Transfer