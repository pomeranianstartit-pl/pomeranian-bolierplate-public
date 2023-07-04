
// const Exercise = () => {

//  1  napisz funkcje sortImmute, ktora przyjmuje jako parametr tablice cyfr i zwraca ją posortowana
// funkcja ma nie zmieniać pierwotnej tablicy
//    const originalArr = [1,3,2]
// const sortedArr = sortImmune(originalArr)
// console.log({
//  originalArr, // [1, 3, 2]
//  sortedArr// [1, 2, 3]
// })


// [].sort((a, b) => {
//    return b - a
// })

// function sortImmune(arr) {
//    return [...arr].sort((a, b) => a - b);
//    return arr.slice().sort((a, b) => a - b);
//    const sortImmune = (arr) => [...arr].sort((a, b) => a -b);
// };

// function runSortImmune() {
//    const originalArr = [1, 3, 2, 99, 100, 77, -10];
//    const sortedArr = sortImmune(originalArr);
//    console.log({
//       originalArr,
//       sortedArr,
//    });
// };

// return (
//    <div>
//       <button onClick={() => runSortImmune()}>SortImmune</button>
//    </div>
// );

// 2. stwórz funkcję, która przyjmuje dowolną liczbę argumentów za pomocą "...args" i zwraca ich sumę
// sumOfParam(1,2,3,4,5,6) -> x
// sumOfParam(1,2,3, 'not a number',5,6) -> "złe wejście"

// function abc (...args) {
//    console.log(args);
// }

// function abc () {
//    console.log(arguments);
// }

// const sumOfParam = (...args) => { 
   // wez parametry

   // ========================== 1 sposób reduce =================

   // let sum =0;

   // for(let i = 0; i < args.length; i++) {
   //    const current = args[i];
   //    if (typeof current !== 'number') {
         // sprawdz ich typ albo forem albo użyj filter
         // return 'złe wejście'; 
         // jeśli forem to możesz od razu zwrócić błąd
      // }

      // sum = sum + current; 
      // dodaj je do sibei (albo forem) albo reducem
   // }

   // return sum; // zwróć wartość

//    ============================ 2 sposób filter ===================

//    args filteredArguments = args.filter(current => typeof current === 'number');
//    if (filteredArguments.length !== args.length) {
//       return 'złe wejście';
//    }

//    return filteredArguments.reduce((acc, current) => acc + current, 0);
// };

// function runSumOfParam() {
//    const goodSumOfParams = sumOfParam(1, 2, 3, 4, 5, 6, -1, -2, -3, -4, -5, -6);
//    const badSumOfParams = sumOfParam(1, 2, 3, 'not a number, 5, 6');
//    console.log({
//       goodSumOfParams,
//       badSumOfParams,
//    })
// };

// return (
//    <div>
//       <button onClick={() => runSumOfParam()}>sumOfParam</button>
//    </div>
// );
// };

// export default Exercise;