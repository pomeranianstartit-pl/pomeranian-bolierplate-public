import './styles.css';

let number = 1;
export function Hoisting() {
  function multiplyBy(factor = 1, ...rest) {
    const result = [];

    for (const number of rest) {
      result.push(number * factor);
    }

    console.log(number);

    return result.join(',');
  }

  return <>{multiplyBy(3, 1, 1, 1, 1)}</>;

  function add(a) {
    let score = a;

    const addMore = (b) => {
      score = score + b;

      return addMore;
    };

    addMore.result = () => score;

    return addMore;
  }
}
