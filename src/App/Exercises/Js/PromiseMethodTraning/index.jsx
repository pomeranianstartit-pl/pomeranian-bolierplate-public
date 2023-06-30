import { useState } from 'react';
import './styles.css';
import { useEffect } from 'react';


export function Exercise() {
 
  const fetchDataFast = () => new Promise(resolve => setTimeout(() => {resolve({id:
    1, time: 300})}, 300))
    const fetchDataLong = () => new Promise(resolve => setTimeout(() => {resolve({id:
    2, time: 700})}, 700))
    const fetchDataError = () => new Promise((_, reject) => setTimeout(() =>
    {reject(new Error('Błąd pobierania danych'))}, 500))

 
useEffect(()=>{
  Promise.race([fetchDataError]).then((response)=>console.log(response))
})
    const handlerClick01 = () => {
      Promise.all([fetchDataFast, fetchDataLong]).then(resolve => {
        console.log(resolve);
      });
    };

    const handlerClick02 = () => {
      Promise.all([fetchDataFast, fetchDataLong, fetchDataError]).then(response => {
        console.log(response);
      });
    };

    const handlerClick03 = () => {
      Promise.allSetted([fetchDataFast, fetchDataLong]).then(response => {
        console.log(response);
      });
    };

    const handlerClick04 = () => {
      Promise.allSetted([fetchDataFast(), fetchDataLong(), fetchDataError()]).then(response => {
        console.log(response);
      });
    };

    
    const handlerClick05 = () => {
      Promise.any([fetchDataFast(), fetchDataLong()]).then(response => {
        console.log(response);
      });
    };

    const handlerClick06 = () => {
      Promise.any([fetchDataFast(), fetchDataLong(), fetchDataError()]).then(response => {
        console.log(response);
      });
    };

    const handlerClick07 = () => {
      Promise.race([fetchDataFast(), fetchDataLong()]).then(resolve => {
        console.log(resolve);
      });
    };

    const handlerClick08 = () => {
      Promise.race([fetchDataFast(), fetchDataLong(), fetchDataError()]).then(rejected => {
        console.log(rejected);
      });
     
    };




  return<div>
    <p>promise all dla fetcDataFast, fetchDataLong</p>
    <button onClick={handlerClick01}>01</button>

    <p>promise all dla fetcDataFast, fetchDataLong, fetchDataError</p>
    <button onClick={handlerClick02}> 02</button>

    <p>promise allSetted dla fetcDataFast, fetchDataLong</p>
    <button onClick={handlerClick03}>03</button>

    <p>promise allSetted dla fetcDataFast, fetchDataLong, fetchDataError</p>
    <button onClick={handlerClick04}>04</button>

    <p>promise any dla fetcDataFast, fetchDataLong</p>
    <button onClick={handlerClick05}>05</button>

    <p>promise any dla fetcDataFast, fetchDataLong, fetchDataError</p>
    <button onClick={handlerClick06}>06</button>

    <p>promise race dla fetcDataFast, fetchDataLong</p>
    <button onClick={handlerClick07}>07</button>

    <p>promise race dla fetcDataFast, fetchDataLong, fetchDataError</p>
    <button onClick={handlerClick08}>08</button>
  </div>
 
}