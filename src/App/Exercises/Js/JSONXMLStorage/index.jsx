import { CookieStorage } from './CookiesStorage';
import { LocalStorage } from './LocalStorage';
import { SessionStorage } from './SessionStorage';
export const JSONXMLstorage = () => {
  // -----------------------------------------------------------------------------
  // JSON
  // MIME (Multipurpose Internet Mail Extensions) - standardowy sposób określania typów danych w internecie
  // dla json - application/json
  // -----------------------------------------------------------------------------

  // -----------------------------------------------------------------------------
  // PARSOWANIE
  // -----------------------------------------------------------------------------

  const jsonString = '{"name":"John", "age":30, "car":null}';
  const jsonBoolean = 'true';

  const jsonParsed = JSON.parse(jsonString);
  const jsonBooleanParsed = JSON.parse(jsonBoolean);
  console.log('JSON parsed', jsonParsed);
  console.log('JSON boolean parsed', jsonBooleanParsed);

  // -----------------------------------------------------------------------------
  // EVAL() - wykonuje dowolny kod JavaScript - co może być niebezpieczne,
  // ponieważ może wykonać złośliwy kod co stwarza ryzyko ataków XSS
  // https://sekurak.pl/czym-jest-xss/
  // -----------------------------------------------------------------------------

  // -----------------------------------------------------------------------------
  // SERIALIZACJA
  // -----------------------------------------------------------------------------

  const objForSerialization = {
    name: 'John',
    surname: 'Doe',
    age: 30,
    cars: ['Ford', 'BMW', 'Fiat'],
    isAdult: true,
  };

  const serializedObj = JSON.stringify(objForSerialization);
  console.log('serializedObj', serializedObj);

  // -----------------------------------------------------------------------------
  // DESERIALIZACJA (JSON.parse a nie JSON.deserialize)
  // -----------------------------------------------------------------------------

  const array = [1, 2, 3];
  const arraySerialized = JSON.stringify(array);
  console.log('arraySerialized', arraySerialized);

  const arrayDeserialized = JSON.parse(arraySerialized);
  console.log('arrayDeserialized', arrayDeserialized);

  const emptyValue = null;
  const emptyValueSerialized = JSON.stringify(emptyValue);
  console.log('emptyValueSerialized', emptyValueSerialized);

  const undefinedValue = undefined;
  const undefinedValueSerialized = JSON.stringify(undefinedValue);
  console.log('undefinedValueSerialized', undefinedValueSerialized);

  const emptyValueDeserialized = JSON.parse(emptyValueSerialized);
  console.log('emptyValueDeserialized', emptyValueDeserialized);

  // JSON obsługuje tylko podstawowe typy danych:
  // string, number, boolean, object, array, null
  // w JSONie nazwy właściwości muszą być w cudzysłowiu np "name": "John"

  //
  //Local STORAGE
  //

  return (
    <div>
      JSON XML STORAGE
      <LocalStorage />
      <SessionStorage />
      <CookieStorage />
    </div>
  );
};
