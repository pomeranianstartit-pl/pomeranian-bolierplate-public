import './styles.css';
//import { StarIcon } from '../Components/Icons/StarIcon';

export function Tables() {
  return (
    <div>
      <ol>
        <li>
          The following data were collected by a group of students as they
          tested four different types of plastics.
        </li>
      </ol>
      <table className="table-exc">
        <tr>
          <th>Plastic</th>
          <th>Acetone</th>
          <th>Flame test</th>
          <th>Heat</th>
          <th>Crease color</th>
        </tr>
        <tr>
          <td>1</td>
          <td>No effect</td>
          <td>Green color</td>
          <td>Softens</td>
          <td>None</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Softened</td>
          <td>No change</td>
          <td>No change</td>
          <td>White</td>
        </tr>
        <tr>
          <td>3</td>
          <td>No effect</td>
          <td>Red color</td>
          <td>Softens</td>
          <td>none</td>
        </tr>
        <tr>
          <td>4</td>
          <td>No effect</td>
          <td>Green color</td>
          <td>Softens</td>
          <td>none</td>
        </tr>
      </table>
      <br />
      <div>
        Which plastic would be unsafe to use to store products that contain
        acetone?
      </div>
      <ol type="a">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ol>
      <hr />
      <table className="table-two">
        <tr>
          <th>Location</th>
          <th>PLAYER_ID</th>
          <th>Rating</th>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#100120</td>
          <td>
            <img src="http://www.w3.org/2000/svg"></img>
          </td>
        </tr>
        <tr>
          <td>Cape Verde Islands </td>
          <td>#100122</td>
          <td>No change</td>
        </tr>
        <tr>
          <td>Cape Verde Islands </td>
          <td>#100124</td>
          <td>Red color</td>
        </tr>
        <tr>
          <td>United States of America</td>
          <td>#100126</td>
          <td>Green color</td>
        </tr>
        <tr>
          <td>United States of America</td>
          <td>#100128</td>
          <td>Green color</td>
        </tr>
      </table>
    </div>
  );
}
