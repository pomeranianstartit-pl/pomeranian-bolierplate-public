import './styles/header.css';

import { ReactComponent as PomeranianLogo } from '../Images/start-it-logo.svg';
import { HeaderMenu } from './components/HeaderMenu';

export function AppHeader() {
  return (
    <header>
      <PomeranianLogo />
      <HeaderMenu />
    </header>
  );
}
