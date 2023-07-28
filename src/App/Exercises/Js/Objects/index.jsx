import './styles.css';

export const Objects = () => {
  // --------------------------------------------------------------------
  // OBJECTS
  // --------------------------------------------------------------------

  // const newObj = new Object();
  const person = {
    4: 'four',
    name: 'John',
    age: 32,
    footNumber: 46,
    sayName: function () {
      console.log('John is your name');
    },
    additionalData: {
      height: 180,
      weight: 80,
    },
  };

  const personNameAcces = 'name';

  console.log(person.name); // dot access
  console.log(person[personNameAcces]); // bracket access
  person.sayName();

  // --------------------------------------------------------------------

  // person.name = 'Adam';
  person[personNameAcces] = 'Adam';
  person[4] = 156;
  console.log(person, 'after change');

  // --------------------------------------------------------------------
  // SPREAD OPERATOR
  // --------------------------------------------------------------------

  const defaults = { option1: true, option2: false };
  const customOptions = { ...defaults, option1: false };

  console.log(customOptions, 'customOptions');

  // --------------------------------------------------------------------
  // DESKTRUKTURYZACJA
  // --------------------------------------------------------------------

  const personDestruct = { name: 'John', age: 32, footNumber: 46 };

  console.log(personDestruct.name, personDestruct.age);

  const { name, age } = personDestruct;
  console.log(name, age);

  // --------------------------------------------------------------------
  // USUWANIE KLUCZA Z OBIEKTU
  // --------------------------------------------------------------------

  delete personDestruct.footNumber;
  console.log(personDestruct);

  // --------------------------------------------------------------------
  // OBIEKTY - METODY
  // --------------------------------------------------------------------

  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 3, c: 4 };

  // OBJECT ASSIGN - mergowanie obiektów

  const obj3 = Object.assign({}, obj1, obj2);
  console.log(obj3);

  // OBJECT ENTRIES - zwraca tablicę zawierającą pary klucz-wartość
  console.log(Object.entries(obj3));

  // OBJECT KEYS - zwraca tablicę zawierającą klucze obiektu
  console.log(Object.keys(obj3));

  // OBJECT VALUES - zwraca tablicę zawierającą wartości obiektu
  console.log(Object.values(obj3));

  // --------------------------------------------------------------------
  // OBIEKTY - METODY - MUTOWALNE I NIEMUTOWALNE
  // --------------------------------------------------------------------

  //   Mutujące operacje na obiekcie zmieniają jego zawartość (np. dodawanie/usuwanie pól), natomiast niemutujące operacje zwracają nowe obiekty lub wartości, nie zmieniając oryginalnego obiektu.

  // Mutujące operacje:
  //                    obj.property = value, delete obj.property, Object.assign(target, source), Object.defineProperty(obj, key, descriptor)
  // Niemutujące operacje:
  //                    Object.assign({}, obj), Object.freeze(obj), Object.seal(obj), Object.keys(obj), Object.values(obj), Object.entries(obj)

  return <div>test</div>;
};
