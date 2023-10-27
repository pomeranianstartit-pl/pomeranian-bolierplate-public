import { Blocks } from './Blocks/Blocks';
import { MyData } from './MyData/MyData';
import './styles.css';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <h1>Hej, tu Patrycja!</h1>
        <Blocks />
      </div>
      <MyData />
    </div>
  );
};
