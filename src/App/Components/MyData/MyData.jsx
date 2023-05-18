import './styles.css';

export const MyData = () => {
  return (
    <div className="personalinfocardright">
      <br />
      <div>
        <img src={require('./Profile-pic.jfif')} className="profilepicmydata" />
      </div>
      <div className="MyNameDashright">Michał Białaś</div>
      <div className="MyInfoDashright">
        <div>Gdańsk</div>
        <br />
        <div>e-mail:</div>
        <div>michabialas@gmail.com</div>
        <br />
        <div>telefon:</div>
        <div>+48 530 514 672</div>
      </div>
    </div>
  );
};
