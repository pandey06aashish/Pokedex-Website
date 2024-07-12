import React from 'react'
import pikachu_logo from '../../assets/Pikachuimg.png';
import Search from '../search/Search'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
    <div className='prokedex-container'>
    <Link to={`http://localhost:5173/`}  className="pokemon-link">
       <div className='right-navbar'>
        <img src={pikachu_logo} alt="pikachu_logo" />
        
          <h1 >Pokedex</h1>
        </div> 
        </Link>
       <Search/>
    </div>
    </div>
  )
}

export default Navbar