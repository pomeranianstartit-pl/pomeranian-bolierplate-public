import './styles.css';
import { useState } from 'react';

export const GoogleFonts = () => {
  const [dynamicClass, setDynamicClass] = useState('fLugarismo');

  return (
    <>
      <h1 className="fontsHeading">Google Fonts</h1>
      <div className="buttons">
        <button
          className="changeButton"
          onClick={() => {
            setDynamicClass('fLugarismo');
          }}
        >
          Lugarismo
        </button>
        <button
          className="changeButton"
          onClick={() => {
            setDynamicClass('fBebas');
          }}
        >
          Bebas Neue
        </button>
        <button
          className="changeButton"
          onClick={() => {
            setDynamicClass('fMynerve');
          }}
        >
          Mynerve
        </button>
      </div>
      <p className={dynamicClass} id="fontChange">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </>
  );
};
