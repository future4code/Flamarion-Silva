import {useState, useEffect, useContext} from 'react'
import Context from '../../global/Context'
import axios from 'axios'
import {convertDate} from '../../utilities/ConvertDate'
import {useHistory} from 'react-router-dom'


const Home = ()=>{
  const history = useHistory()
  const {states, setters} = useContext(Context)
  const [me, setMe] = useState({})
  const [recipeOfFollowUser, setRecipeOfFollowUser] = useState([])
  const token = localStorage.getItem('token')


  useEffect(()=>{
    if(!token){
      history.push('/')
    }
    getMyProfile(getTokenData(token))
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

  const getMyProfile = (id)=>{
    const headers = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }
    axios.get(`http://localhost:3003/user/${id}`, headers).then(res=>{
      setMe(res.data)
      console.log(res.data)
    }).catch(err=>{
      console.log(err.response)
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
