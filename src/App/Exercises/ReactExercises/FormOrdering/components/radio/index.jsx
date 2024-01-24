import { Input } from '../input';
import { Label } from '../label';

export const RadioOption = ({
  constants,
  name,

  labelText,
  register,
  error,
}) => {
  return (
    <>
      <Label children={labelText} value={name} />
      {constants.map((option, index) => (
        <Input
          key={index}
          type="radio"
          name={name}
          value={option.value}
          text={option.text}
          register={register}
        />
      ))}
      {error && <p>{error.message}</p>}
    </>
  );
};
