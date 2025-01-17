import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./PokemonDetails.css"

const PokemonDetails = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({
        name: '',
        image: '',
        weight: 0,
        height: 0,
        types: []
    });

    async function downloadPokemon() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon({
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            weight: response.data.weight,
            height: response.data.height,
            types: response.data.types.map((t) => t.type.name)
        });
    }

    useEffect(() => {
        downloadPokemon();
    }, [id]);

    return (
        <div className='pokemon-details-wrapper'>
            <img className='pokemon-details-image' src={pokemon.image} alt={pokemon.name} />
            <div className='pokemon-details'>Name: {pokemon.name}</div>
            <div className='pokemon-details '>Height: {pokemon.height}</div>
            <div className='pokemon-details'>Weight: {pokemon.weight}</div>
            <div className='pokemon-details'>
                {pokemon.types.map((t) => <div key={t}>{t}</div>)}
            </div>
        </div>
    );
}

export default PokemonDetails;
