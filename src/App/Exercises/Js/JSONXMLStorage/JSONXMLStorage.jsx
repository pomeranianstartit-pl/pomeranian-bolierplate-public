import { CookieStorage } from './CookieStorage';
import { LocalStorage } from './LocalStorage';
import { SessionStorage } from './SessionStorage';

export const JSONXMLStorage = () => {
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

  return (
    <div>
      JSON XML STORAGE
      <LocalStorage />
      <SessionStorage />
      <CookieStorage />
    </div>
  );
};

// LINKI POMOCNICZE:
// https://www.oracle.com/pl/database/what-is-json/
// https://developer.mozilla.org/en-US/docs/Glossary/XML
// https://appmaster.io/blog/json-vs-xml
// https://www.w3schools.com/js/js_json_stringify.asp
// https://frontstack.pl/czym-jest-local-storage-i-jak-uzywac/
// https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
// https://www.geeksforgeeks.org/difference-between-local-storage-session-storage-and-cookies
// https://www.w3schools.com/js/js_cookies.asp
// https://javascript.info/eval
// https://javascript.info/json
// https://developer.mozilla.org/en-US/docs/Web/Guide/Parsing_and_serializing_XML
// https://geshan.com.np/blog/2022/11/nodejs-xml-parser/
// https://javascript.info/cookie
// https://javascript.info/localstorage
// https://javascript.info/indexeddb
