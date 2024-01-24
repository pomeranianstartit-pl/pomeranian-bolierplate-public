import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './styles.css';

import { InputText } from './components/InputText';
import {
  TEXTS,
  TEXTS2,
  TEXTSCHECKBOX1,
  TEXTSCHECKBOX2,
  TEXTSCHECKBOX3,
  TEXTSCHECKBOX4,
  TEXTSRADIO1,
} from './constants';
import { Header } from './components/header';

import { SelectOption } from './components/selectoption';
import { CheckBoxOption } from './components/checkbox';
import { RadioOption } from './components/radio';
import { TextAreaOption } from './components/textarea';

const schema = yup.object({
  paying: yup
    .string()
    .oneOf(['blik', 'paypal', 'bank_transfer'])
    .required('pole wymagane'),
  courses: yup
    .string()
    .required('Wybierz Kurs')
    .notOneOf([''], 'Musisz wybrać kurs'),
  additionalOptions: yup.array().of(yup.string()),
  name: yup
    .string('Wpisz imię i Nazwisko jako tekst!')
    .required('pole jest wymagane')
    .matches(
      /^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+ [A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/,
      'Wpisz imię i nazwisko, oddzielając je spacją.'
    ),
  nickname: yup
    .string('Wpisz pseudonim jako tekst!')
    .required('pole jest wymagane'),
  address: yup.string('Wpisz adres jako tekst!').required('pole jest wymagane'),
  email: yup
    .string()
    .email('Wpisz poprawny adres e-mail.')
    .required('Adres e-mail jest wymagany. '),
  phone: yup
    .string()
    .required('Numer telefonu jest wymagany')
    .matches(/^[0-9]+$/, 'Numer telefonu może zawierać tylko cyfry')
    .min(9, 'Numer telefonu musi mieć przynajmniej 9 cyfr')
    .max(15, 'Numer telefonu jest za długi'),
  opinion: yup.string().max(150, 'Opinia może zawierać maksymalnie 150 znaków'),
  accountCreated: yup.string(),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
      'Hasło musi zawierać co najmniej 8 znaków, w tym jedną dużą literę i cyfrę'
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Hasła muszą być takie same')
    .required(),
  rules: yup
    .string()
    .oneOf(['true'], 'Musisz zaakceptować regulamin.')
    .required('Potwierdzenie akceptacji regulaminu jest wymagane'),
  newsletter: yup.string(),
});

export const Exercise = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      additionalOptions: [],
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SelectOption
        constants={TEXTS2}
        name={'courses'}
        headerText={TEXTS.HEADERS.ZERO}
        labelText={TEXTS.LABEL1.SELECTED}
        register={register}
        error={errors.courses}
      />

      <RadioOption
        constants={TEXTSRADIO1}
        name={'paying'}
        labelText={TEXTS.LABEL2}
        register={register}
        error={errors.paying}
      />
      <CheckBoxOption
        constants={TEXTSCHECKBOX1}
        labelText={TEXTS.LABEL3}
        name="additionalOptions"
        register={register}
      />
      <Header children={TEXTS.HEADERS.ONE} />
      <InputText
        name="name"
        text="Imię i Nazwisko*"
        register={register}
        error={errors.name}
      />
      <InputText
        name="nickname"
        text="Twój pseudonim*"
        register={register}
        error={errors.nickname}
      />
      <InputText
        name="address"
        text="Adres do wysyłki*"
        register={register}
        error={errors.address}
      />
      <InputText
        name="email"
        text="Adres e-mail*"
        type="email"
        register={register}
        error={errors.email}
      />
      <InputText
        name="phone"
        text="Numer telefonu*"
        type="tel"
        register={register}
        error={errors.phone}
      />
      <TextAreaOption
        name="opinion"
        text="Twoja opinia*"
        register={register}
        error={errors.opinion}
        placeholder="Twoja opinia (maksymalnie 150 znaków)"
      />
      <CheckBoxOption
        constants={TEXTSCHECKBOX2}
        labelText={TEXTS.LABEL5}
        name="accountCreated"
        register={register}
        headerText={TEXTS.HEADERS.TWO}
      />
      <InputText
        name="password"
        text="Hasło*"
        type="password"
        register={register}
        error={errors.password}
      />
      <InputText
        name="confirmPassword"
        text="Potwierdź hasło*"
        type="password"
        register={register}
        error={errors.confirmPassword}
      />
      <CheckBoxOption
        constants={TEXTSCHECKBOX3}
        labelText={TEXTS.LABEL6}
        name="rules"
        register={register}
        error={errors.rules}
        headerText={TEXTS.HEADERS.THREE}
      />
      <CheckBoxOption
        constants={TEXTSCHECKBOX4}
        labelText={TEXTS.LABEL7}
        name="newsletter"
        register={register}
      />

      <input type="submit" />
    </form>
  );
};
