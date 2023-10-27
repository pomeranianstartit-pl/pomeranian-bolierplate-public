import './style.css';
export function HTMLTables() {
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
          <td></td>
        </tr>
      </table>
      {/* ==================================================== */}

      <table className="rating-table">
        <tr>
          <th>Location</th>
          <th>PLAYER-ID</th>
          <th>Rating</th>
        </tr>

        <tr>
          <td>Cape Verde Islands</td>
          <td>#100120</td>
          <td>2</td>
        </tr>

        <tr>
          <td>Cape Verde Islands</td>
          <td>#100122</td>
          <td>3</td>
        </tr>

        <tr>
          <td>Cape Verde Islands</td>
          <td>#100124</td>
          <td>5</td>
        </tr>

        <tr>
          <td>United States of America</td>
          <td>#100126</td>
          <td>1</td>
        </tr>

        <tr>
          <td>United States of America</td>
          <td>#100128</td>
          <td>5</td>
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
