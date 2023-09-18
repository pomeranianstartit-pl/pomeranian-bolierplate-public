import './styles/header.css';

import { ReactComponent as PomeranianLogo } from '../Images/start-it-logo.svg';

export function AppHeader() {
  return (
    <header>
      <PomeranianLogo />
      {/* <HeaderMenu /> */}
    </header>
  );
}
