import { Input } from '../input';
import { Label } from '../label';
import '../../styles.css';
export const RadioOption = ({
  constants,
  name,

  labelText,
  register,
  error,
}) => {
  return (
    <>
      <div className="FormOrdering_font  ">
        <Label children={labelText} value={name} />
        {constants.map((option, index) => (
          <Input
            key={index}
            type="radio"
            name={name}
            value={option.value}
            text={option.text}
            register={register}
            classname={'FormOrderingRadio'}
          />
        ))}
      </div>
      {error && <p className="FormOrdering_error_message">{error.message}</p>}
    </>
  );
};
