import React from 'react'
import {useState, useEffect} from 'react'
import Matches from './Pages/Matches/Matches'
import Home from './Pages/Home/Home'
import Chat from './Pages/Chat/Chat'
import styled from 'styled-components'
import './styled.css'
import axios from 'axios'


const Card = styled.div`
    position: absolute;
    top: 7%;
    left: 35%;
    border-radius: 15px;
    width: 28vw;
    height: 88vh;
    border: 2px dotted purple;
    box-shadow: 3px 3px 7px purple;
    background-image: linear-gradient(to top, whitesmoke, lightgray);
`
/*import {createGlobalStyled} from 'styled-components'

const GlobalStyle = createGlobalStyled`
    body{
        background-color: lightgray;
    }
`
*/

const App = ()=>{
    const [screen, setScreen] = useState('home')
    const [perfil, setPerfil] = useState({})  
    
    
     useEffect(()=>{
        getProfile()
    }, [])
        
    //requisição para  API
    const getProfile = ()=>{
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/flamarion-lovelace/person'
        
        axios.get(url)
        .then((res)=>{            
            setPerfil(res.data.profile)                                              
        })        
        .catch((err)=>{
            alert('Algo deu errado', err)
            console.log(err.response)            
        })        
    }    
    
    const changeScreen = (watch)=>{
        setScreen(watch)
    }
    
        
        
    const renderScreen = ()=>{
        switch(screen){
            case 'home':
                return <Home changeScreen={changeScreen} perfil={perfil} getProfile={getProfile} />
            case 'matches':
                return <Matches changeScreen={changeScreen} perfil={perfil} />
            case 'chat':
                return <Chat changeScreen={changeScreen} perfil={perfil} getProfile={getProfile} />
            default:
                return <Home changeScreen={changeScreen} />
        }
    }
    
    return <Card>
        {renderScreen()}        
    </Card>
}

export default App
