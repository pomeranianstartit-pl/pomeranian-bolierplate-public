import './styles.css';



a = 100;
console.log(a);
var a;
console.log(a);

b = 1000;
console.log(a);
let b;
console.log(a);



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

  console.log('result:1', add(2)(4).result()); // 6
  console.log('result:2', add(2)(4)(6).result()); // 12
  console.log('result:3', add(2)(4)(6)(9).result()); // 21
  return (

    <>

      <div></div>



    </>

  );

}


