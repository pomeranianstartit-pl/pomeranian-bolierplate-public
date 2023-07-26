import './styles.css';

export function Exercise() {
  // 1
  function podniesPierwszaLitere(tekst) {
    return tekst.charAt(0).toUpperCase() + tekst.slice(1);
  }

  const tekst1 = 'john';
  const wynik = podniesPierwszaLitere(tekst1);
  console.log(wynik);

  //2

  function obcinaTekst(tekst, x) {
    return tekst.substr(0, x);
  }

  const tekstDlugi = 'To jest długi tekst';
  const wynik1 = obcinaTekst(tekstDlugi, 7);
  console.log(wynik1);

  //3

  function liczPowtorzeniaSlowa(zdanie, slowo) {
    const slowaWZdaniu = zdanie.split(' ');
    let licznikPowtorzen = 0;

    for (let i = 0; i < slowaWZdaniu.length; i++) {
      if (slowaWZdaniu[i].toLowerCase() === slowo.toLowerCase()) {
        licznikPowtorzen++;
      }
    }

    return licznikPowtorzen;
  }

  const zdanie =
    'To jest przykładowe zdanie, a to jest drugie przykładowe zdanie.';
  const slowoSzukane = 'przykładowe';
  const iloscPowtorzen = liczPowtorzeniaSlowa(zdanie, slowoSzukane);
  console.log(
    `Słowo "${slowoSzukane}" powtarza się ${iloscPowtorzen} razy w zdaniu.`
  );
  // Wynik: Słowo "przykładowe" powtarza się 2 razy w zdaniu.

  //4

  const regex = new RegExp('^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,3}');
  let email = 'magda@gadomska.pl';

  console.log(regex.test(email));

  //5
  function czyPalindrom(ciagZnakow) {
    const ciagBezSpacji = ciagZnakow.replace(/\s/g, '').toLowerCase();
    const dlugosc = ciagBezSpacji.length;

    for (let i = 0; i < dlugosc / 2; i++) {
      if (ciagBezSpacji[i] !== ciagBezSpacji[dlugosc - 1 - i]) {
        return false;
      }
    }

    return true;
  }

  // Testujemy funkcję
  console.log(czyPalindrom('kajak')); // Wyświetli: true
  console.log(czyPalindrom('Anna')); // Wyświetli: true
  console.log(czyPalindrom('Ala ma kota')); // Wyświetli: false
  console.log(czyPalindrom('Java')); // Wyświetli: false
}
