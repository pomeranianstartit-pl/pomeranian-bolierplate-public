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
        <p>Wynik: {result}</p>
      ) : (
        <p>Złe wejście</p>
      )}
    </div>
  );
}

export default Exercise3;


