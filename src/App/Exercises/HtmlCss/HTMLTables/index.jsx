import './styles.css';

export function Table() {
  return (
    <div>
      <table className='example_table'>
        <tr className="tr">
          <th className="th">Plastic</th>
          <th className="th">Acetone</th>
          <th className="th">Flame test</th>
          <th className="th">Heat</th>
          <th className="th">Crease color</th>
        </tr>
        <tr className="tr">
          <td className="td">1</td>
          <td className="td">No effect</td>
          <td className="td">Green color</td>
          <td className="td">Softens</td>
          <td className="td">None</td>
        </tr>
        <tr className="tr">
          <td className="td">2</td>
          <td className="td">Softened</td>
          <td className="td">No change</td>
          <td className="td">No change</td>
          <td className="td">White</td>
        </tr>
        <tr className="tr">
          <td className="td">3</td>
          <td className="td">No effect</td>
          <td className="td">Red color</td>
          <td className="td">Softens</td>
          <td className="td">None</td>
        </tr>
        <tr className="tr">
          <td className="td">4</td>
          <td className="td">No effect</td>
          <td className="td">Green color</td>
          <td className="td">Softens</td>
          <td className="td">None</td>
        </tr>
      </table>
    </div>
  );
}
