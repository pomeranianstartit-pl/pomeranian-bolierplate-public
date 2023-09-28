import './styles.css';
import { StarIcon } from './components-tablestennis/StarIcon';

export function Exercise() {
  return (
    <div>
      <table className="tables-tennis-wrapper">
        <thead className="tables-tennis-head">
          <tr>
            <th>Location</th>
            <th>PLAYER_ID</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody className="tables-tennis-body">
          <tr>
            <td>Cape Verde Islands</td>
            <td>#100120</td>
            <td>
              <StarIcon />
              <StarIcon />
            </td>
          </tr>
          <tr>
            <td>Cape Verde Islands</td>
            <td>#100122</td>
            <td>
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </td>
          </tr>
          <tr>
            <td>Cape Verde Islands</td>
            <td>#100124</td>
            <td>
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
            <td>
              <StarIcon />
            </td>
          </tr>
          <tr>
            <td>United States of America</td>
            <td>#100128</td>
            <td>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
