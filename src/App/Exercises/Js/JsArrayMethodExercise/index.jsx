import './styles.css';

export const JsArrayMethodExercise = () => {
  // CWICZENIA 5.1;

  function toCamelCase(text) {
    let arrayText = text.split(' ');
    let newArray = [arrayText[0].toLowerCase()];
    for (let i = 1; i < arrayText.length; i++) {
      newArray.push(
        arrayText[i].replace(
          arrayText[i].charAt(0),
          arrayText[i].charAt(0).toUpperCase()
        )
      );
    }
    text = newArray.join('');
    return text;
  }
  console.log('Ćw. 5.1:  ' + toCamelCase('Jakiś długi ten text'));

  // Cwiczenie 5.2.
  function commonLetters(firstWord, secondWord) {
    let wordsArray = [...firstWord, ...secondWord];
    let commonLettersArray = wordsArray.filter(
      (letter, index) => wordsArray.indexOf(letter) !== index
    );
    return [...new Set(commonLettersArray)];
  }
  console.log('Ćw. 5.2:  ' + commonLetters('Ziemia', 'Niebieski'));

  // Zrobione przez Szymona
  //   function commonLetters(str1, str2) {
  //     const letters1 = new Set(str1)
  //     const letters2 = new Set(str2)
  //     return Array.from(letters1).filter(letter => letters2.has(letter));
  // }

  console.log(commonLetters('hello', 'world'));

  // Cwiczenie 5.3.
  function wordLengths(words) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let sumArray = [];
    words.forEach((word) => {
      let sum = 0;
      for (const vowel of vowels) {
        let index = word.indexOf(vowel);
        while (index !== -1) {
          sum++;
          index = word.indexOf(vowel, index + 1);
        }
      }
      sumArray.push(sum);
    });
    return sumArray;
  }
  // Zrobione przez Szymona
  //   function countVowels(word) {
  //     const vowels = new Set(['a', 'u','i','o','e', 'y'])
  //     return Array.from(word.toLowerCase()).filter((letter) => vowels.has(letter)).length;
  // }
  // function wordLengths(words) {
  //     return words.map(word => countVowels(word))
  // }
  // console.log(wordLengths(['apple', 'banana']))

  console.log('Ćw. 5.3:  ' + wordLengths(['apple', 'banana', 'orange']));

  // Cwiczenie 5.4.
  function isAnagram(firstWord, secondWord) {
    if (firstWord.length !== secondWord.length) {
      return false;
    }
    let firstWordArray = firstWord.toLowerCase().split('').sort();
    let secondWordArray = secondWord.toLowerCase().split('').sort();

    return firstWordArray.toString() === secondWordArray.toString();
  }
  console.log('Ćw. 5.4:  ' + isAnagram('Iceman', 'cinema'));

  // Cwiczenie 3.1.
  function sameNumbers(firstArray, secondArray) {
    let numbersArray = [...firstArray, ...secondArray];
    let sameNumbersArray = numbersArray.filter(
      (letter, index) => numbersArray.indexOf(letter) !== index
    );
    return [...new Set(sameNumbersArray)];
  }
  console.log('Ćw. 3.1:  ' + sameNumbers([1, 2, 3, 4, 5], [3, 5, 7, 9]));

  // Cwiczenie 3.2.
  function averageFromArray(array) {
    let sum = 0;
    array.forEach((number) => {
      sum = sum + number;
    });
    return sum / array.length;
  }
  console.log('Ćw. 3.2:  ' + averageFromArray([1, 2, 3, 4, 5, 6]));

  // Cwiczenie 3.3.
  function arrayFromArray(rows, columns) {
    let array = [];
    for (let i = 0; i < rows; i++) {
      array[i] = [];
      for (let ii = 0; ii < columns; ii++) {
        array[i][ii] = 0;
      }
    }
    return array;
  }
  console.log(arrayFromArray(2, 3));

  // Zrobione przez Szymona
  //   function create2DArray(x, y) {
  //     return Array.from({length: x}, () => Array.from({length: y}, () => 0));
  // }
  // console.log(create2DArray(3,5))

  // Cwiczenie 3.4.
  function reverseFun(array) {
    return array.reverse();
  }
  console.log(reverseFun([1, 2, 3, 4, 5]));

  // Cwiczenie 3.5.
  function getNames(peopleArray) {
    let names = [];
    peopleArray.forEach((person) => {
      names.push(person.name);
    });
    return names;
  }
  console.log(
    getNames([
      { name: 'Paweł', age: 36 },
      { name: 'Iwona', age: 28 },
    ])
  );
  // Zrobione przez Szymona
  //   function getNames(people) {
  //     return people.map(person => person.name)
  // }
  // console.log(getNames([{name: 'John', age:20 },{name: 'Adam', age:24 }]))

  return <div>Change me X</div>;
};
