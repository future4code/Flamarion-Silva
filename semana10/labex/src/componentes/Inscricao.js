import styled from 'styled-components'
import {useState, useRef} from 'react'
import axios from 'axios'


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
		color: lightblue;
	}
`
const Select = styled.select`
	width: 34.7vw;
	height: 5.5vh;
	border-radius: 10px;
	margin-bottom: 2vh;
	outline: none;
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
const H1 = styled.h1`
	margin-top: 10vh;
	color: lightblue;
	text-align: center;	
`


const Inscricao = (props)=>{
	const [trip, setTrip] = useState('')
	const [name, setName] = useState('')
	const [age, setAge] = useState('')
	const [text, setText] = useState('')
	const [job, setJob] = useState('')
	const [planet, setPlanet] = useState('')
	const inputName = useRef(null)
	
	const handleTrip = (e)=>{
		setTrip(e.target.value)
	}	
	const handleName = (e)=>{
		setName(e.target.value)
	}
	const handleAge = (e)=>{
		setAge(e.target.value)
	}
	const handleText = (e)=>{
		setText(e.target.value)
	}
	const handleJob = ((e)=>{
		setJob(e.target.value)
	})
	const handlePlanet = (e)=>{
		setPlanet(e.target.value)
	}
	
	const id = props.trips.id
	const tripName = props.trips.name
	
	const applyToTrip = (e)=>{
		e.preventDefault()		
		const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/flamarion-lovelace/trips/${id}/apply`
		const body = {
			name: name,
			age: age,
			applicationText: text,
			profession: job,
			country: planet
		}		
		axios.post(url, body)
		.then((res)=>{
			console.log(res.data)			
			alert('Inscrição realizada com sucesso.')
			setTrip('')
			setName('')
			setAge('')
			setText('')
			setJob('')
			setPlanet('')
			inputName.current.focus()			
		})
		.catch((err)=>{
			console.log(err.response)
			alert(err.response)			
		})		
	}
	
	return <div>
			<H1>{tripName}</H1>			
			<form onSubmit={applyToTrip}>			
			<InputCont>			
			<Input autoFocus ref={inputName} type='text' placeholder='Nome' value={name} onChange={handleName}/>
			<Input type='number' placeholder='Idade' value={age} onChange={handleAge} />
			<Input type='text' placeholder='Texto de candidatura' value={text} onChange={handleText} />
			<Input type='text' placeholder='Profissão' value={job} onChange={handleJob} />
			<Select value={planet} onChange={handlePlanet}>
				<option selected>Escolha um planeta</option>
				<option>Júpter</option>
				<option>Saturno</option>
				<option>Urano</option>
				<option>Netuno</option>
				<option>Plutão</option>
				<option>Terra</option>
				<option>Marte</option>
				<option>Mercúrio</option>
				<option>Vênus</option>
			</Select>
				<Button>Enviar</Button>
				</InputCont>
				</form>			
		</div>
}
export default Inscricao
