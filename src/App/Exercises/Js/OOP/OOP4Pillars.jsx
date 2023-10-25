import React from 'react';

/*
1. HERMETYZACJA (Encapsulation) - kontrola dostepu do wlasciwosci i metod obiektu
2. DZIEDZICZENIE (Inheritance) -
3. POLIMORFIZM (Polymorphism) - 
4. ABSTRAKCJA (Abstraction) - ukrywamy szczegoly, a pokazujemy tylko to co jest istotne

DODATKOWO: Kompozycji (Composition)

*/

export const OOP4Pillars = () => {
  console.log('-----4 Pillars-----');
  /* ABSTRAKCJA */
  class Logger {
    constructor(path) {
      this.path = path;
      this.defaultPath = 'D://Logger/file.txt';
    }

    save() {
      if (!this.path) {
        this.setDefaultPath();
      }

      console.log(`Wiadomość zapisana - ${this.path}`);
    }

    setDefaultPath() {
      this.path = this.defaultPath;
    }
  }

  const logger1 = new Logger('C://Logger1.txt');
  logger1.save();
  console.log(logger1.path);
  logger1.path = 'Zmieniona ściezka...';
  console.log(logger1.path);

  const logger2 = new Logger();
  logger2.setDefaultPath = function () {
    console.log('ZMIENIŁEM FUNKCJE');
  };
  logger2.save();

  /* HERMETYZACJA - public, private (# - nie dostepu poza klasa) i protected (_ - mozna tylko odczytac, ale musi byc dopisany getter) */
  class Config {
    _specialConfig;
    constructor(specialConfig) {
      this.defaultConfig = { gray: 'f3f3f3', yellow: 'ff0' };
      this._specialConfig = specialConfig || {};
    }

    get specialConfig() {
      return this._specialConfig;
    }

    getConfig() {
      const config = this.#setConfig();
      return config;
    }

    #setConfig() {
      return { ...this._defaultConfig, ...this.specialConfig };
    }
  }

  const config = new Config({ black: '#000', white: 'fff', gray: 'f6f6f6' });
  console.log(config);
  console.log(config.getConfig());
  // ERROR ⬇️
  //   config.#setConfig = function () {
  //     console.log('ZMIENIŁEM FUNKCJE');
  //   };
  console.log('SPECIAL CONFIG:', config._specialConfig);
  // ERROR ⬇️
  //   config.specialConfig = { red: '#111' };

  return <div>OPP 4 Pillars</div>;
};
