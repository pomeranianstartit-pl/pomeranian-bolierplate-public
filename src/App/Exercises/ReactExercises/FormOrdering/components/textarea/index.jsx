import { Label } from '../label';
import '../../styles.css';
export const TextAreaOption = ({
  name,
  text,
  register,
  error,
  className = 'FormOrdering_container_textarea',
  ...props
}) => {
  return (
    <div>
      <div className="FormOrdering_font FormOrdering_div_select ">
        <Label children={text} value={name} />

        <textarea
          maxLength={150}
          {...register(name)}
          className={className}
          {...props}
        />
        {error && <p>{error.message}</p>}
      </div>
    </div>
  );
};
