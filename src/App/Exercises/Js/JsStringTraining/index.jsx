import './styles.css';

export function Exercise() {
  //1. Funkcja ktora podnosi pierwsza litere
  function ucFirst(word) {
    return word[0].toUpperCase() + word.slice(1);
  }
  console.log('1. ' + ucFirst('john'));

  //2. Funkcja która obcina po x znaków
  function truncate(sentence, cutAfter) {
    return sentence.slice(0, cutAfter);
  }
  console.log('2. ' + truncate("What I'd like to tell on this topic is: ", 20));

  //3. Funkcja która liczy użyte słowo.
  function countRep(sentence, word) {
    const sentenceArray = sentence.replaceAll(',',"").split(' ');
    // console.log(sentenceArray)
    let count = 0;
    for (let i = 0; i < sentenceArray.length; i++) {
      console.log(sentenceArray[i]);
      if (sentenceArray[i] === word) {
        count++;
      }
    }
    // console.log(sentenceArray);
    // console.log(count);
    return count;
  }

  console.log(
    '3. ' + countRep('hello world, hello people, hello you', 'hello')
  );

  //4. Funkcja która sprawdza czy email ma odpowiedni format.
  function emailCheck(email) {
    return email.includes('@') ? true : false;
  }

  console.log('4. ' + emailCheck('abc@def.ghi'));
  console.log('4. ' + emailCheck('abcdef.ghi'));

  //5. Czy słowo jest palindromem
  function palCheck(word) {
    const reverseWord = word.split('').reverse().join('');
    // console.log(reverseWord)
    return word.toUpperCase() === reverseWord.toUpperCase() ? true : false;
  }

  console.log('5. ' + palCheck('apokopa'));

  return (
    <div>
      <h1>Metody Stringów</h1>
    </div>
  );
}
