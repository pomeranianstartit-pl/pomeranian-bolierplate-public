import React, { useState } from 'react';
import './MenuView.css';
import Menu from '../Menu/Menu';
import { Button } from '../Button/Button';
import { SelectButtonMemo } from '../SelectButtonMemo/SelectButtonMemo';



export const MenuView = ({setGameStarted, setBoardSize, boardSize, myTime, isGameEnded,setAmount, isGameStarted}) => {
  
  return (
    <>
    {isGameEnded && !isGameStarted && (<p>Twój wynik to {boardSize/2} par w czasie {myTime}</p>)}
    
     <Menu label="Liczba elementów" >
      <SelectButtonMemo
      setValue = {setBoardSize}
      options = {[
        {
        value:8,
        content: '8 elementów',
        isActive:false ,
        },
        {
          value:16,
          content: '16 elementów',
          isActive:false ,
          },
          {
            value:24,
            content: '24 elementów',
            isActive:false ,
            },
        
        
  
  ]}
      ></SelectButtonMemo>
     </Menu>
      
     
      <Menu label="Przyciski startujące">
  <Button onClick={() => { setGameStarted(true); setAmount(0); }}>START</Button>
  {/* Function arrow notation on onClick with calling setGameStarted(true) */}
</Menu>
    </>
    
  );
};