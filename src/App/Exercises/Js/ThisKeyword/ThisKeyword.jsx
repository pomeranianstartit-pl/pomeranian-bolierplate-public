import React from 'react';

import './style.css';

export function ThisKeyword() {
  // Przykład 1 - Wyołanie w kontekście globalnym.
  console.log(this); // this onosi sie do globalnego obiektu (w przeglądarce window w Vanilla JS)

  // Przykład 2 - Wyołanie w kontekście funkcji.
  console.log(this); // this odnosi sie do globalnego obiektu (w przeglądarce window w Vanilla JS)
  function thisContext() {
    return console.log(this);
  }
  thisContext();

  // Przykład 3 - Wyołanie w kontekście obkietu.
  const person = {
    name: 'Maciej',
    sayHello() {
      console.log(this.name);
    },
    typicalJSFunction: function () {
      console.log(this.name);
    },
    arrowJSFunction: () => console.log(this?.name),
  };

  person.sayHello(); // Zwroci name wartosc property  "name" - Maciej
  person.typicalJSFunction(); // Zwroci name wartosc property  "name" - Maciej
  person.arrowJSFunction(); // Zwroci name wartosc property  "name" - undefined

  //bind() function example call:
  const arrowFunctionThis = person.arrowJSFunction;
  const callaArrowFunction = arrowFunctionThis.bind(person); // Bind() nie pomorze na contekst this w przypadku arrowFunction

  // Przykład 4 - Wywolanie w kontekśćie klasy
  class Car {
    constructor(make) {
      this.make = make;
    }

    getMake() {
      console.log(this.make);
    }
  }

  const myCar = new Car('Toyota');

  myCar.getMake();

  //call() function example imeplementation:

  const personTwo = {
    name: 'Maciej',
    sayHello() {
      return `My name is:  ${this.name}`;
    },
  };

  const personThree = {
    name: 'Matthiew',
  };

  console.log(personTwo.sayHello.call(personThree));

  //apply() function example implementation:
  // apply zachowuje sie podobnie do funkcji call() ale przyjmuje parametry jak obiekty/tablice.
  function introduce(age) {
    return `My name is:  ${this.name} and I'm ${age} years old`;
  }

  console.log(introduce.apply(personThree, [25]));
  return (
    <div>
      <p>zobacz w konsolę</p>
    </div>
  );
}
