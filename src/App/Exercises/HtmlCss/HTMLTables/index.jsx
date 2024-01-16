import { FinalTable } from './final-table';
import './styles.css';

export function HTMLTables() {
  const list = ['Saab', 'Volvo', 'BMW', 'Skoda', 'Mercedes'];
  return (
    <div>
      <FinalTable />

      <table className="html-table">
        <thead>
          <tr>
            <th>Plastic</th>
            <th>Acetone</th>
            <th>Flame test</th>
            <th>Heat</th>
            <th>Crease Color</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
      <div className="gap"></div>
      <table className="second-table">
        <thead>
          <tr>
            <th className="first-head">Plastic</th>
            <th className="second-head">Acetone</th>
            <th className="third-head">Flame test</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
      <ul>
        {list.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </div>
  );
}
