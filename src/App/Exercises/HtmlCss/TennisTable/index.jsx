import { StarIcon } from '../../../Components/StarIcon';

import './styles.css';

export function Exercise() {
  return (
    <table className="tab-players">
      <tr>
        <th className="tab-location">Location</th>
        <th className="tab-player">PLAYER_ID</th>
        <th className="tab-rating">Rating</th>
      </tr>

      <tr>
        <td className="tab-location">Cape Verde Islands</td>
        <td className="tab-player">#100120</td>
        <td className="tab-rating">
          <StarIcon />

          <StarIcon />
        </td>
      </tr>

      <tr>
        <td className="tab-location">Cape Verde Islands</td>
        <td className="tab-player">#100122</td>
        <td className="tab-rating">
          <StarIcon />

          <StarIcon />

          <StarIcon />
        </td>
      </tr>

      <tr>
        <td className="tab-location">Cape Verde Islands</td>
        <td className="tab-player">#100124</td>
        <td className="tab-rating">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </td>
      </tr>

      <tr>
        <td className="tab-location">United States of America</td>
        <td className="tab-player">#100126</td>
        <td className="tab-rating">
          <StarIcon />
        </td>
      </tr>

      <tr>
        <td className="tab-location">United States of America</td>
        <td className="tab-player">#100128</td>
        <td className="tab-rating">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </td>
      </tr>

      <tr>
        <td className="tab-location">United States of America</td>
        <td className="tab-player">#100128</td>
        <td className="tab-rating">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </td>
      </tr>
    </table>
  );
}
