import { Blocks } from './Blocks/Blocks';
import { MyData } from './MyData/MyData';
import './styles.css';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <h1> {'>'} Dashboard</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
          corrupti maxime iste magnam tenetur porro in itaque alias minima
          veniam, quasi non culpa fugiat, incidunt dolorum eos earum molestiae
          tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Beatae, doloremque? Officia, ea dolorem. Quo soluta itaque excepturi
          incidunt tenetur maiores, perferendis ipsum dolorem animi est
          architecto nobis deleniti quisquam explicabo!
        </p>
      </div>
      <Blocks />
      <MyData />
    </div>
  );
};
