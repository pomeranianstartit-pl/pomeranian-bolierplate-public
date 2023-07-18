import './styles.css';

export const BoxComponent = (props) => {
  const { title, logo, shortdescription } = props;
  return (
    <div>
      <div className="box">
        <p className="box-title">{title}</p>
        <div className="box-logo">{logo}</div>
        <p className="box-shortdescription">{shortdescription}</p>
        <button style={{ color: 'red', fontWeight: 700 }}>zobacz więcej {'>'}</button>
      </div>
    </div>
  );
};
