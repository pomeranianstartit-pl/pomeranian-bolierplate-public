import './styles.css';

export const MainHeader = (props) => {
  //   const Edyta = { imie: 'Edyta' };

  //   console.log(Edyta.imie);
  //   const { imie } = Edyta;
  //   console.log('imie:', imie);
  const { value } = props;
  return <h1 className="main-header"> &lt; {value}</h1>;
};
