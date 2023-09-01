import React, { useEffect, useRef } from 'react';

import './style.css';

export function UseRef() {
  const pointRef = useRef();

  useEffect(() => {
    document.getElementById('root').addEventListener('mousemove', (event) => {
      const { x, y } = event;

      pointRef.current.style.top = `${y}px`;
      pointRef.current.style.left = `${x}px`;
    });
  }, []);

  return (
    <div>
      <div ref={pointRef} className="point">
        &#128513;
      </div>
    </div>
  );
}
