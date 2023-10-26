import React from 'react';

/*
1. HERMETYZACJA (Encapsulation) - kontrola dostepu do wlasciwosci i metod obiektu
2. DZIEDZICZENIE (Inheritance) - przejmowanie i rozszerzanie wlasciwosci i metod
3. POLIMORFIZM (Polymorphism) - obiekt moze sie zachowywac roznie w zaleznosci od przekazanych danych
4. ABSTRAKCJA (Abstraction) - ukrywamy szczegoly, a pokazujemy tylko to co jest istotne



Abstrakcja polega na ukrywaniu wszelkich pól i metod tak, 
aby jak najmniejsza ich ilość była widoczna dla posiadających
 instancje tej klasy. 
Mówiąc prościej: korzystającego z naszej klasy powinien interesować
 tylko wynik wywołania konkretnej metody 
– reszta szczegółów jest dla niego nieistotna.

DODATKOWO: Kompozycja (Composition) - laczenie obiektow 

*/

export const OOP4Pillars = () => {
  console.log('-----4 Pillars-----');
  console.log('-----ABSTRAKCJA-----');
  /* ABSTRAKCJA */
  class Logger {
    constructor(path) {
      this.path = path;
      this.defaultPath = 'D://Logger/file.txt';
    }

    save() {
      if (!this.path) {
        this.setDefaultPath();
      }

      console.log(`Wiadomość zapisana - ${this.path}`);
    }

    setDefaultPath() {
      this.path = this.defaultPath;
    }
  }

  const logger1 = new Logger('C://Logger1.txt');
  logger1.save();
  console.log(logger1.path);
  logger1.path = 'Zmieniona ściezka...';
  console.log(logger1.path);

  const logger2 = new Logger();
  logger2.setDefaultPath = function () {
    console.log('ZMIENIŁEM FUNKCJE');
  };
  logger2.save();

  /* HERMETYZACJA - public, private (# - nie dostepu poza klasa) i protected (_ - mozna tylko odczytac, ale musi byc dopisany getter) */
  console.log('-----HERMETYZACJA-----');
  class Config {
    _specialConfig;
    constructor(specialConfig) {
      this.defaultConfig = { gray: 'f3f3f3', yellow: 'ff0' };
      this._specialConfig = specialConfig || {};
    }

    get specialConfig() {
      return this._specialConfig;
    }

    getConfig() {
      const config = this.#setConfig();
      return config;
    }

    #setConfig() {
      return { ...this._defaultConfig, ...this.specialConfig };
    }
  }

  const config = new Config({ black: '#000', white: 'fff', gray: 'f6f6f6' });
  console.log(config);
  console.log(config.getConfig());
  // ERROR ⬇️
  //   config.#setConfig = function () {
  //     console.log('ZMIENIŁEM FUNKCJE');
  //   };
  console.log('SPECIAL CONFIG:', config._specialConfig);
  // ERROR ⬇️
  //   config.specialConfig = { red: '#111' };

  /* DZIEDZICZENIE I POLIMORFIZM */
  console.log('-----DZIEDZICZENIE I POLIMORFIZM-----');
  class Shape {
    constructor() {
      this.title = 'Kształt';
    }

    calculateArea() {
      return 'Kształ nie został zdefiniowany więc nie mogę obliczyć pola powierzchni';
    }
  }

  class Circle extends Shape {
    constructor(name) {
      super();
      this.name = name;
      this.radius = 5;
    }

    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape {
    constructor(name) {
      super();
      this.name = name;
      this.width = 5;
      this.height = 10;
    }

    calculateArea() {
      return this.width * this.height;
    }
  }

  const shape = new Shape();
  const circle = new Circle('Koło');
  const rectangle = new Rectangle('Prostokąt');

  function displayArea(shape) {
    console.log(shape.calculateArea());
  }
  displayArea(shape);
  displayArea(circle);
  displayArea(rectangle);

  /* KOMPOZYCJA */
  console.log('-----KOMPOZYCJA-----');
  class Driver {
    constructor(name) {
      this.name = name;
    }

    drive() {
      return console.log(`${this.name} prowadzi 🚗`);
    }
  }

  class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
      this.driver = null;
    }

    setDriver(driver) {
      this.driver = driver;
    }

    start() {
      console.log(this.driver);
      if (this.driver) {
        return console.log(
          `${this.model} zaczął jechać, a driverem jest ${this.driver.name}`
        );
      }
      return console.log('Nie ma kierowcy 😢');
    }
  }

  const driver = new Driver('Andrzej');
  const car = new Car('Volkswagen', 'Golf');
  car.setDriver(driver);
  car.start();

  return <div>OPP 4 Pillars</div>;
};
