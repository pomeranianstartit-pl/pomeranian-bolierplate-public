import React from 'react';

const Exercise = () => {
  const data = new Array();
  // const uniqueData = new Set();

  // data.push({ name: 'Lukas' });
  // data.push({ name: 'John' });
  // data.push({ name: 'John' });

  // const evenMoreUniqueData = new Set(data);

  // uniqueData.add('Lukas');
  // uniqueData.add('John');
  // uniqueData.add('John');

  // console.log({
  //   data,
  //   uniqueData,
  //   evenMoreUniqueData,
  // });

  let data2 = data;
  data2.push('Adam');

  console.log({
    data,
    data2,
  });

  const array1 = [{ name: 'Łukasz' }, { name: 'Adam' }];

  const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => [...accumulator, currentValue.name],
    []
  );

  console.log(sumWithInitial);
};

export default Exercise;
