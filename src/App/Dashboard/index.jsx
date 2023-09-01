import './styles.css';
import { Blocks } from '../Components/Blocks';
import { MyInfo } from '../Components/MyInfo';
import hand from '../Images/hand.svg';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <h3>
          <img className="reka" src={hand} alt="" />
          <span className="hej">Hej, tu Ola!</span>
        </h3>
        <p className="info">
          Poniżej znajdziesz najważniejsze informacje na temat mojej
          działalności.
        </p>
        <Blocks />
      </div>

      <MyInfo />
    </div>
  );
};
