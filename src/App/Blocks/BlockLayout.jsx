import React from 'react';
import { useNavigate } from 'react-router-dom';

import { routerData } from './router-data';

import './styles.css';

export const BlockLayout = () => {
  const navigate = useNavigate();

  const onBlockSelect = (event) => {
    const path = event.target.value;

    navigate(path);
  };

  // @todo: makie path blocks/:block_no but keep useRoutes to register new block routs from url
  // collect block_no from path and use it to set selection
  return (
    <>
      <h1>Bloki</h1>
      <div>
        <select onChange={onBlockSelect}>
          <option value="">Wybierz blok</option>
          {routerData.map((option) => (
            <option key={option.path} value={option.path}>
              {option.blockTitle}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
