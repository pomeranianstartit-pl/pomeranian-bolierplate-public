import './styles.css';

export const TechstackComponent = (props) => {
  const { title, logo} = props;
  return (
    <div>
      <div className="techstack-box">
        <div className="box-logo">{logo}</div>
        <p className="techstack-box-title">{title}</p>
      </div>
    </div>
  );
};
