import './styles.css';

export const RoundImage = ({ src }) => {
  return <div className='round-image' style={{
    backroundImage: `url(${src})`,
  }}></div>;
};
