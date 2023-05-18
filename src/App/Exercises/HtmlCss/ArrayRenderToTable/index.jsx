import { tab } from '@testing-library/user-event/dist/tab';
import './styles.css';

export function ArrayRenderToTable() {

  // dane //
  const bands = [
    {
      band: 'The Clash',
      yearFormed: 1976,
      albums: 6,
      mostFamousSong: 'London Calling',
    },
    {
      band: 'Sex Pistols',
      yearFormed: 1975,
      albums: 1,
      mostFamousSong: 'Anarchy in the UK',
    },
    {
      band: 'Ramones',
      yearFormed: 1974,
      albums: 14,
      mostFamousSong: 'Blitzkrieg Bop',
    },
    {
      band: 'The Cure',
      yearFormed: 1976,
      albums: 13,
      mostFamousSong: 'Just Like Heaven',
    },
    {
      band: 'Joy Division',
      yearFormed: 1976,
      albums: 2,
      mostFamousSong: 'Love Will Tear Us Apart',
    },
    {
      band: 'Siouxsie and the Banshees',
      yearFormed: 1976,
      albums: 11,
      mostFamousSong: 'Hong Kong Garden',
    },
  ];

// funkcja wyświetlania listy w formie tabeli 
// return (ma zwracać nam zaciągnięte informacje) + skąd ma mapować - const bands + .map (mapowanie) => ((nazwanie zmiennych)
function displaylist(bands) {
  return bands.map((bandsElement) => (
    <table className='annotativeTable'>
      <tr>
        <td>{bandsElement.band}</td>
        <td>{bandsElement.yearFormed}</td>
        <td>{bandsElement.albums}</td>
        <td>{bandsElement.mostFamousSong}</td>
      
      </tr>
    </table>
  ))
}

return (
  <div>
    <h1>  &lt; RATING</h1>
    <h5>Ćwiczenie z tworzenia tabeli</h5>
    <div className="box">
    <table className="headerTable">
      <tr>
        <th>Zespół</th>
        <th>Rok założenia</th>
        <th>Liczba albumów</th>
        <th>Najbardziej znana piosenka</th>
      </tr>
    </table>

    <div>{displaylist(bands)}</div>
    </div>
  </div>
);


}
