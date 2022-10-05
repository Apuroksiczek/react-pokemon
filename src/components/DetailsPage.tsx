import LinearProgress from '@mui/material/LinearProgress/LinearProgress';
import Slider from '@mui/material/Slider/Slider';
import { type } from 'os';
import React, { useEffect, useState } from 'react'
import { Pokemon, Stat } from '../models/pokemonModel';
import PokemonStats from './PokemonStats';

const DetailsPage = () => {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(response => response.json())
      .then((res: Pokemon) => {
        setPokemon(res)
      }
      )
  }, [])

  return (
    <div className="details">
      <div className="details__informations">
        <h2>{pokemon?.name}</h2>
        <div>
          {pokemon?.abilities.map((ability) => { return <span> ✨ {ability.ability.name}</span> })}
        </div>
        <h3>Evolution: 2</h3>
      </div>

      <div className="details__pokemon">
        <div className="details__pokemon-informations">
          <p>ID: {pokemon?.id}</p>
          <p>Weight: {pokemon?.weight}</p>
          <p>Wzrost: {pokemon?.height}</p>
          <p>Type: {pokemon?.types.map((type) => {
            return <>
              <span>▪{type.type.name}</span>
            </>
          })}</p>
        </div>

        <img className="details__pokemon-photo" src={pokemon?.sprites.front_default} alt="" />

          <PokemonStats stats={pokemon?.stats!}/>

      </div>

    </div>
  )
}

export default DetailsPage