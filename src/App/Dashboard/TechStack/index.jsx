import './styles.css';
import { CssIcon } from '../../Components/Icons/CssIcon';

const techStackCards = [
    {
      icon: <CssIcon />,
      description: 'CSS',
    },
    {
        icon: <HtmlIcon />,
        description: 'CSS',
      },
      {
        icon: <TypeScripIcon />,
        description: 'CSS',
      },
      {
        icon: <JavascripIcon />,
        description: 'CSS',
      },
      {
        icon: <ReactIcon />,
        description: 'CSS',
      },
      {
        icon: <GithubIcon />,
        description: 'CSS',
      },
      {
        icon: <BitbucketIcon />,
        description: 'CSS',
      },
      {
        icon: <JestIcon />,
        description: 'CSS',
      },
      {
        icon: <FirebaseIcon />,
        description: 'CSS',
      },
      {
        icon: <ReduxIcon />,
        description: 'CSS',
      },
      {
        icon: <GitIcon />,
        description: 'CSS',
      },
      {
        icon: <VscodeIcon />,
        description: 'CSS',
      },
      {
        icon: <DiscordIcon />,
        description: 'CSS',
      },
      {
        icon: <JiraIcon />,
        description: 'CSS',
      },
      {
        icon: <ReadmineIcon />,
        description: 'CSS',
      },
            
];


export const TechStack = () => {
    return (
      <div className="techStack>
        <h1 className="techStack-greeting">TECH STACK</h1>
        <p className="techStack-description">
          Poniżej znajdziesz tech stack oraz narzędzia, jakich nauczyłam się podczas kursu.
        </p>
        <div className="techStack-cards">
          {techStackCards.map((card) => {
            return (
              <div className="techStack-card">
               
                {card.icon}
                <p>{card.description}</p>
                
              </div>
            );
          })}
          </div>