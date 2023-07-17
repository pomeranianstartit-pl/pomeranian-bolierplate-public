import React from 'react';

function sortImmute(arr) {
  const sortedArr = [...arr];
  sortedArr.sort((a, b) => a - b);
  return sortedArr;
}

export function Exercise2() {
  const originalArr = [5, 2, 8, 1, 9];
  const sortedArr = sortImmute(originalArr);

  return (
    <div>
      <p>Original Array: {originalArr.join(', ')}</p>
      <p>Sorted Array: {sortedArr.join(', ')}</p>
    </div>
  );
}

export default Exercise2


