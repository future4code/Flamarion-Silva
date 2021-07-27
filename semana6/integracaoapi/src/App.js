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

    function pegarUsuarios(){
        axios.get(url, headers).then((res)=>{
            alert(res.data.result.list)
        }).catch((err)=>{
            alert(err.response.data)
        })
    }
    
    render(){
        return <div>
            <div class="btn">
                <input type="button" value="Ir para página de lista" />
            </div>
            <div class="form">
                Nome:<input type="text" />
                <p>E-mail:<input type="email" /></p>
                <input type="button" value="Salvar" onClick={pegarUsuarios} />
            </div>
        </div>
    }
    
}
