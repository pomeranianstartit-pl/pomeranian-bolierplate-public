import './styles.css';

export const JsPrototypes = () => {
  // Definiujemy funkcje konstruktora Car
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

  const myCar = new Car('Toyota', 'Camry');
  const myCarTwo = new Car('Fiat', '50');

  Array.prototype.newArryMethod = function () {
    console.log('yes, I.m a New glopbal array method');
  };

  const exampleArray = [1, 2, 3];

  return (
    <div className="container--js-prototypes">
      Make: {myCar.getMake()}
      <br />
      Model: {myCar.getModel()}
      <br />
      Make: {myCarTwo.getMake()}
      <br />
      Model: {myCarTwo.getModel()}
      <br />
      Array method: {exampleArray.newArryMethod()}
      <br />
    </div>
  );
};
