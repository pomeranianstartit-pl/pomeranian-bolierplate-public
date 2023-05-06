import { NavLink } from 'react-router-dom';

import './styles/aside.css';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink to="cv">Moje CV</NavLink>
          </li>
          <li>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li>
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li>
            <NavLink to="calendar">Kalendarz</NavLink>
          </li>
          <li>
            <NavLink to="settings">Ustawienia</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
