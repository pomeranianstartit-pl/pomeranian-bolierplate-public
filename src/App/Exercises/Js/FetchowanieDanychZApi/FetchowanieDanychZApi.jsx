import React from 'react';
import './style.css';
import { ApiPromises } from './ApiPromises/ApiPromises';

export function FetchowanieDanychZApi() {
  return (<>
  <ApiPromises/>
  <div>
    <p>Jestem przykładowym routem z fetch</p>
  </div></>
    
  );
}
