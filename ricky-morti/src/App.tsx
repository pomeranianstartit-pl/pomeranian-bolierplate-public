import { useEffect, useState } from 'react';
import './App.css';

interface Info {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}

interface Character {
  id: number;
  name: string;
  image: string;
}

interface Data {
  info: Info;
  results: Character[];
}

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(1);
  const [info, setInfo] = useState<Info>({
    count: 0,
    next: '',
    pages: 0,
    prev: null,
  });

  async function fetchCharacters(url: string): Promise<void> {
    try {
      const response = await fetch(url);
      const data: Data = await response.json();
      setCharacters(data.results);
      setInfo(data.info);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCharacters(`https://rickandmortyapi.com/api/character?page=${page}`);
  }, [page]);

  function handlePrevClick() {
    if (info.prev) {
      setPage(page - 1);
    }
  }

  function handleNextClick() {
    if (info.next) {
      setPage(page + 1);
    }
  }

  return (
    <>
      <h1>Rick and Morty</h1>
      <button onClick={handlePrevClick} disabled={!info.prev}>
        Prev
      </button>
      <button onClick={handleNextClick} disabled={!info.next}>
        Next
      </button>
      <ul>
        {characters.map((character) => {
          return (
            <li key={character.id}>
              <img src={character.image} alt={character.name} />
              <p>{character.name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;