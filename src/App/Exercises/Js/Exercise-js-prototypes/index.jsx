
export function JSPrototypesExercise () {

    //Definiujemy funckje konstruktora Car
    function Car(make, model) {
        this.make = make;
        this.model = model;
    }

    Object.prototype.getMake = function() {
        return this.make;
    };

    Object.prototype.getModel = function() {
        return this.model;
    };

    function Bike(param) {
        return param;
    }

    const myCar = new Car('Toyota', 'Camry');
    const myCarTwo = new Car('Fiat', '50');

    Array.prototype.newArrayMethod = function() {
        console.log("yes I new global array method");
    }
        const exampleArray = [1, 2, 3];
        exampleArray.map((item) => item);
        exampleArray.newArrayMethod();
    

    return (
        <div className="container--js-prototypes">
            Make1: {myCar.getMake()}
            Model1: {myCar.getModel()}
            Make2: {myCarTwo.getMake()}
            Model2: {myCarTwo.getModel()}

        </div>
    )

};