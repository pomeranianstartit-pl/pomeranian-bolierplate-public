import React from 'react';
import KrecikIMG from './krecik.png';
import { useState } from 'react';

export function Mole() {

const [moleArray, setMoleArray] = useState(Array(1).fill({  isVisible: true, isWhacked: false })
);

const defaultGameTime = 2 * 60 * 1000;

const [gameTime, setGameTime] = useState(defaultGameTime); // 2000 * 60
const [moleCount, setMoleCount] = useState(1);


function hitTheMole (index) {
if (!moleArray[index].isVisible) return;
moleArray[index].isWhacked = !moleArray[index].isWhacked
console.log(moleArray[index].isWhacked);
}



const gameTimeOption = 
[
  {label: '1 minuta', timeValue: 1 * 60 * 1000 },
  {label: '2 minuty', timeValue: 2 * 60 * 1000 },
  {label: '3 minuty', timeValue: 3 * 60 * 1000 },
]


const moleCountOption = 
[
  {label: '1 kret' },
  {label: '2 krety' },
  {label: '3 krety' },
]

  return (
    <div>
     
     <p>Liczba kretów: {moleCount}</p>
    {moleCountOption.map(({ label }) => 
    <button onClick={() => setMoleCount(Number(label[0]))}>{label}</button>
    )}

    <p>
      
      Czas gry: {gameTime / 60 / 1000}
      
      {gameTime / 60 / 1000 === 1
       ? " minuta"
       : gameTime / 60 / 1000 === 2
       ? " minuty"
       : " minuty"}
       
    </p>

      {gameTimeOption.map(({label, timeValue}) => 
        <button onClick={() => setGameTime(timeValue)}>{label}</button>
      )}

      {moleArray.map((mole, index) => (
        <div>
          <span> {mole.isVisible && <img src={KrecikIMG} onClick={() => hitTheMole(index)}/>}</span>
        </div>
      ))}
    </div>
  );
}

export default Mole;