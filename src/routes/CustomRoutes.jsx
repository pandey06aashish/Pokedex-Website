import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Pokedex from '../components/Pokedex/Pokedex'
import PokemonDetails from '../components/PokemonDetails/PokemonDetails'
import Navbar from '../components/Navbar/Navbar'

const CustomRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Pokedex/>}/>
        <Route path='/pokemon/:id' element={<PokemonDetails/>}/>
    </Routes>
  </>
  )
}

export default CustomRoutes