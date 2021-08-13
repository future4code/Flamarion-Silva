import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Logo from '../../img/logo.png'
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
    margin-right: -278px;
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
    width: 27vw;
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
    const [perfil, setPerfil] = useState({})
    const [matches, setMatches] = useState([])
    
    useEffect(()=>{
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:flamarion-silva-lovelace/person'
        
        axios.get(url)
        .then((res)=>{            
            setPerfil(res.data.profile)
            console.log(res.data)                        
        })        
        .catch((err)=>{
            alert('Algo deu errado', err)            
        })
    }, [])
    
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
    
    
    const addToMatches = (match)=>{
        const newMatchList = [...matches, match]
        setMatches(newMatchList)
        console.log(matches)        
    }
    const dismiss = ()=>{
        window.location.reload()
    }
    
    
    
                
    return <div>
        <Head>        
            <HalfTitleHome>Astro</HalfTitleHome><RestTitleHome>match</RestTitleHome>       
            <PeopleAltIcon style={{cursor: 'pointer', fontSize:'20pt', marginRight:'15px', color:'purple'}} onClick={()=> props.changeScreen('matches')} />         
        </Head>
                <Img src={perfil.photo} />      
                <Figure>            
                    <b style={{fontSize: '20pt'}} >{perfil.name}, {perfil.age}</b><br/>
                    <figcaption>{perfil.bio}</figcaption>
                </Figure>
            <Icon>
                <Matched id='matched' style={{marginLeft:'60px'}} src={`${MatchIcon}`}
                onMouseOver={()=> changePic(`${SelMatch}`)} onMouseOut={()=> backToPic(`${MatchIcon}`)}
                onClick={()=> addToMatches(perfil) } />
                <Matched id='dismiss' style={{marginRight:'60px'}} src={`${DismissIcon}`} 
                onMouseOver={()=> changePic1(`${SelDismiss}`)} onMouseOut={()=> backToPic1(`${DismissIcon}`)} 
                onClick={dismiss} />
            </Icon>        
           </div>
}
export default Home
