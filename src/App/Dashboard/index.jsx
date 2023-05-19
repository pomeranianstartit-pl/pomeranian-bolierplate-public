import { DashBlocks } from '../Components/DashBlocks/DashBlocks';
import { HelloIcon } from '../Components/Icons/HelloIcon';
import { MyData } from '../Components/MyData/MyData';
import './styles.css';

export const Dashboard = () => {
  return (
    <div>
      <div className="dashboard">
        <p className="headerhello">
          <HelloIcon />
          Hej, tu Michał!
        </p>
        <p>
          Poniżej znajdziesz najważniejsze informacje na temat mojej
          działalności
        </p>
      </div>
      <div className="MyDataPosition">
        <MyData />
      </div>
      <div className="DashBlocksPosition">
        <DashBlocks />
      </div>
    </div>
  );
};
