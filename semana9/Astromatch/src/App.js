import React from 'react'
import Home from './Pages/Home'
import {useState, useEffect} from 'react'
import Matches from './Pages/Matches'
import styled from 'styled-components'
import './styled.css'


const PageCard = styled.div`
    width: 400px;
    height: 600px;
    border: 2px dotted purple;
    border-radius: 10px;
    position: absolute;
    top: 5%;
    left: 31%;
    box-shadow: 3px 3px 7px purple;    
`

const App = ()=>{
    const [screen, setScreen] = useState('teste')
    
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
    
    return <div>
        
        <PageCard>        
            {renderScreen()}
        </PageCard>
        </div>
}

export default App
