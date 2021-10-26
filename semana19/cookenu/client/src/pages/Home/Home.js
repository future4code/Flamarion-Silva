import {useState, useEffect, useContext} from 'react'
import Context from '../../global/Context'
import axios from 'axios'
import {convertDate} from '../../utilities/ConvertDate'
import {useHistory} from 'react-router-dom'


const Home = ()=>{
  const history = useHistory()
  const {states, setters} = useContext(Context)
  const [me, setMe] = useState([])
  const [recipeOfFollowUser, setRecipeOfFollowUser] = useState([])

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(!token){
      history.push('/')
    }

    getMyProfile()
    getFeeds()

  }, [])


  const getFeeds = ()=>{
    const headers = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }
    axios.get('http://localhost:3003/feed', headers).then(res=>{
      console.log(`Waiting for followers:`, res.data)
    }).catch(err=>{
      alert(`Waitin for followers`, err.response.data)
    })
  }

  const getMyProfile = ()=>{
    const headers = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }
    axios.get('http://localhost:3003/myprofile', headers).then(res=>{
      console.log(`My profile wich doesn't set:`, res.data)
    }).catch(err=>{
      alert(err.response)
    })
  }

//=================================Start render========================
  return<><h1>{me}</h1>
          <h3>Receitas</h3>
          {states.recipes && states.recipes.map(item=>{
            return<p key={item.id}>
                    {item.title}<br/>
                    <small><b>Preparo:</b><br/>
                      {item.description}<br/>
                      <b>Criada em:</b> {convertDate(item.createdAt)}<br/>
                      <b onClick={()=> setters.profile(item.user_id)}>
                      Criador(a):</b> {item.creator}
                    </small>
                  </p>
          })}
        </>
}
export default Home
