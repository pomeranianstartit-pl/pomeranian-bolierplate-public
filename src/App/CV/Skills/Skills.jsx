import './Skills.css';

export const Skills = () => {
  const hardSkills = [
    'VSC',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Github',
    'Python',
  ];

  // const softSkills = [
  //   'wysoka kultura osobista',
  //   'umiejętność pracy w zespole',
  //   'dbałość o dobrą atmosferę w zespole',
  //   'komunikatywność',
  //   'chęć do nauki i samorozwoju',
  //   'sumienność',
  //   'dokładność',
  //   'umiejętność szybkiego uczenia się',
  // ];
  return (
    <div>
      <h3>Umiejętności twarde</h3>
      <hr />
      <div className="skills">
        {hardSkills.map((skill) => {
          return <div className="skill-button">{skill}</div>;
        })}
      </div>
      {/* <h3>Umiejętności miękkie</h3>
      <hr />
      <div className="skills">
        {softSkills.map((skill) => {
          return <div className="skill-button">{skill}</div>;
        })}
      </div> */}
    </div>
  );
};
