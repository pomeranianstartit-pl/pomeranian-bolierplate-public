import React from 'react';

export const Json = () => {
  const data = {
    name: 'John',
    surname: 'Wick',
    age: 42,
    isMarried: true,
    children: [
      {
        name: 'Alfred',
        surname: 'Wick',
        age: 17,
        isMarried: false,
      },
      {
        name: 'Suzie',
        surname: 'Wick',
        age: 22,
        isMarried: false,
      },
    ],
  };

  console.log(data, 'data object');

  // JSON.stringify() - converts a JavaScript object or value to a JSON string

  const dataStringified = JSON.stringify(data);
  console.log(dataStringified, 'dataStringified');

  // JSON.parse() - converts a JSON string to a JavaScript object
  const dataStringifiedToParse = '{"name":"John", "age":30, "car":null}';
  const dataParsed = JSON.parse(dataStringifiedToParse);
  console.log(dataParsed, 'dataParsed');

  console.log(dataParsed.name, 'dataParsed.name');

  return <div>JSON</div>;
};
