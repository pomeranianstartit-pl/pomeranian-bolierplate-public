import './styles.css';

import { BlocksBox } from '../Components/BlocksBox/BlocksBox';

import { MyInfo } from '../Components/MyInfo/MyInfo';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <h1>Hej, tu Edyta!</h1>
        <p>
          Poniżej znajdziesz najważniejsze informacje na temat mojej
          działalności.
        </p>
        <BlocksBox />
        <MyInfo />
      </div>
    </div>
  );
};
