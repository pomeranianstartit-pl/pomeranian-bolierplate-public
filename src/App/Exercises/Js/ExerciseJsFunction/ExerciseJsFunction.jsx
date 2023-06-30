import React from 'react';

import './style.css';

export function ExerciseJsFunction() {
  const originalArr = [1, 3, 2, 100, 99];
  const sortImmute = (originalArr) => {
    const sortedArr = [...originalArr];
    //sortowanie za pomocą a oraz b ponieważ przy wartości 100 londowała na 2 mijscu jako js traktuje cyfry w tym momencie jako str
    return sortedArr.sort((a, b) => a - b);
  };
  return (
    <div>
      <p>oryginalna tablica: {originalArr.join(', ')}</p>
      <p>posortowana tablica: {sortImmute(originalArr).join(', ')}</p>
      <p>
        oryginalna tablica po wywołaniu sortowania tablica:{' '}
        {originalArr.join(', ')}
      </p>
    </div>
  );
}
