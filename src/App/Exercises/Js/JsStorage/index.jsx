import { CookieStorage } from "./CookieStorage";
import { LocalStorage } from "./LocalStorage";

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

  const SerializedObj = JSON.stringify(objForSerialization);

  const emptyValue = null;
  const emptyValueSerialized = JSON.stringify(emptyValue);
  console.log(emptyValueSerialized, '====== EmptyValueSerialized');

  const emptyValuesDeserialized = JSON.parse(emptyValueSerialized);
  console.log(emptyValuesDeserialized);

  return (
    <div>
      <h1>JSON, XML, storage</h1>
      <p>JavaScript Object Notation - lekki format wymiany danych</p>
      <p>
        wykorzystywany moe by przez różne języki programowania, do wymiany,
        przechowywania informacji
      </p>
      <p>rozszerzenie pliku to .json</p>
      <h2>Deserializacja - Parsowanie (odczytywanie z tekstu)</h2>
      <p>
        jsonString {jsonString} {jsonBoolean}
      </p>
      <p>
        jsonParsed =={jsonParsed.name}== {jsonBooleanParsed && 'to jest prawda'}
      </p>
      <h2>Serializacja(zapisywanie do formatu JSON - tekst)</h2>
      <p>SerializedObj {SerializedObj}</p>
      <h2>XML - Extensible Markup Language</h2>
      <p>
        XML vs JSON - trudniejszy do nauczenia, bardziej skomplikowany, większy
        rozmiar, wolniejszy, większa kontrola nad strukturą wymienianych danych
      </p>
      <p>opcjonalnie: WSDL - web schema definition language</p>
      <p>
        opcjonalnie dodatkowo - SOAP (XML) vs REST (JSON) ale to nie są synonimy
      </p>
      <h2>Storage</h2>
      <CookieStorage />
      <LocalStorage />
      <p>SessionStorage</p>

      <p></p>
    </div>
  );
}
// # Podsumowanie : 
// - [JSON](https://www.oracle.com/pl/database/what-is-json/)
// - [XML](https://developer.mozilla.org/en-US/docs/Glossary/XML)
// - [JSON vs XML](https://appmaster.io/blog/json-vs-xml)
// - [JSON.parse()](https://www.w3schools.com/js/js_json_parse.asp)
// - [JSON.stringify()](https://www.w3schools.com/js/js_json_stringify.asp)
// - [localStorage](https://frontstack.pl/czym-jest-local-storage-i-jak-uzywac/)
// - [sessionStorage](https://www.w3schools.com/jsref/prop_win_sessionstorage.asp)
// - [cookies](https://www.w3schools.com/js/js_cookies.asp)
