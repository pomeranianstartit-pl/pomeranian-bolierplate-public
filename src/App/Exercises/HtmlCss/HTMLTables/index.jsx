import './style.css';

export function HTMLTable() {
  const list = ['Saab', 'Volvo', 'BMW', 'Skoda', 'Mercedes'];

  return (
    <div>
      <table className="html-table">
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
          <td>Softenes</td>
          <td>None</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Softenes</td>
          <td>No change</td>
          <td>No change</td>
          <td>White</td>
        </tr>
        <tr>
          <td>3</td>
          <td>No effect</td>
          <td>Red color</td>
          <td>Softenes</td>
          <td>None</td>
        </tr>
        <tr>
          <td>4</td>
          <td>No effect</td>
          <td>Green color</td>
          <td>Softenes</td>
          <td>none</td>
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
