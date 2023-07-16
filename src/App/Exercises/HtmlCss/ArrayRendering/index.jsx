import './styles.css';

export const Array = () => {
  const carArray = ['Saab', 'Volvo', 'BMW', 'Skoda', 'Mercedes'];

  function mojaFunkcja(nazwa) {
    return <li key={nazwa}>{nazwa} </li>;
  }

  const carData = [
    { id: 1, make: 'Saab', model: '92B', year: 1953, owner: 'Jon' },
    { id: 2, make: 'Volvo', model: 'C40', year: 2021, owner: 'Jenny' },
    { id: 3, make: 'Audi', model: 'A3', year: 2019, owner: 'Michael' },
    { id: 4, make: 'Tesla', model: 'Model S', year: 2022, owner: 'Sarah' },
  ];

  function carDataList({ id, make }) {
    //const { id, make } = data;
    return <li key={id}>{make}</li>;
  }

  return (
    <article>
      <h1>Renderowanie z tablicy i obiektu</h1>
      <section>
        <h2>Renderowanie z tablicy</h2>
        <ul>{carArray.map(mojaFunkcja)}</ul>
      </section>
      <section>
        <h2>Renderowanie z tablicy obiektów</h2>
        <ul>{carData.map(carDataList)}</ul>
      </section>
    </article>
  );
};
