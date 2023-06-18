import './ListElement';

export const ListElement = ({ label, name, date, comment }) => {
  return (
    <div className="list-element">
      <div className="list-label">{label}</div>
      <p className="name">{name}</p>
      <p className="date">{date}</p>
      <p className="comment">{comment}</p>
    </div>
  );
};
