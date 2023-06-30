import React from 'react';

import './style.css';

export function ExerciseJsFunction() {
  const originalArr = [1, 3, 2, 100, 99];
  const sortImmute = (originalArr) => {
    const sortedArr = [...originalArr];
    return sortedArr.sort((a, b) => a - b);
  };

  const sumArr = (...arr) => {
    let sumAnswer = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') sumAnswer += arr[i];
      else return 'coś poszło nie tak';
  };
  return sumAnswer;
};

  return (
    <div>
      <p>oryginalna tablica: {originalArr.join(', ')}</p>
      <p>posortowana tablica: {sortImmute(originalArr).join(', ')}</p>
      <p>
        oryginalna tablica po wywołaniu sortowania tablica:{' '}
        {originalArr.join(', ')}
        <hr />
        <p>{sumArr(1, 2, 3, 4, 5, )}</p>
      </p>
    </div>
  );
}
