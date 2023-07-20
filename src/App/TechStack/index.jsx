import '../TechStack/style.css';
import { CssIcon } from '../Components/Icons/CssIcon';

import { HtmlIcon } from '../Components/Icons/HtmlIcon';
import { JiraIcon } from '../Components/Icons/JiraIcon';

export const TechStack = () => {
  return (
    <div>
      <div className="TechStackTitle">
        <h1>TechStack</h1>
      </div>
      <div className="TechStack">
        <CssIcon />
        <HtmlIcon />
        <JiraIcon />
      </div>
    </div>
  );
};
