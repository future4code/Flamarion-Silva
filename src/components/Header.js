import {useHistory} from 'react-router-dom'
import styled from 'styled-components'


const Head = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 5vh;
`
const Image = styled.img`
	width: 100px;
`
const Button = styled.button`
	border-radius: 20px;
	height: 7vh;
	cursor: pointer;	
`

//Início da renderização
const Header = ()=>{
	const history = useHistory()

	const logout = ()=>{
		const decide = window.confirm('Tem certeza que deseja deslogar?')

		if(decide){
			localStorage.removeItem('token')
			history.push('/')
		}
	}

	return(
		<Head>
			<Button onClick={()=> history.push('/feed')} >Voltar</Button>
			<h1>LabEddit</h1>
			<Button onClick={logout}>Logout</Button>
		</Head>
	)
}
export default Header