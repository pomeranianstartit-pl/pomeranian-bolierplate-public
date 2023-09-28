import React from 'react';

export default function TableTennisCol(props) {
  // console.log(props, 'propsy');
  return <th key={props.header}>{props.header}</th>;
}

// 1. Wersja z destrukturyzacją
// export default function TableTennisCol(props) {
//   const { header } = props;
//   return <th key={header}>{header}</th>;
// }

// 2. Wersja z destrukturyzacją
// export default function TableTennisCol({ header }) {
//   return <th key={header}>{header}</th>;
// }
