import { useState } from 'react';
import './styles.css';

export const Click5 = () => {
  const [ click, setClick ]= useState(0);
  const [ message, setMessage ]= useState("");

  function clickHandler(){
    let currentClick = click;
    setClick(currentClick + 1)
    console.log(click);

    if (click%5 === 0 && click!=0){
      console.log("gratulacje")
      setMessage("Gratulacje")
    } else if(click% 5 != 0){
      setMessage("mało mi")
    }
  }

  return (
  <div>
    <h1>Kliknij 5</h1>
    <button className='btn' onClick={clickHandler}>{'Start'}</button>
    <h2>{message} kliknołeś {click}</h2>
  </div>
  );
};
