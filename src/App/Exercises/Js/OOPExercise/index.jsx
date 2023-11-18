// Exercise 1.

// Stworzymy klasę komputera z poniższymi właściwościami:
//  prywatną zmienną (ulubione słowo) - faveWord = "I compute!"
//  prywatną metodę - add(x: number, y: number) - która zwraca sumę x i y
//  publiczną metodę compute - która przyjmuje 3 argumenty: 2 liczby, które chcemy do siebie dodać, oraz
//  argument typu number, który pomnoży wynik dodawania dwóch poprzednich argumentów ( wewnątrz
//  użyć metody add )
//  publiczną metodę introduce() - która wyprintuje ulubione słowo
//  poużywaj metod mini komputera

class Computer {
    //   #x = 5;
    //   constructor(x) {
    //     this.x = x;
    //   }
  
    #faveWord = 'I compute!';
  
    #add(a, b) {
      return a + b;
    }
  
    //   computeWithX(a, b) {
    //     return this.#add(a, b) * this.x;
    //   }
  
    compute(a, b, multiplier) {
      const sum = this.#add(a, b);
  
      return sum * multiplier;
    }
  
    introduce() {
      console.log(this.#faveWord);
    }
  }
  
  // --------------------------------------------------
  
  // Exercise 2.
  
  // stwórz klasę Person posiadającą metodę, która wyświetli nam komunikat
  //  introduce() => "I am a Person"
  //  następnie stwórz dwie podklasy Builder i Doctor, dziedziczące metodę i wyświetlające odpowiednio
  //  komunikat
  //  introduce() => "I am a Person", "I am also a Doctor"
  //  introduce() => "I am a Person", "I am also a Builder"
  //  następnie stwórz podklasę Doctor: Pediatrician - metoda ma wyświetlić jedynie :
  //  introduce() => "I'm a Pediatrician"
  
  // super() - wywołuje konstruktor klasy nadrzędnej
  
  class Person {
    introduce() {
      return 'I am a Person';
    }
  }
  
  class Builder extends Person {
    introduce() {
      return `${super.introduce()} + I am also a Builder`;
    }
  }
  
  class Doctor extends Person {
    introduce() {
      return `${super.introduce()} + I am also a Doctor`;
    }
  }
  
  class Pediatrician extends Doctor {
    introduce() {
      return 'I am a Pediatrician';
    }
  }
  
  // --------------------------------------------------
  
  // Exercise 3.
  
  //  Tworzymy samochód w podejściu kompozycyjnym!
  //    klasa Engine
  //    start() => "engine is turned on
  //    stop() => "engine is turned off
  //    klasa Klaxon
  //    beep() => "BEEEP!"
  //    klasa SteeringWheel
  //    turn(direction: string) => "Skręcamy w lewo/prawo
  //    klasa GPS
  //    navigate() => wyprintuje nam losowo: "turn right", "turn left", "drive straight"
  //    stwórz klasę Car, która posiada metody: start, stop, beep, turn, navigate
  //    w klasie Car powywołuj metody poszczególnych części auta
  
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
      return `Skręcamy w ${direction}`;
    }
  }
  
  class GPS {
    navigate() {
      const directions = ['Jedź w prawo', 'Jedź w lewo', 'Jedź prosto'];
      const randomIndex = Math.floor(Math.random() * directions.length);
  
      return directions[randomIndex];
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
  
  export const Exercise = () => {
    // Exercise 1.
    //   const computer = new Computer(5);
    const computer = new Computer();
    computer.introduce();
    console.log(computer.compute(2, 5, 7));
  
    // ------------------------------------------------
  
    // Exercise 2.
    const person = new Person();
    const builder = new Builder();
    const doctor = new Doctor();
    const pediatrician = new Pediatrician();
  
    console.log(person.introduce());
    console.log(builder.introduce());
    console.log(doctor.introduce());
    console.log(pediatrician.introduce());
  
    // ------------------------------------------------
  
    // Exercise 3.
    const car = new Car();
  
    console.log(car.start());
    console.log(car.beep());
    console.log(car.turn('lewo'));
    console.log(car.navigate());
    console.log(car.stop());
  
    return <div>OOP Exercise</div>;
  };