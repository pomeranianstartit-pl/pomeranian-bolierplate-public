import './styles.css';
import { StarIcon } from '../../../Components/Icons/StarIcon';

export function HTMLTables() {
  return (
    <div>
      Table:
      <table>
        <tr>
          <th>Location</th>
          <th>PLAYER_ID</th>
          <th>Rating</th>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#100120</td>
          <td className="last-column">
            <StarIcon />
          </td>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#100122</td>
          <td className="last-column">
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </td>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#100124</td>
          <td className="last-column">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </td>
        </tr>
        <tr>
          <td>United States of America</td>
          <td>#100126</td>
          <td className="last-column">
            <StarIcon />
          </td>
        </tr>
        <tr className="last-row">
          <td>United States of America</td>
          <td>#1001208</td>
          <td className="last-column">
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
