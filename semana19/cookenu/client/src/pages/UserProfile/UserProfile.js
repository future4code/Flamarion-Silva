import {useContext, useEffect, useState} from 'react'
import Context from '../../global/Context'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {convertDate} from '../../utilities/ConvertDate'


//==================================Component=========================
const UserProfile = ()=>{
  const history = useHistory()
  const {states, requests} = useContext(Context)
  const user = states.user
  const id = states.userId
  const [recipes, setRecipes] = useState([])


  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(!token){
      history.push('/recipe')
    }

    userRecipes()

  }, [])

  const userRecipes = ()=>{
    const headers = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }
    axios.get(`http://localhost:3003/recipe/${id}`, headers).then(res=>{
      setRecipes(res.data)
    }).catch(err=>{
      alert(err.response.data)
    })
  }
console.log(recipes)

const showRecipes = recipes && recipes.map(recipe=>{
  return <p key={recipe.id}>
          {recipe.title}<br/>
          <small><b>Preparo:</b><br/>
            {recipe.description}<br/>
            <b>Criada em:</b> {convertDate(recipe.createdAt)}<br/>
          </small>
         </p>
})

//================================Start render=========================
  return<>{user && user.map(profile=>{
    return<div key={profile.id}>
            <h1>{profile.name}</h1>
            <h2>Receitas</h2>
            {showRecipes}
              <button onClick={()=>{ requests.follow(id)}}>Seguir</button>
              <footer><b>Usuário:</b> {profile.role}</footer>
          </div>
  })}</>
}
export default UserProfile
