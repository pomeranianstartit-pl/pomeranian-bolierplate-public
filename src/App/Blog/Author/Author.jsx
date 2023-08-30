import './styles.css';

export const Author = (zmienna) => {
  return <div><h3 className="podpis">{zmienna.autor}</h3>
  <p>{zmienna.podpis}</p></div>;
};
