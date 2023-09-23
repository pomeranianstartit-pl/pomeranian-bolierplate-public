import './styles.css';
import { LocalStorage } from './LocalStorage';
import { CookieStorage } from './CookieStorage';
import { SessionStorage } from './SessionStorage';

export const JsonXMLStorage = () => {
  //Parsowanie (deserializacja) --> zmiana z tekst na obiekt JS

  const jsonString = `{
  "name": "John",
  "surname": "Doe",
  "age": 30,
  "cars": ["Ford", "BMW", "Fiat"],
  "isAdult": true
}`;

  const parsedJson = JSON.parse(jsonString);
  //console.log(parsedJson.name);

  //Serializacja
  //zamiana obiektu JS na tekst w formacie JSON
  const obiektDoSerializacji = {
    name: 'John',
    age: 100,
    cars: [],
  };

  const poSerializacji = JSON.stringify(obiektDoSerializacji);

  //przykłady inne
  // const emptyValue = null;
  // console.console.log(
  //   'emptyValue po serializacji: ',
  //   JSON.stringify(emptyValue)
  // );

  return (
    <div>
      <LocalStorage />
      <CookieStorage />
      <SessionStorage />

      <h1>JsonXMLStorage</h1>
      <h2>JSON kim jest ?</h2>
      <p>JavaScript Object Notation</p>
      <p>lekki format wyaminy danych</p>
      <p>wykorzystywany moze byc przez różne języki programowania</p>
      <p>The JSON Format Evaluates to JavaScript Objects </p>
      <p>
        inetrnet Media Type = application/json - formerly known as a MIME type
      </p>
      <p>rozszerzenie pliku .json</p>

      <h2>Parsowanie</h2>

      <p>{jsonString}</p>

      <p>parsowanie - deserializacja -- przykład {parsedJson.name}</p>
      <p>stringify - serializacja -- przykład {poSerializacji}</p>
      <h2>XML</h2>
      <p>XML - rozszerzalny język znaczników -- WIkipedia</p>

      <h2>storage</h2>
      <ul>
        <li> localStorage</li>
        <li>SessionStorage</li>
        <li>CookieStorage</li>
      </ul>
    </div>
  );
};
