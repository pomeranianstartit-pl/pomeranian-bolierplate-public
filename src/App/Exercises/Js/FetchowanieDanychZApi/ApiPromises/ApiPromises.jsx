import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
export function ApiPromises() {
  const [getPokemons, setPokemons] = useState([]);
  const [getIsLoading, setIsLoading] = useState(true);
  const [getError, setError] = useState(null);
  const BASE_POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=1015';

  const getTypeOfPokemon = (typeOfPokemon = []) => typeOfPokemon[0].type.name;
  const getIconTypeOfPokemon = (typeOfPokemon=[]) => typesIcon[typeOfPokemon[0].type.name]

    const setCssClass = (pokemonData) => `container--grid-tile pokemon-type-${getTypeOfPokemon(pokemonData?.types)}`

  const typesIcon = {
    grass: <img alt='pokemon-type' className  ='pokemon-type'src='https://archives.bulbagarden.net/media/upload/a/a8/Grass_icon_SwSh.png'></img>,
    fire: <img  alt='pokemon-type' className  ='pokemon-type' src='https://archives.bulbagarden.net/media/upload/a/ab/Fire_icon_SwSh.png'></img>,
    water: <img  alt='pokemon-type' className  ='pokemon-type' src='https://archives.bulbagarden.net/media/upload/8/80/Water_icon_SwSh.png'></img>,
    bug: <img  alt='pokemon-type' className  ='pokemon-type' src='https://archives.bulbagarden.net/media/upload/9/9c/Bug_icon_SwSh.png'></img>,
    psychic: <img  alt='pokemon-type' className  ='pokemon-type' src='https://archives.bulbagarden.net/media/upload/thumb/7/73/Psychic_icon_SwSh.png/96px-Psychic_icon_SwSh.png'></img>,
    ghost: <img  alt='pokemon-type' className  ='pokemon-type' src='https://archives.bulbagarden.net/media/upload/thumb/0/01/Ghost_icon_SwSh.png/96px-Ghost_icon_SwSh.png'></img>,
    fly: <img  alt='pokemon-type' className  ='pokemon-type' src='https://archives.bulbagarden.net/media/upload/thumb/b/b5/Flying_icon_SwSh.png/96px-Flying_icon_SwSh.png'></img>,
    rock: <img  alt='pokemon-type' className  ='pokemon-type' src='https://archives.bulbagarden.net/media/upload/thumb/1/11/Rock_icon_SwSh.png/96px-Rock_icon_SwSh.png'></img>,
    electric: <img  alt='pokemon-type' className  ='pokemon-type' src='https://archives.bulbagarden.net/media/upload/thumb/7/7b/Electric_icon_SwSh.png/96px-Electric_icon_SwSh.png'></img>,
    normal: <img  alt='pokemon-type' className  ='pokemon-type' src='https://archives.bulbagarden.net/media/upload/thumb/9/95/Normal_icon_SwSh.png/96px-Normal_icon_SwSh.png'></img>,
    fighting: <img  alt='pokemon-type' className  ='pokemon-type' src='https://archives.bulbagarden.net/media/upload/thumb/3/3b/Fighting_icon_SwSh.png/96px-Fighting_icon_SwSh.png'></img>,
    poison: <img  alt='pokemon-type' className  ='pokemon-type' src='https://archives.bulbagarden.net/media/upload/thumb/8/8d/Poison_icon_SwSh.png/96px-Poison_icon_SwSh.png'></img>,
    ground: <img  alt='pokemon-type' className  ='pokemon-type' src='https://archives.bulbagarden.net/media/upload/thumb/2/27/Ground_icon_SwSh.png/96px-Ground_icon_SwSh.png'></img>,
    steel: <img  alt='pokemon-type' className  ='pokemon-type' src='https://archives.bulbagarden.net/media/upload/thumb/0/09/Steel_icon_SwSh.png/96px-Steel_icon_SwSh.png'></img>,
    ice: <img  alt='pokemon-type' className  ='pokemon-type' src='https://archives.bulbagarden.net/media/upload/thumb/1/15/Ice_icon_SwSh.png/96px-Ice_icon_SwSh.png'></img>,
    dragon: <img  alt='pokemon-type' className  ='pokemon-type' src='https://archives.bulbagarden.net/media/upload/thumb/7/70/Dragon_icon_SwSh.png/96px-Dragon_icon_SwSh.png'></img>,
    dark: <img  alt='pokemon-type' className  ='pokemon-type' src='https://archives.bulbagarden.net/media/upload/thumb/d/d5/Dark_icon_SwSh.png/96px-Dark_icon_SwSh.png'></img>,
    fairy: <img  alt='pokemon-type' className  ='pokemon-type' src='https://archives.bulbagarden.net/media/upload/thumb/c/c6/Fairy_icon_SwSh.png/96px-Fairy_icon_SwSh.png'></img>,
}

  //nowy sposób obsługi promis (async, await)(fechowanie danych)
  useEffect(() => {
    axios
      .get(BASE_POKEMON_API_URL)
      .then((response) => {
        const pokemonList = response.data.results;
        const pokemonPromises = pokemonList.map((pokemon) =>
          axios.get(pokemon.url)
        );
        Promise.all(pokemonPromises)
          .then((responses) => {
            const pokemonsData = responses.map((response) => response.data);
            console.log(pokemonsData);
            setPokemons(pokemonsData);
            setIsLoading(false);
          })
          .catch((error) => {
            setError(error?.message);
            setIsLoading(false);
          });
      })
      .catch((error) => {
        setError(error?.message);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <br />
      <div>
        <h1>{getIsLoading && <div className='loader'/>}</h1>
        {/* <p>{getError && getError}</p> */}
        <div className="container--grid-wrapper">
          {getPokemons.map((pokemon) => (
            <>
                <div key={pokemon.id} className={setCssClass(pokemon)}>
                    {console.log(` bla bla bla ${getTypeOfPokemon(pokemon?.types)}`)}
                <div>{ getIconTypeOfPokemon(pokemon?.types) } </div>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <h3>{pokemon?.name?.replace(/-.*/, '')}</h3>
                <ul>
                  <li>{pokemon.weight}</li>
                </ul>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
// import { useEffect, useState } from 'react';

// import './styles.css';

// import axios from 'axios';

// import { Spinner } from './Spinner/Spiner';
// import { PokemonData } from './PokemonData/PokemonData';

// export function ExerciseApiPromises() {
//   const [getPokemons, setPokemons] = useState([]);
//   const [getIsLoading, setIsLoading] = useState(true);
//   const [getError, setError] = useState(null);

//   const BASE_POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=100';

//   const getKeyOfTypeOfPokemon = (typeOfPokemon = []) => typeOfPokemon[0].type.name;

//   const setCssClass = (pokemonData) => `container--grid-tile dedicated-background--${getKeyOfTypeOfPokemon(pokemonData?.types)}`


//   useEffect(() => {
//     axios
//       .get(BASE_POKEMON_API_URL)
//       .then((response) => {
//         const pokemonList = response.data.results;
//         const pokemonPromises = pokemonList.map((pokemon) =>
//           axios.get(pokemon.url)
//         );

//         console.log('pokemonPromises', pokemonPromises);

//         Promise.all(pokemonPromises)
//           .then((secondResponses) => {
//             const pokemonsData = secondResponses.map(
//               (secondResponses) => secondResponses.data
//             );
//             setPokemons(pokemonsData);
//             setIsLoading(false);
//           })
//           .catch((error) => {
//             setError(error?.message);
//             setIsLoading(false);
//           });
//         ////////////////////////////////////
//       })
//       .catch((error) => {
//         setError(error?.message);
//         setIsLoading(false);
//       });
//   }, []);

//   return (
//     <div className="container--api-promises">
//        {getIsLoading && <Spinner />}
//       <h2> {getError && getError} </h2>

//       <div className="container--grid-wrapper">
//         {getPokemons.map((pokemon) => (
//           <div className={setCssClass(pokemon)}>
//             <PokemonData pokemonData={pokemon} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }