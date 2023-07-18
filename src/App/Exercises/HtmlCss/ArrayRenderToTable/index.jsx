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
    },
  ];

  function camelCaseToNormalText(input) {
    // zamienia pierwszą literę na wielką oraz dodaje spacje przed każdą dużą literą, które nie są na początku stringu

    return (
      input
        // Wstawia spację przed wielką literą, która nie jest na początku stringu
        .replace(/([A-Z])/g, ' $1')
        // Zamienia pierwszą literę na wielką
        .replace(/^./, function (str) {
          return str.toUpperCase();
        })
    );
  }

  return (
    <div className="array-rendering-to-table">
      <table>
        <tr>
          {Object.keys(bands[0]).map(function (key) {
            return <th key={key}>{camelCaseToNormalText(key)}</th>;
          })}
        </tr>
        {/* <tr>
          <th>Band</th>
          <th>Formed in</th>
          <th>Albums</th>
          <th>Most famous song</th>
        </tr> */}

        {bands.map(function (spec) {
          return (
            <tr key={spec.band}>
              <td>{spec.band}</td>
              <td>{spec.yearFormed}</td>
              <td>{spec.albums}</td>
              <td>{spec.mostFamousSong}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
