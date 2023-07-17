import { StarIcon } from './Components/StarIcon';
import './styles.css';

export function Exercise() {
  return (
    <div className="table-tennis">
      <table>
        <tr>
          <th>Location</th>
          <th>PLAYER_ID</th>
          <th className="rating-column">Rating</th>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#100120</td>
          <td className="rating-column">
            <div className="icon">
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
            </div>
          </td>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#100120</td>
          <td className="rating-column">
            <div className="icon">
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
            </div>
          </td>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#100120</td>
          <td className="rating-column">
            <div className="icon">
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
            </div>
          </td>
        </tr>
        <tr>
          <td>United States of America</td>
          <td>#100120</td>
          <td className="rating-column">
            <div className="icon">
              <StarIcon></StarIcon>
            </div>
          </td>
        </tr>
        <tr>
          <td>United States of America</td>
          <td>#100120</td>
          <td className="rating-column">
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
