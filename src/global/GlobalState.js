import Context from './Context'
import axios from 'axios'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'


const GlobalState = (props)=>{
	const history = useHistory()	
	const [posts, setPosts] = useState([])
	const [post, setPost] = useState({})	
	const url = 'https://labeddit.herokuapp.com/posts'
	const token = localStorage.getItem('token')
	const headers = {
			headers: {
				Authorization: token 	
			}
		}


	const getPosts = ()=>{
		axios.get(url, headers).then(res=>{
			setPosts(res.data)
			console.log(res.data)			
		}).catch(err=>{
			alert('Algo deu errado!')
			console.log(err.response.data.message)
		})
	}

	const getDetail = (id)=>{
		for(let c = 0; c < posts.length; c++){
			if(posts[c].id === id){
				setPost(posts[c])
			}
		}
		history.push('/post')
		return post

	}

	
	const states = {posts, post}
	const setters = {setPosts, getDetail}
	const requests = {getPosts}


	return(
		<Context.Provider value={{states, setters, requests}}>
			{props.children}
		</Context.Provider>
	)

}
export default GlobalState