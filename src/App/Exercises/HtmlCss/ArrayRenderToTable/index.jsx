import './styles.css';

export function ArrayRenderToTable() {
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
    },]

      return (
    <html>
      <head></head>
      <body>
        <table> 
          <tr>
            <th>band</th>
            <th>yearFormed</th>
            <th>albums</th>
            <th>mostFamousSong</th>
          </tr>
        </table>
      </body>
      <div>{displaylist(bands)}</div>
    </html>
    
  );
      }
  function displaylist(bands) {
    return bands.map((bandsElement)=> (
      <table>
        <tr>
          <td>{bandsElement.band}</td>
          <td>{bandsElement.yearFormed}</td>
          <td>{bandsElement.albums}</td>
          <td>{bandsElement.mostFamousSong}</td>
        </tr>
      </table>
    ))
  }
