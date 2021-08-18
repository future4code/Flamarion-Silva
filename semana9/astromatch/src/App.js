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
    overflow: auto;
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
    const [person, setPerson] = useState({})    
    const [matches, setMatches] = useState([])   
                
    //requisição para  API
    const getProfile = ()=>{
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/flamarion-lovelace/person'
        
        axios.get(url)
        .then((res)=>{            
            setPerson(res.data.profile)
            console.log(res.data.profile)                                              
        })        
        .catch((err)=>{
            alert('Algo deu errado', err)
            console.log(err.response)            
        })        
    }
    
    useEffect(()=>{
        getProfile()
    }, [])
    
    const choosePerson = (choice)=>{
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/flamarion-lovelace/choose-person'
        const body = {
            id: person.id,
            choice: choice
        }
        
        axios.post(url, body)
        .then((res)=>{
            getProfile()            
            console.log(res.data)            
        })
        .catch((err)=>{
            console.log(err.response)            
        })
        
        getProfile()
    }
    
    const getMatches = ()=>{
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/flamarion-lovelace/matches'
        axios.get(url)
        .then((res)=>{
            setMatches(res.data.matches)
            console.log(res.data.matches)
            console.log(matches.length)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }    
    
    const changeScreen = (watch)=>{
        setScreen(watch)
    }
    
           
        
    const renderScreen = ()=>{
        switch(screen){
            case 'home':
                return <Home changeScreen={changeScreen} person={person} choosePerson={choosePerson} />
            case 'matches':
                return <Matches changeScreen={changeScreen} person={person} matches={matches} getMatches={getMatches} />
            case 'chat':
                return <Chat changeScreen={changeScreen} person={person} />
            default:
                return <Home changeScreen={changeScreen} />
        }
    }
    
    return <Card>
        {renderScreen()}        
    </Card>
}

export default App
