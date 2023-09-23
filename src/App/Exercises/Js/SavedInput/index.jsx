import { useState } from 'react';

const LOCAL_KEY = 'local-nicks';

export const SavedInput = () => {
  const localNicks = localStorage.getItem(LOCAL_KEY);
  const parsedNicks = localNicks ? JSON.parse(localNicks) : [];

  const [nicks, setNicks] = useState(parsedNicks);
  const [nickInput, setNickInput] = useState('');

  const handleAdd = () => {
    const newNicks = [...nicks, nickInput];
    setNicks(newNicks);
    setNickInput('');
    localStorage.setItem(LOCAL_KEY, JSON.stringify(newNicks));
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="nick"
          id="nick"
          onChange={(e) => setNickInput(e.target.value)}
          value={nickInput}
        />
      </div>
      <div>
        <button onClick={handleAdd}>Dodaj</button>
      </div>
      <div>
        <h2>Lista nicków</h2>
        <ul>
          {nicks.map((nick) => (
            <li key={nick}>
              {nick}
              <button onClick={() => setNicks(nicks.filter((n) => n !== nick))}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
