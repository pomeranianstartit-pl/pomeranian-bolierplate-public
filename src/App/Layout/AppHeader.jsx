import './styles/header.css';

import { ReactComponent as PomeranianLogo } from '../Images/start-it-logo.svg';
import { ReactComponent as Setting } from '../Images/setting.svg';
import { ReactComponent as Ellipse } from '../Images/Ellipse 2.svg';
import { ReactComponent as RightArrow } from '../Images/right-arrow 1.svg';

export function AppHeader() {
  return (
    <header>
      <PomeranianLogo />
      <div className="header--menu">
        <Setting />
        <Ellipse />
        <div className="header-menu-user">
          {' '}
          <p>Anna</p>
          <p>kursant</p>
        </div>
        <RightArrow />
      </div>

      {/* <HeaderMenu /> */}
    </header>
  );
}
