import React from 'react';

function sumOfParams(...args) {
  try {
    return args.reduce((sum, arg) => sum + arg, 0);
  } catch (error) {
    return null;
  }
}

export function Exercise3() {
  const result = sumOfParams(1, 2, 3, 4, 5, 6);

  return (
    <div>
      {result !== null ? (
        <h1>Wynik: {result}</h1>
      ) : (
        <h1>Złe wejście</h1>
      )}
    </div>
  );
}

export default Exercise3;


