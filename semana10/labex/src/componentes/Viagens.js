import {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'


const H1 = styled.h1`
	margin-top: 10vh;
	color: lightblue;
	text-align: center;	
`
const Trips = styled.div`
	display: flex;
	flex-direction: column;
	width: 40vw;
	padding: 10px;
	margin: auto;
	margin-bottom: 3vh;
	box-shadow: 3px 3px 7px;
	&:hover{
		cursor: pointer;		
	}	
`



const Viagens = (props)=>{
const [trips, setTrips] = useState([])
	
	useEffect(()=>{
		axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/flamarion-lovelace/trips')
		.then((res)=>{
			setTrips(res.data.trips)
			console.log(res.data.trips)
		})
		.catch((err)=>{
			alert(err.response)
		})
	}, [])
	
	return <div>			
			<H1>Lista de viagens</H1>
			
			{trips.map((trip)=>{
				return <Trips onClick={()=> props.goToRegister(trip)}>
					<p><b>Nome: </b>{trip.name}</p>
					<p><b>Descrição: </b>{trip.description}</p>
					<p><b>Planeta: </b>{trip.planet}</p>
					<p><b>Duração: </b>{trip.durationInDays} dias</p>
					<p><b>Data: </b>{trip.date}</p>					
					</Trips>					
			})}			
		</div>
}
export default Viagens
