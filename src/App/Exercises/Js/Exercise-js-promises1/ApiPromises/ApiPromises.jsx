import { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';

import { Spinner } from './Spinner/Spinner';

export function ExerciseApiPromises () { 
      const [getPokemons, setPokemons] = useState([]);
      const [getIsLoading, setIsLoading] = useState(true);
      const [getError, setError] = useState(null);

      const BASE_POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=100';

      const typesIcons = {
        grass: (
          <img 
          alt='pokemon type'
          className='pokemon-type' 
          src="https://archives.bulbagarden.net/media/upload/1/15/Ice_icon_SwSH.png"
        ></img>
        ),
        fire: (
          <img 
          alt='pokemon type'
          className='pokemon-type' 
          src="https://archives.bulbagarden.net/media/upload/a/ab/Fire_icon_SwSH.png"
        ></img>
        ),
        water: (
          <img 
          alt='pokemon type'
          className='pokemon-type' 
          src="https://archives.bulbagarden.net/media/upload/8/80/Water_icon_SwSH.png"
        ></img>
        ),
        bug: (
          <img 
          alt='pokemon type'
          className='pokemon-type' 
          src="https://archives.bulbagarden.net/media/upload/9/9c/Bug_icon_SwSH.png"
        ></img>
        ),
        psyhic: (
          <img 
          alt='pokemon type'
          className='pokemon-type' 
          src="https://archives.bulbagarden.net/media/upload/7/73/Psychic_icon_SwSH.png"
        ></img>
        ),
      };

      const getKeyOfTypeOfPokemon = (typeOfPokemon = []) => typeOfPokemon[0].type.name;

      const getTypeOfPokemon = (typeOfPokemon = []) => 
      typesIcons[typeOfPokemon[0].type.name];

      useEffect(() => {
        axios
        .get(BASE_POKEMON_API_URL)
        .then((response) => {

          /////////////////////////////
          const pokemonList = response.data.results;
          const pokemonPromises = pokemonList.map((pokemon) => (
            axios.get(pokemon.url)
           ));
         
        Promise.all(pokemonPromises)
        .then((responses) => {
          const pokemonsData = responses.map((response) => response.data);
          setPokemons(pokemonsData);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error?.message);
          setIsLoading(false);
        });
        ///////////////////////////////

      })
      .catch((error) => {
        setError(error?.message);
        setIsLoading(false);
      });
    }, []);

  return (
    <div className="container--api-promises">
      <h1> {getIsLoading && <Spinner />} </h1>
      <h2> {getError && getError} </h2>

      <div className="container--grid-wrappper">
        {getPokemons.map((pokemon) => (
          <div className={`container--grid-tile dedicated-background--${getKeyOfTypeOfPokemon(pokemon?.types)}`}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h3>Name: {pokemon?.name}</h3>
            <p>Weight: {pokemon?.weight}</p>
            <p>Type: {getTypeOfPokemon(pokemon?.types)}</p>

            <ul>
              <li></li>
            </ul>
            </div>
        ))}
      </div>
    </div>
          
  );
}