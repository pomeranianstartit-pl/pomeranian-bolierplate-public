import './html-tables.css';
import { StarIcon } from './StarIcon';

export function HTMLTables() {
  return (
    <div>
      <table className="first-table">
        <tr className="table-head">
          <th>Plastic</th>
          <th>Acetone</th>
          <th>Flame test</th>
          <th>Heat</th>
          <th>Crease color</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
        </tr>
        <tr>
          <td colSpan={2}>Total:</td>
          <td colSpan={3}>Lorem Ipsum</td>
        </tr>
      </table>

      <br />
      <br />

      <table className="second-table">
        <tr>
          <th className="top-left-border">Location</th>
          <th>PLAYER_ID</th>
          <th className="last-col top-right-border">Rating</th>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#100120</td>
          <td className="last-col">
            <StarIcon />
            <StarIcon />
          </td>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#100120</td>
          <td className="last-col">
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </td>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#100120</td>
          <td className="last-col">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </td>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#100120</td>
          <td className="last-col">
            <StarIcon />
          </td>
        </tr>
        <tr>
          <td className="bottom-left-border">Cape Verde Islands</td>
          <td>#100120</td>
          <td className="last-col bottom-right-border">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </td>
        </tr>
      </table>
    </div>
  );
}
