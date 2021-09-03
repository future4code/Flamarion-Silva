import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'
import styled from 'styled-components'


const Formulario = styled.form`
	display: flex;
	flex-direction: column;
	width: 25vw;
	line-height: 5vh;
	text-align: center;
	margin: auto;
	box-shadow: 3px 3px 6px black;
	margin-top: 10vh;
`
const Title = styled.h1`
	text-align: center;
	margin-top: 10vh;
`



const Login = ()=>{
	const history = useHistory()
	const [email, setEmail] = useState('')
	const [passwd, setPasswd] = useState('')


	useEffect(()=>{
		const token = localStorage.getItem('token')

		if(token !== null){
			history.push('/feed')
		}

	}, [])

	const handleEmail = (e)=>{
		setEmail(e.target.value)
	}
	const handlePasswd = (e)=>{
		setPasswd(e.target.value)
	}


	const login = (e)=>{
		e.preventDefault()
		const url = 'https://labeddit.herokuapp.com/users/login'
		const body = {
			email: email,
			password: passwd
		}

		axios.post(url, body).then(res=>{
			localStorage.setItem('token', res.data.token)
			history.push('/feed')
		}).catch(err=>{
			alert('Deu foi merda!\n'+ err.response.data.message)
		})
	}

//Início da renderização
	return(
		<>
		<Title>LabEddit</Title>
		<Formulario onSubmit={login}>
			<fieldset>
				<input type='email' placeholder='E-mail'
				value={email} onChange={handleEmail} required />
				<input type='password' placeholder='Senha'
				value={passwd} onChange={handlePasswd} required />
				<input type='submit' value='Entrar' />
				<input type='button' value='Cadastrar'
				onClick={()=> history.push('/register')} />
			</fieldset>
		</Formulario>
		</>
	)
}
export default Login