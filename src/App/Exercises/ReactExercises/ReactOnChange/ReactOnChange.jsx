import { useState } from 'react';

export function ReactOnChange() {
  const [name, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <h1>React onChange</h1>
      <div>
        <input
          type="text"
          value={name}
          placeholder="Wpisz swoje imię"
          onChange={handleChange}
        />
      </div>
      <div>Moje imię to: {name}</div>
    </div>
  );
}
