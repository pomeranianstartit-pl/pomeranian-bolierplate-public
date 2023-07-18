import { StarIcon } from '../../../Components/Icons/StarIcon';
import './styles.css';

export function TableTennis() {
  return (
    <div className="tables">
      <table className="tableTennis">
        <tr className="trTennisOne">
          <th>Location</th>
          <th>PLAYER_ID</th>
          <th>Rating</th>
        </tr>
        <tr className="trTennisTwo">
          <td>Cape Verde Islands</td>
          <td>#100120</td>
          <td className="two-star">
            <div>
              <StarIcon />
              <StarIcon />
            </div>
          </td>
        </tr>
        <tr className="trTennisThree">
          <td>Cape Verde Islands</td>
          <td>#100122</td>
          <td className="three-star">
            <div>
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </td>
        </tr>
        <tr className="trTennisTwo">
          <td>Cape Verde Islands</td>
          <td>#100124</td>
          <td className="five-star">
            <div>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </td>
        </tr>
        <tr className="trTennisThree">
          <td>United States of America</td>
          <td>#100126</td>
          <td className="one-star">
            <div>
              <StarIcon />
            </div>
          </td>
        </tr>
        <tr className="trTennisTwo">
          <td>United States of America</td>
          <td>#100128</td>
          <td className="five-star">
            <div>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}
