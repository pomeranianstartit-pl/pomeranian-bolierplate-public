import React from 'react';

import './style.css';

export function Exercise3() {
  const [action, setAction] = React.useState('Ukryj');
  const [text, setText] = React.useState('Teraz mnie widać');

  function handleOnClick() {
    if (action === 'Ukryj') {
      setAction('Pokaż');
      setText('');
    } else {
      setAction('Ukryj');
      setText('Teraz mnie widać');
    }
  }

  return (
    <div className="block-8__exercise-3">
      <h2>See or not</h2>
      <button onClick={handleOnClick}>{action}</button>
      <p>{text}</p>
    </div>
  );
}
