import Context from './Context'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'


const GlobalState = (props)=>{
  const history = useHistory()
  const [users, setUsers] = useState([])
  const [recipes, setRecipes] = useState([])
  const [user, setUser] = useState({})


  console.log('users:', users)
console.log('profile:', user)

  useEffect(()=>{
    getUsers()
    getAllRecipes()

  }, [])

  const getUsers = ()=>{
    axios.get('http://localhost:3003/allusers').then(res=>{
      setUsers(res.data)
    }).catch(err=>{
      console.log(err.response)
    })
  }

  const getAllRecipes = ()=>{
    axios.get('http://localhost:3003/allrecipes').then(res=>{
      setRecipes(res.data)
    }).catch(err=>{
      console.log(err.response)
    })
  }


  const profile = (id)=>{
    const headers = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }
console.log(headers)
    axios.get(`http://localhost:3003/user/${id}`, headers).then(res=>{
      setUser(res.data)
      history.push('/profile')
    }).catch(err=>{
      console.log(err.response)
    })
  }

//=========================Providers====================================
  const states = {recipes, user}
  const setters = {profile}
  const requests = {}

  return <Context.Provider value={{states, setters, requests}}>
            {props.children}
         </Context.Provider>
}
export default GlobalState
