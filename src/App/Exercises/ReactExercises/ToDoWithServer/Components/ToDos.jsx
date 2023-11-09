import { Frame } from '../Images/frame';
import { Trash } from '../Images/trash';

import './styles.css';

export const ToDos = ({ title, author, date, content, active = true }) => {
  return (
    <div className="Todos_div_container">
      <Frame />

      <Trash />
      <p className="ToDos_title_p">{title}</p>
      <p className="ToDos_author_date_p">{author}</p>
      <p className="ToDos_author_date_p">{date}</p>
      <p className="ToDos_content_p">{content}</p>
    </div>
  );
};
