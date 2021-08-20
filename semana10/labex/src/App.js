import {useState, useRef, useEffect} from 'react'
import Home from './componentes/Home'
import Viagens from './componentes/Viagens'
import Inscricao from './componentes/Inscricao'
import Login from './componentes/Login'
import Adm from './componentes/Adm'
import Detalhes from './componentes/Detalhes'
import CriarViagem from './componentes/CriarViagem'
import './App.css'
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components'


const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px;	
`
const Title = styled.h1`
	margin-top: -1vh;
	margin-left: 30vw;
	text-align: center;
	font-size: 4rem;
	font-weight: normal;
	color: lightblue;
`
const Nav = styled.nav`
	margin-top: -37vh;
	box-shadow: 3px 3px 6px lightblue;
	padding: 10px;
	border-radius: 10px;	
`
const Li = styled.li`
	display: inline;
	margin: 10px;
	background-color: lightblue;
	padding: 10px;
	border-radius: 20px;
	font-size: 1.2rem;
	cursor: pointer;
	color: gray;
	&:hover{
		padding: 13px;
		color: whitesmoke;		
	}		
`


const App = (props)=> {
	const [screen, setScreen] = useState('adm')
	const menu = useRef(null)
	const [curtain, setCurtain] = useState(true)
	const [trips, setTrips] = useState([])
	
	
	useEffect(()=>{
		document.title = 'Labe-X'
	}, [])	
		
	const showHideMenu = ()=>{
		setCurtain(!curtain)		
		if(curtain){
			menu.current.style.marginTop = '-5vh'
			menu.current.style.transitionDuration = '1.5s'
			menu.current.style.opacity = '1'
		}else{
			menu.current.style.marginTop = '-37vh'
			menu.current.style.opacity = '0'
		}		
	}
	
	
	
	const changeScreen = (screen)=>{
		setScreen(screen)
	}
	const goToDetail = (id)=>{
		changeScreen('detalhes')
		setTrips(id)
	}
	const goToRegister = (id)=>{
		const decide = window.confirm('Deseja se inscrever para essa viagem?')
		if(decide){
			changeScreen('inscricao')
			setTrips(id)
		}
	}
	
	const renderScreen = ()=>{
		switch(screen){
			case 'home':
				return <Home changeScreen={changeScreen} />
			case 'viagens':
				return <Viagens goToRegister={goToRegister} changeScreen={changeScreen}/>
			case 'inscricao':
				return <Inscricao trips={trips} />
			case 'login':
				return <Login changeScreen={changeScreen}/>
			case 'adm':
				return <Adm goToDetail={goToDetail} trips={trips} changeScreen={changeScreen}/>
			case 'detalhes':
				return <Detalhes trips={trips}/>
			case 'criar':
				return <CriarViagem />
		}
	}
	
	return (
		<div>
			<Header>
			<MenuIcon style={{marginTop:'-13vh', fontSize:'2.5rem', color:'lightblue', cursor:'pointer'}}
			onClick={showHideMenu} />
			<Title>LabeX</Title>
			<Nav ref={menu}>
				<ul>
					<Li onClick={()=> changeScreen('home')} showHideMenu={showHideMenu} 
					menu={menu} >Home</Li>
					<Li onClick={()=> changeScreen('viagens')} showHideMenu={showHideMenu} 
					menu={menu}>Viagens</Li>					
					<Li onClick={()=> changeScreen('login')} showHideMenu={showHideMenu} 
					menu={menu}>Área de Adm</Li>					
				</ul>
			</Nav>												
			</Header>
			
			{renderScreen()}	  
		</div>
		);
}

export default App;
