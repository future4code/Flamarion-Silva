import React from "react";
import axios from "axios";
import {useState, useEffect} from 'react'

const PokeCard = (props)=>{
    const [pokemon, setPokemon] = useState({})  
  
  useEffect((prevProps)=>{
       pegaPokemon(props.pokemon)
    
  }, [])
    
  const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        console.log(response.data)
        setPokemon(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

    //const pokemon = this.state.pokemon

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    )  
}

export default PokeCard;
