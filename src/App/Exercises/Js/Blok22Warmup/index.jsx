import React from 'react';
import './styles.css';

export function Warmup() {
  const inputArray = [[1, 2, 3], [4, 5], [6, 7], 8];

  function arrayFlattner(arrays) {
    return arrays.flat();
  }
  let outputArray = inputArray.flat();

  console.log(arrayFlattner(inputArray));
  //// --------------- koniec zad 1

  const scores = [
    { letter: 'A', score: 5 },
    { letter: 'E', score: 15 },
    { letter: 'I', score: 6 },
    { letter: 'O', score: 2 },
    { letter: 'U', score: 0 },
  ];
  //imionaWagi(["Janek", "Zosia"], wagi) ->
  //[{name: "janek", score: 20}, {name: "zosia", score: 13}, {name: 'khx', score: 0}]

  // const scorer = (name, scores) => {
  //   const upperNames = name.map((name) => name.toUpperCase());
  //   const allLettersWithScore = scores.map((score) => score.letter);

  //   upperNames.map((name) => {
  //     allLettersWithScore.forEach((scoredLetter) => {
  //       for (let letter in name) {
  //         if (letter === scoredLetter) {
  //           console.log(`${letter} in ${name}`);
  //         }
  //       }
  //     });
  //   });
  // };

  const scorer = (names, socres) => {
    const upperNames = names.map((name) => name.toUpperCase());
    const allLettersWithScore = scores.map((score) => score.letter);

    return upperNames.filter((name) => {
      return name.split('').filter((letter) => {
        return allLettersWithScore.includes(letter) ? true : false;
      });
    });
  };
  console.log(scorer(['Janek', 'Zosia'], scores));

  return (
    <div>
      <div>hello</div>
      <div>hi</div>
      {/* <div>{outputArray}</div> */}
    </div>
  );
}
