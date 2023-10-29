// ABSTRAKCJA (Abstraction) - ukrywanie szczegółów implementacji, pokazujemy tylko to co chcemy
//
// 1. HERMETYZACJA (Encapsulation) - ukrywanie szczegółów implementacji
// 2. DZIEDZICZENIE (Inheritance) - dziedziczenie właściwości i metod z klasy nadrzędnej
// 3. POLIMORFIZM (Polymorphism) - instancja moze się zachować różnie w zależności od przekazanych danych
// 4. KOMPOZYCJA (Composition) - instancja może zawierać w sobie inne instancje

// Abstrakcja
class Logger {
  constructor(path) {
    this.path = path;
    this.defaultPath = 'C://Logger/file.txt';
  }

  save() {
    if (!this.path) {
      this.setDefaultPath();
    }

    console.log(`Saving data to ${this.path}`);
  }

  setDefaultPath() {
    this.path = this.defaultPath;
  }
}

// Hermetyzacja (zmienne publiczne, prywatne, protected)

export const OOPPillars = () => {
  const newLogger = new Logger('E://data/file.txt');

  newLogger.save();
  return <div>OOP Pillars</div>;
};
