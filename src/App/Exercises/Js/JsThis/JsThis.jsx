import './styles.css';

export const JsThis = () => {
  //przykład 1 - wywołanie w kontekscie globalnym
  console.log(this); //this odnosi się do globalnego obiektu (w przeglądarce) (react zmienia kontekst this)

  //przykład 2 - wywołanie w kontekscie funkcji
  console.log(this); //this odnosi się do globalnego obiektu (w przeglądarce) (react zmienia kontekst this)
  function thisContext() {
    return console.log(this);
  }

  thisContext();

  //Przykład 3 - wywolanie w kontekście obiektu

  const person = {
    name: 'Maciej',
    sayHello() {
      console.log(this.name);
    },
    typicalJsFunction: function () {
      console.log(this.name);
    },
    arrowJsFunction: () => console.log(this?.name),
  };

  person.sayHello(); //zwróci nam wartość property "name" - Maciej
  person.typicalJsFunction(); // name Maciej
  person.arrowJsFunction(); //zwróci undefined

  //Bind function example()
  const module = {
    x: 42,
    getX: function () {
      return this.x;
    },
  };

  const unboundGetX = module.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // Expected output: undefined

  const boundGetX = unboundGetX.bind(module);
  console.log(boundGetX());
  // Expected output: 42

  //Aplly()

  //Przykład 4 - Wywołanie w kontekście klasy

  class Car {
    constructor(make) {
      this.make = make;
    }
    getMake() {
      console.log(this.make);
    }
  }

  const myCar = new Car('Honda');

  myCar.getMake();

  return <div className=""> </div>;
};
