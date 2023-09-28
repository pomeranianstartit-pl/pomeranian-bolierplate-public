import './../TableTennis/styles.css';
import star from './../../../Images/star.svg';

export function Exercise() {
  return (
    <div className="table-wrapper">
      {/* 1 tabela */}

      <table className="first-table">
        <tr>
          <th>Location</th>

          <th>PLAYER_ID</th>

          <th style={{ textAlign: 'right' }}>Rating</th>
        </tr>

        <tr>
          <td>Cape Verde Islands</td>

          <td>#100120</td>

          <td className="third-column">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </td>
        </tr>

        <tr>
          <td>Cape Verde Islands</td>

          <td>#100122</td>

          <td className="third-column">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </td>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>

          <td>#100124</td>

          <td className="third-column">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </td>
        </tr>

        <tr>
          <td>United States of America</td>

          <td>#100126</td>

          <td className="third-column">
            <img src={star} alt="star" />{' '}
          </td>
        </tr>
        <tr>
          <td>United States of America</td>
          <td>#100128</td>
          <td className="third-column">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </td>
        </tr>
      </table>
    </div>
  );
}
