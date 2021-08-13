import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import MatchIcon from '../../img/matched.png'
import DismissIcon from '../../img/dismiss.png'
import SelMatch from '../../img/selMatch.png'
import SelDismiss from '../../img/selDismiss.png'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Matches from '../Matches/Matches'
import axios from 'axios'
import '../../font.css'


const HalfTitleHome = styled.h3`
    font-family: 'Style Script', cursive;
    font-size: 20pt;
    color: #388E8E;
    margin-right: -250px;
    margin-left: 15px;
`
const RestTitleHome = styled.h3`
    font-family: 'Style Script', cursive;
    font-size: 20pt;
    color: purple;
    margin-left: 16px;
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
    top: 60%;
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
    const [person, setPerson] = useState(true)
    
    
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
    
    const choosePerson = ()=>{
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/flamarion-lovelace/choose-person'
        const body = {
            id: props.perfil.id,
            choice: true
        }
        axios.post(url, body)
        .then((res)=>{
            setPerson(res.data)
            console.log(res.data)            
        })
        .catch((err)=>{
            console.log(err.response)
            console.log(err.response)
        })
        
        if(choosePerson){
            props.getProfile()
        }        
        
    }
    
   
    return <div>
        <Head>        
            <HalfTitleHome>Astro</HalfTitleHome><RestTitleHome>match</RestTitleHome>       
            <PeopleAltIcon style={{cursor: 'pointer', fontSize:'20pt', marginRight:'15px', color:'purple'}} onClick={()=> props.changeScreen('matches')} />         
        </Head> 
                <Img src={props.perfil.photo} style={{cursor:'pointer'}} onClick={()=> props.changeScreen('chat')} />      
                <Figure>            
                    <b style={{fontSize: '20pt'}} >{props.perfil.name}, {props.perfil.age}</b><br/>
                    <figcaption>{props.perfil.bio}</figcaption>
                </Figure>
            <Icon>
                <Matched id='matched' style={{marginLeft:'60px'}} src={`${MatchIcon}`}
                onMouseOver={()=> changePic(`${SelMatch}`)} onMouseOut={()=> backToPic(`${MatchIcon}`)}
                onClick={choosePerson} />
                <Matched id='dismiss' style={{marginRight:'60px'}} src={`${DismissIcon}`} 
                onMouseOver={()=> changePic1(`${SelDismiss}`)} onMouseOut={()=> backToPic1(`${DismissIcon}`)} 
                onClick={props.getProfile} />
            </Icon>
                    
           </div>
}
export default Home
