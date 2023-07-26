import { StarIcon } from '../../../Components/Icons/StarIcon';

import './styles.css';

export function Exercise() {
  return (
    <div className="table-tennis">
      <table>
        <tr>
          <th>Location</th>

          <th>PLAYER_ID</th>

          <th>Rating</th>
        </tr>

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
      </table>
    </div>
  );
}
