import './styles.css';
import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';
import { StarIcon } from '../../../Components/Icons/StarIcon';
export const TablesTennis = () => {
  return (
    <div>
      <MasterHeader title="Rating" />
      <p>Cwiczenie z tworzenia tabel</p>
      <table className="table-rating">
        <tr>
          <th>Location</th>
          <th>Player_ID</th>
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
};
