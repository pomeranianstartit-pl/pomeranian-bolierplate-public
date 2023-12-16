import './styles.css';

export function HTMLTables() {
  const list = ['Saab', 'Volvo', 'BMW', 'Skoda', 'Mercedes']
  return (
    <div>
      <table className="html-table">
        <tr>
          <th>Plastic</th>
          <th>Acetone</th>
          <th>Flame test</th>
          <th>Heat</th>
          <th>Crease Color</th>
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
          <td>Softens</td>
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
          <td>none</td>
        </tr>
      </table>
      <div className="gap"></div>
      <table className="second-table">
        <tr>
          <th className="first-head">Plastic</th>
          <th className="second-head">Acetone</th>
          <th className="third-head">Flame test</th>
        </tr>
        <tr>
          <td>1</td>
          <td>No effect</td>
          <td>Green color</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Softens</td>
          <td>No change</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Softens</td>
          <td>No change</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Softens</td>
          <td>No change</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Softens</td>
          <td>No change</td>
        </tr>
      </table>
      <ul>
        {list.map((value) => (
          <li>{value}</li>
        ))}
      </ul>
    </div>
  );
}
