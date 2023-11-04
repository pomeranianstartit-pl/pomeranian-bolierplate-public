/*
OOP - Object Oriented Programming (Programowanie zorientowane obiektowo)
Co to jest paradygmat programowania?
    Paradygmat programowania to abstrakcyjny model lub sposób myślenia o tworzeniu oprogramowania. Jest to zestaw zasad, konwencji i technik, które pomagają programistom rozwiązywać konkretne rodzaje problemów w bardziej zrozumiały i efektywny sposób. Paradygmaty stanowią rodzaje filozofii, które definiują, jak programy są tworzone i organizowane.
Dlaczego powstały?
    Paradygmaty programowania powstały w odpowiedzi na rosnącą złożoność oprogramowania oraz potrzebę ułatwienia jego tworzenia, zrozumienia i zarządzania. Oprogramowanie może być bardzo skomplikowane, a różne problemy wymagają różnych podejść. Paradygmaty dostarczają narzędzi i wytycznych, które pozwalają programistom tworzyć bardziej modułowe, skalowalne i zrozumiałe rozwiązania.
Jakie mamy paradygmaty programowania?
    1. Programowanie strukturalne: Jest to tradycyjny sposób myślenia o programowaniu, oparty na sekwencji instrukcji, warunkach i pętlach. Programowanie strukturalne kładzie nacisk na jasność i logiczne podziały w kodzie. To podejście często używane w językach jak C czy Pascal.
    2. Programowanie funkcyjne (functional programming): Programowanie funkcyjne zakłada, że funkcje są podstawowymi jednostkami programu, które nie zmieniają stanu aplikacji i nie mają efektów ubocznych. To podejście promuje funkcje jako wartości, kompozycję i programowanie deklaratywne. JavaScript, choć jest językiem obiektowym, posiada również wsparcie dla programowania funkcyjnego.
    3. Programowanie obiektowe (OOP - Object-Oriented Programming): OOP koncentruje się na tworzeniu obiektów, które łączą dane i funkcje (metody) w jedną całość. OOP promuje ponowne wykorzystywanie kodu, abstrakcję i łatwiejsze zarządzanie projektami.
Jakie mają cechy i gdzie mozna spotkac paradygmaty?
    1. Programowanie strukturalne cechuje się klarowną strukturą kodu i wykorzystywane jest w wielu językach programowania, zwłaszcza w starszych lub bardziej proceduralnych.
    2. Programowanie funkcyjne staje się coraz bardziej popularne dzięki zwiększonemu zainteresowaniu złożonymi systemami i przetwarzaniem danych. Jest wykorzystywane w językach takich jak JavaScript, Python i Haskell.
    3. Programowanie obiektowe (OOP) jest często wykorzystywane w tworzeniu aplikacji, w których istnieje wiele obiektów o różnych właściwościach i zachowaniach. JavaScript sam w sobie jest językiem opartym na obiektach.
*/
import { OOPClass } from './OOPClass';
import { OOPExcercises, OOPExercises } from './OOPExcercises';
import { OOPPillars } from './OOPPillars';

// const classPeople = [
//     new Person('John', 'Smith', 30),
//     new Person('John', 'Smith', 30),
//     new Person('John', 'Smith', 30),
// ]

// const people = [
//   {
//     name: 'John',
//     surname: 'Smith',
//     age: 30,
//     sayHello: () => {
//       console.log('Cześć, jestem John');
//     },
//   },

//   {
//     name: 'Alice',
//     surname: 'Smith',
//     age: 20,
//     sayHello: () => {
//       console.log('Cześć, jestem John');
//     },
//   },

//   {
//     name: 'Alfred',
//     surname: 'John',
//     age: 40,
//     sayHello: () => {
//       console.log('Cześć, jestem John');
//     },
//   },
// ];

export const JS_OOP = () => {
  //   PROGRAMOWANIE FUNKCYJNE - LICZENIE POWIERCHNI KOŁA

  const radius = 10;
  const cirleArea = (r) => Math.PI * r ** 2;
  const area = Math.floor(cirleArea(radius));

  console.log(area, 'Pole koła w sposobcie funkcyjnym');

  //   PROGRAMOWANIE OBIEKTOWE - LICZENIE POWIERCHNI KOŁA
  const myCircle = {
    radius: 10,
    calculateArea: function () {
      return Math.PI * this.radius ** 2;
    },
  };

  const area2 = Math.floor(myCircle.calculateArea());
  console.log(area2, 'Pole koła w sposobcie obiektowym');

  return (
    <div>
      OOP
      {/* <OOPClass />
      <OOPPillars />
      <OOPExercises /> */}
    </div>
  );
};
