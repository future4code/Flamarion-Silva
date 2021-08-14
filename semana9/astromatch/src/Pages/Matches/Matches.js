import React, {useState, useEffect} from 'react'
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
    margin-left: 219px;
    margin-right: -15px;     
`
const RestTitleHome = styled.h3`
    font-family: 'Style Script', cursive;
    font-size: 20pt;
    color: purple;
    margin-right: 16px;
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
    
          
    return <Quadro>
            
        <Head>                  
            <Return style={{cursor: 'pointer', fontSize:'20pt', marginLeft:'15px', color:'purple'}} onClick={()=> props.changeScreen('home')} />
            <HalfTitleHome>Astro</HalfTitleHome><RestTitleHome>match</RestTitleHome>         
        </Head>
            {props.matches.map((match)=>{
                return<div key={match.id} match={match}>
                <Img src={match.photo} /><Span>{match.name}</Span>
                </div>
            })}         
                                   
         </Quadro>      
}
export default Matches
