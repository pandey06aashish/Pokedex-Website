import React from 'react';
import './Pokemon.css';
import { Link } from 'react-router-dom';

function Pokemon({ name, image,id }) {
 
  return (
    <Link to={`/pokemon/${id}`}  className="pokemon-link">
    <div className="pokemon">
      <div>
      <img src={image} alt={name} className="card-image" />
      </div>
      <h1 className="pokemon-name">{name}</h1>
    </div>
    </Link>
  );
}

export default Pokemon;
