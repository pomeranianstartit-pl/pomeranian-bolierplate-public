import { LocalStorage } from './LocalStorage';
import { SessionStorage } from './SessionStorage';
import { CookieStorage } from './CookieStorage.jsx';

export function Exercise() {
  // --------------------------------------
  // JSON
  // --------------------------------------

  // JSON to sposób reprezentacji strukturalnych danych w formie tekstu.
  // Jest to łatwy do zrozumienia format, który jest czytelny zarówno dla ludzi, jak i dla maszyn.
  // Możemy go porównać do listy z danymi, gdzie każdy element ma swoje właściwości i wartości.

  // Przykłady zastosowania JSONa:

  // 1. API
  //        JSON to sposób reprezentacji strukturalnych danych w formie tekstu. Jest to łatwy do zrozumienia format,
  //        który jest czytelny zarówno dla ludzi, jak i dla maszyn.
  //        Możemy go porównać do listy z danymi, gdzie każdy element ma swoje właściwości i wartości.

  // 2. Przechowywanie konfiguracji
  //        JSON jest często używany do przechowywania konfiguracji lub ustawień aplikacji,
  //        co ułatwia zarządzanie tymi danymi

  // 3. Wymiana danych
  //        Jeśli chcemy udostępnić dane pomiędzy różnymi aplikacjami lub serwisami
  //        JSON jest świetnym wyborem ze względu na swoją prostotę i uniwersalność.

  // Podsumowanie:
  //
  // Dlatego warto poznać i zrozumieć JSON-a. To narzędzie, które pomaga nam w przechowywaniu,
  // wymianie i zarządzaniu danymi w sposób łatwy dla nas i dla maszyn.
  // Pozwala nam to na budowanie efektywnych i skalowalnych aplikacji,
  // które mogą współpracować ze sobą bez problemów.

  // MIME - Multipurpose Internet Mail Extension - standardowy sposób kodowania danych
  // dla JSONa jest to application/json (Content-Type: application/json)

  // --------------------------------------
  // JSON - serializacja(parsowanie) i deserializacja
  // --------------------------------------

  const jsonString = '{"name":"John", "age":30, "car":null}';

  // JSON.parse() - deserializacja
  const jsonObject = JSON.parse(jsonString);

  console.log(jsonString, 'jsonString');
  console.log(jsonObject, 'jsonObject');
  console.log(jsonObject.name, jsonObject.age, 'jsonObject');

  // JSON.stringify() - parsowanie/serializacja

  const objForJSONString = {
    name: 'John',
    surname: 'Doe',
    age: 30,
    cars: ['Ford', 'BMW', 'Fiat'],
    isAdult: true,
  };

  const jsonStringFromObj = JSON.stringify(objForJSONString);

  console.log(objForJSONString, 'objForJSONString');
  console.log(jsonStringFromObj, 'jsonStringFromObj');

  // --------------------------------------
  // Przykładowe parsowanie typów prostych w JS
  // --------------------------------------

  const emptyObject = '{}';
  console.log(JSON.parse(emptyObject));

  const boolean = 'true';
  console.log(JSON.parse(boolean));

  const exampleObject = {
    name: 'John',
    age: 30,
    cars: null,
    houses: [undefined],
  };

  const exampleObjectString = JSON.stringify(exampleObject);
  console.log(exampleObjectString);
  console.log(JSON.parse(exampleObjectString));

  // --------------------------------------
  // RÓŻNICE MIĘDZY OBIEKTEM JS A JSONem
  // --------------------------------------

  // 1. W JSONie nazwy właściwości muszą być w cudzysłowiu
  // 2. JSON obsługuje tylko podstawowe typy danych: string, number, boolean, object, array, null.

  // --------------------------------------
  // BŁĄD PARSOWANIA
  // --------------------------------------
  // const jsonStringWithError = '{"name":"John, "age":30, "car":null}';
  // console.log(JSON.parse(jsonStringWithError));

  // --------------------------------------
  // EVAL() - wykonuje dowolny kod JavaScript - co może być niebezpieczne,
  // ponieważ może wykonać złośliwy kod co stwarza ryzyko ataków XSS
  // https://sekurak.pl/czym-jest-xss/
  // --------------------------------------
  eval('console.log("hello bro!!")');

  // --------------------------------------
  // RÓŻNICE MIEDZY JSON A XML
  // --------------------------------------

  // Sposób zapisu: JSON używa składni opartej na tablicach i obiektach,
  // podczas gdy XML używa znaczników otwierających i zamykających.

  // Czytelność: JSON jest bardziej zwięzły i czytelny dla ludzi,
  // podczas gdy XML jest bardziej rozbudowany i bardziej skomplikowany w strukturze.

  // Obsługa: Współczesne technologie preferują JSON ze względu na jego prostotę i zwięzłość.
  // JSON jest również naturalnym formatem dla danych w JavaScript.

  // Podmioty: XML umożliwia obsługę podmiotów (entities), co może być przydatne w niektórych przypadkach,
  // ale może także wprowadzać potencjalne problemy z bezpieczeństwem.

  // Wsparcie: JSON jest natywnym formatem w JavaScript i wielu innych językach programowania, co ułatwia manipulację danymi.
  // W przypadku XML konieczne jest korzystanie z dodatkowych bibliotek lub funkcji analizy.

  return (
    <div>
      <div>JSON | XML | LocalStorage | SessionStorage | Cookies</div>
      {/* LOCAL STORAGE */}
      {/* import { LocalStorage } from './LocalStorage'; */}
      <LocalStorage />
      <SessionStorage />
      <CookieStorage />
    </div>
  );

  // -----------------------------------------------------------------------------
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
}
