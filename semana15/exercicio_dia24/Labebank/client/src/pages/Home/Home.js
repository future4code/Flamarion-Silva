import styled from 'styled-components'


const Container = styled.div`
	h1{
		text-align: center;
		margin-bottom: 10vh;
	}
	div{
		box-shadow: 3px 3px 6px;
		margin: 10px;
		padding: 3px;
		cursor: pointer;
		&:hover{
			transform: scale(1.02)
		}		
	}
	
`


const Home = ()=>{
	return<Container>
			<h1>Seja bem vindo ao Labebank</h1>
			<div className='card'>Abrir conta</div>
			<div>Saldo</div>
			<div>Transferência</div>
			<div>Deposito</div>
			<div>Pagamentos</div>
		  </Container>
}
export default Home