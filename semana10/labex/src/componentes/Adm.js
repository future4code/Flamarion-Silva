import axios from 'axios'
import styled from 'styled-components'
import {useState, useEffect} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';



const Trips = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;		
	width: 45vw;
	padding: 10px;
	margin: auto;
	margin-bottom: 3vh;
	box-shadow: 3px 3px 7px;
	&:hover{		
		cursor: pointer;
	}	
`
const H1 = styled.h1`
	margin-top: 10vh;
	color: lightblue;
	text-align: center;	
`
const Span = styled.span`	
	margin-left: 41.5vw;
	padding: 10px;
	border-radius: 30px;
	&:hover{
		background-color: gray;
	}
`
const Button = styled.button`
	margin-left: 42.5vw;
	margin-bottom: 3vh;
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



//Componente funcional
const Adm = (props)=>{
const [trips, setTrips] = useState([])
	
	
	const getTrips = ()=>{
		axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/flamarion-lovelace/trips')
		.then((res)=>{
			setTrips(res.data.trips)
			console.log(res.data.trips)			
		})
		.catch((err)=>{
			alert(err.response)
		})
	}
		
	useEffect(()=>{
		getTrips()
	}, [])
	
	
	const deleteTrip = ()=>{
		const token = localStorage.getItem('token')
		const id = trips.id
		const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/flamarion-lovelace/trips/${id}`
		const headers = {
			headers: {
				auth: token
			}			
		}
		const decide = window.confirm('Tem certeza que deseja deletar esta viagem?')
		if(decide){
			axios.delete(url, headers).then((res)=>{
				console.log(res.data)
				getTrips()				
			}).catch((err)=>{
				console.log(err.response)
				alert('Algo deu errado', err.response)
			})
		}
	}
	
	return <div>
			<H1>Painel Administrativo</H1>
			<Button onClick={()=> props.changeScreen('criar')}>Criar Viagem</Button>
			{trips.map((trip)=>{
				return <Trips>
						<span onClick={()=> props.goToDetail(trip)}>{trip.name}</span> 
						<Span><DeleteIcon className='icone' style={{color:'lightblue',
							fontSize:'1.5rem', cursor:'pointer'}} onClick={deleteTrip} />
						</Span>														
					</Trips>
			})}
		</div>
}
export default Adm
