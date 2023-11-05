// const fetchDataFast = () => new Promise(resolve => setTimeout(() => {resolve({id:
//   1, time: 300})}, 300))
//   const fetchDataLong = () => new Promise(resolve => setTimeout(() => {resolve({id:
//   2, time: 700})}, 700))
//   const fetchDataError = () => new Promise((_, reject) => setTimeout(() =>

// Dodaj button z metodą onClick dla każdego przypadku
//Sprawdź jaki będzie rezultat wywołania poniższych metod (możesz zawsze użyć konsoki do logowania rezultatów )
//Style nie mają znaczenia w tym ćwiczeniu, ale zawsze możesz przećwiczyć ich dodawanie jeśki chcesz.
//Pamiętaj o tym aby wywołać poszczególne funkcje zanim przekażesz je jako parametry (w innyn przypadku
// przekażemy funkcje a nie promisy)
// Promise.all dla FetchDataFast i FetchDataLong
// Promise.all dla FetchDataFast, FetchDataLong oraz FetchDataError
// Promise.allSettled dla FetchDataFast, FetchDataLong
// Promise.allSettled dla FetchDataFast, FetchDataLong oraz FetchDataError
// Promise.any dla FetchDataFast, FetchDataLong
// Promise.any dla FetchDataFast, FetchDataLong oraz FetchDataError
// Promise.race dla FetchDataFast, FetchDataLong
// Promise.race dla FetchDataFast, FetchDataLong oraz FetchDataError

export const PromisesMethodsTraining = () => {
  return <div>Metody w Promise - ćwiczenia</div>;
};
