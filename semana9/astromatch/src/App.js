import React from 'react'
import {useState, useEffect} from 'react'
import Matches from './Pages/Matches/Matches'
import Home from './Pages/Home/Home'
import styled from 'styled-components'
import './styled.css'


const Card = styled.div`
    position: absolute;
    top: 7%;
    left: 35%;
    border-radius: 15px;
    width: 30vw;
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
    const [screen, setScreen] = useState('slide')
    
        
    const changeScreen = (watch)=>{
        setScreen(watch)
    }
    
     
    const renderScreen = ()=>{
        switch(screen){
            case 'home':
                return <Home changeScreen={changeScreen} />
            case 'matches':
                return <Matches changeScreen={changeScreen} />
            default:
                return <Home changeScreen={changeScreen} />
        }
    }
    
    return <Card>
        {renderScreen()}
    </Card>
}

export default App
