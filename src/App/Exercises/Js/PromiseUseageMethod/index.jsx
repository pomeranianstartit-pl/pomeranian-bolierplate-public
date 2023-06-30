import { useState } from 'react';
import './styles.css';
import { useEffect } from 'react';

export function Exercise() {
  const promises = [
    new Promise((resolve) =>
    setTimeout(resolve(1),1000)),
    new Promise((resolve) =>
    setTimeout(resolve(2),2000)),
    new Promise((resolve) =>
    setTimeout(resolve(3),3000)),
  ];
  
  useEffect(()=>{ 
    // .all when all resolved
    Promise.all(promises).them(alert)
    // ------------------------------------------------------------------------------------------------------------
    // .allSettled when all resolved- array of responses (in this case {results}->can be fullfiled or rejected)
    Promise.all(promises).them((results)=>console.log(results))
    // ------------------------------------------------------------------------------------------------------------
    // .race first Promise resolved wins -> response from winner promise
    Promise.race(promises).them(alert)
     // ------------------------------------------------------------------------------------------------------------
    // .any first Promise resolved wins -> response from winner promise
    Promise.any(promises).them(alert)
  
  
  
  });


  return<div>Promise metody</div>
 
}