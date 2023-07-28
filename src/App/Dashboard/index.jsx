import './styles.css';
import { MyData } from '../Components/MyData/MyData';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Cześć tu Sławomir</h1>
      <p>
        Strona główna kursanta (o sobie, zdjęcie, opis narzędzi wykorzystywanych
        na kursie oraz umejętności zdobytych na kursie)
      </p>
      <MyData />
    </div>
  );
};
