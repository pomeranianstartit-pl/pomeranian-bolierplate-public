import React from 'react';
import './style.css';
export function TextFundaments() {
  return (
    <div className="blok11_z1">
      <div className="font-size">Wielkość czcionki</div>
      <div className="font-weight">Grubość czcionki</div>
      <div className="font-style">Kursywa</div>
      <div className="text-decoration">Podkreślenie</div>
      <div className="text-transform">Transformacja</div>
      <div className="text-shadow">tekst z cieniem</div>
      <div className="special-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        quas incidunt? Nemo facilis ea autem temporibus voluptatibus
        consequatur, recusandae atque! Natus esse iure corporis est debitis
        culpa ducimus nostrum a?
      </div>
      <div className="">
        tekst do porównania
        <span className="sup">sup</span>
        <span className="sub">sub</span>
        <sup>sup</sup>
        <sub>sub</sub>
      </div>
      <ol className='list-ol' start="4" reversed>
        <li>tekst 1</li>
        <li>tekst 2</li>
        <li>tekst 3</li>
      </ol>
      <ul className='list-ul'>
        <li>ul 1</li>
        <li>ul 2</li>
        <li>ul 3</li>
      </ul>
    </div>
  );
}
