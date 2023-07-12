import { useState } from 'react';
import './styles.css';

export const SeeOrNot = () => {
  const [viasble, setVisable] = useState(true);
  const [napis, setNapis] = useState('UKRYJ');

  function clickHandler() {
    setVisable(!viasble);
    console.log(viasble);

    if (viasble) {
      setNapis('POKARZ');
    } else {
      setNapis('UKRYJ');
    }
  }

  return (
    <div>
      <h1>See Or Not</h1>
      <button className="btn" onClick={clickHandler}>
        {napis}{' '}
      </button>
      {viasble && <h2>{'teraz mnie widać'}</h2>}
    </div>
  );
};
