import './styles.css';
import star from './star.svg';

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
            <img width="20" src={star} />
            <img width="20" src={star} />
          </td>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>Francisco Chang</td>
          <td>
            <img width="20" src={star} />
            <img width="20" src={star} />
            <img width="20" src={star} />
          </td>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>Roland Mendel</td>
          <td>
            <img width="20" src={star} />
          </td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>
            <img width="20" src={star} />
          </td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>
            <img width="20" src={star} />
          </td>
        </tr>
      </table>
    </div>
  );
}
