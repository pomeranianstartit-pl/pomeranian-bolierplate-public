import { getDefaultNormalizer } from '@testing-library/react';
import './styles.css';

export const EmptyValuesAndComments = () => {
  // --------------------------------------------------------------------
  // PUSTE WARTOŚCI (null, undefined)
  // --------------------------------------------------------------------

  // UNDEFINED
  // 1. Zmienna jest zadeklarowana ale nie ma przypisanej wartości
  let a;
  console.log(a);

  // 2. Funkcja która nie zawiera instrukcji return albo nie zwraca żadnej wartości
  function some() {
    // Brak returna - nic nie zwraca
    return;
  }

  const undefinedTestVariable = some();
  console.log('test');
  console.log(undefinedTestVariable);

  const obj = { a: 'klucz' };
  console.log(obj.b);

  // NULL
  let b = null;
  console.log(b);

  // null == undefined    // true
  // null === undefined   // false

  // --------------------------------------------------------------------
  // KOMENTARZE
  // --------------------------------------------------------------------

  // 1. JEDNO-LINIOWY

  // TO JEST KOMENTARZ JEDNO-LINIOWY

  // 2. WIELO-LINIOWY

  /*
      TO JEST PRZYKŁAD KOMENTARZA WIELO LINIOWEGO

      TUTAJ MOGLIBYŚMY UMIEŚCIĆ PRZYKŁADOWY KOD ITD...
  */

  // 3. WIELO-LINIOWY

  /**
   *
   * Sum -> add a and b numbers
   *
   */
  function sum(a, b) {
    return a + b;
  }

  // --------------------------------------------------------------------
  // STRINGI
  // --------------------------------------------------------------------

  // 1. SINGLE QUOTE
  const singleQuote = 'Tekst przy użyciu single quote';
  console.log(singleQuote);

  // 2. DOUBLE QUOTE
  // const doubleQuote = "Tekst przy użyciu double quote";
  // console.log(doubleQuote);

  // 3. BACKTICKS / TEMPLATE STRING
  const templateString = `Tekst przy użyciu double ${sum(2, 4)} quote`;
  const singleQuoteAdd = 'Tekst przy użyciu double ' + sum(2, 4) + ' quote';
  console.log(templateString);
  console.log(singleQuoteAdd);

  // 3. new String
  const newString = String(5);
  const newNumber = Number('5');
  console.log(newString);
  console.log(newNumber);

  // EXAMPLE
  const name = 'John';
  const surname = 'Wick';
  const age = 26;
  const quoteWithoutTemplateString =
    name + ' ' + surname + ' ' + 'lat' + ' ' + age;
  const quoteWitTemplateString = `${name} ${surname} lat ${age}`;

  console.log(quoteWithoutTemplateString);
  console.log(quoteWitTemplateString);

  // DLACZEGO ' lub "

  // const testString_1 = "John's dad";
  // const testString_2 = 'John"s dad';

  // --------------------------------------------------------------------
  // STRINGI - METODY
  // --------------------------------------------------------------------

  // 1. string.length - metoda mówiąca o długości stringa
  const text = 'To jest przykładowy tekst';
  console.log(text.length);

  // 2. string.substr(startIndex, length) - metoda która służy do wyciągania części łańcucha znaków, zaczynając od określonego indeksu i trwając przez określoną liczbę znaków
  const extracted = text.substr(0, 5);
  console.log(extracted);

  // 3. string.replace(), string.replaceAll() - znajdź i zamień (replace), znajdź i zamień wszystkie (replaceAll)
  const replaceText = 'Hello, world! Hello';
  const newReplaceText = replaceText.replace('Hello', 'Hi');
  const newReplaceAllText = replaceText.replaceAll('Hello', 'Hi');
  console.log(newReplaceText);
  console.log(newReplaceAllText);

  // 4. string.toUpperCase()
  const upperCaseText = text.toUpperCase();
  console.log(upperCaseText);

  // 5. string.toLowerCase()
  const lowerCaseText = text.toLowerCase();
  console.log(lowerCaseText);

  // 6. string.trim() - usuń białe znaki na granicach tekstu
  const trimText = '            Hello world      ';
  const newTrimText = trimText.trim();
  console.log(newTrimText);

  // 7. string.indexOf(searchValue, startIndex) - zwróć indeks pierwszego wystąpienia
  const indexOfText = 'Hello, world!';
  const newInteOfText = indexOfText.indexOf('ll');
  console.log(newInteOfText);

  // CWICZENIA
  // 1
  function BigFirstLetter(word) {
    let firstBigLetterWord = word.replace(word[0], word[0].toUpperCase());
    return firstBigLetterWord;
  }
  console.log(BigFirstLetter('alicja'));
  // 2
  function truncate(text) {
    let newText = text.substr(0, 17) + text.slice(14, 17);
    return newText;
  }
  console.log(truncate(`What I'd like to tell on this topic is:",20`));
  // 3
  function countRep(text, word) {
    let sum = 0;
    let arrayText = text.split(' ');
    console.log(arrayText);
    for (const i of arrayText) {
      console.log(i);
      if (i === word) {
        sum++;
      }
    }
    return sum;
  }
  console.log(countRep(`hello world, hello people, hello you`, `hello`));
  // 4
  function isEmailCorrect(mail) {
    if (mail.includes('@') && mail.includes('.', mail.indexOf('@'))) {
      return true;
    }
    return false;
  }
  console.log(isEmailCorrect('iwona.bigos@gmail.com'));
  // 5
  function isPolindrome(word) {
    let newWord = word.toLowerCase().split('').reverse().join('');
    return word.toLowerCase() === newWord ? true : false;
  }
  console.log(isPolindrome('ala'));

  return <div>Empty values</div>;
};
