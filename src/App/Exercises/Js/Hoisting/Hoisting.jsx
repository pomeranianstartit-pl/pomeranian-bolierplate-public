import './styles.css';

// a = 100;
// console.log(a);
// var a;
// console.log(a);

// b = 1000;
// console.log(a);
// let b;
// console.log(a);

export function Hoisting() {
  function add(a) {
    let score = a;

    const addMore = (b) => {
      score = score + b;

      return addMore;
    }

    addMore.result = () => score;

    return addMore;
  };



  function multiplay(factor, ...rest) {
    const result = [];
    for (const number of rest) {
      result.push(number * factor);
    }
    return result.join(',');
  }
  return (
    <>
      <div>{multiplay(10, 2, 3, 4, 5)}</div>

      <div>jakis div</div>
    </>
  );
}
