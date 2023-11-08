import React, { useState } from 'react';

import './style.css';

export function Form() {
  

  return (
    <div>
      <h2 className="h2todo">{'<'}FORMULARZ ZAMÓWIENIA</h2>
      <form>
        <h3>ZAMÓWIENIE PRODUKTU</h3>

        <label>Wybierz produkt*</label>
        <input type='' ></input>

        <label>Wybierz formę płatności*</label>
        <input type='' ></input>

        <label>Opcje dodatkowe do zamównienia</label>
        <input type='' ></input>
      </form>
      
    </div>
  );
}

