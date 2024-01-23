import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { Schema } from 'yup';
// export const Input = ({
//   type = 'text',
//   name,
//   value,
//   text,
//   required,
//   register,
// }) => {
//   const {
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(Schema),
//   });
//   return (
//     <div>
//       <input type={type} name={name} value={value} {...register(name)} />
//       <label htmlFor={name}>{text}</label>
//       {errors && errors[name] && <p>{errors[name].message}</p>}
//     </div>
//   );
// };

export const Input = ({ type, name, text, register, error }) => {
  return (
    <div>
      <label htmlFor={name}>{text}</label>
      <input type={type} name={name} {...register(name)} />
      {error && <p>{error.message}</p>}
    </div>
  );
};
