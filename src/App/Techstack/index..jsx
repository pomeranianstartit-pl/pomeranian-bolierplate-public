import { TechstackComponent } from './Component/Box/TechstackComponent';
import './styles.css';
import { Github } from './Icons/Github';
import { Discord } from './Icons/Discord';
import { CssIcon } from '../Components/Icons/CssIcon';
import { HtmlIcon } from '../Components/Icons/HtmlIcon';
import { TypescriptIcon } from '../Components/Icons/TypescriptIcon';
import { JavascriptIcon } from '../Components/Icons/JavascriptIcon';
import { ReactIcon } from '../Components/Icons/ReactIcon';
import { BitbucketIcon } from '../Components/Icons/BitbucketIcon';
import { JestIcon } from '../Components/Icons/JestIcon';
import { FirebaseIcon } from '../Components/Icons/FirebaseIcon';
import { ReduxIcon } from '../Components/Icons/ReduxIcon';
import { GitIcon } from '../Components/Icons/GitIcon';
import { VscodeIcon } from '../Components/Icons/VscodeIcon';
import { JiroIcon } from '../Components/Icons/JiroIcon';
import { ReadmineIcon } from '../Components/Icons/ReadmineIcon';

export const Techstack = () => {
  const TechstackComponents = [
    {
      id: '1',
      title: 'CSS',
      logo: <CssIcon />,
    },
    {
      id: '2',
      title: 'html',
      logo: <HtmlIcon />,
    },
    {
      id: '3',
      title: 'typescript',
      logo: <TypescriptIcon />,
    },
    {
      id: '4',
      title: 'javascript',
      logo: <JavascriptIcon />,
    },
    {
      id: '5',
      title: 'react',
      logo: <ReactIcon />,
    },
    {
      id: '6',
      title: 'github',
      logo: <Github />,
    },
    {
      id: '7',
      title: 'bitbucket',
      logo: <BitbucketIcon />,
    },
    {
      id: '8',
      title: 'jest',
      logo: <JestIcon />,
    },
    {
      id: '9',
      title: 'firebase',
      logo: <FirebaseIcon />,
    },
    {
      id: '10',
      title: 'redux',
      logo: <ReduxIcon />,
    },
    {
      id: '11',
      title: 'git',
      logo: <GitIcon />,
    },
    {
      id: '12',
      title: 'vscode',
      logo: <GitIcon />,
    },
    {
      id: '13',
      title: 'jiro',
      logo: <JiroIcon />,
    },
    {
      id: '13',
      title: 'readmine',
      logo: <ReadmineIcon />,
    },
  ];

  return (
    <div className="sectionWrapper">
      <div className="techstack-section">
        <h2>Tech Stack</h2>
        <p>
          Poniżej znajdziesz tech stack oraz narzędzia, jakich nauczyłem się
          podczas kursu
        </p>

        <div className="techstack-grid-left">
          <div className="techstack-wrapper">
            {TechstackComponents.map((el) => (
              <TechstackComponent title={el.title} logo={el.logo} />
            ))}

            {/* 
                      {DashBoardComponents.map((el) => (
                        <BoxComponent
                        title={el.title}
                        logo={el.logo}
                        shortdescription={el.shortdescription}
                        link={el.link}
                />
                ))}
              */}
          </div>
        </div>
        <div className="empty"></div>
      </div>
    </div>
  );
};
