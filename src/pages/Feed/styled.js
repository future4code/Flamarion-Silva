import styled from 'styled-components'


export const Container = styled.div`
	display: inline-block;
	margin: 10px;	
`
export const Post = styled.div`
	border: 1px solid;
	width: 25vw;
	margin: 10px;
	padding: 10px;
	cursor: pointer;
	box-shadow: 3px 3px 6px black;
	&:hover{
		background-color: lightgray;
		border-radius: 20px;

	}
`
export const Formulario = styled.form`
	text-align: center;
	display: flex;
	flex-direction: column;
	margin-left: 33vw;
	margin-bottom: 10vh;
`
export const Field = styled.fieldset`
	width: 30vw;
	border: none;
`
export const SubTitle = styled.h4`
	text-align: center;
	&:hover{
		color: whitesmoke;
	}
`
