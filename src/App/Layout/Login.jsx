import './styles/header.css';
import { RightArrow } from '../Components/Icons/RightArrow';

function LoginNote(props) {
  console.log(props, 'props');

  return (
    <div className="Login">
      <div>
        <h2>{props.title}</h2>
        <p>{props.desciption}</p>
      </div>
    </div>
  );
}

export function Login() {
  return (
    <div className="Loginn">
      <LoginNote
        title="Zaloguj się"
        desciption="Nie masz konta? Zarejestruj się!"
      />
    </div>
  );
}
