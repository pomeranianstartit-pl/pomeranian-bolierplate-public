import './styles.css';

export const MyData = () => {
  return (
    <div className="dashboard-about-me">
      <div className="person">
        <figure>
          <img
            className="foto"
            src="https://s1.r29static.com/bin/entry/859/x/1761824/image.gif"
            alt=""
            title="moje foto"
          />
        </figure>
      </div>
      <div className="name">
        {' '}
        <p>Sick Boy</p>
        <p>Acid Drinker</p>
      </div>
      <div className="email-container">
        <p>email:</p>
        <p>maciej.dojlido@gmail.com</p>
      </div>

      <div className="telephone-container">
        <p>telefon:</p>
        <p>111 222 333</p>
      </div>
    </div>
  );
};
