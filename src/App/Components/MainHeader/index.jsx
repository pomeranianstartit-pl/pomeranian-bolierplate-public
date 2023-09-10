import './styles.css';

// export const MainHeader = (props) => {
//   // const Edyta = { imie: 'Edyta', lat: 25 };
//   // console.log(Edyta.imie);
//   // console.log(Edyta.lat);

//   // const { imie } = Edyta;
//   // console.log('imie: ', imie);
//   const { value } = props;
//   return <h1 className="main-header">&lt;{value}</h1>;
// };
export const MainHeader = ({ children }) => {
  return <h1 className="main-header">&lt; {children}</h1>;
};
