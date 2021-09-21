import React from 'react'
import axios from 'axios'

export default class App extends React.Component {
  state = {
    activity: {}
  }
  getActivity = ()=>{
    axios.get('https://www.boredapi.com/api/activity/')
    .then((res)=>{
      console.log(res.data)
      this.setState({activity: res.data})
    }).catch((err)=>{
      console.log(err)
    })
  }
  render(){
    return (
      <div className="App">
        <h1>Está entendiado?</h1>
        <button onClick={this.getActivity}>Clique aqui</button>
        <h3>Atividade</h3>
        <p>Nome: {this.state.activity.activity}</p>
        <p>Tipo: {this.state.activity.type}</p>
        <p>Particicpantes: {this.state.activity.participants} </p>
        <p>Preço: ${this.state.activity.price} </p>
      </div>
    );
  }
  }
  

