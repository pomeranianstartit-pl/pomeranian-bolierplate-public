import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Schema } from 'yup';

export const InputText = ({ text, name, type = 'text' }) => {
  const {
    register,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });
  return (
    <div>
      <label>{text}</label>
      <input
        aria-invalid={errors[name] ? 'true' : 'false'}
        {...register(name)}
        type={type}
      />
      {errors.name && (
        <p className="tooltiptext error-message">{errors.name.message}</p>
      )}
    </div>
  );
};
