import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import MatchIcon from '../../img/matched.png'
import DismissIcon from '../../img/dismiss.png'
import SelMatch from '../../img/selMatch.png'
import SelDismiss from '../../img/selDismiss.png'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import MessageIcon from '@material-ui/icons/Message';
import Matches from '../Matches/Matches'
import axios from 'axios'
import '../../font.css'


const HalfTitleHome = styled.h3`
    position: absolute;
    left: 5px;
    font-family: 'Style Script', cursive;
    font-size: 20pt;
    color: #388E8E;    
`
const RestTitleHome = styled.h3`
    position: relative;
    left: 5vw;
    font-family: 'Style Script', cursive;
    font-size: 20pt;
    color: purple;    
`
const Head = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid purple;
    align-items: center;
    height: 30px;
    div{
        position: absolute;
        left: 30%;
    }    
`
const PictureContainer = styled.div`
`
const Img = styled.img`
    width: 25vw;
    height: 60vh;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 3px 3px 8px ;
`
const Figure = styled.figure`
    position: absolute;
    top: 50%;
    color: whitesmoke;    
`
const Icon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
const Matched = styled.img`
    width: 70px;
    height: 50px;
    cursor: pointer;    
`


const Home = (props)=>{
        
    
    const changePic = (url)=>{
        document.getElementById('matched').src= url
    }
    const backToPic = (url)=>{
        document.getElementById('matched').src= url
    }
    const changePic1 = (url)=>{
        document.getElementById('dismiss').src= url
    }
    const backToPic1 = (url)=>{
        document.getElementById('dismiss').src= url
    }
    
        
   
    return <div>
        <Head>                               
            <PeopleAltIcon style={{cursor: 'pointer', fontSize:'20pt', color:'purple'}} onClick={()=> props.changeScreen('matches')}/>          
            <div>
                <HalfTitleHome>Astro</HalfTitleHome><RestTitleHome>match</RestTitleHome>            
            </div>
            <MessageIcon style={{cursor:'pointer', position:'absolute', left:'25vw', fontSize:'20pt',
            color:'#388E8E'}} onClick={()=> props.changeScreen('chat')}/>
        </Head> 
                <PictureContainer>
                    <Img src={props.person.photo} />      
                    <Figure>            
                        <b style={{fontSize: '20pt'}} >{props.person.name}, {props.person.age}</b><br/>
                        <figcaption>{props.person.bio}</figcaption>
                    </Figure>
                </PictureContainer>
            <Icon>
                <Matched id='matched' style={{marginLeft:'60px'}} src={`${MatchIcon}`}
                onMouseOver={()=> changePic(`${SelMatch}`)} onMouseOut={()=> backToPic(`${MatchIcon}`)}
                onClick={()=> props.choosePerson(true)} />
                <Matched id='dismiss' style={{marginRight:'60px'}} src={`${DismissIcon}`} 
                onMouseOver={()=> changePic1(`${SelDismiss}`)} onMouseOut={()=> backToPic1(`${DismissIcon}`)} 
                onClick={()=>{props.choosePerson(false)}} />
            </Icon>
                    
           </div>
}
export default Home
