import './styles.css';
import { Blocks } from '../Components/Blocks/Blocks';
import { MyInfo } from '../Components/MyInfo/MyInfo';

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
      <MyInfo />
    </div>
  );
};
