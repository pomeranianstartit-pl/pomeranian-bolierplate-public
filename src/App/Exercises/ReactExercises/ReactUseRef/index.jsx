import { useRef, useEffect } from 'react';
import './style.css';

export const ReactUseRefExercise = () => {
  const inputRef = useRef(null);
  const targetRef = useRef(null);

  const scrollToTarget = () => {
    return targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    inputRef.current.focus();
    scrollToTarget();
  }, []);

  return (
    <div className="container--react-use-ref">
      <label htmlFor="">Input without useRef</label>
      <input type="text" />

      <label htmlFor="">Input with useRef</label>
      <input ref={inputRef} type="text" />

     {/* ///////SCROLL TO SPECYFIC ELEMENT AFTER RENDER////// */}

     <div className="container--react-use-ref-scroll-too">
      <div ref={targetRef}></div>
     </div>
    </div>
  );
};