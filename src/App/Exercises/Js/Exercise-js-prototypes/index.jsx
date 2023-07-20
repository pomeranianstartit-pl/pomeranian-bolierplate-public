import React from 'react';

export function JSPrototypesExercise() {
  // Car constructor
  function Car(make, model) {
    this.make = make;
    this.model = model;
  }

  Object.prototype.getMake = function () {
    return this.make;
  };

  Object.prototype.getModel = function () {
    return this.model;
  };

  Array.prototype.newArrayMethod = function () {
    console.log('yes I new global array method');
  };

  const myCar = new Car('Toyota', 'Camry');

  const exampleArray = [1, 2, 3];

  return (
    <div>
      Make: {myCar.getMake()} Model: {myCar.getModel()}{' '}
      {exampleArray.newArrayMethod()}
    </div>
  );
}
