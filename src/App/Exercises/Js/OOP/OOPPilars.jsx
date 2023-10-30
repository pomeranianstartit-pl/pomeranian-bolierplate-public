export const OOPPilars = () => {
  return <div>OOP Pilars</div>;
};
// ABSTRAKCJA (Abstraction) - ukrywanie szczegółów implementacji, pokazujemy tylko to co chcemy
//
// 1. HERMETYZACJA (Encapsulation) - ukrywanie szczegółów implementacji
// 2. DZIEDZICZENIE (Inheritance) - dziedziczenie właściwości i metod z klasy nadrzędnej
// 3. POLIMORFIZM (Polymorphism) - instancja moze się zachować różnie w zależności od przekazanych danych
// 4. KOMPOZYCJA (Composition) - instancja może zawierać w sobie inne instancje

// Abstrakcja
class Logger {
  constructor(path) {
    this.path = path;
    this.defaultPath = 'C://Logger/file.txt';
  }

  save() {
    if (!this.path) {
      this.setDefaultPath();
    }

    console.log(`Saving data to ${this.path}`);
  }

  setDefaultPath() {
    this.path = this.defaultPath;
  }
}

// Hermetyzacja (zmienne publiczne, prywatne, protected)

// własność publiczna -> taki składnik który jest dostępny na zewnątrz klasy i mogą być wywoływane przez inne części programu/klasy

// własność prywatna -> taki składnik który jest dostępny tylko wewnątrz klasy i nie może być wywoływany przez inne części
//                      programu/klasy (nie jest to do końca prawdą)

// własność protected -> taki składnik który jest dostępny tylko wewnątrz klasy i klas które dziedziczą po tej klasie
//                    -> można tylko odczytać ale nie można zmienić - musi być dopisany getter

// static -> methoda lub właściwość która jest dostępna bez tworzenia instancji klasy

// get -> getter - pozwala na odczytanie wartości właściwości prywatnej lub protected

class Config {
  // _ - protected
  _specialConfig;

  constructor(specialConfig) {
    this.defaultConfig = { gray: '#ccc', red: '#F00' };
    this._specialConfig = specialConfig || {};
  }

  get specialConfig() {
    return this._specialConfig;
  }

  getConfig() {
    // # - private
    const config = this.#setConfig();

    return config;
  }

  #setConfig() {
    return { ...this.defaultConfig, ...this._specialConfig };
  }
}

// DZIEDZICZENIE I POLIMORFIZM

class Shape {
  constructor() {
    this.title = 'Kształt';
  }

  sayHello() {
    return `Cześć, jestem ${this.title}`;
  }

  calculateArea() {
    return 'Nie wiem jak obliczyć pole';
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super();
    this.name = name;
    this.radius = radius;
  }

  sayOuterHello() {
    return this.sayHello();
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(name, width, height) {
    super();
    this.name = name;
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

// KOMPOZYCJA

class Driver {
  constructor(name) {
    this.name = name;
  }

  drive() {
    return `${this.name} is driving`;
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
      return `${this.model} zaczął jechać, kerowcą jest ${this.driver.name}`;
    }

    return 'Nie ma kierowcy...';
  }
}

// KOMPOZYCJA
class Y {
  constructor() {
    this.title = 'Test Y';
  }

  sayHello() {
    return `Cześć, jestem ${this.title}`;
  }
}

class X {
  constructor(random) {
    this.random = random;
    this.y = new Y();
  }

  sayHello() {
    return this.y.sayHello();
  }
}

export const OOPPillars = () => {
  // Abstrakcja
  const newLogger = new Logger('E://data/file.txt');

  newLogger.save();

  // Hermetyzacja
  const config = new Config({ black: '#000', white: '#FFF' });
  console.log(config);
  console.log(config.getConfig());

  //   config.specialConfig = { yellow: '#FF0' }; -- error

  //   config.setConfig = () => {
  //     console.log('test');
  //   };

  console.log(config, 'config');

  // DZIEDZICZENIE I POLIMORFIZM
  const shape = new Shape();
  console.log(shape.calculateArea(), 'shape.calculateArea()');
  console.log(shape.sayHello(), 'shape.sayHello()');

  const circle = new Circle('Koło', 10);
  console.log(circle.calculateArea(), 'circle.calculateArea()');
  console.log(circle.sayHello(), 'circle.sayHello()');
  console.log(circle.sayOuterHello(), 'circle.sayOuterHello()');

  const recktangle = new Rectangle('Prostokąt', 10, 20);
  console.log(recktangle.calculateArea(), 'recktangle.calculateArea()');

  // KOMPOZYCJA
  const driver = new Driver('Andrzej');
  const car = new Car('BMW', 'X5');

  car.setDriver(driver);
  console.log(car.start());

  return <div>OOP Pillars</div>;
};
