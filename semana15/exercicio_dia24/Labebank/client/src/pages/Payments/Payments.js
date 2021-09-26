import {useContext, useState} from 'react'
import Context from '../../global/Context'
import axios from 'axios'
import {url} from '../../constants/urls'
import {Container} from './styled'
import Header from '../../components/Header'


//+=======================Components==========================
const Payments = ()=>{
	const {states} = useContext(Context)
	const [form, setForm] = useState({
		name:'',
		cpf:'',
		initialDate:'',
		value:''
	})


	const onChange = (e)=>{
		const {name, value} = e.target
		setForm({...form, [name]: value})
	}

	

	const pay = (e)=>{
		e.preventDefault()

		
		const body = {
			name: form.name,
			cpf: Number(form.cpf),
			initialDate: form.initialDate,
			value: form.value,
			description: 'Payment'
		}

		axios.post(`${url}/payments`, body).then(res=>{
			alert('Pagamento efetuado com sucesso!')
		}).catch(err=>{
			alert(err.response.data.message)			
		})
	}

//====================================Render=============================
	return<div>
			<Header/>
			 <Container>
				<h3>Pagamentos</h3>
				<form onSubmit={pay}>
					<input type='text' name='name' value={form.name} onChange={onChange}
					 placeholder='Nome e sobrenome' required/>
					<input type='number' name='cpf' value={form.cpf} onChange={onChange}
					 placeholder='CPF(somente números)' required/>
					<input type='date' name='initialDate' value={form.initialDate} onChange={onChange}
					 required/>
					<input type='number' name='value' value={form.value} onChange={onChange}
					 placeholder='Valor R$ 0,00' required/>
					<button>Efetuar pagamento</button>
				</form>
			  </Container>
		  </div>
}
export default Payments