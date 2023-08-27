import { useState } from 'react';

export const TryCatchPrototype = () => {
  // -----------------------------------------------------------------------------
  // TRY CATCH
  // -----------------------------------------------------------------------------

  function validate(arg) {
    return test;
  }

  // jeżeli chcemy zareagować na możliwie wyjątki, to możemy użyć try catch
  try {
    // tutaj mamy kod który może spowodować problem
    // np wywołanie funkcji validate itd
    validate();
  } catch (err) {
    console.log('Dostaliśmy błąd w kodzie zawartym między scopem try');
    // console.log('Co się wydarzyło:', err);
    console.log('Error stack:', err.stack);
    console.log('Error message:', err.message);
    console.log('Error name:', err.name);
    // tutaj mamy kod który wykona się jeżeli problem się pojawi
  }

  // const test = '';
  // console.log(test1);

  // -----------------------------------------------------------------------------
  // KOLEJNOŚĆ WYKONYWANIA KODU TRY CATCH
  // -----------------------------------------------------------------------------

  try {
    // 1. operacja - wykona się
    // 2. operacja - wykona się
    // 3. operacja - nie wykona się - wystąpił błąd!
    // OPERACJA PRZERWANA
    // 4. operacja - nie wykona się - bo wystąpił wcześniej błąd
  } catch {
    // 3. operacja - wystąpił błąd - przejmuję pałeczkę i wykonuję dalszy kod
    // ...
    // 4. operacja wykona się...
  }

  // -----------------------------------------------------------------------------
  // TRY CATCH DZIAŁA TYLKO DLA BŁĘDÓW W CZASIE WYKONANIA KODU
  // -----------------------------------------------------------------------------

  // -----------------------------------------------------------------------------
  // TRY CATCH DZIAŁA TYLKO DLA KODU SYNCHRONICZNEGO
  // -----------------------------------------------------------------------------

  // -----------------------------------------------------------------------------
  // TUTAJ NIE ZADZIAŁA (KOD ASYNCHRONICZNY)
  // -----------------------------------------------------------------------------
  // try {
  //   setTimeout(() => {
  //     noSuchVariable;
  //   }, 1000);
  // } catch {
  //   console.log('Wystąpił błąd!!'); // ten catch nie złapie tego błędu
  // }
  // -----------------------------------------------------------------------------

  // -----------------------------------------------------------------------------
  // TUTAJ ZADZIAŁA (KOD ASYNCHRONICZNY)
  // -----------------------------------------------------------------------------

  // setTimeout(() => {
  //   try {
  //     noSuchVariable;
  //   } catch {
  //     console.log('Wystąpił błąd!'); // ten catch złapie błąd
  //   }
  // }, 1000);

  // -----------------------------------------------------------------------------
  // TRY CATCH + FINALLY
  // -----------------------------------------------------------------------------

  // try {
  //   const result = undefinedValue * 2;
  // } catch (err) {
  //   console.log('Wystąpił błąd!', err);
  // } finally {
  //   console.log('Wykona się zawsze');
  // }

  // -----------------------------------------------------------------------------
  // CUSTOME ERRORY
  // -----------------------------------------------------------------------------

  class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = 'CustomError';
    }
  }
  function divide(a, b) {
    if (b === 0) {
      throw new CustomError('Nie dziel przez zero');
    }

    return a / b;
  }

  try {
    divide(1, 0);
  } catch (err) {
    console.log('Divide - Wystąpił błąd!', err);
  }

  // -----------------------------------------------------------------------------
  // ZADANIE 2
  // -----------------------------------------------------------------------------
  //      dodać input
  //      dodać metodę validate z jednym parametrem
  //      w metodzie validate sprawdzić czy podany parametr jest intem jeśli nie wyrzucić wyjątek
  //      dodać w metodzie onChange inputa wywołanie metody validate z wartością inputa.
  //      zobaczyć jaki będzie wynik wpisania czegoś co jest i co nie jest liczbą
  //      nastepnie
  //      dodać div pod inputem
  //      następnie przechwycić wyjątek za pomocą try catch i informację o błędnym inpucie

  // -----------------------------------------------------------------------------
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const validateInput = (value) => {
    if (isNaN(parseInt(value))) {
      throw new Error('Wprowadź poprawną liczbę');
    }
  };

  const handleChangeInput = (event) => {
    const { value } = event.target;

    try {
      validateInput(value);
      setInputValue(value);
      setError('');
    } catch (error) {
      setInputValue(inputValue);
      setError(error.message);
    }
  };

  // -----------------------------------------------------------------------------
  // PROTOTYPE
  // -----------------------------------------------------------------------------

  // Protypy w JavaScript to mechanizm, który pozwala obiektom dziedziczyć właściwości oraz metody innych obiektów.
  // Każdy obiekt z wyjątkiem niektórych wbudowanych typów, ma prototyp.
  // Prototypy tworzą tzw. prototype chain (łańcuch prototypów), który jest mechanizmem wyszukiwania właściwości i metod w obiektach.

  class PersonClass {
    constructor(name) {
      this.name = name;
    }

    sayHello() {
      console.log(`Hello ${this.name}`);
    }
  }

  function PersonFunction(name) {
    this.name = name;

    // this.sayHello = () => {
    //   console.log(`Hello ${this.name}`);
    // };
  }

  function PersonPrototypeFunction(name) {
    this.name = name;

    // this.sayHello = () => {
    //   console.log(`Hello ${this.name}`);
    // };
  }

  const personClass = new PersonClass('Jan');
  const personFunction = new PersonFunction('Tom');

  PersonPrototypeFunction.prototype.sayHello = function () {
    console.log(`Hello ${this.name}`);
  };
  const personPrototypeFunction = new PersonFunction('Tom');

  // const personFunction = PersonFunction('Tom');
  // const personFunction = PersonFunction('Tom');
  // const personFunction = PersonFunction('Tom');
  // const personFunction = PersonFunction('Tom');
  // const personFunction = PersonFunction('Tom');

  // -----------------------------------------------------------------------------
  // PROTOTYPE CHAIN
  // -----------------------------------------------------------------------------

  // Łańcuch prototypów (prototype chain) to sekwencja połączonych prototypów,
  // które umożliwiają dziedziczenie właściwości i metod w hierarchii obiektów.
  // Kiedy próbujesz uzyskać dostęp do właściwości lub metody, JavaScript najpierw sprawdza obiekt bieżący,
  // a następnie idzie w górę łańcucha prototypów, aż znajdzie poszukiwany element lub dojdzie do końca.

  // W JavaScript praktycznie wszystko jest obiektem i ma prototyp.
  // Nawet podstawowe typy danych, takie jak liczby czy łańcuchy, mają swoje prototypy.
  // Dlatego możesz wywoływać metody na tych typach danych, takie jak toFixed() dla liczb czy toUpperCase() dla łańcuchów.

  // const str = 'test';
  // console.log(str.toUpperCase());

  // const num = 32;
  // console.log(num.toString())

  // -----------------------------------------------------------------------------
  // THIS
  // -----------------------------------------------------------------------------

  const personThis = {
    name: 'Jan',
    greet: function () {
      console.log(`Hello ${this.name}`);
    },
  };

  personThis.greet();

  // -----------------------------------------------------------------------------
  // RÓŻNICE POMIĘDZY FUNKCJĄ STRZAŁKOWĄ A FUNKCJĄ ZWYKŁĄ
  // -----------------------------------------------------------------------------

  // Funkcje strzałkowe nie mają własnego this, a zamiast tego odwołują się do this z zewnętrznego zakresu.

  const personDiff = {
    name: 'Object',
    arrowMethod: () => {
      // console.log(`Hello ${this.name}`); // błąd
    },
    nameMethod: function () {
      console.log(`Hello ${this.name}`);
    },
  };

  personDiff.arrowMethod();
  personDiff.nameMethod();

  return (
    <div>
      <input
        placeholder="Wprowadź liczbę"
        type="text"
        value={inputValue}
        onChange={handleChangeInput}
      />
      {error && <div>{error}</div>}
    </div>
  );

  // -----------------------------------------------------------------------------
  // LINKI POMOCNICZE:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
  // https://javascript.info/try-catch
  // https://javascript.info/error-handling
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling?retiredLocale=pl
  // https://www.sitepoint.com/javascript-error-handling

  // https://kursjs.pl/kurs/obiekty/obiekty-dziedziczenie
  // https://kursjs.pl/kurs/obiekty/obiekty-zaawansowane-this
  // https://javascript.info/prototypes
  // https://www.freecodecamp.org/news/a-beginners-guide-to-javascripts-prototype/
  // https://kinsta.com/blog/errors-in-javascript/
  // https://www.freecodecamp.org/news/the-complete-guide-to-this-in-javascript/

  // SOLID:
  // https://www.p-programowanie.pl/paradygmaty-programowania/zasady-solid
  // https://bmilewski.pl/wzorce/solid-w-javascript-tworzenie-solidnych-aplikacji/
  // https://devszczepaniak.pl/solid-kiss-i-dry/
};
