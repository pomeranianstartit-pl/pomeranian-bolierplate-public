import { Blocks } from '../Components/Blocks/blocks';
import { MyInfo } from '../Components/MyInfo/myinfo';
import './styles.css';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <h1>Hej, tu Michał!</h1>
        <p>
          Poniżej znajdziesz najważniejsze informacje na temat mojej
          działalności.
        </p>
        <Blocks />
      </div>
      <MyInfo />
    </div>
  );
};
