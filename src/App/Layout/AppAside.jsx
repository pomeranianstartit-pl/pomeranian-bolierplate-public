import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { FaqIcon} from '../Components/Icons/FaqIcon';

// import { ReactComponent as HouseIcon } from '../Components/Icons/HouseIcon.jsx';
// import { ReactComponent as FaqIconSVG } from '../Components/Icons/FaqIcon.jsx';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
          <HouseIcon />
            <NavLink to="dashboard">Dashboard</NavLink>
            
          </li>
          <li>
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li>
          <EditIcon/>
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li>
          <FaqIcon/>
       
            <NavLink to="Faq">FAQ</NavLink>
          </li>
        </ul>
      </nav>
      
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
    
  );
}
