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
        <input onChange={} type="text" placeholder="Wpisz swoje imię" />
      </div>
    </div>
  );
}
