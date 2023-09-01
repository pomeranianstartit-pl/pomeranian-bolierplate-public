import './styles.css';
import { Blocks } from '../Components/Blocks';
import { MyInfo } from '../Components/MyInfo';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <h1>Hej, tu Ola!</h1>
        <p>...</p>
        <Blocks />
      </div>

      <MyInfo />
    </div>
  );
};
