import './styles.css';

export const ArrayRendering = () => {
  const zmienna = ['Saab', 'Volvo', 'BMW', 'Skoda', 'Mercedes'];
  function mojaFunkcja(nazwa) {
    return <li>{nazwa} </li>;
  }
  const wynik = zmienna.map(mojaFunkcja);
  return (
    <article>
      <h1>Renderwoanie z tablicy i obiektu</h1>
      <section>
        <h2>Renderowanie z tablicy</h2>
        <ul>{ }</ul>
      </section>
    </article>
  );
};
