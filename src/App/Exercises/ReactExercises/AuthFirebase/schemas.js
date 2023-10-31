import * as yup from 'yup';

const errorMessages = { requiredField: 'To pole jest wymagane!' };

export const registerSchema = yup.object({
  email: yup
    .string()
    .email('Podaj poprawny adres e-mail')
    .required(errorMessages.requiredField),
  password: yup.string().min(6, 'hasło musi zawierać conajmniej 6 znaków'),
  // .matches(/[a-z]/, 'hasło musi zawierać małe litery')
  // .matches(/[A-Z]/, 'hasło musi zawierać duze litery')
  // .matches(/\d/, 'hasło musi zawierać cyfry'),
  confirmPassword: yup
    .string()
    .required(errorMessages.requiredField)
    .oneOf([yup.ref('password')], 'hasła muszą być takie same!'),
});