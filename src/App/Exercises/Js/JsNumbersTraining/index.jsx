import './styles.css';

// Ćwiczenie 1

export function Exercise() {
  let age = 18;
  let hasDriverLicense = true;
  let hasCar = true;
  function canDrive(age, hasDriverLicense, hasCar) {
    if (age < 18) {
      return 'You are too young to drive.';
    }
    if (!hasDriverLicense) {
      return "You can't drive without a driver's license.";
    }
    return hasCar ? 'You can drive your car!' : 'You can drive a rental car.';
  }

  function hasEnough(hasEnough) {
    return hasEnough;
  }

  function wykonajCwiczenie1() {
    console.log(`Wynik funkcji canDrive: ${canDrive(18, true, true)}`);
    console.log(`Wynik funkcji: ${hasEnough(true)}`);
  }

  // Ćwiczenie 2
  // EARLY RETURN

  function isStringShort(text) {
    if (text.length < 10) {
      return true;
    }
    return false;
  }
  function wykonajCwiczenie2() {
    console.log(`Wynik ćwiczenia2: ${isStringShort('abcde')}`);
  }

  //return abcde < 10;

  //Ćwiczenie 3
  function poleKola(promien) {
    return Math.PI * Math.pow(promien, 2);
  }

  function obliczPoleKolaOPromieniu3() {
    const promienKola = 3;

    const pole = poleKola(promienKola);
    console.log(
      `Pole koła o promieniu ${promienKola} wynosi: ${pole} jednostek kwadratowych.`
    );
  }

  //Ćwiczenie4
  function zmianaLiczbyNaOcene(ocena) {
    switch (ocena) {
      case 1:
        return 'niedostateczny';
        break;
      case 2:
        return 'dopuszczający';
        break;
      case 3:
        return 'dostateczny';
        break;
      case 4:
        return 'dobry';
        break;
      case 5:
        return 'bardzo-dobry';
        break;
      case 6:
        return 'celujacy';
        break;
      default:
        return 'zle wejscie';
    }
  }
  function wykonajCwiczenie4() {
    console.log(`Wynik ćwiczenia4: ${zmianaLiczbyNaOcene(1)}`);
    console.log(`Wynik ćwiczenia4: ${zmianaLiczbyNaOcene(10)}`);
  }
  //Ćwiczenie5 - match.max (4,7 ->7)

  const a = 4;
  const b = 7;

  function maxLiczba(a, b) {
    return a < b ? b : a;
  }
  function wykonajCwiczenie5() {
    console.log(`Wynik ćwiczenia5: ${maxLiczba(4, 7)}`);
  }
  //Ćwiczenie6- sumFloat(3.141592, 2.141592)

  const sum = 3.141592 + 2.141592;
  console.log(sum.toFixed(4));

  function wykonajCwiczenie6() {
    console.log(`wynik ćwiczenia6: ${sum.toFixed(4)}`);
  }
  //Ćwiczenie7

  //Ćwiczenie8

  function losowaLiczbaOd1do5() {
    const min = 1;
    const max = 5;
    const losowaLiczba = Math.random();
    const zakres = max - min;
    const przesuniecie = losowaLiczba * zakres;
    const wynik = min + przesuniecie;

    return wynik;
  }
  //Ćwiczenie8a
  function losowaLiczbaCalkowitaOd1do5() {
    const min = 1;
    const max = 5;
    const losowaLiczba = Math.random();
    const zakres = max - min;
    const przesuniecie = losowaLiczba * zakres;
    const wynik = Math.floor(min + przesuniecie);

    return wynik;
  }

  //Ćwiczenie 8b
  function losowaLiczbaCalkowitaZakres(min, max) {
    const losowaLiczbaCalkowita = Math.random();
    const zakres = max - min;
    const przesuniecie = losowaLiczbaCalkowita * zakres;
    const wynik = Math.floor(min + przesuniecie);

    return wynik;
  }

  function wykonajCwiczenie8() {
    console.log(`Wynik ćwiczenia8: ${losowaLiczbaOd1do5()}`);
  }

  function wykonajCwiczenie8a() {
    console.log(`Wynik ćwiczenia8a: ${losowaLiczbaCalkowitaOd1do5()}`);
  }

  function wykonajCwiczenie8b() {
    console.log(`Wynik ćwiczenia8b: ${losowaLiczbaCalkowitaZakres(1, 5)}`);
  }
  //Ćwiczenie9
  function sredniaArytmetyczna(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'błędne dane';
    }

    return (a + b) / 2;
  }

  // Testuję funkcję
  const liczba1 = 5;
  const liczba2 = 7;
  console.log(sredniaArytmetyczna(liczba1, liczba2)); // Wyświetli: 6

  const nieLiczba1 = 'abc';
  const nieLiczba2 = 10;
  console.log(sredniaArytmetyczna(nieLiczba1, nieLiczba2)); // Wyświetli: błędne dane

  function wykonajCwiczenie9() {
    console.log(`Wynik ćwiczenia9: ${sredniaArytmetyczna(4, 7)}`);
  }

  // Ćwiczenie10
  function wartoscBezwzgledna(x) {
    if (x >= 0) {
      return x;
    } else {
      return -x;
    }
  }

  // Testujemy funkcję
  console.log(wartoscBezwzgledna(5)); // Wyświetli: 5
  console.log(wartoscBezwzgledna(-10)); // Wyświetli: 10

  function wykonajCwiczenie10() {
    console.log(`Wynik ćwiczenia10: ${wartoscBezwzgledna(5)}`);
    console.log(`Wynik ćwiczenia10: ${wartoscBezwzgledna(-10)}`);
  }

  //Ćwiczenie 11
  function czyPodzielnaPrzez3Lub5(liczba) {
    return liczba % 3 === 0 || liczba % 5 === 0;
  }

  // Testujemy funkcję
  console.log(czyPodzielnaPrzez3Lub5(15)); // Wyświetli: true (podzielna przez 3)
  console.log(czyPodzielnaPrzez3Lub5(10)); // Wyświetli: true (podzielna przez 5)
  console.log(czyPodzielnaPrzez3Lub5(8)); // Wyświetli: false (niepodzielna przez 3 ani 5)

  function wykonajCwiczenie11() {
    console.log(`Wynik ćwiczenia11: ${czyPodzielnaPrzez3Lub5(15)}`);
    console.log(`Wynik ćwiczenia11: ${czyPodzielnaPrzez3Lub5(10)}`);
    console.log(`Wynik ćwiczenia11: ${czyPodzielnaPrzez3Lub5(8)}`);
  }

  // Ćwiczenie12

  function czyLiczbaPierwsza(x) {
    if (!Number.isInteger(x)) {
      return 'zła wartość';
    }

    let licznikPodzielnosci = 0;

    for (let i = 1; i <= x; i++) {
      if (x % i === 0) {
        licznikPodzielnosci++;
      }
    }

    return licznikPodzielnosci === 2;
  }

  // Testujemy funkcję
  console.log(czyLiczbaPierwsza(7)); // Wyświetli: true (7 jest liczbą pierwszą)
  console.log(czyLiczbaPierwsza(4)); // Wyświetli: false (4 nie jest liczbą pierwszą)
  console.log(czyLiczbaPierwsza(7.1)); // Wyświetli: "zła wartość" (nie jest liczbą całkowitą)

  function wykonajCwiczenie12() {
    console.log(`Wynik ćwiczenia12: ${czyLiczbaPierwsza(7)}`);
    console.log(`Wynik ćwiczenia12: ${czyLiczbaPierwsza(4)}`);
    console.log(`Wynik ćwiczenia12: ${czyLiczbaPierwsza(7.1)}`);
  }
  //
  return (
    <div>
      <h1>Ćwiczenie 1</h1>
      <button onClick={wykonajCwiczenie1}>uproszczenie warunków if </button>
      <h2> Cwiczenie 2 </h2>
      <button onClick={wykonajCwiczenie2}>Ćwiczenie2</button>
      <h1>Cwiczenie 3</h1>
      <button onClick={obliczPoleKolaOPromieniu3}>Ćwiczenie - Pole koła</button>
      <h1>Cwiczenie 4</h1>
      <button onClick={wykonajCwiczenie4}>Ćwiczenie - ocena</button>
      <h1>Cwiczenie 5</h1>
      <button onClick={wykonajCwiczenie5}>Math.max</button>
      <h1>Cwiczenie 6</h1>
      <button onClick={wykonajCwiczenie6}>Suma</button>
      <h1>Cwiczenie 8</h1>
      <button onClick={wykonajCwiczenie8}>Ćwiczenie8</button>
      <h1>Cwiczenie 8a</h1>
      <button onClick={wykonajCwiczenie8a}>Ćwiczenie8a</button>
      <h1>Cwiczenie 8b</h1>
      <button onClick={wykonajCwiczenie8b}>Ćwiczenie8a</button>
      <h1>Cwiczenie 9</h1>
      <button onClick={wykonajCwiczenie9}>Ćwiczenie9</button>
      <h1>Cwiczenie 10</h1>
      <button onClick={wykonajCwiczenie10}>Ćwiczenie10 </button>
      <h1>Cwiczenie 11</h1>
      <button onClick={wykonajCwiczenie11}>Ćwiczenie11 </button>
      <h1>Cwiczenie 12</h1>
      <button onClick={wykonajCwiczenie12}>Ćwiczenie12 </button>
    </div>
  );
}
