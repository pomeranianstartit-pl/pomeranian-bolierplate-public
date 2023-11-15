import React from 'react';

/*
KLASA - jest szablonem lub wzorcem, który definiuje strukturę i zachowanie obiektów. Działa jako forma blueprintu, która opisuje, jakie właściwości i metody będą dostępne w każdej instancji tej klasy.

INSTANCJA - to konkretny obiekt utworzony na podstawie klasy. Każda instancja ma swoje unikalne właściwości, ale korzysta z tych samych metod zdefiniowanych w klasie.

CONSTRUCTOR - to specjalna metoda w klasie, która jest wywoływana podczas tworzenia nowej instancji tej klasy. Jest to miejsce, w którym można zainicjować właściwości obiektu i wykonać inne operacje inicjalizacyjne. Każda klasa może mieć tylko jeden konstruktor.

METODY - to funkcje zdefiniowane wewnątrz klasy, które określają zachowanie obiektu. Mogą operować na właściwościach instancji.

NEW - operator który tworzy nową instancję klasy. Na przykład: const myInstance = new MyClass();

THIS -  odnosi się do obiektu w którym jest uzywany, jest wiazany do konkretnego obiektu.

INSTANCEOF - operator instanceof jest używany do sprawdzenia, czy dany obiekt jest instancją danej klasy. Zwraca boolean
*/

export const OOPClass = () => {
  // klasa Person
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    sayHello() {
      return console.log(`Cześć, mam na imię ${this.name}!`);
    }

    walk() {
      return console.log(`${this.name} tup tup..`);
    }

    changeName() {
      this.name = 'Spiderman';
    }
  }

  const personInstance1 = new Person('Henryk', 16);
  console.log(personInstance1);
  personInstance1.sayHello();
  personInstance1.walk();
  personInstance1.changeName();

  const personInstance2 = new Person('Fryderyk', 26);
  console.log(personInstance2);
  personInstance2.sayHello();
  personInstance1.walk();
  personInstance2.walk();

  console.log(personInstance1 instanceof Person);

  /* // konstruktor PersonConstructor === class Person
  function PersonConstructor(name, age) {
    this.name = name;
    this.age = age;
  }

  PersonConstructor.prototype.sayHello = function () {
    return `Cześć, mam na imię ${this.name}!`;
  };
  const personConstructorInstance1 = new PersonConstructor('Adela', 24);
  console.log(personConstructorInstance1);
  console.log(personConstructorInstance1.sayHello());
*/
  return <div>OOP Class</div>;
};
