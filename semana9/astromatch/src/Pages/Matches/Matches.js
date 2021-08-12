import React from 'react'
import styled from 'styled-components'
import Logo from '../../img/logo.png'
import Return from '../../img/return.png'
import Image from '../../img/load.jpg'
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


const Matches = (props)=>{

    return <div>
        <Head style={{backgroundColor: 'white'}}>           
            <Hover>
            <img src={`${Return}`} alt='Logo do Match' onClick={()=> props.changeScreen('home')} />
            </Hover>
            <img src={`${Logo}`} alt='Logo do Astromatch' />         
        </Head>
        {props.matches ? props.matches.map((match)=>{
            return <div>
                <img src={match.photo}/>
            </div>
        }) : <p>Carregando...</p> } 
        </div>
}

export default Matches
