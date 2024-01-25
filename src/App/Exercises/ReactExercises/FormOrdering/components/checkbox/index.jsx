import { Header } from '../header';
import { Input } from '../input';
import { Label } from '../label';
import '../../styles.css';
export const CheckBoxOption = ({
  constants,
  name,
  headerText = '',
  labelText,
  register,
  error,
}) => {
  return (
    <>
      <div className="FormOrdering_font FormOrdering_container_input_div_checkbox">
        <Header children={headerText} />
        <Label children={labelText} value={'name'} />

        {constants.map((option, index) => (
          <Input
            key={index}
            type="checkbox"
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
