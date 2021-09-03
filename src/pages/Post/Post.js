import {useHistory} from 'react-router-dom'
import {useEffect, useContext, useState} from 'react'
import Context from '../../global/Context'
import axios from 'axios'
import {convert} from '../../utilidades/util'
import styled from 'styled-components'


const PostCard = styled.div`	
	border: 1px solid;
	width: 25vw;
	margin: auto;
	margin-top: 20vh;
	padding: 10px;
	cursor: pointer;
	box-shadow: 3px 3px 6px black;
	&:hover{
		background-color: lightgray;
		border-radius: 20px;

	}
`


const Post = ()=>{
	const {states, setters, requests} = useContext(Context)			
	const history = useHistory()
	const post = states.post
	console.log(post)
	
	

	useEffect(()=>{
		const token = localStorage.getItem('token')
		if(token === null){
			history.push('/')
			alert('Você não está logado!')
		}
	}, [])	

	

//Início da renderização
	return(
		<PostCard>
			<p><b>Título: </b>{post.title}</p>
			<b>Postagem: </b>{post.body}
			<p><b>Postado por: </b>{post.username}</p>
			<b>Data da postagem: </b>{convert(post.createdAt)}
			<p><b>Votação: </b>{post.voteSum}</p>
			<b>Comentários: </b>{post.commentCount}
	  	</PostCard>
	)
}
export default Post