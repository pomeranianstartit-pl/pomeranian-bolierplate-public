import React from 'react';

export function JSThisKeyword() {
  // wywołanie w kontekście globalnym vanilla JS
  console.log(this);

  // w kontekscie funkcji

  console.log(this);
  function thisContext() {
    return console.log(this);
  }
  thisContext();

  // w kontekście obiektu

  const person = {
    name: 'Krzysiek',
    sayHello() {
      console.log(this.name);
    },
    typicalJSFunction: function () {
      console.log(this.name);
    },
    arrowJSFunction: () => console.log(this?.name),
  };

  person.sayHello(); // zwróci wartość property "name" - krzysiek
  person.typicalJSFunction(); // zwróci wartość property "name" - krzysiek
  person.arrowJSFunction(); // zwroci // zwróci wartość property "name" - undefined
  const arrowFunctionThis = person.arrowJSFunction;
  const callaArrowFunction = arrowFunctionThis.bind(person);
  callaArrowFunction();

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

  const personTwo = {
    name: 'Krzysiek',
    sayHello() {
      return `My name is: ${this.name}`;
    },
  };

  const personThree = {
    name: 'Andrzej',
  };

  console.log(personTwo.sayHello.call(personThree));

  function introduce(age) {
    return `My name is: ${this.name} and I'm ${age} years old`;
  }

  console.log(introduce.apply(personThree, [25]));

  return (
    <div>
      <button onClick={callaArrowFunction}>click</button>
    </div>
  );
}
