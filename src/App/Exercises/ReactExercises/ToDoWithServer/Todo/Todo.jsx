import React, { useState } from 'react';
import './Todo.css'

export function Todo({children, date, name, label}) {
 
  return (
    <>
      {/* props component */}
    
        <div className='textcontainer'>
      <h4 className='blockTitle'>{label}</h4>
      <p className='name'>{name}</p>
      <p className='date'>{date}</p>
      <p className='annotate'>{children}</p>
      </div>
      
    </>
  );
}