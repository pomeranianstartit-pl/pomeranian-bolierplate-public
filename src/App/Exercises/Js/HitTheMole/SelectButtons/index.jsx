import { Button } from '../Button';

export const SelectButtons = (props) => {
  const { options } = props;

  const handleClick = () => {
    console.log('click');
  };

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
