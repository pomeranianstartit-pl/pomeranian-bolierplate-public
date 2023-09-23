import './styles.css';

export const OOP = () => {
  //   ZADANIE 1.
  //   Stworzymy klasę komputera z poniższymi właściwościami:
  //   prywatną zmienną (ulubione słowo) - faveWord = "I compute!"
  //   prywatną metodę - add(x: number, y: number) - która zwraca sumę x i y
  //   publiczną metodę compute - która przyjmuje 3 argumenty: 2 liczby, które chcemy do siebie dodać, oraz
  //   argument typu number, który pomnoży wynik dodawania dwóch poprzednich argumentów ( wewnątrz użyć metody add )
  //   publiczną metodę introduce() - która wyprintuje ulubione słowo
  //   poużywaj metod mini komputera

  class Computer {
    #faveWord = 'I compute!';
    #add(x, y) {
      return x + y;
    }
    compute(a, b, c) {
      return this.#add(a, b) * c;
    }
    introduce() {
      console.log(`Ulubione słowo: ${this.#faveWord}`);
    }
  }

  const newComp = new Computer();
  console.log(newComp.compute(2, 2, 2));
  newComp.introduce();

  //   ZADANIE 2.
  //   stwórz klasę Person posiadającą metodę, która wyświetli nam komunikat
  //   introduce() => "I am a Person"
  //   następnie stwórz dwie podklasy Builder i Doctor, dziedziczące metodę i wyświetlające odpowiednio komunikat
  //   introduce() => "I am a Person", "I am also a Doctor"
  //   introduce() => "I am a Person", "I am also a Builder"
  //   następnie stwórz podklasę Doctor: Pediatrician - metoda ma wyświetlić jedynie :
  //   introduce() => "I'm a Pediatrician"

  class Person {
    introduce() {
      console.log('I am a Person');
    }
  }
  class Builder extends Person {
    introduce() {
      super.introduce();
      console.log('I am also a Builder');
    }
  }

  class Doctor extends Person {
    introduce() {
      super.introduce();
      console.log('I am also a Doctor');
    }
  }
  class Pediatrition extends Doctor {
    introduce() {
      console.log('I am also a Pediatrition');
    }
  }
  const newPerson = new Person();
  newPerson.introduce();
  const person = [new Doctor(), new Pediatrition(), new Builder()];
  person.forEach((person) => {
    if (person instanceof Person) {
      person.introduce();
    }
  });

  ////////////////////
  //   ZADANIE 3.
  //   Tworzymy samochód w podejściu kompozycyjnym!
  //     + klasa Engine
  //     + start() => "engine is turned on
  //     + stop() => "engine is turned off
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
      return 'Engine is turned on';
    }
    stop() {
      return 'Engine is turned off';
    }
  }

  class Klaxon {
    beep() {
      return 'BEEEP!';
    }
  }

  class SteeringWheel {
    turn(direction) {
      return `skręcamy w ${direction}`;
    }
  }
  class GPS {
    navigate() {
      const directions = ['turn right', 'turn left', 'drive straight'];
      const mathRandomIndex = Math.floor(Math.random() * directions.length);
      return directions[mathRandomIndex];
    }
  }

  class Car2 {
    constructor() {
      this.engine = new Engine();
      this.steeringWheel = new SteeringWheel();
      this.klaxon = new Klaxon();
      this.gps = new GPS();
    }
    start() {
      return this.engine.start();
    }
    stop() {
      return this.engine.stop();
    }
    klaxon2() {
      return this.klaxon.beep();
    }
    turn() {
      return this.steeringWheel.turn(direction);
    }
    navigate() {
      return this.gps.navigate();
    }
  }

  const myCar2 = new Car2();
  console.log(myCar2.start());
  console.log(myCar2.stop());
  console.log(myCar2.klaxon2());
  console.log(myCar2.navigate());

  return (
    <div>
      <h1>OOP Zadania</h1>

      <h2>Zadanie 1</h2>
    </div>
  );
};
