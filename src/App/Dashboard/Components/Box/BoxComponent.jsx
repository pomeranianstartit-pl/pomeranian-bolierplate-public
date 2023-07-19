import './styles.css';

export const BoxComponent = (props) => {
  const { title, logo, shortdescription, link } = props;
  return (
    <div>
      <div className="box">
        <p className="box-title">{title}</p>
        <div className="box-logo">{logo}</div>
        <p className="box-shortdescription">{shortdescription}</p>
        <a href={link} style={{ color: 'red', fontWeight: 700 }}>
          zobacz więcej {'>'}
        </a>
      </div>
    </div>
  );
};
