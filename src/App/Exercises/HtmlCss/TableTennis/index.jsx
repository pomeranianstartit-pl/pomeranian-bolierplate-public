import { starIcon } from '../../../Components/Icons/starIcon';
import './styles.css';

export function TableTennis() {
  return (
    <div className="tables">
      <table>
        <tr>
          <th>Location</th>
          <th>PLAYER_ID</th>
          <th>Rating</th>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#100120</td>
          <td className="2-star"></td>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#100122</td>
          <td className="3-star"></td>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#100124</td>
          <td className="5-star"></td>
        </tr>
        <tr>
          <td>United States of America</td>
          <td>#100126</td>
          <td className="star"></td>
        </tr>
        <tr>
          <td>United States of America</td>
          <td>#100128</td>
          <td className="5-star">
            <starIcon />
          </td>
        </tr>
      </table>
    </div>
  );
}
