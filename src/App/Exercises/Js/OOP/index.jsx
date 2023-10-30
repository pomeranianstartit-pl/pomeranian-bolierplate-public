import React from 'react';
import { OOPClass } from './OOPClass';
import { OOP4Pillars } from './OOP4Pillars';

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

export const OOP = () => {
  console.log('-----INTRO-----');
  /* PROGRAMOWANIE FUNKCJYJNE */
  const radius = 5;
  function calculateArea(radius) {
    return Math.PI * radius * radius;
  }

  const area = Math.floor(calculateArea(radius));

  /* PROGRAMOWANIE OBIEKTOWE */
  const myCircle = {
    radius: 10,
    calculateArea: function () {
      return Math.PI * this.radius * this.radius;
    },
  };

  const area2 = Math.floor(myCircle.calculateArea());

  return (
    <div>
      OOP Intro
      <ol>
        <li>{`FUNKCYJNIE | Pole powierzchni koła o promieniu ${radius} to ${area}`}</li>
        <li>{`OBIEKTOWO | Pole powierzchni koła o promieniu ${myCircle.radius} to ${area2}`}</li>
      </ol>
      <OOPClass />
      <OOP4Pillars />
    </div>
  );
};
