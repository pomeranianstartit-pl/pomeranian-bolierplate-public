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

  // Zadanie 7
  const a = 3;
  const b = 4;
  const c = -5;
  let delta = b * b - 4 * a * c;
  let sqrtDelta = Math.sqrt(delta);
  let x1 = (-b + sqrtDelta) / (2 * a);
  let x2 = (-b - sqrtDelta) / (2 * a);
  let x3 = -b / (2 * a);

  function równanieKwadratowe(x, y, delta, x1, x2, x3) {
    if (delta > 0) {
      return 'W tym równaniu pierwiastki to:'(x1, x2);
    } else if (delta == 0) {
      return 'W tym równaniu pierwiastek to:'(x3);
    } else {
      return 'W tym równaniu nie ma pierwiastków rzeczywistych';
    }
  }
  return <div>{równanieKwadratowe()}</div>;
}
