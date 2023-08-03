import './styles.css';
import { Button } from '../Button';

export const SelectButtons = (props) => {
  const { options } = props;

  const handleClick = () => {};
  return (
    <>
      {options.map((element) => (
        <Button onClick={handleClick} isActive={element.isActive}>
          {element.label}
        </Button>
      ))}
    </>
  );
};
