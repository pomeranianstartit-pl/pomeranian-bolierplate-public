import { DashBlocks } from '../Components/DashBlocks/DashBlocks';
import { MyData } from '../Components/MyData/MyData';
import { HelloIcon } from '../Components/Icons/HelloIcon';
import './styles.css';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <p className="headerhello">
        <HelloIcon />
        Hej, tu Michał!
      </p>
      <p>
        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności
      </p>
      <p>
        <DashBlocks />
      </p>
      <p>
        <MyData />
      </p>
    </div>
  );
};
