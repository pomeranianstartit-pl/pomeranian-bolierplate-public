import './styles.css';
import { SettingIcon } from './SettingIcon';
import { ToggleArrow } from './ToggleArrowIcon';
import { GitHubIcon } from './GitHubIcon';
export const HeaderMenu = () => {
  return (
    <div className="header-menu">
      <SettingIcon />
      <GitHubIcon />
      <div>
        <h className="header-user1">Michał</h>
        <h className="header-user2">kursant</h>
      </div>
      <ToggleArrow />
    </div>
  );
};
