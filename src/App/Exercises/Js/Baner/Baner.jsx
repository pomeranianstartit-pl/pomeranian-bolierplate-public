import React, { useState, useEffect } from 'react';

export function Baner() {
  const initialText = ' O to mój baner z którego jestem bardzo zadowolony!';
  const [text, setText] = useState(initialText);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => prevText.slice(1) + prevText.charAt(0));
    }, 75);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>{text}</h2>
    </div>
  );
}
