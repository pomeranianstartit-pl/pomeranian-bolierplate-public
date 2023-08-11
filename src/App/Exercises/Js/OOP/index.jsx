'use strict';
export function Exercise() {
  // POLIMORFIZM
  // -----------------------------------------------------------------------------

  // Polimorfizm to zdolność różynch klas do reagowania na te same moetody w sposób specyficzny dla siebie.
  // Oznacza to, że różne obiekty mogą wykonywać te same operacje, ale w zależności od typu obiektu - zachowanie może być inne

  class AnimalPolimorphism {
    speak() {
      console.log('Animal make a sound');
    }
  }

  class DogPolimorphism extends AnimalPolimorphism {
    speak() {
      console.log('Dog barks');
    }
  }

  class CatPolimorphism extends AnimalPolimorphism {
    speak() {
      console.log('Cat meows');
    }
  }

  const animals = [new DogPolimorphism(), new CatPolimorphism()];

  for (const animal of animals) {
    animal.speak();
  }

  // -----------------------------------------------------------------------------

  // HERMETYZACJA
  // -----------------------------------------------------------------------------

  // Hermetyzacja odnosi się do kontrolowania dostępu do wewnętrznych składników obiektu
  // i umożliwiania dostępu tylko do tych, które powinny być publicznie dostępne.
  // W JavaScript, choć brak wbudowanego mechanizmu oznaczeń private, możemy osiągnąć hermetyzację za pomocą domknięć (closures) i zastosowania konwencji nazewniczych.

  function Car(make, model) {
    let _mileage = 0;

    // let _accessKey = 'a2313asdfadaszxczasd'; // prywatna zmienna bo zapis z podłogą (_)
    this.getMilleage = function () {
      return _mileage;
    };

    this.drive = function (distance) {
      _mileage += distance;
    };

    // this._validAccessKey = function () {
    //     // funkcja walidująca nasz access key
    // }
  }

  const myCar = new Car('Toyota', 'Corolla');
  const mySecondCar = new Car('Audi', 'A3');

  myCar.drive(1000);
  console.log(myCar._mileage); // 1000
  myCar.drive(1000);
  // -----------------------------------------------------------------------------

  // PRIVATE VARIABLE
  // -----------------------------------------------------------------------------
  // Właściwości i metody, do których dostęp jest ograniczony do wewnątrz obiektu, z wykorzystaniem hermetyzacji.

  function Counter() {
    let _count = 0;
    this.increment = function () {
      _count++;
    };
    this.getCount = function () {
      return _count;
    };
  }

  const counter = new Counter();
  counter.increment();
  counter.increment();
  console.log(counter.getCount()); // 1
  // -----------------------------------------------------------------------------

  // PUBLIC VARIABLE
  // -----------------------------------------------------------------------------
  // Właściwości i metody, do których dostęp jest możliwy z zewnątrz obiektu.

  function Person(name) {
    // zmienna prywatna
    // let _name = name;

    // zmienna publiczna
    this.name = name;
  }

  const johnPerson = new Person('John');
  console.log(johnPerson.name);
  // -----------------------------------------------------------------------------

  // PROTECTED VARIABLE
  // -----------------------------------------------------------------------------
  // Właściwości i metody, do których dostęp jest możliwy z wewnątrz obiektu oraz z wewnątrz obiektów dziedziczących

  class Shape {
    constructor() {
      this._color = 'red';
    }

    getColor() {
      return this._color;
    }
  }

  class Circle extends Shape {
    constructor(radius) {
      super();
      this._radius = radius;
    }

    getRadius() {
      return this._radius;
    }
  }

  const circle_radius_5 = new Circle(5);

  // W tym przykładzie _color jest traktowane jako chroniona zmienna,
  // ale nie ma oficjalnego mechanizmu zabezpieczającego dostęp do niej.
  // Jednak stosowanie konwencji _ przed nazwą właściwości może pomóc innym programistom zrozumieć, że powinna być traktowana jako chroniona.

  console.log(circle_radius_5.getRadius());
  console.log(circle_radius_5.getColor());
  // -----------------------------------------------------------------------------

  // DZIEDZICZENIE
  // -----------------------------------------------------------------------------
  // Dziedziczenie to mechanizm, w którym jedna klasa może odziedziczyć właściwości i metody z innej klasy.
  // Dzięki temu możemy tworzyć hierarchie klas, gdzie klasa podrzędna dziedziczy zachowanie klasy nadrzędnej.

  class Animal {
    constructor(name) {
      this.name = name;
    }

    getName() {
      return this.name;
    }
  }

  class Dog extends Animal {
    bark() {
      return 'woof';
    }

    speak() {
      console.log(`${this.name} ${this.bark()}`);
    }
  }

  const ciri = new Dog('Ciri');

  console.log(ciri.getName());
  ciri.speak();
  // -----------------------------------------------------------------------------

  // super()
  // -----------------------------------------------------------------------------
  // Słowo kluczowe super() jest używane w klasach podrzędnych do odwoływania się
  // i wywoływania metod z klasy nadrzędnej.

  class Cat extends Animal {
    constructor(name, color) {
      super(name); // Wywołanie konstruktora klasy nadrzędnej
      this.color = color;
    }

    speak() {
      // Wywołanie metody z klasy nadrzędnej
      console.log(super.getName());
      console.log(`${this.name} meows`);
    }
  }

  const cat = new Cat('Garfield', 'orange');
  cat.speak();
  // -----------------------------------------------------------------------------
  // HERMETYZACJA A DZIEDZICZENIE
  // -----------------------------------------------------------------------------

  // Dziedziczenie może wpływać na hermetyzację, ponieważ dziedziczące klasy uzyskują dostęp do publicznych
  // i chronionych właściwości oraz metod klasy nadrzędnej. Przy projektowaniu klasy nadrzędnej i podrzędnej,
  // ważne jest zachowanie spójności w hermetyzacji, aby uniknąć nieoczekiwanych problemów.
  // -----------------------------------------------------------------------------

  // WPŁYW NA ORANIZACJĘ KODU:
  // -----------------------------------------------------------------------------
  // Dziedziczenie pomaga w organizacji kodu poprzez grupowanie wspólnych cech w klasach nadrzędnych
  // i umożliwiając dziedziczenie ich przez klasy podrzędne. To ułatwia zarządzanie i utrzymanie kodu,
  // ponieważ zmiany wprowadzone w klasie nadrzędnej automatycznie przenoszą się do klas podrzędnych.
  // -----------------------------------------------------------------------------

  // -----------------------------------------------------------------------------
  // PUŁAPKI I OGARNICZENIA:
  // -----------------------------------------------------------------------------
  // Nadmierna złożoność hierarchii:
  // Zbyt głęboka hierarchia dziedziczenia może prowadzić do skomplikowanego kodu i trudności w zrozumieniu struktury.

  // Sztywność:
  // Jeśli hierarchia jest źle zaprojektowana, zmiany w klasie nadrzędnej mogą wpłynąć na wiele klas podrzędnych.

  // Rozbieżności:
  // Dziedziczenie może prowadzić do sytuacji, w których klasy podrzędne nie pasują idealnie do koncepcji klasy nadrzędnej.

  // Dlatego też, dobrym podejściem jest stosowanie zasady kompozycji i dziedziczenia tylko tam,
  // gdzie jest to logicznie uzasadnione, a hierarchie klas są trzymane na rozsądnym poziomie.
  // -----------------------------------------------------------------------------

  // -----------------------------------------------------------------------------
  // KOPMPOZYCJA
  // -----------------------------------------------------------------------------

  // Kompozycja to proces tworzenia bardziej złożonych obiektów poprzez składanie ich z mniejszych, niezależnych komponentów.
  // W przeciwieństwie do dziedziczenia, w którym klasy dziedziczą właściwości i zachowanie innych klas,
  // kompozycja skupia się na tworzeniu obiektów poprzez łączenie ich komponentów.

  class AnimalInheritence {
    speak() {
      console.log('Animal makes a sound');
    }
  }

  class DogInheritence extends AnimalInheritence {
    speak() {
      console.log('Dog barks');
    }
  }

  const dogInheritence = new DogInheritence();
  dogInheritence.speak();

  class Speaker {
    constructor(sound) {
      this.sound = sound;
    }

    makeSound() {
      console.log(this.sound);
    }
  }

  class DogComposition {
    constructor() {
      this.speaker = new Speaker('Woof');
    }

    bark() {
      this.speaker.makeSound();
    }
  }

  const dogComposition = new DogComposition();
  dogComposition.bark();

  // -----------------------------------------------------------------------------
  // RÓŻNICA MIĘDZY DZIEDZICZENIEM A KOMPOZYCJĄ
  // -----------------------------------------------------------------------------
  // Dziedziczenie:
  //                Klasy dziedziczą właściwości i zachowanie innych klas. Hierarchia jest zwykle bardziej pionowa, a zmiany w klasie nadrzędnej mogą wpływać na klasy podrzędne.
  // Kompozycja:
  //                Obiekty są tworzone poprzez łączenie mniejszych komponentów. Hierarchia jest bardziej pozioma i luźniejsza, a zmiany w jednym komponencie niekoniecznie wpływają na inne.

  // Zalety dziedziczenia:
  //    Reużywalność: Możemy dziedziczyć istniejący kod i zachowanie.
  //    Hierarchia: Pomaga tworzyć struktury klas na podstawie wspólnych cech.

  // Zalety kompozycji:
  //    Modularność: Komponenty są niezależne, co ułatwia zarządzanie i utrzymanie.
  //    Elastyczność: Możemy zmieniać i modyfikować komponenty bez wpływu na inne.
  //    Unikanie pułapek dziedziczenia: Kompozycja unika problemów związanych z głębokimi hierarchiami.

  // Kiedy używać dziedziczenia, a kiedy kompozycji
  //    Dziedziczenie: Wtedy, gdy klasy naprawdę mają relację typu nadrzędny-podrzędny, a podrzędna klasa może dziedziczyć i rozszerzać zachowanie klasy nadrzędnej.
  //    Kompozycja: Wtedy, gdy chcemy tworzyć obiekty poprzez łączenie komponentów i uniknąć związanych z dziedziczeniem pułapek.

  // Pułapki i ograniczenia związane z kompozycją:
  //    Wiele instancji: Jeśli mamy wiele instancji obiektów komponujących te same komponenty, może to prowadzić do nadmiaru pamięci.
  //    Trudniejsze śledzenie: W porównaniu do hierarchii dziedziczenia, trudniej może być zrozumieć, które komponenty są składane w obiekcie.

  //   ZADANIE 1.
  //   Stworzymy klasę komputera z poniższymi właściwościami:
  //         prywatną zmienną (ulubione słowo) - faveWord = "I compute!"
  //         prywatną metodę - add(x: number, y: number) - która zwraca sumę x i y
  //         publiczną metodę compute - która przyjmuje 3 argumenty: 2 liczby, które chcemy do siebie dodać, oraz
  //         argument typu number, który pomnoży wynik dodawania dwóch poprzednich argumentów ( wewnątrz użyć metody add )
  //         publiczną metodę introduce() - która wyprintuje ulubione słowo
  //         poużywaj metod mini komputera

  class Computer {
    _faveWord = 'I compute!';

    _add(x, y) {
      return x + y;
    }

    compute(x, y, number) {
      const sum = this._add(x, y);
      return sum * number;
    }

    introduce() {
      console.log(this._faveWord);
    }
  }

  const miniComputer = new Computer();
  miniComputer.introduce();
  const result = miniComputer.compute(2, 3, 4);
  console.log(result);

  //   ZADANIE 2.
  //   stwórz klasę Person posiadającą metodę, która wyświetli nam komunikat
  //            introduce() => "I am a Person"
  //        następnie stwórz dwie podklasy Builder i Doctor, dziedziczące metodę i wyświetlające odpowiednio komunikat
  //            introduce() => "I am a Person", "I am also a Doctor"
  //            introduce() => "I am a Person", "I am also a Builder"
  //        następnie stwórz podklasę Doctor: Pediatrician - metoda ma wyświetlić jedynie :
  //        introduce() => "I'm a Pediatrician"

  // -----------------------------------------------------------------------------
  // LINKI POMOCNICZE:
  // https://javascript.info/classes

  // https://khalilstemmler.com/articles/object-oriented/programming/4-principles/
  // https://www.techtarget.com/searchapparchitecture/definition/object-oriented-programming-OOP
  // https://www.toptal.com/javascript/functional-programming-javascript
  // https://javascript.plainenglish.io/what-are-javascript-programming-paradigms-3ef0f576dfdb
  // https://www.w3schools.com/jsref/jsref_classes.asp
  // https://www.geeksforgeeks.org/polymorphism-in-javascript/
  // https://zacznijprogramowac.net/szybki-kurs-javascript/dziedziczenie-w-javascript/
  // https://hackernoon.com/inheritance-vs-composition-in-javascript
  // https://kursjs.pl/kurs/obiekty/obiekty-enkapsulacja
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes?retiredLocale=pl

  return <div>Objected Oriented Programming</div>;
}
