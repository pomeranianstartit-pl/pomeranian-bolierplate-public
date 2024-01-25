import { Label } from '../label';
import '../../styles.css';
export const Input = ({
  type,
  name,
  value,
  text,
  register,
  error,
  classname,
}) => {
  return (
    <div className="FormOrdering_container_input_div_radio">
      <input
        id={value} // Dodano id
        type={type}
        name={name}
        value={value}
        className={classname}
        {...register(name)}
      />
      <span>{text}</span>

      {error && <p>{error.message}</p>}
    </div>
  );
};
