import {useState, useEffect} from 'react'
import {Container} from './styled'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {useHistory} from 'react-router-dom'
import {url} from '../../constants/urls'
import axios from 'axios'




//==========================Component=======================
const Statement = ()=>{
	const history = useHistory()
	const [transaction, setTransaction] = useState([])
	const [form, setForm] = useState({
		name:'',
		cpf:''
	})

console.log(transaction)
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


	
	const statement = (e)=>{
		e.preventDefault()

		const body = {
			name: form.name,
			cpf: Number(form.cpf)
		}

		axios.post(`${url}/statement`, body).then(res=>{
			console.log(res.data)
			setTransaction(res.data)
		}).catch(err=>{
			alert(err.response.data.message)
		})
	}
	

//===============================Renderizaão===========================
	return<div>
		  <Header/> 
		  <Container>
				<h3>Extrato</h3>
			<form onSubmit={statement}>
				<input name='name' value={form.name} onChange={onChange}
				 type='text' placeholder='Nome e sobrenome' autoFocus required />
				<input name='cpf' value={form.cpf} onChange={onChange}
				 type='number' min='0' placeholder='CPF(somente números)'required/>
				<button>Consultar</button>
				{transaction && transaction.map(state=>{
					return <p><b>Valor: </b>{state.value}<br/>
							  <b>Data: </b>{state.date}<br/>
							  <b>Descrição: </b>{state.description}<hr/>
						   </p>
				})}
			</form>
		   </Container>
		   <Footer/>		   
		  </div>
}
export default Statement