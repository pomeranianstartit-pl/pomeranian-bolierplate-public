import { Button } from '../Button';
import './styles.css';

export const SelectButtons = (props) => {
  const { options } = props;

  const handleClick = () => {
    console.log('test');
  };
  return (
    <>
      {options.map((element) => (
        <div className="select-button">
          <Button onClick={handleClick} isActive={element.isActive}>
            {element.label}{' '}
          </Button>
        </div>
      ))}
    </>
  );
};
