import { Label } from '../label';

export const InputText = ({
  text,
  name,
  type = 'text',

  register,
  error,
}) => {
  return (
    <div>
      <Label children={text} value={name} />
      <input type={type} {...register(name)} name={name} />
      {error && <p>{error.message}</p>}
    </div>
  );
};
