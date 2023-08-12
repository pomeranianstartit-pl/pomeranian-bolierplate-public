import './styles.css';
import { useEffect, useState } from 'react';

export const UseEffectTraining = () => {
  const [name, setName] = useState(0);
  const [state, setState] = useState({
    name: '',
    selected: 'false',
  });

  const handleAdd = () => {
    setState((prev) => ({ ...prev, name }));
  };

  const handleReset = () => {
    setState((prev) => ({ ...prev, selected: true }));
  };

  useEffect(() => {
    console.log('The state has changed, useEffect runs');
  }, [state.name, state.selected]);

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAdd}>Add name</button>
      <button onClick={handleReset}>Select</button>
      <p>{`{name:${state.name}, selected:${state.selected.toString()}}`}</p>
    </div>
  );
};
