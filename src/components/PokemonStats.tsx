import LinearProgress from '@mui/material/LinearProgress/LinearProgress'
import React from 'react'
import { Stat } from '../models/pokemonModel'

const PokemonStats = (stats: Stat[]) => {

  return (
    <div className="details__pokemon-stats">
    {stats.map((stat) => {
      return <div className='details__pokemon-stats'>
        <span>{stat.stat.name}:</span>
        <LinearProgress variant="buffer" value={stat.base_stat} valueBuffer={100} />
      </div>
    })}
  </div>
  )
}

export default PokemonStats