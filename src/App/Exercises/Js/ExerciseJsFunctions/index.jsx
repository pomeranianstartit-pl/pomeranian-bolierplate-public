//import React from 'react';

export function Exercise() {
  const sortImmune = () => {
    let copyOriginalArr = [...originalArr];
    console.log([originalArr]);

    function compareNumbers(a, b) {
      return a - b;
    }
    copyOriginalArr.sort(compareNumbers);
  };

  const originalArr = [1, 3, 2, 8, 99, 101];
  const sortedArr = sortImmune(originalArr);
  console.log({
    originalArr,
    sortedArr,
  });

  return test;
}
