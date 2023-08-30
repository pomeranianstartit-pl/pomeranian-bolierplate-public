import './styles.css';
import { StarIcon } from '../../../Components/Icons/StarIcon';
import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';

export const TablesTennis = () => {
  return (
    <article>
      <MasterHeader value="Rating" />
      <section>
        <p>Ćwiczenie z tworzenia tabel</p>
        <table className="table-tenis-table">
          <tr>
            <th>Location</th>
            <th>PLAYER_ID</th>
            <th>Rating</th>
          </tr>
          <tr>
            <td>Cape Verde Islands</td>
            <td>#100122</td>
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
            <td>#100122</td>
            <td>
              <StarIcon />
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
        </table>
      </section>
    </article>
  );
};
