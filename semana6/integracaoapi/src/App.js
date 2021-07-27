import React from "react"
import axios from "axios"
import "./App.css"

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
    headers: {
        Authorization: "flamarion-franca-lovelace"
    }
}

export default class App extends React.Component{

    pegarUsuarios = ()=>{
        let nome = document.getElementById('nome').value
        let email = document.getElementById('mail').value
        const body = {
            "name": nome,
            "email": email
        }
        
        axios.post(url, body, headers).then((res)=>{
            alert(res)
        }).catch((err)=>{
            alert(err)
        })
    }
    
    render(){
        return <div>
            <div class="btn">
                <input type="button" value="Ir para página de lista" />
            </div>
            <div class="form">
                Nome:<input type="text" id="nome" />
                <p>E-mail:<input type="email" id="mail" /></p>
                <input type="button" value="Salvar" onClick={this.pegarUsuarios} />
            </div>
        </div>
    }
    
}
