import { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { typesIcon } from './Utils/utils';
import { Spinner } from './Spinner/spinner';

export const ExerciseJsPromises = () => {
  const [getPokemons, setPokemons] = useState([]);
  const [getIsLoading, setIsLoading] = useState(true);
  const [getError, setError] = useState(null);

  const BASE_POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';

  const getTypeofPokemon = (typeOfPokemon = []) =>
    typesIcon[typeOfPokemon[0].type.name];

  const getKeyTypeofPokemon = (typeOfPokemon = []) =>
    typeOfPokemon[0].type.name;

  // useEffect(() => {
  //   axios
  //     .get(BASE_POKEMON_API_URL)
  //     .then((response) => {
  //       setPokemons(response.data.results);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error?.message);
  //       setIsLoading(false);
  //     })
  //     .finally();
  // }, []);

  useEffect(() => {
    axios

      .get(BASE_POKEMON_API_URL)
      .then((response) => {
        ///////////////////////////////////
        const pokemonList = response.data.results;
        const pokemonPromises = pokemonList.map((pokemon) =>
          axios.get(pokemon.url)
        );

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

        ///////////////////////////////////
      })
      .catch((error) => {
        setError(error?.message);

        setIsLoading(false);
      });
  }, []);

  return (
    <div className="continer--api-promises">
      {<Spinner /> && getIsLoading}
      <h1>{getError && getError}</h1>
      <h2> {getIsLoading && 'Loading....'}</h2>
      <div className="container--grid-wrapper">
        {getPokemons.map((pokemon) => (
          <div
            className={`container--grid-tile dedicated-background--${getKeyTypeofPokemon(
              pokemon?.types
            )}`}
          >
            <h3>Name: {pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <ul>
              <li>Height: {pokemon.height}</li>

              <li>Weight: {pokemon.weight}</li>
              <li>{getTypeofPokemon(pokemon?.types)}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
