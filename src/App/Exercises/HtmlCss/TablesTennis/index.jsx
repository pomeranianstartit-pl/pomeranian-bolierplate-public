import { StarIcon } from '../../../Components/Icons/StarIcon';
import './styles.css';

export function Exercise() {
  return (
    <div className="table-wrapper">
      <table className="tabelkapanstwa">
        <thead>
          <tr>
            <th>Location</th>
            <th>PLAYER_ID</th>
            <th>Rating</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>Cape Verde Islands</th>
            <td>#100120</td>
            <td>
              <StarIcon />
              <StarIcon />
            </td>
          </tr>
          <tr>
            <th>Cape Verde Islands </th>
            <td>#100122</td>
            <td>
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </td>
          </tr>
          <tr>
            <th>Cape Verde Islands </th>
            <td>#100124 </td>
            <td>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </td>
          </tr>
          <tr>
            <th>United States of America </th>
            <td>#100126 </td>
            <td>
              <StarIcon />
            </td>
          </tr>
          <tr>
            <th>United States of America </th>
            <td>#100128 </td>
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
      ;
    </div>
  );
}
