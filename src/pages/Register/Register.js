import axios from 'axios'
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
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


const Register = ()=>{
	const history = useHistory()
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [pswd, setPswd] = useState('')
	const [pswdConf, setPswdConf] = useState('')


	useEffect(()=>{
		const token = localStorage.getItem('token')

		if(token !== null){
			history.push('/feed')
		}

	}, [])


	const handleName = (e)=>{
		setName(e.target.value)
	}
	const handleEmail = (e)=>{
		setEmail(e.target.value)
	}
	const handlePswd = (e)=>{
		setPswd(e.target.value)
	}
	const handlePswdConf = (e)=>{
		setPswdConf(e.target.value)
	}



	const verifyPswd = ()=>{
		if(pswd !== pswdConf){
			alert('As senhas estão diferentes!')
		}
	}


	const Regist = (e)=>{
		e.preventDefault()
		const url = 'https://labeddit.herokuapp.com/users/signup'
		const body = {
			'username': name,
			'email': email,
			'password': pswd
		}

		axios.post(url, body).then(res=>{			
			localStorage.setItem('token', res.data.token)
			alert(`${name} cadastrado com sucesso!`)
			history.push('/feed')
		}).catch(err=>{
			alert('Deu merda!\n'+err.response.data.message)
			console.log(err.response.data.message)			
		})
	}


//Início da renderização
	return(
		<>
		<Title>LabEddit</Title>
		<Formulario onSubmit={Regist}>
			<fieldset>
				<input type='text' placeholder='Usuário' required
				value={name} onChange={handleName} />
				<input type='email' placeholder='E-mail' required
				value={email} onChange={handleEmail} />
				<input type='password' placeholder='Senha' required
				value={pswd} onChange={handlePswd} />
				<input type='password' placeholder='Confirmar senha' required
				value={pswdConf} onChange={handlePswdConf} onBlur={verifyPswd} />
				<input type='submit' value='Cadastrar' onClick={verifyPswd} />
				<input type='button' value='Voltar para login' onClick={()=> history.push('/')}/>
			</fieldset>
		</Formulario>
		</>
	)
}
export default Register