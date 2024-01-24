import { Label } from '../label';

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
    <div>
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
