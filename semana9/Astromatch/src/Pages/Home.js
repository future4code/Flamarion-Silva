import React from 'react'
import styled from 'styled-components'
import Logo from '../img/logo.png'
import Match from '../img/matches.png'
import { useState, useEffect } from 'react'
import axios from 'axios'
import GroupIcon from '@material-ui/icons/Group';



const Head = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid purple;
    align-items: center;
`

const Home = (props)=>{
    const [perfil, setPerfil] = useState({})
    
    useEffect(()=>{
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person'
        
        axios.get(url)
        .then((res)=>{            
            setPerfil(res.data)
            console.log(res.data)                       
        })        
        .catch((err)=>{
            alert('Algo deu errado', err)
            console.log(err)
        })
    }, [])

    return <Head>               
        <img src={`${Logo}`} alt='Logo do Astromatch' />
        
        <GroupIcon onClick={()=> props.changeScreen('matches')}
        style={{cursor: 'pointer'}} />
         
    </Head>
}

export default Home