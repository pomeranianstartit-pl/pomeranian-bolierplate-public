import './styles.css';

import starSVG from '../../../Images/star.svg';

export function StarIcon({ size = '20px' }) {
  return (
    <img src={starSVG} alt="star" style={{ height: size, width: size }}></img>
  );
}

export function Exercise() {
  return (
    <>
      <table>
        <tr>
          <th>Location</th>
          <th>PLAYER_ID</th>
          <th>Rating</th>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#100120</td>
          <td>
            <img src={starSVG} alt="Brak SVG" />
            <img src={starSVG} alt="Brak SVG" />
          </td>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#100122</td>
          <td>
            <img src={starSVG} alt="Brak SVG" />
          </td>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#100124</td>
          <td>
            <img src={starSVG} alt="Brak SVG" />
            <img src={starSVG} alt="Brak SVG" />
            <img src={starSVG} alt="Brak SVG" />
            <img src={starSVG} alt="Brak SVG" />
            <img src={starSVG} alt="Brak SVG" />
          </td>
        </tr>
        <tr>
          <td>United States of America</td>
          <td>#100126</td>
          <td>
            <img src={starSVG} alt="Brak SVG" />
          </td>
        </tr>
        <tr>
          <td>United States of America</td>
          <td>#100128</td>
          <td>
            <img src={starSVG} alt="Brak SVG" />
            <img src={starSVG} alt="Brak SVG" />
            <img src={starSVG} alt="Brak SVG" />
            <img src={starSVG} alt="Brak SVG" />
            <img src={starSVG} alt="Brak SVG" />
          </td>
        </tr>
      </table>
    </>
  );
}

/*import { StarIcon } from '../../../Components/Icons/StarIcon';

import './styles.css';

 

export function Exercise() {

  return (

    <table className="table-players">

      <tr>

        <th className="table-location">Location</th>

        <th className="table-player">PLAYER_ID</th>

        <th className="table-rating">Rating</th>

      </tr>

      <tr>

        <td className="table-location">Cape Verde Islands</td>

        <td className="table-player">#100120</td>

        <td className="table-rating">

          <StarIcon />

          <StarIcon />

        </td>

      </tr>

      <tr>

        <td className="table-location">Cape Verde Islands</td>

        <td className="table-player">#100122</td>

        <td className="table-rating">

          <StarIcon />

          <StarIcon />

          <StarIcon />

        </td>

      </tr>

      <tr>

        <td className="table-location">Cape Verde Islands</td>

        <td className="table-player">#100124</td>

        <td className="table-rating">

          <StarIcon />

          <StarIcon />

          <StarIcon />

          <StarIcon />

          <StarIcon />

        </td>

      </tr>

      <tr>

        <td className="table-location">United States of America</td>

        <td className="table-player">#100126</td>

        <td className="table-rating">

          <StarIcon />

        </td>

      </tr>

      <tr>

        <td className="table-location">United States of America</td>

        <td className="table-player">#100128</td>

        <td className="table-rating">

          <StarIcon />

          <StarIcon />

          <StarIcon />

          <StarIcon />

          <StarIcon />

        </td>

      </tr>

      <tr>

        <td className="table-location">United States of America</td>

        <td className="table-player">#100128</td>

        <td className="table-rating">

          <StarIcon />

          <StarIcon />

          <StarIcon />

          <StarIcon />

          <StarIcon />

        </td>

      </tr>

    </table>

  );

} */
