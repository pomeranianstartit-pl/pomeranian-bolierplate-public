import { MainHeader } from '../../../../../Components/MainHeader';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import './styles.css';

export const ToDoList = ({ setShowForm, data, setEditObject, getData }) => {
  const handleOnButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div>
      <MainHeader>TODO</MainHeader>
      <div className="toDoListWrapper">
        <div className="heading">
          <h4>Tutaj znajdziesz listę swoich zadań</h4>
          <button className="addButton" onClick={handleOnButtonClick}>
            +
          </button>
        </div>
        <div>
          {data.map((item) => {
            return (
              <ToDoItem
                key={item.id}
                item={item}
                setEditObject={setEditObject}
                setShowForm={setShowForm}
                getData={getData}
              />
            );
          })}
        </div>
        <div>
          <button className="addButton2" onClick={handleOnButtonClick}>
            Dodaj
          </button>
        </div>
      </div>
    </div>
  );
};
