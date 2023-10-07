import { Block } from './Blocks/Block';
import { MyData } from './MyData/MyData';
import './styles.css';

export const Dashboard = () => {
  return (
    <div>
      <div className="dashboard">
        <div>
          <h1> {'>'} Dashboard</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            explicabo!
          </p>
          <Block />
        </div>
        <MyData />
      </div>
      <div className="dashboard-grid"></div>
    </div>
  );
};
