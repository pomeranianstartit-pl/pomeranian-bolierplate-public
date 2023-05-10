import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { FAQIcon } from '../Components/Icons/FAQIcon';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
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
            <NavLink to="blog">Blog</NavLink>
          </li>
          <li>
            <FAQIcon className="faq-icon"></FAQIcon>
            <NavLink to="faq">FAQ</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
