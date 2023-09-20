import { GoBackButton } from '../Components/GoBack/GoBack';

import './header.css';

export function ExerciseItemHeader({ data }) {
  return (
    <div className="exercise-item-header">
      <p>{`Tytuł: ${data?.linkLabel || '-'}`}</p>
      <p>{`Data: ${data?.date || '-'}`}</p>
      <GoBackButton />
    </div>
  );
}
