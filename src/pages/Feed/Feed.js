import {useHistory} from 'react-router-dom'
import {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import {Post, Formulario, Field, Container, SubTitle} from './styled'
import {convert} from '../../utilidades/util'
import Context from '../../global/Context'
import Card from './Card'


//Início do componente funcional
const Feed = (props)=>{	
	const history = useHistory()
	const [post, setPost] = useState('')
	const [title, setTitle] = useState('')
	const {states, setters, requests} = useContext(Context)	
	const url = 'https://labeddit.herokuapp.com/posts'
	const token = localStorage.getItem('token')
	const headers = {
			headers: {
				Authorization: token 	
			}
		}


	useEffect(()=>{
		const token = localStorage.getItem('token')
		if(token === null){
			history.push('/')
			alert('Você não está logado!')
		}
		requests.getPosts()

	}, [])


	const handlePost = (e)=>{
		setPost(e.target.value)
	}
	const handleTitle = (e)=>{
		setTitle(e.target.value)
	}


	const createPost = (e)=>{
		e.preventDefault()				
		const body = {
			title: title,
			body: post
		}
		axios.post(url, body, headers).then(res=>{
			setTitle('')
			setPost('')
			requests.getPosts()
		}).catch(err=>{
			console.log(err.response.data.errors)
		})		
	}


//Início da renderização
	return(
		<>
		<Formulario onSubmit={createPost} >
			<Field>
				<legend style={{fontSize:'1.3rem'}}>Crie o seu Post</legend>
				<input type='text' placeholder='Título do post' required
				value={title} onChange={handleTitle} />
				<p><textarea placeholder='Deixe aqui o seu post...'
				rows='5' cols='20' value={post} onChange={handlePost} required>
				</textarea></p>
				<input type='submit' value='Postar' />
			</Field>
		</Formulario>
			<SubTitle>Clique no texto do post para ver os detalhes</SubTitle>
			{states.posts.map(post=>{
				return <Card key={post.id}
						name={post.username}
						body={post.body}
						votes={post.voteSum}
						commentCount={post.commentCount}
						id={post.id} />
			})}	
		</>
	)
}
export default Feed