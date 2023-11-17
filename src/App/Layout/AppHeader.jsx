import './styles/header.css';

import { ReactComponent as PomeranianLogo } from '../Images/start-it-logo.svg';
import { HeaderMenu } from './components/HeaderMenu';
import HeaderSearch from './components/HeaderSearch';

export function AppHeader() {
  return (
    <header>
      <PomeranianLogo />
      <HeaderSearch />
      <HeaderMenu />
    </header>
  );
}
