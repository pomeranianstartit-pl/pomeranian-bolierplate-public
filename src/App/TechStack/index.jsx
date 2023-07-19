import './styles.css';

const techStackData = [
  {
    src: './App/Images/tech-stack/discord.png',
    text: 'css',
  },
  {
    src: 'html.svg',
    text: 'html',
  },
  {
    src: 'ts.svg',
    text: 'typescript',
  },
  {
    src: './Images/tech-stack/js.svg',
    text: 'javascript',
  },
  {
    src: 'src/App/Images/tech-stack/react.svg',
    text: 'react',
  },
  {
    src: 'src/App/Images/tech-stack/githuub.svg',
    text: 'github',
  },
  {
    src: 'src/App/Images/tech-stack/githuub.svg',
    text: 'github',
  },
];
export const TechStack = () => {
  return (
    <div>
      <h2>Tech Stack</h2>
      <p></p>
      <div>
        {techStackData.map((element) => {
          return (
            <div>
              <img src={element.src} alt="ikonka" />
              <p>{element.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
