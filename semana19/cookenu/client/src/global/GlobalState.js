import Context from './Context'
import {useState, useEffect} from 'react'
import axios from 'axios'


const GlobalState = (props)=>{
  const [users, setUsers] = useState([])
  const [recipes, setRecipes] = useState([])

  useEffect(()=>{
    getUsers()
  }, [])

  const getUsers = ()=>{
    axios.get('localhost:3003/users').then(res=>{
      console.log(res.data)
    }).catch(err=>{
      console.log(err.response)
    })
  }



  const states = {}
  const setters = {}
  const requests = {}

  return <Context.Provider value={{states, setters, requests}}>
            {props.children}
         </Context.Provider>
}
export default GlobalState
