import starIcon from '../../../../Images/star.svg';

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
          <img key={star} alt="star" src={starIcon} />
        ))}
      </td>
    </tr>
  );
}
