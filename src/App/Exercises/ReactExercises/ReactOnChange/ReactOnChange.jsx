import { useState } from 'react';

export function ReactOnChange() {
  const [name, setName] = useState(' ');

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <h1>ReactOnChange</h1>
      <div>
        <input
          type="text"
          placeholder="Wpisz swoje imię"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div>Moje imię to: {name}</div>
    </div>
  );
}
