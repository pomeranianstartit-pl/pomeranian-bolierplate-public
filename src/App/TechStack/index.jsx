import './styles.css';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { HtmlIcon } from '../Components/Icons/HtmlIcon';
import { GithuubIcons } from '../Components/Icons/GithuubIcons';
const techStackData = [
  {
    title: 'HTML',
    src: 'https://cdn.icon-icons.com/icons2/2566/PNG/512/css_icon_153522.png',
    alt: 'HTML logo',
  },

  {
    title: 'Redux',
    src: require('../Images/tech-stack/redux.png'),
    alt: 'Redux logo',
  },

  {
    title: 'Calendar',
    component: <CalendarIcon />,
    alt: 'Calendar logo',
  },

  {
    title: 'React',
    src: '/Images/react.svg',
    alt: 'React logo',
  },
  {
    title: 'HtmlIcon',
    component: <HtmlIcon />,
    alt: 'HatemlIcon logo',
  },
  {
    title: 'cos',
    src: '/Images/sygnet96.png',
    alt: 'cos',
  },
  {
    title: 'Github',
    component: <GithuubIcons />,
    alt: 'Github',
  },
  {
    title: 'vscode',
    src: require('../Images/tech-stack/vscode-alt1.png'),
    alt: 'vscode',
  },
  {
    title: 'discord',
    src: require('../Images/tech-stack/discord-icon-svgrepo-com3.png'),
    alt: 'discord',
  },
  {
    title: 'jira',
    src: require('../Images/tech-stack/jira1.png'),
    alt: 'jira',
  },
  {
    title: 'redmine',
    src: require('../Images/tech-stack/redmine.png'),
    alt: 'redmine',
  },
];

export function TechStack() {
  return (
    <div className="techstack">
      <h2 className="techstack-title">Tech Stack</h2>

      <p className="techstack-description">
        Poniżej znajdziesz tech stack oraz nadzędzia, jakich nauczylem się
        podczas kursu.
      </p>

      <div className="techstack-cards">
        {techStackData.map((element) => {
          return (
            <div className="techstack-card">
              {element.src && (
                <img
                  className="techstack-card-image"
                  src={element.src}
                  alt={element.alt}
                />
              )}

              {element.component && element.component}

              <p className="tech-stack-card-title">{element.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
