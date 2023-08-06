
export function JSThisKeyWordExercise () {

    //Przykład 1 - Wywołanie w kontekście globalnym
   console.log(this); // this odnosi się do globalnego obiektu (w przeglądarce window w Vanilla JS)

      //Przykład 2 - Wywołanie w kontekście funkcji
      console.log(this); // this odnosi się do globalnego obiektu (w przeglądarce window w Vanilla JS)
      function thisContext() {
        return console.log(this);
      }
      thisContext();

      //Przykład 3 - Wywołanie w kontekście obiektu
      const person = {
        name: "Klaudia",
        sayHello() {
            console.log(this);
        },
        typicalJSFunction: function () {
            console.log(this.name);
        },
        arrowJSFunction: () => console.log(this?.name)
      }


      person.sayHello(); //Zwróci nam wartość property "name" - Klaudia
      person.typicalJSFunction(); //Zwróci nam wartość property "name" - Klaudia
      person.arrowJSFunction(); //Zwróci nam wartość proprty "name" - undefined

      //bind() function example call:
      const arrowFunctionThis = person.arrowJSFunction;
      const callaArrowFunction = arrowFunctionThis.bind(person); // Bind() nie pomoże na contekst this w przypadku arrowFunction


      //Przykład 4 - Wywołanie w kontekście klasy
      class Car {
        constructor(make) {
            this.make = make;
        }
        getMake() {
            console.log(this.make)
        }
      }
      const myCar = new Car("Toyota");
      myCar.getMake();


      //Call() function example implementation
      const personTwo = {
        name: 'Klaudia',
        sayHello() {
            console.log(`My name is: ${this.name}`);
        },
    };

    const personThree = {
        name: 'Matthiew'
    }

    console.log(personTwo.sayHello.call(personThree));

    //Apply() function example implementation:
    // apply zachowuje sie podobnie do funkcji call() ale przyjmuje parametry jak obiekty/tablice.

    function introduce(age) {
        return `My name is: ${this.name} and I'm ${age} years old`;
    }
    console.log(introduce.apply(personThree, [25]));
    
    return (
        <div className="">
           <button onClick={callaArrowFunction}></button>
        </div>
    );

}