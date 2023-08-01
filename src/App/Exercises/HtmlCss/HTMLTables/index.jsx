import './styles.css';

export function Exercise() {
  return (
    <body>
      <h2>
        The following data were collected by a group of Ss as they tested four
        different types of plastic.
      </h2>

      <div className="html-tables">
        <table>
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
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>4</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </body>
  );
}
