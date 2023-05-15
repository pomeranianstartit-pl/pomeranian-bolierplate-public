import './styles.css';

export function HTMLTables() {
  return (
    <table className="Table">
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
        <td>Soften</td>
        <td>none</td>
      </tr>
    </table>
  );
}
