import { NavLink } from 'react-router-dom';

import './styles/aside.css';


// import { ReactComponent as HouseIcon } from '../Components/Icons/HouseIcon.jsx';
// import { ReactComponent as FaqIconSVG } from '../Components/Icons/FaqIcon.jsx';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink to="dashboard">Dashboard</NavLink>
            {/* <HouseIcon /> */}
          </li>
          <li>
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li>
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li>
       
            <NavLink to="Faq">FAQ</NavLink>
          </li>
        </ul>
      </nav>
      {/* <FaqIconSVG /> */}
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
    
  );
}
