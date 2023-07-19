import { TechstackComponent } from './Component/Box/TechstackComponent';
import './styles.css';
import { Github } from './Icons/Github';
import { Discord } from './Icons/Discord';

export const Techstack = () => {
  const TechstackComponents = [
    {
      id:'1',
      title: 'github',
      logo: <Github />,
    },
    {
      id:'2',
      title: 'discord',
      logo: <Discord/>,
    },
    {
      id:'3',
      title: 'github',
      logo: <Github />,
    },
    {
      id:'4',
      title: 'discord',
      logo: <Discord/>,
    },
    {
      id:'5',
      title: 'discord',
      logo: <Discord/>,
    },
    {
      id:'6',
      title: 'discord',
      logo: <Discord/>,
    },
    {
      id:'7',
      title: 'github',
      logo: <Github />,
    },
    {
      id:'8',
      title: 'discord',
      logo: <Discord/>,
    },
    {
      id:'9',
      title: 'github',
      logo: <Github />,
    },
    {
      id:'10',
      title: 'discord',
      logo: <Discord/>,
    },
    {
      id:'11',
      title: 'discord',
      logo: <Discord/>,
    },
    {
      id:'12',
      title: 'discord',
      logo: <Discord/>,
    },
  ];

  return (
    <div className="techstack-section">
      <h2>Tech Stack</h2>
      <p>Poniżej znajdziesz tech stack oraz narzędzia, jakich nauczyłem się podczas kursu</p>
      <div className="techstack-wrapper">
        {TechstackComponents.map((el)=>(
          <TechstackComponent title={el.title} logo={el.logo}/>
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
  );
};
