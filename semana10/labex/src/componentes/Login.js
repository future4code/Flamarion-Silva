import styled from 'styled-components'
import axios from 'axios'
import {useState, useRef} from 'react'


const InputCont = styled.div`
	width: 35vw;
	margin-left: 32vw;
	display: flex;
	flex-direction: column;
		
`
const Input = styled.input`
	height: 5vh;
	width: 34.4vw;
	margin-left: -0.1vw;
	margin-bottom: 2vh;
	border-radius: 10px;
	outline: none;
	background-color: transparent;
	font-size: 1rem;
	color: lightblue;
	::placeholder{
		font-size: 1rem;
		color: lightblue;
	}
`
const H1 = styled.h1`
	margin-top: 20vh;
	color: lightblue;
	text-align: center;	
`
const Button = styled.button`
	height: 5vh;
	width: 34.4vw;
	border-radius: 20px;
	background-color: lightblue;
	font-size: 1rem;
	cursor: pointer;
	color: gray;
	&:hover{
		color: whitesmoke;
		background-color: #4040ff;
	}
`

//Componente funcional
const Login = (props)=>{

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const inputEmail = useRef(null)


	const handleEmail = (e)=>{
		setEmail(e.target.value)
	}
	const handlePassword = (e)=>{
		setPassword(e.target.value)
	}
	
	const makeLogin = (e)=>{
		e.preventDefault()
		const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/flamarion-lovelace/login'
		const body = {
			email: email,
			password: password
		}
		axios.post(url, body)
		.then((res)=>{
			console.log(res.data.token)
			localStorage.setItem('token', res.data.token)
			props.changeScreen('adm')
		})
		.catch((err)=>{
			console.log(err.response)
			alert(err.response)
			inputEmail.current.focus()			
		})
	}
	
	return <div>
			<H1>Login</H1>
			<InputCont>
				<form onSubmit={makeLogin}>
					<Input autoFocus ref={inputEmail} type='email' placeholder='Email' value={email} onChange={handleEmail}/>
					<Input type='password' placeholder='Senha' value={password} onChange={handlePassword}/>
					<Button>Enviar</Button>
				</form>
			</InputCont>
		</div>
}
export default Login
