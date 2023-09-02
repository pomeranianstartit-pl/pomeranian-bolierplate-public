import './styles.css';

import { MyData } from './MyData/MyData';

import { Blocks } from './Blocks/Blocks';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <Blocks />

      <MyData />
    </div>
  );
};
