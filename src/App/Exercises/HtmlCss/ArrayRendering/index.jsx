import './styles.css';

export const ArrayRendering = () => {
  const cars = [
    { id: 1, make: 'Saab', model: '92B', year: 1953, owner: 'Jon' },
    { id: 2, make: 'Volvo', model: 'C40', year: 2021, owner: 'Jenny' },
    { id: 3, make: 'Audi', model: 'A3', year: 2019, owner: 'Michael' },
    { id: 4, make: 'Tesla', model: 'Model S', year: 2022, owner: 'Sarah' },
  ];
  // export const ArrayRendering = () => {
  // const music = [{ id: 1, Band: 'Buzzcocks', Year formed: '1976',NO. of Albums: '9', Most Famous Song: 'Ever fallen in love'}];
  //};

  return (
    <div>
      Auta:
      <ul>
        {cars.map(({ id, make, model, owner, year }) => {
          return (
            <li key={id}>
              {make} {model} ({year}) - <b>{owner}</b>
            </li>
          );
        })}
      </ul>
      <hr />
      <table className="table-exc">
        <tr>
          <th>BAND</th>
          <th>YEAR FORMED</th>
          <th>NO. OF ALBUMS</th>
          <th>MOST FAMOUS SONG</th>
        </tr>
        <tr>
          <td></td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
        </tr>
        <tr>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
        </tr>
        <tr>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
        </tr>{' '}
        <tr>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
        </tr>{' '}
        <tr>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
        </tr>{' '}
        <tr>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
        </tr>{' '}
        <tr>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
        </tr>{' '}
        <tr>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
        </tr>
      </table>
    </div>
  );
};
