import * as yup from 'yup';

const errorMessages = { requiredField: 'To pole jest wymagane' };

export const registerSchema = yup.object({
  email: yup
    .string()
    .email('Podaj poprawny adres e-mail!')
    .required(errorMessages.requiredField),
  password: yup
    .string()
    .min(6, 'Hasło musi zawierać conajmniej 6 znaków!')
    .required(errorMessages.requiredField),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Hasła muszą się zgadzać!')
    .required(errorMessages.requiredField),
});

export const loginSchema = registerSchema.pick(['email', 'password']);
