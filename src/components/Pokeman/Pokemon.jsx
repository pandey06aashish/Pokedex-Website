import React from 'react';
import './Pokemon.css';

function Pokemon({ name, image }) {
 
  return (
    <div className="pokemon">
      <img src={image} alt={name} className="card-image" />
      <h2 className="card-name">{name}</h2>
    </div>
  );
}

export default Pokemon;
