import React from 'react'
import Search from '../search/Search'
import "./Pokedex.css"
import pikachu_logo from '../../assets/Pikachuimg.png';
import PokemonList from '../PokemonList/PokemonList';


const Pokedex = () => {
  return (
    <>
    <div className='prokedex-container'>
       <div className='right-navbar'>
        <img src={pikachu_logo} alt="pikachu_logo" />
          <h1 >Pokedex</h1>
        </div> 
       <Search/>
    </div>
    <PokemonList/>
    </>
  )
}

export default Pokedex