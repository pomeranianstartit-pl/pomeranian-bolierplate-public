import './styles.css';

export function Exercise() {
  return (
    <div className="table-wrapper">
      {/* 1 tabela */}

      <table className="first-table">
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
          <td>1</td>
          <td>No effect</td>
          <td>Green color</td>
          <td>Softens</td>
          <td>None</td>
        </tr>

        <tr>
          <td>1</td>
          <td>No effect</td>
          <td>Green color</td>
          <td>Softens</td>
          <td>None</td>
        </tr>
      </table>

      {/* 2 tabela */}

      <table className="second-table">
        <thead>
          <tr>
            <th>Items</th>
            <th>Quanitity</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>Pączki</th>
            <td>10000</td>
          </tr>

          <tr>
            <th>Jagodzianki</th>
            <td>50000</td>
          </tr>

          <tr>
            <th>Ciastka</th>
            <td>10000</td>
          </tr>

          <tr>
            <th>Cynamonki</th>
            <td>10000</td>
          </tr>
        </tbody>

        <caption>Spis produktów piekarnii DowolnaPiekarni Sp. z.o.o </caption>
      </table>
    </div>
  );
}
