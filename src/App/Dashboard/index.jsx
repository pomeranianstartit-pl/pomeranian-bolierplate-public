import { Blocks } from './Blocks/Blocks';
import { MyData } from './MyData/MyData.jsx';
import './styles.css';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <h1>Dashboard</h1>
        <p>
          Strona główna kursanta (o sobie, zdjęcie, opis narzędzi
          wykorzystywanych na kursie oraz umejętności zdobytych na kursie)
        </p>
        <Blocks />
      </div>
      <div className="mydata">
        <MyData />
      </div>
    </div>
  );
};
