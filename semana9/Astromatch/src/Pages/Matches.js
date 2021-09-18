import React from 'react'
import styled from 'styled-components'
import Logo from '../img/logo.png'
import Return from '../img/return.png'


const Head = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid purple;
    align-items: center;
`

const Matches = (props)=>{
    return <Head>               
        
        <img src={`${Return}`} alt='Logo do Match' onClick={()=> props.changeScreen('home')}
        style={{cursor: 'pointer'}} />
        
        <img src={`${Logo}`} alt='Logo do Astromatch' />
         
    </Head>
}

export default Matches
