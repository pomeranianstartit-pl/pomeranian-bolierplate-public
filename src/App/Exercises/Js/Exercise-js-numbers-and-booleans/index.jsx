import './styles.css';

//Zadanie 1 - funkcja od której wyszliśmy
export function Exercise() {
  // let age = 18;
  // let hasDriverLicense = true;
  // let hasCar = true;
  // function canDrive(age, hasDriverLicense, hasCar) {
  //   if (age >= 18) {
  //     if (hasDriverLicense) {
  //       if (hasCar) {
  //         return 'You can drive your car';
  //       } else {
  //         return 'You can drive a rental car';
  //       }
  //     } else {
  //       return "You can't drive without a driver's license";
  //     }
  //   } else {
  //     return 'You are too young to drive';
  //   }
  // }
  // Funkcja uproszczona (odgnieżdżona?) przez dodanie operatorów logicznych, bez użycia odwracania warunku
  // function canDrive(age, hasDriverLicense, hasCar) {
  //   if (age >= 18 && hasDriverLicense == true && hasCar == true) {
  //     return 'You can drive your car';
  //   } else if (age >= 18 && hasDriverLicense == true && hasCar == false) {
  //     return 'You can drive a rental car';
  //   } else if (age >= 18 && hasDriverLicense == false && hasCar == true) {
  //     return "You can't drive without a driver's license";
  //   } else {
  //     return 'You are too young to drive';
  //   }
  // }
  // Funkcja także uproszczona, jednak z zastosowaniem odwracania warunku
  //   function canDrive(age, hasDriverLicense, hasCar) {
  //     if (age < 18) {
  //       return 'You are too young to drive';
  //     }
  //     if (!(hasDriverLicense && hasCar)) {
  //       if (!hasDriverLicense) {
  //         return "You can't drive without a driver's license";
  //       } else {
  //         return 'You can drive a rental car';
  //       }
  //     }
  //     return 'You can drive your car';
  //   }
  //   function hasEnough(hasEnough) {
  //     if (hasEnough) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  //   console.log(canDrive(age, hasDriverLicense, hasCar));
  //   return <div>{canDrive(age, hasDriverLicense, hasCar)}</div>;
  // }
  // canDrive(18, true, true) => 'You can drive your car';
  // hasEnough(true) => true
  // Zadanie 2
  //   let string = 'doomslayer1234';
  //   function isStringShort(string) {
  //     if (string.length < 10) {
  //       return 'true - podany string jest krótszy niż 10';
  //     }
  //     return 'false - podany string jest dłuższy lub równy 10';
  //   }
  //   return <div>{isStringShort(string)}</div>;
  // }
  // Zadanie 3 - obliczanie pola koła przy podanym promieniu
  //   const radius = 5;
  //   function radiusIs(radius) {
  //     const area = Math.PI * Math.pow(radius, 2);
  //     return area;
  //   }
  //   return <div>Pole koła wynosi: {radiusIs(radius)}</div>;
  // }
  // Zadanie 4
  //   const ocena = 6;
  //   function gradeIs(ocena) {
  //     if (ocena == 1) {
  //       return 'jedynka';
  //     } else if (ocena == 2) {
  //       return 'dwójka';
  //     } else if (ocena == 3) {
  //       return 'trójka';
  //     } else if (ocena == 4) {
  //       return 'czwórka';
  //     } else if (ocena == 5) {
  //       return 'piątka';
  //     } else if (ocena == 6) {
  //       return 'szóstka';
  //     } else {
  //       return 'ocena spoza zakresu 1-6';
  //     }
  //   }
  //   return <div>Twoja ocena to: {gradeIs(ocena)}</div>;
  // }
  // Zadanie 5.1 - uwzględniam tu jedynie zbiór dwóch liczb
  //   const N1 = 5;
  //   const N2 = 3;
  //   function greaterNumberIs(N1, N2) {
  //     if (N1 > N2) {
  //       return N1;
  //     } else {
  //       return N2;
  //     }
  //   }
  //   return (
  //     <div>Najwyższa liczba z podanego zbioru to: {greaterNumberIs(N1, N2)}</div>
  //   );
  // }
  // Zadanie 5.2 - uwzględniłem już nieograniczony zbiór liczb
  //   const numbers = [1, 5, 9, 2, 100, 50];
  //   function compareNr(a, b) {
  //     return a - b;
  //   }
  //   const sorted = numbers.sort(compareNr);
  //   console.log(sorted);
  //   const greatestNum = sorted.pop();
  //   console.log(greatestNum);
  //   return <div>Najwyższa liczba z podanego zbioru to: {greatestNum}</div>;
  // }
  // Zadanie 6 - mnożymy wynik razy 10000, przez co czwarta liczba po przecinku wyniku jest teraz przed przecinkiem. Math.floor ucina miejsca po przecinku i pozostaje najniższa liczba całkowita. Gdy podzielimy ten rezultat także przez 10000 to otrzymamy pożądany wynik.
  //   function sumFloat(num1, num2) {
  //     let sum = num1 + num2;
  //     let truncatedSum = Math.floor(sum * 10000) / 10000;
  //     return truncatedSum;
  //   }
  //   let result = sumFloat(3.14159, 2.71828);
  //   console.log(result);
  //   return (
  //     <div>
  //       Suma podanych liczb do 4. miejsca po przecinku bez zaokrąglania to:{' '}
  //       {result}
  //     </div>
  //   );
  // }
  // Zadanie 7 - równanie kwadratowe
  //   const a = 1;
  //   const b = 4;
  //   const c = 3;
  //   function równanieKwadratowe() {
  //     const delta = b * b - 4 * a * c;
  //     console.log(delta);
  //     if (delta > 0) {
  //       const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  //       const x2 = (-b - Math.sqrt(delta)) / (2 * a);
  //       console.log('pierwiastki:', x1, x2);
  //       return `W tym równaniu pierwiastki to: ${x1} i ${x2}`;
  //     } else if (delta === 0) {
  //       const x3 = -b / (2 * a);
  //       console.log('pierwiastek:', x3);
  //       return `W tym równaniu pierwiastek to: ${x3}`;
  //     } else {
  //       console.log('brak rozwiązań rzeczywistych');
  //       return 'W tym równaniu nie ma pierwiastków rzeczywistych';
  //     }
  //   }
  //   return <div>{równanieKwadratowe()}</div>;
  // }
  //Zadanie 8 - funkcja zwracająca losową liczbę z zakresu (1, 5).
  //   function getRandom() {
  //     const randomNumber = Math.random() * 5 + 1;
  //     if (randomNumber > 5) {
  //       const randomNumber = Math.random() * 5 + 1;
  //     } else {
  //       return randomNumber;
  //       console.log(randomNumber);
  //     }
  //   }
  //   return <div>{getRandom()}</div>;
  // }
  // Zadanie 8.A - funkcja zwracająca losową liczbę całkowitą z zakresu (1, 5).
  //   function getRandomInteger() {
  //     const randomInteger = Math.floor(Math.random() * 5) + 1;
  //     return randomInteger;
  //     console.log(randomInteger);
  //   }
  //   return <div>{getRandomInteger()}</div>;
  // }
  // Zadanie 8.B - funkcja zwracająca losową liczbę całkowitą z zakresu (x, y)
  //   const x = 5; //dolna granica przedziału
  //   const y = 20; //górna granica przedziału
  //   const c = y - x + 1;
  //   function getRandomIntRange() {
  //     const randomIntRange = Math.floor(Math.random() * c) + x;
  //     return randomIntRange;
  //     console.log(randomIntRange);
  //   }
  //   return <div>{getRandomIntRange()}</div>;
  // }
  // Zadanie 9 - funkcja zwracająca średnią arytmetyczną dwóch liczb. Jeśli przekazane argumenty nie są liczbami, funkcja powinna zwrócić "Błędne dane".
  //   const a = 4;
  //   const b = 5;
  //   function getArithAverage() {
  //     const result = (a + b) / 2;
  //     if (isNaN(result)) {
  //       console.log(result);
  //       return 'Błędne dane wejściowe';
  //     } else {
  //       return `Średnia arytmetyczna podanych liczb to: ${result}`;
  //     }
  //   }
  //   return <div>{getArithAverage()}</div>;
  // }

  // Zadanie 10 - funkcja zwracająca wartość bezwzględną liczby za pomocą instrukcji warunkowej

  //   function absoluteNumber(a) {
  //     if (a >= 0) {
  //       console.log(a);
  //       return `Wartość bezwzględna podanej liczby to: ${a}`;
  //     } else {
  //       return `Wartość bezwzględna podanej liczby to: ${Math.abs(a)}`;
  //     }
  //   }

  //   return (
  //     <div>
  //       Ok gitara <br />
  //       {absoluteNumber(-10)}
  //     </div>
  //   );
  // }

  // Zadanie 11 - funkcja, która przyjmuje liczbę całkowitą i zwraca true jeśli jest ona podzielna przez 3 lub 5 a false w przeciwnym razie

  //   function divisibleNumber(a) {
  //     if (a % 3 == 0 || a % 5 == 0) {
  //       return `true`;
  //     } else {
  //       return `false`;
  //     }
  //   }
  //   return (
  //     <div>
  //       Ok gitara <br />
  //       {divisibleNumber(7)}
  //     </div>
  //   );
  // }

  // Zadanie 12 - funkcja, która sprawdzi czy x jest liczbą pierwszą. Jeśli podamy nie integer funkcja powinna zwrócić "zła wartość"

  function isPrime(a) {
    if (!Number.isInteger(a)) {
      return `Podana liczba nie jest liczbą całkowitą - zła wartość`;
    }
    if (a <= 1) {
      return `Podana liczba nie jest liczbą pierwszą`;
    }
    for (let i = 2; i <= Math.sqrt(a); i++) {
      if (a % i === 0) {
        return `Podana liczba nie jest liczbą pierwszą`;
      }
    }
    return `${a} jest liczbą pierwszą!`;
  }

  return (
    <div>
      Czy podana jest liczbą pierwszą? <br />
      {isPrime(89)}
    </div>
  );
}
