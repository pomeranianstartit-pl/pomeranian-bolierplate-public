import React, { useEffect, useRef } from 'react';

import './style.css';

export function ReactUseRef() {
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
    <div className='conteiner--react-use-ref'>
      <label htmlFor="">Input witchout useRef</label>
      <input type="text" />

      {/* po załadowaniu strony focus będzie na tym elemencie */}
      <label htmlFor="">input witch useRef</label>
      <input ref={inputRef} type="text" />
      <p>Jestem przykładowym routem</p>
      {/* -----------------Scroll to specyfic element after render-------------------- */}
      <div className='conteiner--react-use-ref-scroll-too'>
        <div ref={targetRef}></div>
      </div>
    </div>
  );
}
