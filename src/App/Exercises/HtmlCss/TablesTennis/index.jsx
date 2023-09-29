import './styles.css';

import TableTennisRow from './components/TableTennisRow';
import TableTennisCol from './components/TableTennisCol';

const data = {
  keys: ['Location', 'PLAYER_ID', 'Rating'],
  values: [
    {
      location: 'Cape Verde Islands',
      playerId: '#100120',
      rating: 4,
    },
    {
      location: 'Cape Verde Islands',
      playerId: '#100120',
      rating: 4,
    },
    {
      location: 'Cape Verde Islands',
      playerId: '#100120',
      rating: 4,
    },
  ],
};

export function Exercise() {
  function renderHeader(header) {
    return <TableTennisCol header={header} />;
  }

  function renderRow(row) {
    return <TableTennisRow row={row} />;
  }

  return (
    <div className="table-tennis">
      <table>
        <thead>
          <tr>{data.keys.map(renderHeader)}</tr>
        </thead>
        <tbody>{data.values.map(renderRow)}</tbody>
      </table>
    </div>
  );
}

const test = {
  title: 'Table Tennis',
  description: 'Table description',
};

// BEZ DESTRUKTURYZACJI
// const title = test.title;
// const description = test.description;

// DESTRUKTURYZACJA:
const { title, description } = test;

console.log(title, 'test');
console.log(description, 'description');
