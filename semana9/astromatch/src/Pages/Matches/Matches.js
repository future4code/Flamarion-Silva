import React, {useState, useEffect} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

import styled from 'styled-components'
import Return from '@material-ui/icons/AssignmentReturn';
import axios from 'axios'
import '../../font.css'


const Quadro = styled.div`
    display: flex;
    flex-direction: column;        
`
const HalfTitleHome = styled.h3`
    font-family: 'Style Script', cursive;
    font-size: 20pt;
    color: #388E8E;
    margin-left: 7vw;    
`
const RestTitleHome = styled.h3`
    font-family: 'Style Script', cursive;
    font-size: 20pt;
    color: purple;
    margin-right: 1vw;
`
const Head = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid purple;
    align-items: center;
    height: 40px;    
`
const Span = styled.span`
    position: relative;
    bottom: 27px;
`
const Img = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    padding: 10px;
    margin-left: 10px;
    &:hover{
        background-color: lightgray;
    }
`

//Inicio do componente
const Matches = (props)=>{    
       
    useEffect(()=>{
        props.getMatches()
    }, [])
    
    const clearMatches = ()=>{
        const confirmar = window.confirm('Tem certeza que desja limpar sua lista de matches?')
        
        if(confirmar){
            axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/flamarion-lovelace/clear')
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err.response)   
        })
        window.location.reload()
      }
   }  
    
          
    return <Quadro>
            
        <Head>                  
            <Return style={{cursor: 'pointer', fontSize:'20pt', color:'#388E8E'}} onClick={()=> props.changeScreen('home')} />
            <HalfTitleHome>Astro</HalfTitleHome><RestTitleHome>match</RestTitleHome>         
            <DeleteIcon onClick={clearMatches} style={{fontSize:'20pt', color:'purple', cursor:'pointer',
            marginLeft:'6vw'}} />            
        </Head>
            {props.matches.map((match)=>{
                return<div key={match.id} match={match}>
                <Img src={match.photo} /><Span>{match.name}</Span>
                </div>
            })}         
                                   
         </Quadro>      
}
export default Matches
