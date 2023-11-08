import React from 'react';

import { StarIcon } from '../../../../../Components/Icons/StarIcon';

export default function TableTennisRow(props) {
  const {
    row: { location, playerId, rating },
  } = props;
  return (
    <tr key={location}>
      <td>{location}</td>
      <td>{playerId}</td>
      <td>
        {Array.from({ length: rating }).map((star) => (
          <StarIcon key={star} />
        ))}
      </td>
    </tr>
  );
}
