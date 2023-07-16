import './styles.css';
import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';

export const ArrayRendering = () => {
  const carsArray = ['Saab', 'Volvo', 'BMW', 'Skoda', 'Mercedes'];

  function mojaFunkcja(nazwa) {
    return <li key={nazwa}>{nazwa}</li>;
  }

  const carData = [
    { id: 1, make: 'Saab', model: '92B', year: 1953, owner: 'Jon' },
    { id: 2, make: 'Volvo', model: 'C40', year: 2021, owner: 'Jenny' },
    { id: 3, make: 'Audi', model: 'A3', year: 2019, owner: 'Michael' },
    { id: 4, make: 'Tesla', model: 'Model S', year: 2022, owner: 'Sarah' },
  ];

  function TableCarData({ id, make }) {
    return <li key={id}>{make}</li>;
  }

  console.log(carData);
  return (
    <div>
      <MasterHeader title="Renderowanie z ablicy i obiektu" />
      <section>
        <h2>Renderowanie z tablicy (map)</h2>
        <ul>{carsArray.map(mojaFunkcja)}</ul>
      </section>
      <section>
        <h2>Renderowanie z tablicy obiektów</h2>
        <ul>{carData.map(TableCarData)}</ul>
      </section>
    </div>
  );
};
