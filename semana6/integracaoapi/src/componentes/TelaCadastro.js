import React from 'react'
import axios from 'axios'
import './App.css'

export default class TelaCadastro extends React.Component{
    state = {
        nome: "",
        email: ""
    }
    
    handleNome = (e)=>{
        this.setState({nome: e.target.value})
    }
    
    handleEmail = (e)=>{
        this.setState({email: e.target.value})
    }
    
    fazerCadastro = ()=>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            nome: this.state.nome,
            email: this.state.email
        }
        
        axios.post(url, body, {
            headers: {
                Authorization: "flamarion-franca-lovelace"
            }
        }).then((res)=>{
            alert('Usuário cadastrado com sucesso!')
            this.setState({nome: '', email: ''})
        }).catch((err)=>{
            alert(err.response.data)
        })
    }
    
    render(){
        return(
            <div class="corpo">
            <button onClick={this.props.irParaLista}>Ir para lista de usuários</button>
            <h2>Tela de Cadastro</h2>
            <div class="form">
            <input placeholder="Nome"
            value={this.state.nome}
            onChange={this.handleNome}/>
            <p><input placeholder="E-mail"
            value={this.state.email}
            onChange={this.handleEmail} /></p>
            <button class="btn" onClick={this.fazerCadastro} >Salvar</button>
            </div>
            </div>
        )
    }
}
