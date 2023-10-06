import './styles.css';
import { StarIcon } from '../../../Components/Icons/table/StarIcon';

export function Exercise() {
  return (
    <div className="wrapper">
      <h2>Ćwiczenie z tworzenia tabel</h2>

      <table className="table-tennis">
        <thead>
          <tr>
            <th>Location</th>
            <th>PLAYER_ID</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
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
