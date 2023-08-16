export function Exercise() {
  // TRY CATCH
  // --------------------------------------

  // 1. Składnia TRY CATCH

  // jeżeli chcemy zareagować na konkretny błąd
  try {
    // jakiś kod który może wywołać błąd
  } catch (error) {
    console.log(error);
    // kod który wykona się jeśli wystąpi błąd
  }

  // jeżeli nie zależy Nam na informacji związanej z błędem
  try {
    // jakiś kod który może wywołać błąd
  } catch {
    console.log('błąd');
    // kod który wykona się jeśli wystąpi błąd
  }

  // --------------------------------------
  // 2. Kolejność wykonywania kodu
  // --------------------------------------

  try {
    // 1. operacja - wykona się
    // 2. operacja - wystąpi błąd
    // ... kod który jest ignorowany -> przechodzimy do catch
    // 3. operacja - zostanie pominięta
    // ...reszta kodu
  } catch {
    // kod który wykona się od razu dla 2 operacji
    console.log('błąd');
  }

  // try {
  //   alert('try');

  //   lalala; // błąd

  //   alert('End of try runs');
  // } catch {
  //   alert('Error has occured!');
  // }

  // 3. try...catch działa tylko ddla błędów w czasie wykonania (runtime error)

  // try {
  //   {{{{{;
  // } catch (err) {
  //   alert('The engine cant understand this code, its invalid');
  // }

  // 4. try...catch działa dla kodu synchronicznego

  // try {
  //   setTimeout(() => {
  //     noSuchVariable; // błąd
  //   }, 1000);
  // } catch {
  //   alert('wont work');
  // }

  // 5. try...catch zadziała dla kodu asynchronicznego w tym przypadku

  // setTimeout(() => {
  //   try {
  //     noSuchVariable; // błąd
  //   } catch {
  //     alert('will work');
  //   }
  // }, 1000);

  // --------------------------------------
  // FINALLY
  // --------------------------------------

  // try {
  //   // kod który może wywołać błąd
  //   const result = someUndefined * 2;
  // } catch {
  //   console.log('wystąpił błąd');
  // } finally {
  //   console.log('zawsze się wykona - informacja niezależna od try/catch');
  // }

  // --------------------------------------
  // OBSŁUGA BŁĘDÓW
  // --------------------------------------

  try {
    // kod który może wywołać błąd
    const result = someUndefined * 2;
  } catch (error) {
    console.log('wystąpił błąd', error.name, error.stack, error.message);
  } finally {
    console.log('zawsze się wykona - informacja niezależna od try/catch');
  }

  // --------------------------------------
  // OBSŁUGA BŁĘDÓW - CUSTOMOWE
  // --------------------------------------

  function divide(a, b) {
    if (b === 0) {
      throw new Error('Nie dziel przez zero');
    }

    return a / b;
  }

  try {
    const result = divide(10, 0);
    console.log('Wynik dzielenia:', result);
  } catch (error) {
    // wysyłamy informacje do serwera z konkretnym błędem
    console.log(error.message, 'Wystąpił błąd dla próby dzielenia przez zero');
  }

  // --------------------------------------
  // PROTOTYPE
  // --------------------------------------

  // Prototyp w Javascript jest mechanizmem, który pozwala obiektom dziedziczyć właściwości i metody od innych obiektów.
  // Każdy obiekt z wyjątkiem niektórych wbudowanych typów, ma prototyp. Obiekty dziedziczą właściwości i metody z prototypu swojego konstruktora.
  // Prototpy tworzą tzw. "łańcuch prototypów" (prototype chain) który umożliwia dostęp do właściwości i metod z wyższych poziomów hierarchi.

  class PersonClass {
    constructor(name) {
      this.name = name;
    }

    sayHello() {
      console.log(`Cześć jestem ${this.name}`);
    }
  }

  function Person(name) {
    this.name = name;

    // function sayHello() {
    //   console.log(`Cześć jestem ${this.name}`);
    // }
  }

  Person.prototype.sayHello = function () {
    console.log(`Cześć jestem ${this.name}`);
  };

  const person1 = new Person('Jan');
  const person2 = new Person('Tom');

  person1.sayHello();
  person2.sayHello();
  console.log(person1, person2);

  // --------------------------------------
  // PROTOTYPE CHAIN
  // --------------------------------------

  // Łańcuch prototypów to sekwencja połaczonych prototypów, który umożliwiają dziedziczenie własności i metod w hierarchi obiektów.
  // Kiedy próbujesz użyskać dostęp do właściwości lub metody, Javascript najpierw sprawdza obiekt bieżący
  // A następnie idzie w górę łańcucha prototypow, aż znajdzie poszukiwany element lub dojdzie do końca.

  console.log(person1.hasOwnProperty('name')); // true
  console.log(person1.hasOwnProperty('sayHello')); // false

  // Właściwość name jest dziedzieczona z prototypu Person.prototype
  // Właściwość sayHello jest dziedzieczona z prototypu Object.prototype

  // W JavaScript wszystko ma prototyp

  const num = 42;
  console.log(num.toFixed(2));

  const str = 'Hello';
  console.log(str.toLowerCase());

  // --------------------------------------
  // THIS
  // --------------------------------------

  // This w JavaScript jest odniesieniem do obiektu, w którym wywołana jest aktualna funkcja.
  // Jest to dynamiczne odniesienie, które zależy od kontekstu, w jakim jest używane.
  // THIS jest istosne, ponieważ pozwala na dostęp do właściwości i metod obiektu, na którym zostało wywołane,
  // umożliwiając tworzenie bardziej elastycznych i reużywalnych metod/funkcji.

  const personThis = {
    name: 'John',
    greet: function () {
      console.log(`Hello ${this.name}`);
    },
  };

  personThis.greet();

  const objThis = {
    name: 'Obiekt',
    arrowMethod: () => {
      // console.log(this.name); // undefined
    },
    namedMethod: function () {
      console.log(this.name); // Obiekt
    },
  };

  // objThis.arrowMethod();
  objThis.namedMethod();

  // --------------------------------------
  // THIS w KLASIE A w FUNKCJI
  // --------------------------------------

  class Counter {
    constructor() {
      this.count = 0;
    }

    incerement() {
      this.count++;
    }
  }

  const myCounter = new Counter();
  myCounter.incerement();

  console.log(myCounter.count);

  function regularCounter() {
    this.count = 0;
    this.incerement = function () {
      this.count++;
    };
  }

  const regular = new regularCounter();
  regular.incerement();

  console.log(regular.count);

  // -----------------------------------------------------------------------------
  // LINKI POMOCNICZE:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
  // https://kursjs.pl/kurs/obiekty/obiekty-dziedziczenie
  // https://kursjs.pl/kurs/obiekty/obiekty-zaawansowane-this
  // https://javascript.info/try-catch
  // https://javascript.info/prototypes
  // https://javascript.info/error-handling
  // https://www.freecodecamp.org/news/a-beginners-guide-to-javascripts-prototype/
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling?retiredLocale=pl
  // https://kinsta.com/blog/errors-in-javascript/
  // https://www.sitepoint.com/javascript-error-handling
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide?retiredLocale=pl
  // https://www.freecodecamp.org/news/the-complete-guide-to-this-in-javascript/

  return <div>Try Catch Prototype</div>;
}
