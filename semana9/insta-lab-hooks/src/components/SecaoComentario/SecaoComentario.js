import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {
	
	const [inputValue, setInputValue] = useState('')


	const onChangeComentario = (event) => {
		setInputValue(event.target.value)
	}
	// AQUI VAI O MAP
	const teste = props.comentarios.map(comentario => {
        return (
          <CommentContainer>
            <p>{comentario}</p>
          </CommentContainer>
        )
      })

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={inputValue}
				onChange={onChangeComentario}
			/>
			//E AQUI O TERNÁRIO
			{props.comentarios.length > 0 ? {teste} : 'Não há comentários' }
			<button onClick={() => { props.enviarComentario(inputValue) }} >Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario
