import './styles.css';

import { CalendarIcon } from '../Components/Icons/CalendarIcon';

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

    src: '/images/react.svg',

    alt: 'React logo',
  },
];

function TechStack() {
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

export default TechStack;
