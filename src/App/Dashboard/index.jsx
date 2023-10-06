import { Blocks } from './Blocks/blocks';
import { MyData } from './MyData/myData';
import './styles.css';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <h1>Dashboard</h1>

        <Blocks />
      </div>
      <MyData />
    </div>
  );
};
