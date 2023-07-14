import './styles.css';

export function Exercise() {

  const showHelloWorld = () => {
    return "Hello World!";
  }

  return (
    <div>
      {showHelloWorld()}
    </div>
  );
}

