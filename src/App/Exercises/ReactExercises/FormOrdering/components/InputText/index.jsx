import { Label } from '../label';
import '../../styles.css';
export const InputText = ({
  text,
  name,
  type = 'text',
  classname = 'FormOrdering_container_input_mainclass',
  register,
  error,
}) => {
  return (
    <div className="FormOrdering_font FormOrdering_container_input_div_checkbox">
      <Label children={text} value={name} />
      <input
        type={type}
        {...register(name)}
        name={name}
        className={classname}
      />
      {error && <p className="FormOrdering_error_message">{error.message}</p>}
    </div>
  );
};
