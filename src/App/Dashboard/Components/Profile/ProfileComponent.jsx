import './styles.css';

export const ProfileComponent = () => {
  return (
    <div className="profile-box">
      <div className="user-name-location">
        <div className="profile-photo"></div>
        <h2>Krzysztof Nadolny</h2>
        <p>Gdynia</p>
      </div>
      <div className="user-email">
        <p>e:mail</p>
        <p>abc@cde.com</p>
      </div>
      <div className="user-phone">
        <p>telefon:</p>
        <p>888 887 777</p>
      </div>
    </div>
  );
};
