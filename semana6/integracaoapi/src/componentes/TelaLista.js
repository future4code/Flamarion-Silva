import React from 'react'
import axios from 'axios'
import './App.css'


export default class TelaLista extends React.Component{
    state = {
        usuarios: []
    }
    
    componentDidMount(){
        this.pegarUsuarios()
    }
    
    pegarUsuarios = ()=>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        
        axios.get(url, {
            headers: {
                Authorization: "flamarion-franca-lovelace"
            }
        }).then((res)=>{
            this.setState({usuarios: res.data})
        }).catch((err)=>{
            alert(err)
        })
    }
    
    render(){
        
        const listaUsuarios = this.state.usuarios.map((user)=>{
            return <div class="lista">{user.name}</div>
        })
        
        return(
            <div>
            <button onClick={this.props.irParaCadastro}>Ir para tela de cdastro</button>
            <h2>Tela Lista de Usuários</h2>
            {listaUsuarios}
            </div>
        )
    }
}
