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

    return `OK jestem  ${this.name}`;
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

export function OOPClass() {
  return <div>ćwiczenie z klasami</div>;
}
