import './styles.css';

export const ProfileComponent = () => {
  return (
    <div className="profile-box">
      <div className="profile-photo"></div>
      <p className="profile-name">Krzysztof Nadolny</p>
      <p className="user-location">Gdynia</p>
      <p>e-mail</p>
      <p className="user-email">abc@cde.com</p>
    </div>
  );
};
