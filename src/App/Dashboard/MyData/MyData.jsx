import { RoundImage } from '../../Components/RoundImage/RoundImage';

export const MyData = () => {
  return (
    <div className="dashboard-about-me">
      <div>
        <RoundImage size="90px" />
        <h2 className="dashboard-name">Nikolas Jadziński</h2>
        <p>Grudziądz</p>
      </div>

      <div className="email-container">
        <p>Email:</p>
        <p>
          <a href="mailto:nikolas.jadzinski@gmail.com">
            nikolas.jadzinski@gmail.com
          </a>
        </p>
      </div>

      <div className="telephone-container">
        <p>Telefon:</p>
        <p>
          <a href="tel:+48511867233">511 867 ...</a>
        </p>
      </div>
    </div>
  );
};
