import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './style.css';
import { Input } from './components/input';
import { InputText } from './components/InputText';

const schema = yup.object({
  name: yup.string('Wpisz imię i Nazwisko jako tekst!').required(),
  nickname: yup.string('Wpisz pseudonim jako tekst!').required(),
  address: yup.string('Wpisz adres jako tekst!').required(),
  email: yup
    .string()
    .email('Wpisz poprawny adres e-mail.')
    .required('Adres e-mail jest wymagany.'),
  paying: yup.string().oneOf(['blik', 'paypal', 'bank_transfer']).required(),
  additionalOptions: yup
    .string()
    .oneOf(['environmentalSettings', 'introToGithub', 'additionalResources'])
    .required(),

  agreements: yup.boolean().required(),
  newsletter: yup.boolean(),
  accountCreated: yup.string(),
  phone: yup
    .string()
    .required('Numer telefonu jest wymagany')
    .matches(/^[0-9]+$/, 'Numer telefonu może zawierać tylko cyfry')
    .min(9, 'Numer telefonu musi mieć przynajmniej 9 cyfr')
    .max(15, 'Numer telefonu jest za długi'),

  opinion: yup.string().max(150, 'Opinia może zawierać maksymalnie 150 znaków'),

  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Hasło musi zawierać co najmniej 8 znaków, w tym jedną dużą literę i cyfrę'
    ),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Hasła muszą być takie same')
    .required(),
});

export const Exercise = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Wybierz produkt*</label>
        <select id="courses" name="courses" required>
          <option value="">Wybierz kurs</option>
          <option value="front-end">Kurs front-end</option>
          <option value="back-end">Kurs back-end</option>
          <option value="testing">Kurs testera</option>
        </select>
      </div>

      <label>Wybierz formę płatności*</label>
      <Input type="radio" name="paying" value="blik" text="Blik" />
      <Input type="radio" name="paying" value="paypal" text="Paypal" />
      <Input
        type="radio"
        name="paying"
        value="bank_transfer"
        text="Przelew Tradycyjny"
      />

      <label>Opcje dodatkowe do zamówienia</label>
      <Input
        type="checkbox"
        name="additionalOptions"
        value="environmentalSettings"
        text="Ustawienia środowiskowe"
      />
      <Input
        type="checkbox"
        name="additionalOptions"
        value="introToGithub"
        text="Intro do GitHub"
      />
      <Input
        type="checkbox"
        name="additionalOptions"
        value="additionalResources"
        text="Materiały dodatkowe"
      />

      <h2>DANE DO REALIZACJI ZAMÓWIENIA</h2>

      <InputText name="name" text="Imię i Nazwisko*" />

      <InputText name="surname" text="Twój pseudonim*" />
      <InputText name="address" text="Adres do wysyłki*" />
      <InputText name="email" text="Adres e-mail*" type="email" />
      <InputText name="phone" text="Numer telefonu*" type="tel" />

      <div>
        <label>Opinia </label>

        <textarea
          {...register('opinion')}
          maxLength={150}
          placeholder="Twoja opinia (maksymalnie 150 znaków)"
        />
        {errors.opinion && <p>{errors.opinion.message}</p>}
      </div>
      <h2>ZAKŁADANIE KONTA</h2>
      <label>Chcę założyć konto razem z zamówieniem</label>

      <Input
        type="checkbox"
        name="accountCreated"
        value="newAccount"
        text="Zakładam konto"
      />
      <InputText name="password" text="Hasło*" type="password" />

      <InputText
        name="confirmPassword"
        text="Potwierdź hasło*"
        type="password"
      />

      <h2>ZGODY I NEWSLETTER</h2>
      <label>Realizując zamówienie, akceptujesz regulamin naszego sklepu</label>
      <Input
        type="checkbox"
        name="agreements"
        value="regulations"
        text="Akceptuję regulamin*"
      />
      <Input
        type="checkbox"
        name="newsletter"
        value="newsletterAccepted"
        text="Zapisuję się na listę mailingową"
      />
      <label>
        Dołącz do naszego newslettera z promocjami dla naszych klientów
      </label>

      <input type="submit" />
    </form>
  );
};
