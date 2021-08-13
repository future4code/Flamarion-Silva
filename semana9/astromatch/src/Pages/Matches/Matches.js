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


const Matches = (props)=>{
    const [matches, setMatches] = useState([])
    
    useEffect(()=>{
        getMatches()
    }, [])
    
    const getMatches = ()=>{
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/flamarion-lovelace/matches'
        axios.get(url)
        .then((res)=>{
            setMatches(res.data)
            console.log(res.data)
            console.log(matches.length)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    } 
          
    return <Quadro>
            
        <Head>                  
            <Return style={{cursor: 'pointer', fontSize:'20pt', marginLeft:'15px', color:'purple'}} onClick={()=> props.changeScreen('home')} />
            <HalfTitleHome>Astro</HalfTitleHome><RestTitleHome>match</RestTitleHome>         
        </Head>
            {matches.map((match)=>{
                return<div>{match}</div>
            })}         
                                   
         </Quadro>      
}
export default Matches
