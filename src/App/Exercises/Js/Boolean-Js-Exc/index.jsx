import './styles.css';

export function BooleanExc1() {
  const value1 = false;
  const value2 = false;
  const value3 = false;

  const condition = (value1 && value2) || value3;

  console.log(condition);

  return <div>Operatory logiczne {condition && <h1>tajny text</h1>}</div>;
}
