import React from 'react';
import './CardPequeno.css'

function CardGrande(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } />
            
                { props.email }           
            
                {props.endereco}
            
        </div>
    )
}

export default CardGrande;
