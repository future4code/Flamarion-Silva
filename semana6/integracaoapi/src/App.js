import React from 'react'
import TelaCadastro from './componentes/TelaCadastro'
import TelaLista from './componentes/TelaLista'

export default class App extends React.Component{
    state = {
        telaAtual: "cadastro"
    }
    
    escolheTela = ()=>{
        switch(this.state.telaAtual){
            case "cadastro":
                return <TelaCadastro irParaLista={this.irParaLista} />
            case "lista":
                return <TelaLista irParaCadastro={this.irParaCadastro} />
            default:
                return <div>Erro! Tela não encontrada</div>
        }
    }
    
    
    irParaCadastro = ()=>{
        this.setState({telaAtual: "cadastro"})
    }
    
    irParaLista = ()=>{
        this.setState({telaAtual: "lista"})
    }
    
    render(){
        return(
        <div>
            {this.escolheTela()}          
        </div>
        )
    }
}
