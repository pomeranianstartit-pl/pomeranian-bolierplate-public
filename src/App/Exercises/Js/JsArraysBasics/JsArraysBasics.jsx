import React from 'react';

import './style.css';

export function JsArraysBasics() {
  const array1 = [{ name: 'Łukasz' }, { name: 'Adam' }];

  const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => [...accumulator, currentValue.name],
    []
  );

  console.log(sumWithInitial);
  const data = [];
  // const uniqueData = new Set();

  data.push('Lukas');
  // data.push('John');
  // data.push('John');

  // const evenMoreUniqueData = new Set(data);

  // let result = [];
  // data.forEach((el) => {
  //   if (result.includes(el)) {
  //     return;
  //   }
  //   result.push(el);
  // });
  // console.log(result);

  // uniqueData.add('Lukas');
  // uniqueData.add('John');
  // uniqueData.add('John');

  // console.log({
  //   data,
  //   uniqueData,
  //   evenMoreUniqueData,
  // });

  // Create copy of data
  // let data2 = data.slice();

  // let data2 = data.map((e) => e);

  // let data2 = data.concat();

  // let data2 = [...data];

  // let data2 = Array.from(data);

  // let data2 = JSON.stringify(data);
  // data2 = JSON.parse(data2);
  // data2.push('Adam');

  // EXPECTED
  // data = ["Lukas"]
  // data2 = ["Lukas", "Adam"]

  // GOT
  // data = ["Lukas", "Adam"]
  // data2 = ["Lukas", "Adam"]

  // for (let item of data) {
  //   console.log(item);
  // }

  const team = [
    { userId: 21551, userName: 'Player1', userScore: 5 },
    { userId: 12412, userName: 'Adam', userScore: 2 },
    { userId: 25125, userName: 'Lukor', userScore: 1 },
    { userId: 12412, userName: 'MiNo', userScore: 5 },
    { userId: 12412, userName: 'Missigno', userScore: 0 },
    { userId: 12512, userName: 'Cheater McChad', userScore: 99 },
  ];

  const MAX_SCORE = 10;

  const removeDuplicateID = (arr) =>
    arr.filter((user, i, arr) => {
      if (
        arr.map((el) => el.userId).filter((id) => id === user.userId).length ===
        1
      )
        return user;
      return null;
    });

  const removeCheaters = (arr) => {
    return arr.filter((user) =>
      user.userScore <= MAX_SCORE ? user : undefined
    );
  };

  // Podlicz punkty dla drużyny
  const teamScore = removeDuplicateID(removeCheaters(team)).reduce(
    (accumulator, currentValue) => accumulator + currentValue.userScore,
    0
  );

  return (
    <>
      Your team scored {teamScore} points;
      <div>
        {' '}
        <p>{sumWithInitial}</p>
      </div>
    </>
  );
}
