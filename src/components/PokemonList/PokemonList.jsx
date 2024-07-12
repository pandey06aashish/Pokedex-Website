import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PokemonList.css';
import Pokemon from '../Pokeman/Pokemon'// Ensure the path is correct

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [pokedexUrl,setPokedexUrl]= useState('https://pokeapi.co/api/v2/pokemon');

  const [nextUrl,setNextUrl]= useState('');
  const [prevUrl,setPrevUrl]= useState('');

  async function downloadPokemons() {
    setIsLoading(true);
    try {
      const response = await axios.get(pokedexUrl);
      const pokemonResult = response.data.results;
      
      console.log(response.data);
      setNextUrl(response.data.next);
      setPrevUrl(response.data.previous);

      const pokemonResultPromise = pokemonResult.map((pokemon) => axios.get(pokemon.url));
      const pokemonData = await axios.all(pokemonResultPromise);

      const pokeListResult = pokemonData.map((pokeData) => {
        const pokemon = pokeData.data;
        return {
          name: pokemon.name,
          id: pokemon.id,
          image: pokemon.sprites.other?.dream_world.front_default || pokemon.sprites.front_shiny,
          types: pokemon.types.map((typeInfo) => typeInfo.type.name),
        };
      });

      setPokemonList(pokeListResult);
      setIsLoading(false);
    } catch (error) {
      console.error('Error downloading Pokemon data:', error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    downloadPokemons();
  }, [pokedexUrl]);

  return (
    <div className='pokemon-list-wrapper'>
      <h1>Pokemon List</h1>
      <div className='pokemon-wrapper'>
      {isLoading ? (
        'Loading...'
      ) : (
        <div className='pokemon-grid'>
          {pokemonList.map((p) => (
            <Pokemon key={p.id} name={p.name} image={p.image} types={p.types} />
          ))}
        </div>
      )}

      </div>
      <div className='control'>
      <button disabled={prevUrl == null} onClick={() => setPokedexUrl(prevUrl)}>Prev</button>
      <button disabled={nextUrl == null} onClick={() => setPokedexUrl(nextUrl)}>Next</button>

      </div>

    </div>
  );
};

export default PokemonList;