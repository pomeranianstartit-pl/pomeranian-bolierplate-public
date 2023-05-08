import React from 'react';

import './style.css';

export function Exercise1() {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div>
      <p>Jestem przykładowym routem</p>
    </div>
  );
}
