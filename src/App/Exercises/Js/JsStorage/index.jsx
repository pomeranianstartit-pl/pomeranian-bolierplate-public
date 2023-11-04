import { CookieStorage } from './CookieStorage';
import { LocalStorage } from './LocalStorage';

export function Exercise() {
  const jsonString = '{"name":"John", "age":30, "car":null}';
  const jsonParsed = JSON.parse(jsonString);
  const jsonBoolean = 'true';
  const jsonBooleanParsed = JSON.parse(jsonBoolean);
  const objForSerialization = {
    name: 'John',
    surname: 'Doe',
    age: 30,
    cars: ['Ford', 'BMW', 'Fiat'],
    isAdult: true,
  };
  const serializeObj = JSON.stringify(objForSerialization);

  const emptyValue = null;
  const emptyValueSerialized = JSON.stringify(emptyValue);
  console.log(emptyValueSerialized);

  const emptyValueDeserialized = JSON.parse(emptyValueSerialized);
  console.log(emptyValueDeserialized);

  const undefinedValue = undefined;
  const undefinedValueSerialized = JSON.stringify(undefinedValue);
  console.log(undefinedValueSerialized);

  //wyrzuca bledy
  // const undefinedValueDeserialized = JSON.parse(undefinedValueSerialized);
  // console.log(undefinedValueDeserialized);

  return (
    <div>
      <h1>JSON,XML,storage</h1>
      <p>Javascript Object Notation - lekki format wymiany danych</p>
      <p>
        wykorzystywany może być przez różne języki programowania, do wymiany,
        przechowywania informacji
      </p>
      <p>rozszerzenie pliku to .json</p>
      <h2>Deseralizacja - Parsowanie- (odczytywanie tekstu)</h2>
      <p>
        jsonString {jsonString} jsonBoolean{jsonBoolean}
      </p>
      <p>
        jsonParsed {jsonParsed.name} jsonBooleanParsed{' '}
        {jsonBooleanParsed && 'jest prawda'}
      </p>
      <h2>Serializacja (zapisywanie do formatu JSON-tekst)</h2>
      <p>serializeObj {serializeObj}</p>
      <h2>XML-Extensible Markup Language</h2>
      <p>
        XML vs JSON - trudniejszy do nauczania, bardziej skomplikowany, większy
        rozmiar, wolniej, większa kontrola nad strukturą wymianych danych
      </p>
      <p>opcjonalnie:WSDL=web schema definition language</p>
      <p>
        opcjonalnie dodatkowo - SOAP(XML) vs REST(JSON) ale to nie są synonimy
      </p>
      <p>SOAP - single object access protocol</p>
      <p>REST - representative state transfer</p>
      <h2>storage</h2>
      <ul>
        <li>LocalStorage (5MB-10MB)</li>
        <LocalStorage />
        <li>SessionStorage(5MB-10MB)</li>
        <li>
          CookieStorage(4kb)
          <CookieStorage />
        </li>
      </ul>
    </div>
  );
}
