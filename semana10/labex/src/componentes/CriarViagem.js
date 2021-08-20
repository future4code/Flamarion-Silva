import axios from 'axios'
import styled from 'styled-components'
import {useEffect, useState, useRef} from 'react'

const InputCont = styled.div`
	width: 25vw;
	margin-left: 32vw;
	display: flex;
	flex-direction: column;
	padding: 15px;	
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
	}
`
const Select = styled.select`
	width: 34.7vw;
	height: 5.5vh;
	border-radius: 10px;
	margin-bottom: 2vh;
	outline: none;
`
const H1 = styled.h1`
	margin-top: 10vh;
	color: lightblue;
	text-align: center;	
`
const Button = styled.button`
	width: 34.7vw;
	height: 5vh;
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


//componente funcional
const CriarViagem = (props)=>{

const [name, setName] = useState('')
const [planet, setPlanet] = useState('')
const [date, setDate] = useState('')
const [text, setText] = useState('')
const [days, setDays] = useState('')
const inputName = useRef(null)


	const handleName = (e)=>{
		setName(e.target.value)
	}
	const handlePlanet = (e)=>{
		setPlanet(e.target.value)
	}
	const handleDate = (e)=>{
		setDate(e.target.value)
	}
	const handleText = (e)=>{
		setText(e.target.value)
	}
	const handleDays = (e)=>{
		setDays(e.target.value)
	}
	

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/flamarion-lovelace/trips'
const token = localStorage.getItem('token')
const headers = {
		headers: {
			auth: token
		}
	}
	
	const createTrip = (e)=>{
		e.preventDefault()
		axios.post(url, headers).then((res)=>{
			console.log(res.data.trips)
			alert('Viagem criada com sucesso.')
			inputName.current.focus()
		}).catch((err)=>{
			console.log(err.response)
			alert('Algo deu errado', err.response)
			console.log(url)
			console.log(token)
			inputName.current.focus()
		})
	}
	
	
	return <div>
			<H1>Criar Viagem</H1>
			<form onSubmit={createTrip}>
			<InputCont>
				<Input autoFocus ref={inputName} type='text' placeholder='Nome' value={name} onChange={handleName}/>
				<Select value={planet} onChange={handlePlanet}>
					<option>Escolha um planeta</option>
					<option>Mercúrio</option>
					<option>Plutão</option>
					<option>Marte</option>
					<option>Terra</option>
					<option>Vênus</option>
					<option>Netuno</option>
					<option>Urano</option>
					<option>Saturno</option>
					<option>Jupter</option>
				</Select>
				<Input type='date' value={date} onChange={handleDate}/>
				<Input type='text' placeholder='Descrição' value={text} onChange={handleText}/>
				<Input type='number' placeholder='Duração em dias' value={days} onChange={handleDays}/>
				<Button>Criar Viagem</Button>
		</InputCont>
		</form>
		</div>
}
export default CriarViagem
