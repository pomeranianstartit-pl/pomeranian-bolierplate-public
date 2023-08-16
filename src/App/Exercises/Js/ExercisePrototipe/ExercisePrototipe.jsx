import React from 'react';
import './style.css';

export function ExercisePrototipe() {
  // Car constructor function
  function Car(make, model) {
    this.make = make;
    this.model = model;
  }

  // Adding custom methods to the prototype of the Object
  Object.prototype.getMake = function () {
    return this.make;
  };
  Object.prototype.getModel = function () {
    return this.model;
  };

  // Creating a new Car instance
  const myCar = new Car('Toyota', 'Camry');

  // Adding a custom method to the prototype of the Array
  Array.prototype.newArrayMethod = function () {
    console.log('jestem tutaj');
  };

  // Creating an example array
  const exampleArray = [1, 2, 3];

  // Using the map method on the example array
  exampleArray.map((item) => item);

  // Calling the custom method on the example array
  exampleArray.newArrayMethod();

  return (
    <div>
      make: {myCar.getMake()},
      model: {myCar.getModel()}
      {exampleArray.newArrayMethod()}
    </div>
  );
}
