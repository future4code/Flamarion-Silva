import styled from 'styled-components'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import {useState, useContext} from 'react'
import axios from 'axios'
import Context from '../../global/Context'




const PostCard = styled.div`
	border: 1px solid;
	width: 30vw;
	margin: auto;
	margin-bottom: 3vh;
`
const Footer = styled.div`
	display: flex;
	margin: 5px;
	justify-content: space-between;
	align-items: center;
`
const Username = styled.div`
	text-align: center;
	font-size: 1.5rem;
`
const UserPost = styled.div`
	margin: 10px;
	text-align: center;
	margin-top: 5vh;
	cursor: pointer;	
`
const Comments = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 10px;	
`
const CommentSection = styled.div`
	
`



//Início do componente
const Card = (props)=>{
	const {requests, setters} = useContext(Context)
	const [comments, setComments] = useState([])
	const [comment, setComment] = useState('')	
	const url = 'https://labeddit.herokuapp.com/posts'
	const token = localStorage.getItem('token')
	const headers = {
			headers: {
				Authorization: token 	
			}
		}


	
	const handleComment = (e)=>{
		setComment(e.target.value)
	}



	const createComments = (id)=>{
		const body = {
			body: comment
		}
		axios.post(`${url}/${id}/comments`, body, headers).then(res=>{
			setComment('')
			requests.getPosts()
		}).catch(err=>{
			console.log(err.response)
		})
	}

//========Funções de votação======================
//----------votação à favor para post------------
	
	const createVotePost = (id)=>{
		const body = {
			direction: 1
		}
		axios.post(`${url}/${id}/votes`, body, headers).then(res=>{
			requests.getPosts()
		}).catch(err=>{
			console.log(err.response)
		})
	}

//--------Votação contra para post----------
	
	const changeVotePost = (id)=>{
		const body = {
			direction: -1
		}
		axios.put(`${url}/${id}/votes`, body, headers).then(res=>{
			requests.getPosts()
		}).catch(err=>{
			console.log(err.response)
		})
	}
//-------Votação à favor para comentário-------

	let vote

	const voteComment = (id)=>{
		const url = 'https://labeddit.herokuapp.com/comments'
		const body = {
			direction: 1
		}

		axios.post(`${url}/${id}/votes`, body, headers).then(res=>{
			postComments(props.id)
		}).catch(err=>{
			console.log(err.response)
		})
	}

//-------Votar contra para comentário------------

const changeComment = (id)=>{
		const url = 'https://labeddit.herokuapp.com/comments'
		const body = {
			direction: -1
		}

		axios.put(`${url}/${id}/votes`, body, headers).then(res=>{
			postComments(props.id)
		}).catch(err=>{
			console.log(err.response)
		})
	}

//============Aqui termina as funções de votação=============

const postComments = (id)=>{
		axios.get(`${url}/${id}/comments`, headers).then(res=>{
			setComments(res.data)
			requests.getPosts()
		}).catch(err=>{
			console.log(err.response)
		})
	}



//Início da renderização
	return(
		<PostCard>
			<Username>{props.name}</Username>
			<hr/>
			<UserPost onClick={()=> setters.getDetail(props.id)} >{props.body}</UserPost>
			<Footer>
				<div>
					<CheckIcon onClick={()=> createVotePost(props.id)}
					style={{cursor:'pointer', color:'blue'}} />
					{props.votes}
					<CloseIcon onClick={()=> changeVotePost(props.id)}
					style={{cursor:'pointer', color:'red'}} />
				</div>					
				<div>
				{props.commentCount}
				<InsertCommentIcon onClick={()=> postComments(props.id)}
				style={{cursor:'pointer'}} />
				</div>				
			</Footer>
			<div>
				{comments && comments.map(comment=>{
					return<Comments>
							<div>
								<CloseIcon onClick={()=> changeComment(comment.id)}
								style={{cursor:'pointer', color:'red'}}/>
								{comment.body}
								<CheckIcon onClick={()=>{voteComment(comment.id)}}
								style={{cursor:'pointer', color:'blue'}}/>
							</div>
							<div>{comment.voteSum}</div>							
						  </Comments>
				})}
			</div>
			<div>
				<input type='text' placeholder='Comentário'
				style={{width:'23vw'}} value={comment}
				onChange={handleComment} />
				<button style={{width:'6.2vw'}}
				onClick={()=> createComments(props.id)} >Enviar</button>
			</div>
		</PostCard>
	)
}
export default Card