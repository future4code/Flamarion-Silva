import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Image from '../../img/load.gif'
import Return from '@material-ui/icons/AssignmentReturn';
import HomeIcon from '@material-ui/icons/Home';
import '../../font.css'


const HalfTitle = styled.h3`
    font-family: 'Style Script', cursive;
    font-size: 20pt;
    color: #388E8E;
    margin-right: -1px;
    margin-left: 95px;
`
const RestTitle = styled.h3`
    font-family: 'Style Script', cursive;
    font-size: 20pt;
    color: purple;
    margin-right: 120px;
`
const Head = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid purple;
    align-items: center;
    height: 40px;
    margin: px;
`
const Quadro = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;    
`
const MsgDiv = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column-reverse;        
`
const InputDiv = styled.div`    
    position: fixed;
    top: 90%;
    left: 35.2%;        
`
//INICIO DO COMPONENTE
const Chat = (props)=>{

const [msgs, setMsgs] = useState([])
const [msg, setMsg] = useState('')
const nameInputRef =  useRef(null)
const [person, setPerson] = useState({})


const handleMsg = (e)=>{
    setMsg(e.target.value)
}
const sendMsg = ()=>{
    const newMsg = {
        msg: msg
    }    
    const newMsgList = [newMsg, ...msgs]
    setMsgs(newMsgList)
    setMsg('')
    nameInputRef.current.focus()           
}
       
    return <Quadro>
        <Head>            
            <Return style={{fontSize:'23pt', marginLeft:'12px', cursor:'pointer', color:'purple'}} onClick={()=> props.changeScreen('matches')} />
            <HalfTitle>Astro</HalfTitle><RestTitle>match</RestTitle>
            <HomeIcon style={{fontSize:'23pt', marginRight:'880px', marginLeft:'-15px', cursor:'pointer', color:'purple'}} onClick={()=> props.changeScreen('home')} />         
        </Head>
            <h2 style={{fontFamily:'Style Script', textAlign:'center', fontSize:'30pt',
            color:'purple' }} >Chat</h2>
            <p style={{fontFamily:'Style Script', textAlign:'center', color:'purple',
            marginTop:'-45px', fontSize:'20pt' }}>Diga um oi para {props.person.name} </p>
           <MsgDiv>
              {msgs.map((msg)=>{
                  return <p style={{fontFamily:'Style Script', color:'purple', fontSize:'1.2rem'}}>{msg.msg}</p>
              })}    
            <InputDiv>
            <input type='text' placeholder='Mensagem' value={msg} onChange={handleMsg} autoFocus 
            ref={nameInputRef} 
            style={{width:'274px', outline:'none', backgroundColor:'transparent', height:'30px',
            borderRadius:'10px'}} id='mensagem'/>
            <button style={{width:'100px', height:'35px', borderRadius:'10px'}}
            onClick={sendMsg} >Enviar</button>  
            </InputDiv>      
           </MsgDiv>
        </Quadro>
}

export default Chat
