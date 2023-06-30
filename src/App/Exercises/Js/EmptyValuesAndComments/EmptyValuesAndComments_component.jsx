import './styles.css';

export const EmptyValuesAndCommentsComponent = () => {
  
  const array1 = [{name: "Łukasz"}, {name: "Adam"}];const sumWithInitial = array1.reduce(  (accumulator, currentValue) => [...accumulator, currentValue.name],  []);console.log(sumWithInitial);

  return (
    <div>

    </div>
  );
}

