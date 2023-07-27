import './styles.css';

export function Exercise() {
  //Strings: Exercise 1

  function toCamelCase(str) {
    return str.replace(/[\W_]+(\w|$)/g, function (_, chr) {
      return chr.toUpperCase();
    });
  }

  const inputString = "I'm some very long text";
  const camelCaseString = toCamelCase(inputString);
  console.log(camelCaseString); // Output: "ImSomeVeryLongText"

  // Strings: Exercise 2

  function commonLetters(word1, word2) {
    // Convert the words to sets of unique characters
    const set1 = new Set(word1.toLowerCase());
    const set2 = new Set(word2.toLowerCase());

    // Find the common letters by using intersection of the sets
    const common = new Set([...set1].filter((letter) => set2.has(letter)));

    // Convert the common letters set to an array and sort it alphabetically
    const commonLettersArray = Array.from(common).sort();

    // Create a table object to hold the results
    const table = {};
    for (const letter of commonLettersArray) {
      table[letter] = true;
    }

    return table;
  }

  const word1 = 'hello';
  const word2 = 'world';
  const result = commonLetters(word1, word2);
  console.log(result);

  //function commonLetters(str1, str2) {
  // const letters1 = new Set(str1)
  // const letters2 = new Set(str2)

  // return Array.from(letters1).filter(letter => letters2.has(letter));
  //}

  //console.log(commonLetters('hello', 'world'))

  //Strings Exercise 3
  function countVowels(word) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (const char of word) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }

  function wordLengths(wordsArray) {
    const resultArray = wordsArray.map((word) => countVowels(word));
    return resultArray;
  }

  const wordsArray = ['apple', 'banana', 'orange'];
  const result1 = wordLengths(wordsArray);
  console.log(result1); // Output: [2, 3, 3]

  // function countVowels(word) {
  // const vowels = new Set(['a', 'u','i','o','e', 'y'])
  //  return Array.from(word.toLowerCase()).filter((letter) => vowels.has(letter)).length;
  //}

  //function wordLengths(words) {
  // return words.map(word => countVowels(word))
  //}

  //console.log(wordLengths(['apple', 'banana']))

  //Strings Exercise 4
  function isAnagram(firstWord, secondWord) {
    let firstWordArray = firstWord.split('').sort();
    let secondWordArray = secondWord.split('').sort();

    return firstWordArray.toString() === secondWordArray.toString()
      ? true
      : false;
  }
  console.log('Ćw. 5.4:  ' + isAnagram('iceman', 'cinema'));

  //function isAnagram(str1, str2) {

  //const sortedStr1 = Array.from(str1.toLowerCase()).sort().join()
  // const sortedStr2 = Array.from(str2.toLowerCase()).sort().join()

  // return sortedStr1 === sortedStr2
  //}

  console.log(isAnagram('iceman', 'nameci'));

  //Arrays Exercises: 1

  function sameNumbers(array1, array2) {
    const commonElements = array1.filter((item) => array2.includes(item));
    return commonElements;
  }

  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 4, 5, 6, 7];
  const result3 = sameNumbers(array1, array2);
  console.log(result3); // Output: [3, 4, 5]

  //Arrays: exercise 2
  function averageFromArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      throw new Error('Input must be a non-empty array.');
    }

    const sum = arr.reduce((acc, num) => acc + num, 0);
    const average = sum / arr.length;

    return average;
  }

  const numbers4 = [1, 2, 3, 4, 5, 6];
  const result4 = averageFromArray(numbers4);
  console.log(result4); // Output: 3.5

  //Arrays: exercise 3

  function twoDimensionalArray(x, y) {
    if (x <= 0 || y <= 0) {
      throw new Error('Dimensions x and y must be greater than 0.');
    }

    const resultArray = [];

    for (let i = 0; i < x; i++) {
      const row = [];
      for (let j = 0; j < y; j++) {
        row.push(0);
      }
      resultArray.push(row);
    }

    return resultArray;
  }

  //function create2DArray(x, y) {
  // return Array.from({length: x}, () => Array.from({length: y}, () => 0));
  //}

  //console.log(create2DArray(3,5))

  //Arrays: exercise 4

  function reverseFun(numbers6) {
    if (!Array.isArray(numbers6)) {
      throw new Error('Input must be an array.');
    }

    return numbers6.reverse();
  }

  // Example usage:
  const numbers6 = [1, 2, 3, 4, 5];
  const reversedNumbers = reverseFun(numbers6);
  console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]

  // Example usage:
  console.log(twoDimensionalArray(1, 1)); // Output: [[0]]
  console.log(twoDimensionalArray(1, 2)); // Output: [[0, 0]]

  //function reverseFunction(arr) {
  // return arr.reverse()
  //}

  //console.log(reverseFunction([1,2,3,4,5,6]))

  //Arrays: exercise 5

  const people = [
    { name: 'John', age: '14' },
    { name: 'Emily', age: '20' },
    { name: 'Peter', age: '28' },
  ];

  function getNames(people) {
    return people.map((person) => person.name);
  }

  const namesOnly = getNames(people);
  console.log(namesOnly); // Output: ['John', 'Emily', 'Peter']

  //unction getNames(people) {
  //return people.map(person => person.name)
  //}

  //console.log(getNames([{name: 'John', age:20 },{name: 'Adam', age:24 }]))
}
