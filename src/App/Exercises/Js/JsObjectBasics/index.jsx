export const JsObjectBasics = () => {
  // --------------------------------------------------------------------

  //

  const car = {
    brand: 'Ford',

    model: 'Mustang',

    year: 1964,
  };

  console.log(car.brand, 'car.brand'); // dot access

  console.log(car['brand'], "car['brand']"); // bracket access

  // 1. delete - property from object

  console.log(car, 'car before delete');

  delete car.year;

  console.log(car, 'car after delete');

  // 2. assign() - copy properties from one object to another

  const newCar = Object.assign({}, car, { type: 'muscle car' });

  console.log(newCar, car, 'newCar, car');

  // const target = { a: 1, b: 2 };

  // const source = { b: 4, c: 5 };

  // const returnedTarget = Object.assign(target, source);

  // console.log(target);

  // console.log(returnedTarget === target);

  // const newTarget = Object.assign({}, target, source)

  // console.log(newTarget)

  // console.log(newTarget === target)

  // TWORZENIE KOPI OBIEKTU

  // DLACZEGO RÓŻNE SPOSOBY

  const notCopyCar = car;

  console.log(notCopyCar === car, 'notCopyCar === car');

  console.log(notCopyCar, car, 'notCopyCar, car');

  // 1. Sposob - preferowany - es6

  const copyCar1 = { ...car };

  console.log(copyCar1 === car, 'copyCar1 === car');

  console.log(copyCar1, car, 'copyCar1, car');

  // 2. Sposob

  const copyCar2 = Object.assign({}, car);

  console.log(copyCar2 === car, 'copyCar2 === car');

  console.log(copyCar2, car, 'copyCar2, car');

  // 3. Sposob

  const copyCar3 = JSON.parse(JSON.stringify(car));

  console.log(copyCar3 === car, 'copyCar3 === car');

  console.log(copyCar3, car, 'copyCar3, car');

  // --------------------------------------------------------------------

  // 3. entries() - returns an array of a given object's own enumerable string-keyed property [key, value] pairs

  const entries = Object.entries(car);

  console.log('----------', entries, 'entries');

  const obj1 = {
    a: 'somestring',

    b: 42,

    // object entries zwróci nam ['c', {d: 'd'}] dla poniższej lini

    c: {
      d: 'd',
    },
  };

  const objEntries = Object.entries(obj1);

  console.log('++++++++++', objEntries, 'objEntries');

  // 4. values() - returns an array of a given object's own enumerable property values

  const objValues = Object.values(newCar);

  console.log(objValues, 'objValues');

  // 5. keys() - returns an array of a given object's own enumerable property names

  const objKeys = Object.keys(newCar);

  console.log(objKeys, 'objKeys');

  // 6. freeze() - freezes an object: other code can't delete or change any properties

  // const frozenCar = Object.freeze(newCar);

  // frozenCar.brand = 'Fiat'; // wystąpi błąd

  // console.log(frozenCar, 'frozenCar');

  // 7. seal() - seals an object: other code can't delete or change any properties

  const sealedCar = Object.seal(newCar);

  sealedCar.brand = 'Fiat';

  console.log(sealedCar, 'sealedCar');

  // sealedCar.color = 'red';

  return (
    <div>
      <h2>JS Object methods</h2>
    </div>
  );
};
