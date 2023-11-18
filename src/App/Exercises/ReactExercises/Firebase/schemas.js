import { object, string, ref } from 'yup';

export const registerSchema = object({
  email: string().email(),
  password: string().min(6),
  confirmPassword: string().oneOf([ref('password')], 'Hasła muszą się zgadzać'),
});

export const loginSchema = registerSchema.pick(['email', 'password']);
