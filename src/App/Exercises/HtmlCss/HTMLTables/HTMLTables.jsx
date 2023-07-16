import './styles.css';

export const HTMLTables = () => {
  return (
    <div>
      <section>
        <h1>The followin data...</h1>

        <table className="first-table">
          <tr>
            <th>Platic</th>
            <th>Acetone</th>
            <th>Flame test</th>
            <th>Heat</th>
            <th>Crease color</th>
          </tr>
          <tr>
            <td>1</td>
            <td>No effect</td>
            <td>GFlame test</td>
            <td>Green color</td>
            <td>Softens</td>
            <td>None</td>
          </tr>
        </table>
      </section>
      <section>
        <img
          src="https://wgbh.brightspotcdn.com/ce/c3/68fbc2ec4892a5aaaf5bdc053dcd/291.jpg"
          alt="image"
        />
      </section>

      <section>
        <h2>Stylowanie tabelki</h2>
        <table className="table-with-styling">
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
      </section>
    </div>
  );
};
