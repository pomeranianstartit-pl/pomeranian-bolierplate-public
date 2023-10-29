// Zadanie 1. DZIEDZICZENIE
//      stwórz klasę Person posiadającą metodę, która wyświetli nam komunikat
//      introduce() => "I am a Person"
//      następnie stwórz dwie podklasy Builder i Doctor, dziedziczące metodę i wyświetlające odpowiednio
//      komunikat
//      introduce() => "I am a Person", "I am also a Doctor"
//      introduce() => "I am a Person", "I am also a Builder"
//      następnie stwórz podklasę Doctor: Pediatrician - metoda ma wyświetlić jedynie :
//      introduce() => "I'm a Pediatrician"

class Person {
  introduce() {
    return 'I am a Person';
  }
}

class Doctor extends Person {
  introduce() {
    return `${super.introduce()}, I am also a Doctor'`;
  }
}

class Builder extends Person {
  introduce() {
    return `${super.introduce()}, I am also a Builder'`;
  }
}

class Pediatrician extends Doctor {
  introduce() {
    return `I'm a Pediatrician`;
  }
}

const person = new Person();
const doctor = new Doctor();
const builder = new Builder();
const pediatrician = new Pediatrician();

[person, doctor, builder, pediatrician].forEach((item) =>
  console.log(item.introduce())
);

// Zadanie 2. Kompozycja
//      Tworzymy samochód w podejściu kompozycyjnym!
//      klasa Engine
//      start() => "engine is turned on
//      stop() => "engine is turned off
//      klasa Klaxon
//      beep() => "BEEEP!"
//      klasa SteeringWheel
//      turn(direction: string) => "Skręcamy w lewo/prawo
//      klasa GPS
//      navigate() => wyprintuje nam losowo: "turn right", "turn left", "drive straight"
//      stwórz klasę Car, która posiada metody: start, stop, beep, turn, navigate
//      w klasie Car powywołuj metody poszczególnych części auta

class Engine {
  start() {
    return 'engine is turned on';
  }
  stop() {
    return 'engine is turned off';
  }
}

class Klaxon {
  beep() {
    return 'BEEEP!';
  }
}

class SteeringWheel {
  turn(direction) {
    return `Turning ${direction}`;
  }
}

class GPS {
  navigate() {
    const directions = ['turn right', 'turn left', 'drive straight'];
    const randomDirection =
      directions[Math.floor(Math.random() * directions.length)];

    return randomDirection;
  }
}

class Car {
  constructor() {
    this.engine = new Engine();
    this.klaxon = new Klaxon();
    this.steeringWheel = new SteeringWheel();
    this.gps = new GPS();
  }

  start() {
    return this.engine.start();
  }
  stop() {
    return this.engine.stop();
  }
  beep() {
    return this.klaxon.beep();
  }
  turn(direction) {
    return this.steeringWheel.turn(direction);
  }
  navigate() {
    return this.gps.navigate();
  }
}

// Zadanie 3. Hermetyzacja
//      Stworzymy klasę komputera z poniższymi właściwościami:
//      prywatną zmienną (ulubione słowo) - faveWord = "I compute!"
//      prywatną metodę - add(x: number, y: number) - która zwraca sumę x i y
//      publiczną metodę compute - która przyjmuje 3 argumenty: 2 liczby, które chcemy do siebie dodać, oraz
//      argument typu number, który pomnoży wynik dodawania dwóch poprzednich argumentów ( wewnątrz
//      użyć metody add )
//      publiczną metodę introduce() - która wyprintuje ulubione słowo
//      poużywaj metod mini komputera

class Computer {
  #faveWord = 'I compute!';

  #add(x, y) {
    return x + y;
  }

  compute(num1, num2, multiplier) {
    const sum = this.#add(num1, num2);

    return sum * multiplier;
  }

  introduce() {
    console.log(this.#faveWord);
  }
}

export const OOPExercises = () => {
  const car = new Car();
  console.log(car.start());
  console.log(car.turn('left'));
  console.log(car.beep());
  console.log(car.stop());
  console.log(car.start());
  console.log(car.navigate());
  console.log(car.turn('right'));
  console.log(car.stop());

  const computer = new Computer();
  console.log(computer.compute(225, 420, 69));
  computer.introduce();

  return <div>Ćwiczenia z OOP.</div>;
};
