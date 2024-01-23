import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './style.css';
import { Input } from './components/input';
import { InputText } from './components/InputText';
import {
  TEXTS,
  TEXTS2,
  TEXTSCHECKBOX1,
  TEXTSCHECKBOX2,
  TEXTSCHECKBOX3,
} from './constants';
import { Header } from './components/header';
import { Label } from './components/label';
import { SelectOption } from './components/selectoption';
import { CheckBoxOption } from './components/checkbox';

const schema = yup.object({
  name: yup
    .string('Wpisz imię i Nazwisko jako tekst!')
    .required('pole jest wymagane'),
  nickname: yup.string('Wpisz pseudonim jako tekst!').required(),
  address: yup.string('Wpisz adres jako tekst!').required(),
  email: yup
    .string()
    .email('Wpisz poprawny adres e-mail.')
    .required('Adres e-mail jest wymagany.'),
  paying: yup
    .string()
    .oneOf(['blik', 'paypal', 'bank_transfer'])
    .required('pole wymagane'),
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
      <SelectOption
        constants={TEXTS2}
        name={'courses'}
        headerText={TEXTS.HEADERS.ZERO}
        labelText={TEXTS.LABEL1.SELECTED}
        register={register}
        error={errors.name}
      />
      <Label children={TEXTS.LABEL2} />
      {/* <Input type="text" name="name" text="Imię" register={register} /> */}
      <Input
        type="radio"
        name="paying"
        value="blik"
        text="Blik"
        register={register}
      />
      <Input
        type="radio"
        name="paying"
        value="paypal"
        text="Paypal"
        register={register}
      />
      <Input
        type="radio"
        name="paying"
        value="bank_transfer"
        text="Przelew Tradycyjny"
        register={register}
      />
      <CheckBoxOption
        constants={TEXTSCHECKBOX1}
        labelText={TEXTS.LABEL3}
        name="additionalOptions"
        register={register}
        error={errors.name}
      />

      <input type="submit" />
    </form>
  );
};
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <SelectOption
//         constants={TEXTS2}
//         name={'courses'}
//         headerText={TEXTS.HEADERS.ZERO}
//         labelText={TEXTS.LABEL1.SELECTED}
//       />
//       <Label children={TEXTS.LABEL2} />
//       <Input
//         type="radio"
//         name="paying"
//         value="blik"
//         text="Blik"
//         register={register}
//       />
//       <Input
//         type="radio"
//         name="paying"
//         value="paypal"
//         text="Paypal"
//         register={register}
//       />
//       <Input
//         type="radio"
//         name="paying"
//         value="bank_transfer"
//         text="Przelew Tradycyjny"
//         register={register}
//       />
//       <CheckBoxOption
//         constants={TEXTSCHECKBOX1}
//         labelText={TEXTS.LABEL3}
//         name="additionalOptions"
//       />
//       <Header children={TEXTS.HEADERS.ONE} />
//       <InputText name="name" text="Imię i Nazwisko*" />
//       <div>
//         <input type="text" name="name" {...register('name')} />
//         <label htmlFor={'name'}>text</label>
//         {errors && errors['name'] && <p>{errors['name'].message}</p>}
//       </div>
//       <InputText name="surname" text="Twój pseudonim*" />
//       <InputText name="address" text="Adres do wysyłki*" />
//       <InputText name="email" text="Adres e-mail*" type="email" />
//       <InputText name="phone" text="Numer telefonu*" type="tel" />
//       <div>
//         <Label children={TEXTS.LABEL4} />
//         <textarea
//           {...register('opinion')}
//           maxLength={150}
//           placeholder="Twoja opinia (maksymalnie 150 znaków)"
//         />
//         {errors.opinion && <p>{errors.opinion.message}</p>}
//       </div>
//       <CheckBoxOption
//         constants={TEXTSCHECKBOX2}
//         name="accountCreated"
//         labelText={TEXTS.LABEL5}
//         headerText={TEXTS.HEADERS.TWO}
//       />
//       <InputText name="password" text="Hasło*" type="password" />
//       <InputText
//         name="confirmPassword"
//         text="Potwierdź hasło*"
//         type="password"
//       />
//       <CheckBoxOption
//         constants={TEXTSCHECKBOX3}
//         name="agreements"
//         labelText={TEXTS.LABEL6}
//         headerText={TEXTS.HEADERS.THREE}
//       />
//       <Label children={TEXTS.LABEL7} />
//       <input type="submit" />
//     </form>
//   );
// };
