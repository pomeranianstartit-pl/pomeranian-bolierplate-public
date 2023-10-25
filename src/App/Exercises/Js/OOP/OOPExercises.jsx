import React from 'react';

export const OOPExercises = () => {
  //Zadanie z dziedziczności
  class Person1 {
    introduce() {
      return 'I am a Person';
    }
  }

  class Builder extends Person1 {
    introduce() {
      return super.introduce() + ', I am also a Builder';
    }
  }

  class Doctor extends Person1 {
    introduce() {
      return super.introduce() + ', I am also a Doctor';
    }
  }

  class Pediatrician extends Doctor {
    introduce() {
      return 'I am a Pediatrician';
    }
  }

  const person = new Person1();
  const builder = new Builder();
  const doctor = new Doctor();
  const pediatritian = new Pediatrician();

  // Zadanie z hermetyzacji

  class Computer {
    constructor(x, y) {
      this.x = 4;
      this.y = 3;
    }
    #favWord = 'I Compute!';

    #add(x, y) {
      return this.x + this.y;
    }
    introduce() {
      return this.#favWord;
    }
    compute() {
      return this.#add * 3;
    }
  }
  const myComputer = new Computer();

  //Zadanie z kompozycji

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
      return 'BEEP!';
    }
  }
  class SteeringWheel {
    constructor(direction) {
      this.direction = direction;
    }
    turn(direction) {
      return `Turn ${this.direction}`;
    }
  }
  class GPS {
    navigate() {
      const directions = ['turn right', 'turn left', 'drive straight'];
      const randomDirection =
        directions[Math.floor(Math.random() * directions.length)];
      return directions[randomDirection];
    }
  }

  class Car {
    constructor() {
      this.engine = new Engine();
      this.klaxon = new Klaxon();
      this.SteeringWheel = new SteeringWheel();
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
      return this.SteeringWheel.turn(direction);
    }

    navigate() {
      return this.gps.navigate();
    }
  }

  const newCar = new Car();

  return (
    <div>
      <h3> OOP Exercises</h3>
      <br />
      <h4>Inheritance exercise</h4>
      <div>{person.introduce()}</div>
      <div>{builder.introduce()}</div>
      <div>{doctor.introduce()}</div>
      <div>{pediatritian.introduce()}</div>
      <h4>Hermetyzacja</h4>
      <div>{myComputer.introduce()}</div>
      <div>{myComputer.compute()}</div>
      <h4>Kompozycja</h4>
      <div>{newCar.start()}</div>
      <div>{newCar.stop()}</div>
      <div>{newCar.beep()}</div>
      <div>{newCar.turn()}</div>
      <div>{newCar.navigate()}</div>
    </div>
  );
};
