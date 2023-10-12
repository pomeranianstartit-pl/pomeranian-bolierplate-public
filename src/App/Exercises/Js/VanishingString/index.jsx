import React, { useEffect, useState } from 'react';

import './styles.css';

export const VanishingString = () => {
  const [text, setText] = useState('');

  const handleClickText = () => {
    setText('Pokazałem się');
  };
  useEffect(() => {
    setTimeout(() => {
      setText('');
    }, 3000);
  }, [text]);

  return (
    <div>
      <button className="vanishing-string-btn" onClick={handleClickText}>
        {text && <div>{text}</div>}
      </button>
    </div>
  );
};
