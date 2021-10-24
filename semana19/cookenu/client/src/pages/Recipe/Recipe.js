import {useState} from 'react'
import axios from 'axios'

const Recipe = ()=>{
  const [recipes, setRecipes] = useState([])
  const [form, setForm] = useState({
    title:'',
    description:''
  })

  const onChange = (e)=>{
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }

  const createRecipe = (e)=>{
    e.preventDefault()
    const headers = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }
    const body = {
      title: form.title,
      description: form.description
    }

    axios.post('http://localhost:3003/recipe', body, headers)
    .then(res=>{
      alert(res.data)
    }).catch(err=>{
      alert(err.response.data)
    })

  }
//==================================Start render=========================
  return<>
          <form onSubmit={createRecipe}>
            <input type='text' name='title' value={form.title}
             onChange={onChange} placeholder='Nome da receita' required/>
            <textarea name='description' value={form.description}
             onChange={onChange} placeholder='Modo de preparo' required/>
            <button>Registrar receita</button>
          </form>
        </>
}
export default Recipe
