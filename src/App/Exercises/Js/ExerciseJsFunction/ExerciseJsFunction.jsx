import React from 'react';

import './style.css';

export function ExerciseJsFunction() {
  const tablicaPierwotna = [
    { id: 0, name: 'Eve', grades: [4, 2, 4, 6, 1, 2, 3] },
    { id: 2, name: 'Eve2', grades: [4, 2, 4, 6, 1, 2, 5] },
  ];
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
    }
    return sumAnswer;
  };
  const averageGrade = (tablicaPierwotna) => {
    let grade = 0;
    let zmienionaTablica = tablicaPierwotna.map((element) => ({ ...element }));
    for (let j = 0; j < zmienionaTablica.length; j++) {
      let gradesuser = zmienionaTablica[j].grades;
      for (let i = 0; i < gradesuser.length; i++) grade += gradesuser[i];
      grade = Math.round((grade / gradesuser.length) * 100) / 100;
      zmienionaTablica[j].grades = [grade];
      grade = 0;
    }
    return zmienionaTablica;
  };
  const nowaTablicaOcen = averageGrade(tablicaPierwotna);
  return (
    <div>
      <p>oryginalna tablica: {originalArr.join(', ')}</p>
      <p>posortowana tablica: {sortImmute(originalArr).join(', ')}</p>
      <p>
        oryginalna tablica po wywołaniu sortowania tablica:{' '}
        {originalArr.join(', ')}
      </p>
      <hr />
      <p>{sumArr(1, 2, 3, 4, 5)}</p>
      <p>{sumArr(1, 2, 3, 4, 5, 'coś')}</p>
      <hr />
      <p>{JSON.stringify(tablicaPierwotna)}</p>
      <p>{JSON.stringify(nowaTablicaOcen)}</p>
    </div>
  );
}
