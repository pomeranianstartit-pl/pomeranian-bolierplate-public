import { useRef } from 'react';
import './styles.css';
import { useEffect } from 'react';

export const ReactUseRef = () => {
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
      <label htmlFor="">Input with useRef</label>
      <input type="text" ref={inputRef} />
      <label htmlFor="">Input without useRef</label>
      <input type="text" />
      {/* /////////////////////////////////////////////////SCROLL TO ELEMET AFTER
      RENDER////////////////////////////////////  */}
      <div className="container--react-use-ref-scroll-too"></div>
      <div ref={targetRef}>Target to scroll</div>
    </div>
  );
};
