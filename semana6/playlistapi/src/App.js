import React from 'react'
import axios from 'axios'

export default class App extends React.Component {
  state = {
    nome: ""
  }

  handleNome = (e)=>{
    this.setState({nome: e.target.value})
  }

  criarPlaylist = ()=>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      nome: this.state.nome      
  }

    axios.post(url, body, {
      headers: {
        Authorization: "flamarion-franca-lovelace"
      }
    }).then((res)=>{
      console.log(res.data)
    }).catch((err)=>{
      console.log(err.data)
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Labefy Playlists</h1>
        <h3>Crie sua playlist</h3>
        <input onChange={this.handleNome} type="text" placeholder="Nome da playlist"/>
        <button onClick={this.criarPlaylist}>Criar playlist</button>
      </div>
    );
  }
  }
  

