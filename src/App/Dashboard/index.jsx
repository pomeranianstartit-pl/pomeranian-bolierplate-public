import { Blocks } from './Blocks/Blocks';
import { MyData } from './MyData/MyData';
import './styles.css';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <Blocks />
      </div>
      <MyData />
    </div>
  );
};
