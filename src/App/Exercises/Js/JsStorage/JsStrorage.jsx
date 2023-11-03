import { CoockieStorage } from './CoockieStorage';
import { LocalStorage } from './LocalStorage';
import './styles.css';

export function JsStorage() {
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
  const serializedObj = JSON.stringify(objForSerialization);

  const emptyValue = null;
  const emptyValueSerialized = JSON.stringify(emptyValue);
  console.log(emptyValueSerialized);

  const emptyValueDeserialized = JSON.parse(emptyValueSerialized);
  console.log(emptyValueDeserialized);

  const undefinedValue = undefined;
  const undefinedValueSerialized = JSON.stringify(undefinedValue);
  console.log(undefinedValueSerialized);

  // const undefinedValueDeserialized = JSON.parse(undefinedValueSerialized);

  return (
    <div>
      <h1>JSON, XML, storage</h1>
      <p>JavaScript Object Notation - lekki format wymiany danych</p>
      <p>
        wykorzystywany może być przez różne języki programowania, do wymiany,
        przechowywania informacji
      </p>
      <p>rozszerzenie pliku to .json</p>
      <h2>Deserailizacja - Parsowanie - (odczytywanie z tekstu)</h2>
      <p>
        jsonString {jsonString} jsonBoolean {jsonBoolean}
      </p>
      <p>
        jsonParsed {jsonParsed.name} jsonBooleanParsed{' '}
        {jsonBooleanParsed && 'jest prawda'}
      </p>
      <h2>Serializacja (zapisywanie do formatu JSON - tekst)</h2>
      <p>serializedObj {serializedObj}</p>
      <h2>XML - Extensible Markup Language</h2>
      <p>
        XML vs JSON - trudniejszy do nauczenia, bardziej skąplikowany, większy
        rozmiar, wolniej, większa kontrola nad strukturą wymienianych danych
      </p>
      <p>opcjonalnie: WSDL - web schema definition language</p>
      <p>
        opcjonalnie dodatkowo - SOAP (XML) vs REST (JSON) ale to nie są synonimy
      </p>
      <h2>Storage</h2>
      <p>CoockieStorage</p>
      <CoockieStorage />
      <p>LocalStorage</p>
      <LocalStorage />
      <p>SessionStorage</p>
    </div>
  );
}
