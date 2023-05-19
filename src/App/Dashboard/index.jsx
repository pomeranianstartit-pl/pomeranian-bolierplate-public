import './styles/dashboard-about-me.css';
import './styles/dashboard-tech-stack.css';
import './styles/dashboard-tiles.css';
// import { MyData } from './MyData/MyData';
// import { Blocks } from './Blocks/Blocks';

// export const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <h1>Dashboard</h1>
//       <p>
//         Strona główna kursanta (o sobie, zdjęcie, opis narzędzi wykorzystywanych
//         na kursie oraz umejętności zdobytych na kursie)
//       </p>
//       <Blocks />
//       <MyData />
//     </div>
//   );
// };

import './styles.css';

import { MyData } from './MyData/MyData';
import { Blocks } from './Blocks/Blocks';

export const Dashboard = () => {
  return (
    <div className="dashboard">
       <Blocks />
       <MyData />{' '}
    </div>
  );
};
