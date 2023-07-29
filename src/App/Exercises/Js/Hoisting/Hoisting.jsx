/*import './styles.css';

function multiplyBy (factor = 1, ...rest){
  const result = [];
  for(const number of rest) {
    result.push(number * factor);
  }
  return result.join(',');
}



const props = {
  prop1: 'a',
  prop2: 'b',
  prop3: 'c',
};


export function Hoisting(){
  return <>{multiplyBy(3, 1, 1, 1, 1, 2)}</>
}
import './styles.css';




let number = 1;




function multiplyBy(factor = 1, ...rest) {

  const result = [];

  for (const number of rest) {

    result.push(number * factor);

  }

  console.log(number);




  return result.join(',');

}




export function Hoisting() {

  return <>{multiplyBy(3, 1, 1, 1, 1)}</>;

}*/
import { useState } from 'react';

import './styles.css';




let number = 1;




function multiplyBy(factor = 1, ...rest) {

  const result = [];

  for (const number of rest) {

    result.push(number * factor);

  }

  console.log(number);




  return result.join(',');

}




function add(a) {

  let score = a;




  const addMore = (b) => {

    score = score + b;




    return addMore;

  };




  addMore.result = () => score;




  return addMore;

}




export function Hoisting() {

  const [numb, setNumb] = useState(0);




  const changeNumber = (number) => (event) => {

    setNumb(number);

  };




  return (

    <>

      <div>{multiplyBy(3, 1, 1, 1, 1)}</div>

      <div>{add(3)(4)(5)(2)(1).result()}</div>

      {numb}

      {[1, 2, 3, 4, 5].map((number) => (

        <div key={number} onClick={changeNumber(number)}>

          {number}

        </div>

      ))}

    </>

  );

}
