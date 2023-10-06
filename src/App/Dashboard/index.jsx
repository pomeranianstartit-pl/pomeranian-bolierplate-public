import { Blocks } from './Blocks/Blocks';
import { MyData } from './MyData/MyData';
import './styles.css';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboardLeft">
        <h1>Dashboard</h1>
        <Blocks />
      </div>
      <div className="dashboardRight">
        <MyData />
      </div>
    </div>
  );
};

// export function Dashboard() {
//   return (
//     <div className="dashboard">
//       <h1>Dashboard</h1>
//       <p>
//         Strona główna kursanta (o sobie, zdjęcie, opis narzędzi wykorzystywanych
//         na kursie oraz umejętności zdobytych na kursie)
//       </p>
//     </div>
//   );
// }
