// DLACZEGO POWSTAŁY CLASSY?

// WYWOŁANIE FUNKCJI POWODUJE ZAALOKOWANIE ELEMENTU W PAMIĘCI NA RÓŻNYCH BANKACH PAMIĘCI
// function PersonCostructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHello = function () {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// function PersonCostructor(name, age) {
//     this.name = name;
//     this.age = age;
// }

// PersonConstructor.prototype.sayHello = function () {}

// ------------------------------------------------------------

// Klasa -> jest szablonem lu wzorcem, który definiuje strukturę i zachowanie obiektów.
//          Działa jako formularz do tworzenia obiektów - który opisuje jakie właściwości
//          i metody będą miały dane obiekty (INSTANCJE)

// Instancja -> to obiekt stworzony z klasy (na podstawie szablonu)
//              Każda instancja ma swoje własne właściwości i metody

// Konstruktor -> to specjalna metoda w klasie która jest wywoływana podczas tworzenia nowej instancji tej klasy.
//                Jest to miejsce, w którym można zainicjować właściwości obiektu i wykonać inne operacje inicjalizacyjne.
//                Każda klasa może mieć jeden constructor ale też nie musi (równie dobrze możemy dynamicznie go zmieniać)

// Metoda -> to funkcje zdefinowane wewnątrz klasy, które określają zachowanie obiektu.
//           Mogą operować na właściwościach instancji.

// Właściwość -> to wartość przypisana do instancji klasy.

// new -> operator który tworzy nową instancję klasy. Wywołuje konstruktor klasy.

// this -> odnosie się do obiektu w którym jest używany - jest powiązany z konkretnym obiektem(instancją) a nie z klasą.

// instanceof -> operator który sprawdza czy dany obiekt jest instancją danej klasy.

class Person {
  constructor(name, age, data = {}) {
    this.name = name;
    this.age = age;
    this.data = data;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }

  walk() {
    console.log(`${this.name} is walking`);
  }

  changeName(newName) {
    this.name = newName;
    console.log(`My new name is ${this.name}`);

    return 'OK jestem adam';
  }
}

const person1 = new Person('Jan', 65, { city: 'Warsaw' });
const person2 = new Person('Zosia', 20);

console.log(person1);
console.log(person2);

person1.sayHello();
person2.sayHello();

person1.walk();
person2.walk();

const changedValue = person1.changeName('Adam');
console.log(changedValue, 'changedValue');
person1.sayHello();

// console.log({}, '{}'); // {} === new Object()
// console.log(new Object(), 'new Object()');

// console.log([], '[]');
// console.log(new Array(), 'new Array()');

// const person3 = PersonConstructor('Jan', 65);
// const person4 = PersonConstructor('Zosia', 20);

export const OOPClass = () => {
  return <div>ćwiczenie z klasami</div>;
};
