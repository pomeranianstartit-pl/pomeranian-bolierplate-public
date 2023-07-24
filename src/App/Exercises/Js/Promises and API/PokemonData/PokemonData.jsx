import { typesIcon } from '../Utils/utils';

export function PokemonData({ pokemonData }) {
  const getTypeOfPokemon = (typeOfPokemon = []) =>
    typesIcon[typeOfPokemon[0].type.name];

  return (
    <>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <h3>Name: {pokemonData?.name}</h3>
      <p>Weight: {pokemonData?.weight}</p>
      <div>Type: {getTypeOfPokemon(pokemonData?.types)}</div>
    </>
  );
}
