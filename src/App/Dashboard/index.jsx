import { Blocks } from './Blocks/Block';
import { MyData } from './MyData/MyData';
import snowWolf from '../Images/waving-hand-sign_1f44b 1.jpg';
import './styles.css';

export const Dashboard = () => {
  return (
    <div>
      <div className="dashboard">
        <div>
          <h1 id="dashboard-header">
            <div
              style={{
                backgroundImage: `url(${snowWolf})`,
                repeat: 'none',
                width: '22px',
                height: '22px',
              }}
              id="pic-in-dash"
            ></div>
            <div>Dashboard</div>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            explicabo!
          </p>
          <Blocks />
        </div>
        <MyData />
      </div>
      <div className="dashboard-grid"></div>
    </div>
  );
};
