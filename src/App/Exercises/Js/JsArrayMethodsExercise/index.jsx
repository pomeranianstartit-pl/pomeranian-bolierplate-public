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

  //Strings Exercise 4
  function countLetters(word) {
    const letterCount = {};
    for (const char of word) {
      letterCount[char] = (letterCount[char] || 0) + 1;
    }
    return letterCount;
  }

  function isAnagram(word3, word4) {
    if (word3.length !== word4.length) {
      return false;
    }

    const letterCount1 = countLetters(word3.toLowerCase());
    const letterCount2 = countLetters(word4.toLowerCase());

    for (const char in letterCount1) {
      if (letterCount1[char] !== letterCount2[char]) {
        return false;
      }
    }

    return true;
  }

  const word3 = 'iceman';
  const word4 = 'cinema';
  const result2 = isAnagram(word3, word4);
  console.log(result2); // Output: true

  //Arrays Exercises: 1

  function sameNumbers(array1, array2) {
    const commonElements = array1.filter((item) => array2.includes(item));
    return commonElements;
  }

  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 4, 5, 6, 7];
  const result3 = sameNumbers(array1, array2);
  console.log(result3); // Output: [3, 4, 5]
}
