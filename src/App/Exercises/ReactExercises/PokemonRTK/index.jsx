import { useState } from 'react';
import { useGetPokemonByNameQuery } from '../../../../services/pokomon';

export const PokemonRTK = () => {
  const [inputValue, setInputValue] = useState('bulbasaur');
  const { data, error, isLoading } = useGetPokemonByNameQuery(inputValue);
  console.log(data, isLoading, error, 'data');
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
  return (
    <div>
      <h1>Ćwiczenia związane pobieraniem Pokemonów</h1>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="App">
        {error || inputValue.length === 0 ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
          </>
        ) : null}
      </div>
    </div>
  );
};
