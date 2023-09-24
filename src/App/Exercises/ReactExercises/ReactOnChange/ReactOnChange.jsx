import { useState } from 'react';
export function ReactOnChange() {
  const [name, setName] = useState('');
  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <h1>React OnChange</h1>
      <div>
        <input
          onChange={handleChange}
          type="text"
          value={name}
          placeholder="wpisz swoje imie"
        />
      </div>
      <div>moje imie to: {name}</div>
      <button>wyslij</button>
    </div>
  );
}
