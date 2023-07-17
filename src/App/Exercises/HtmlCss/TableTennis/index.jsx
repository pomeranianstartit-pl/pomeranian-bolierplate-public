import './styles.css';
import { Star } from '../../../Components/Icons/Star';

export function TableTennis() {
  return (
    <div className="table">
      <table>
        <tr>
          <th>Location</th>
          <th>PLAYER-ID</th>
          <th>Rating</th>
        </tr>
        <tr>
          <td>Cape Verde Islands </td>
          <td>Maria Anders</td>
          <td>
            <Star />
          </td>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>Francisco Chang</td>
          <td>
            <Star />
            <Star />
            <Star />
          </td>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>Roland Mendel</td>
          <td>
            <Star />
          </td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>
            <Star />
          </td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>
            <Star />
          </td>
        </tr>
      </table>
    </div>
  );
}
