import { Blocks } from './Blocks/Blocks';
import { MyData } from './MyData/MyData';
import './styles.css';

// export const Dashboard = () => {
export function Dashboard() {
  return (
    <div className="dashboard">
      {/* <h1>Dashboard</h1>
        <p>
          Strona główna kursanta (o sobie, zdjęcie, opis narzędzi
          wykorzystywanych na kursie oraz umejętności zdobytych na kursie)
        </p> */}
      <div>
        <h1>Hej, tu Karol!</h1>
        <span>
          Poniżej znajdziesz najważniejsze informacje na temat mojej
          działalności.
        </span>

        <Blocks />
      </div>
      <MyData />
    </div>
  );
  // };
}
