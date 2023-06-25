import { useEffect, useRef } from 'react';
import './styles.css';

export function Exercise() {
  const pointRef = useRef();

  useEffect(() => {
    document.getElementById('root').addEventListener('mousemove', (event) => {
      console.log(event, 'event triggered');

      const { x, y } = event;

      pointRef.current.style.left = `${x}px`;
      pointRef.current.style.top = `${y}px`;
    });
  }, []);
  return (
    <div ref={pointRef} className="point">
      Tekst!
    </div>
  );
}
