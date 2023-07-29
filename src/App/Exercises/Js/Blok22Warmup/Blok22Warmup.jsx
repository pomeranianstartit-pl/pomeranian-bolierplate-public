import './styles.css';

export const Blok22Warmup = () => {
  const wagi = [
    { letter: 'A', score: 5 },
    { letter: 'E', score: 15 },
    { letter: 'I', score: 6 },
    { letter: 'O', score: 2 },
    { letter: 'U', score: 0 },
  ];

  function getScore(imie, wagi) {
    let score = 0;
    console.log(imie, score);
    for (let index; index < imie.lenght; index++) {
      console.log(index, imie.charAt(index));
      wagi.find((value) => value);
      //score = score + imie.charAt(index).toUpperCase;
    }
    return score;
  }
  // [{name:Janek,Score:-}]
  function imionaWagi(imiona, wagi) {
    return imiona.map((imie) => {
      return { name: imie, score: getScore(imie) };
    });
  }
  function handleOnClick() {
    const wynik = imionaWagi(['Janek', 'Zosia'], wagi);
    console.log(JSON.stringify(wynik));
  }
  return (
    <div>
      <h1>Rozgrzewka przed blokiem 22</h1>
      <section>
        <p>
          stwórz funkcję która przyjmuje 2 argumenty imiona oraz wagę/punktację.
        </p>
        <p>
          {' '}
          Zwraca posortowaną tablice imion z dodanym parametrem sumaWag
          niemutujaca oryginalnej
        </p>
        <button onClick={handleOnClick}>kliknij</button>
      </section>
    </div>
  );
};
