import React from 'react'
import styled from 'styled-components'
import Image from '../../img/load.gif'
import Return from '@material-ui/icons/AssignmentReturn';
import '../../font.css'


const HalfTitle = styled.h3`
    font-family: 'Style Script', cursive;
    font-size: 20pt;
    color: #388E8E;
    margin-right: -240px;
    margin-left: 15px;
`
const RestTitle = styled.h3`
    font-family: 'Style Script', cursive;
    font-size: 20pt;
    color: purple;
    margin-right: 21px;
`
const Hover = styled.div`
    cursor: pointer;
    }
`

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid purple;
    align-items: center;
    height: 40px;
    margin: px;
`
const Loading = styled.img`
    border-radius: 30px;
    box-shadow: 5px 5px 6px purple;
    width: 300px;    
`


const Matches = (props)=>{
       
    return <div>
        <Head>           
            <Hover>
            <Return style={{fontSize:'23pt', marginLeft:'12px', color:'purple'}} onClick={()=> props.changeScreen('home')} />
            </Hover>
            <HalfTitle>Astro</HalfTitle><RestTitle>match</RestTitle>         
        </Head>
        {props.matches ? props.matches.map((match)=>{
            return <div>
                <img src={match.photo}/>
            </div>
        }) : <figure style={{textAlign:'center', fontSize:'20pt'}} >
                 <Loading src={`${Image}`} />         
         <figcaption>Carregando...</figcaption>
         
            </figure> }
        
          
        </div>
}

export default Matches
