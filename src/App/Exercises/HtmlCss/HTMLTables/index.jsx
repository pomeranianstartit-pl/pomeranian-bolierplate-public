import './styles.css';

export function HTMLTables() {
  const list = ['Saab', 'Volvo', 'BMW', 'Skoda', 'Mercedes'];
  return (
    <div className="rating">
      RATING
      <p>Ćwiczenie z tworzenia tabel</p>
      <div>
        <table className="html-tables">
          <tr>
            <th>Plastic</th>
            <th>Acetone</th>
            <th>Flame test</th>
            <th>Heat</th>
            <th>Crease color</th>
          </tr>
          <tr>
            <td>1</td>
            <td>No effect</td>
            <td>Green color</td>
            <td>Softens</td>
            <td>None</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Softened</td>
            <td>No change</td>
            <td>No change</td>
            <td>White</td>
          </tr>
          <tr>
            <td>3</td>
            <td>No effect</td>
            <td>Red color</td>
            <td>Softens</td>
            <td>None</td>
          </tr>
          <tr>
            <td>4</td>
            <td>No effect</td>
            <td>Green color</td>
            <td>Softens</td>
            <td>None</td>
          </tr>
        </table>
      </div>
      <p>odstep</p>
      <div>
        <table className="html-table2">
          <tr>
            <th>Location</th>
            <th>PLAYER_ID</th>
            <th>Rating</th>
          </tr>
          <tr>
            <td>1</td>
            <td>No effect</td>
            <td>Green color</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Softened</td>
            <td>No change</td>
          </tr>
          <tr>
            <td>3</td>
            <td>No effect</td>
            <td>Red color</td>
          </tr>
          <tr>
            <td>4</td>
            <td>No effect</td>
            <td>Green color</td>
          </tr>
        </table>
      </div>
      <ul>
        {list.map((value) => (
          <li>{value}</li>
        ))}
      </ul>
    </div>
  );
}
