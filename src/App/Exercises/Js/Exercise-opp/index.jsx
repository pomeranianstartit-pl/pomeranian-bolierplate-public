import './styles.css';

// const user1 = {
//   name: 'Marcin',
//   sayHello: () => {
//     console.log('Cześć jestem Marcin!');
//   },
// };

// const user2 = {
//   name: 'Sara',
//   sayHello: () => {
//     console.log('Cześć jestem Sara!');
//   },
// };

// const arrayOfUsers = [user1, user2];

// user1.sayHello(); // console.log -> 'Cześć jestem Marcin!'
// user2.sayHello(); // console.log -> 'Cześć jestem Sara!'

// --------------------------------------------------------------------

// function TestFunction() {
//   function TestFunction2() {
//     console.log(this, 'this') // console.log -> this = window
//   }
//   console.log(this, 'this') // console.log -> this = window
// }

// --------------------------------------------------------------------

const user = {
  name: 'Marcin',
  sayHello: function () {
    // this === obiekt {user}
    console.log(`Cześć jestem ${this.name}!`);
  },
  // sayHello: () => {
  // this === funkcja strzałkowa
  //   console.log('Cześć jestem Marcin!');
  // },

  changeName: function (newName) {
    this.name = newName;
  },
};

user.sayHello(); // console.log -> 'Cześć jestem Marcin!'
user.name = 'Sara';
user.sayHello(); // console.log -> 'Cześć jestem Sara!'
user.changeName('Szymon');
user.sayHello(); // console.log -> 'Cześć jestem Szymon!'

// --------------------------------------------------------------------

function makeUser(name) {
  return {
    name: name,
    changeName: function (newName) {
      this.name = newName;
    },
    sayHello: function () {
      console.log(`Cześć jestem ${this.name}!`);
    },
  };
}

const user1 = makeUser('Sara');
const user2 = makeUser('Marcin');

user1.sayHello();
user2.changeName('Wojtek');

// --------------------------------------------------------------------
// const newArray = new Array

// function User(name) {
//   this.name = name;
//   this.changeName = function (newName) {
//     this.name = newName;
//   };
//   this.sayHello = function () {
//     console.log(`Cześć jestem ${this.name}!`);
//   };
// }

// const user3 = new User('Karol');
// user3.sayHello();
// user3.changeName('Wojtek');
// --------------------------------------------------------------------

class User {
  constructor(name) {
    this.name = name;
  }

  changeName(newName) {
    this.name = newName;
  }

  sayHello() {
    console.log(`Cześć jestem ${this.name}!`);
  }
}

const user4 = new User('Anna');

user4.sayHello();
user4.changeName('Wojtek');

// --------------------------------------------------------------------

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   static from = 'Earth'

//   static eat() {
//     console.log('Eats right now...');
//   }

//   speak() {
//     console.log(`${this.name} makes a noise`);
//   }
// }

// Animal.from // -> Earth

// class Dog extends Animal {
//   speak() {
//     console.log(`${this.name} barks`);
//   }
// }

// class Cat extends Animal {
//   speak() {
//     super.speak();
//   }
// }

// const d1 = new Dog('Ciri');
// const d2 = new Cat('Burek');

// d1.speak(); // barks
// d1.speak(); // makes a noise

// Animal.eat()

// --------------------------------------------------------------------

// class Color {
//   #values;
//   constructor(r, g, b) {
//     this.#values = [r, g, b];
//   }

//   getRed() {
//     return this.#values[0];
//   }

//   setRed(value) {
//     this.#values[0] = value;
//   }
// }

// newColor = new Color(204, 235, 124);
// newColor.setRed(123);
// newColor.values; // [r,g,b]
// newColor.getRed(); // 123
// newColor.values; // nie zadziała -> zmienna prywatna

export function ExerciseOpp() {
  return <div>OOP</div>;
}