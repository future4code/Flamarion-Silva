import axios from 'axios'
import styled from 'styled-components'
import {useEffect, useState} from 'react'


const Trips = styled.div`
	display: flex;
	flex-direction: column;
	width: 40vw;
	padding: 10px;
	margin: auto;
	margin-bottom: 3vh;
	box-shadow: 3px 3px 7px;	
`
const H1 = styled.h1`
	margin-top: 10vh;
	color: lightblue;
	text-align: center;	
`
const Button = styled.button`
	width: 10vw;
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
const Div = styled.div`
	display: flex;
	justify-content: space-between;
`

//Componente funcional
const Detalhes = (props)=>{

const [candidates, setCandidates] = useState([])
const [approved, setApproved] = useState([])
const [decision, setDecision] = useState(false)
const trip = props.trips

	const id = 	trip.id
	
	const tripDetail = ()=>{
		const token = localStorage.getItem('token')			
		const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/flamarion-lovelace/trip/${id}`
		const headers = {
			headers: {
				auth: token
			}
		}		
		axios.get(url, headers).then((res)=>{			
			setCandidates(res.data.trip.candidates)
			setApproved(res.data.trip.approved)
			console.log(res.data.trip.candidates[0].id)						
		}).catch((err)=>{
			console.log(err.response)
			alert('Algo deu errado', err.response)
		})
	}
	
	useEffect(()=>{		
		tripDetail()
	}, [])
	
	const decideCandidate = ()=>{
		const token = localStorage.getItem('token')		
		const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/flamarion-lovelace/trips/${id}/candidates/ePm8p4Q8NDnKh4oxozrG/decide`
		const body = {
			"approve": true
		}
		const headers = {
			headers: {
				auth: token
			}
		}
		
		axios.put(url, body, headers).then((res)=>{
			console.log(res.data)
			alert('Candidato aprovado com sucesso.')
		}).catch((err)=>{
			console.log(err.response.data)
			alert('Algo deu errado', err.response.data)						
		})
	}
	

//Componente funcional
return <div>
		<H1>{trip.name}</H1>
		<Trips>
			<p><b>Nome: </b>{trip.name}</p>
			<p><b>Descrição: </b>{trip.description}</p>
			<p><b>Planeta: </b>{trip.planet}</p>
			<p><b>Duração: </b>{trip.durationInDays} dias</p>
			<p><b>Data: </b>{trip.date}</p>
		</Trips>
		<H1>Candidatos Pendentes</H1>
		
			{candidates.length > 0 ? candidates.map((cand)=>{
				return <Trips>
						<p><b>Nome: </b>{cand.name}</p>
						<p><b>Profissão: </b>{cand.profession}</p>
						<p><b>Texto de candidatura: </b>{cand.applicationText}</p>
						<Div><Button onClick={decideCandidate}>Aprovar</Button><Button>Reprovar</Button></Div>
					</Trips>
			}) : <p>Não há candidatos pendentes.</p>}
		<H1>Candidatos Aprovados</H1>
		<Trips>
			{approved.length > 0 ? approved.map((app)=>{
				return<li>{app.name}</li> 
						
			}) : <p>Não há candidatos aprovados.</p>}
		</Trips>
		</div>
}
export default Detalhes
