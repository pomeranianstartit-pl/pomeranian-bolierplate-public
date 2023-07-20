import './styles.css';


export const ArrayRendering = () => {

  const namesArray = ['Kasia', 'Ania', 'Franek', 'Zenek'];


  function namesList(name) {
    return (
      <li key={name}>{name}</li>);
  }

  const carData = [

    { id: 1, make: 'Saab', model: '92B', year: 1953, owner: 'Jon' },

    { id: 2, make: 'Volvo', model: 'C40', year: 2021, owner: 'Jenny' },

    { id: 3, make: 'Audi', model: 'A3', year: 2019, owner: 'Michael' },

    { id: 4, make: 'Tesla', model: 'Model S', year: 2022, owner: 'Sarah' },

  ];
  function carsList({ id, make, model, year, owner }) {

    return (
      <li key={id}>{id} {make} {model} {year} {owner}</li>);
  }


  return (
    <>
      <div>
        <h2>Renderowanie z tablicy</h2>
        <ul>
          <p>{namesArray.map(namesList)}</p>
        </ul>
      </div>
      <div>
        <h2>Renderowanie z obiektu</h2>
        <ul>
          {carData.map(carsList)}
        </ul>
      </div>
    </>
  );
};
